import firestore from '@react-native-firebase/firestore'
import { store } from '../../store'
import { iTrack, iUserProgress } from '@types'
import { receiveProgress } from '@reducers'
import { getOrCreateUserDoc } from './user'
import { getAlbum, getIsUserLoggedIn, getTracksForAlbum } from '@selectors'
import { select } from '@lib'

let progressSubscription: Function = null

function onReceiveProgress(querySnapshot: any) {
  const progress: iUserProgress[] = []
  querySnapshot.forEach((documentSnapshot: any) => {
    progress.push({ ...documentSnapshot.data(), id: documentSnapshot.id })
  })
  store.dispatch(receiveProgress(progress))
}

function onError(error: any) {
  console.error(error)
}

const subscribeToProgress = (userId: string) => {
  unsubscribeFromProgress()
  progressSubscription = firestore()
    .collection('users')
    .doc(userId)
    .collection('progress')
    .onSnapshot(onReceiveProgress, onError)
  return progressSubscription
}

const getOrCreateProgressDoc = async (albumId: string) => {
  const userDoc = await getOrCreateUserDoc()
  const doc = await userDoc.collection('progress').doc(albumId)
  const docSnap = await doc.get()
  if (!docSnap.exists) {
    doc.set({
      completedTracks: {},
    })
  }
  return doc
}

const saveTrackProgress = async (track: iTrack, progress: number) => {
  const isUserLoggedIn = select(getIsUserLoggedIn())
  if (isUserLoggedIn) {
    const progressDoc = await getOrCreateProgressDoc(track.albumId)
    const snapshot = await progressDoc.get()
    const data = await snapshot.data()
    if (!data.completedTracks || data.completedTracks[track.id] !== -1) {
      const album = select(getAlbum(track.albumId))
      const trackCount = select(getTracksForAlbum(album)).length
      const completedTracks = { ...data.completedTracks, [track.id]: progress }
      const completedTracksCount = Object.values(completedTracks || {}).filter(
        (value) => value === -1,
      ).length
      const progressPercent: number = Math.round(
        (completedTracksCount / trackCount) * 100,
      )
      progressDoc.update({
        progressPercent,
        completedTracks,
      })
    }
  }
}

const unsubscribeFromProgress = () => {
  if (progressSubscription) {
    progressSubscription()
  }
}

export const UserProgressSubscription = {
  subscribe: subscribeToProgress,
  unsubscribe: unsubscribeFromProgress,
  saveTrackProgress,
}
