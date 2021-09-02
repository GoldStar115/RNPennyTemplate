import firestore from '@react-native-firebase/firestore'
import { store } from '../store'
import { iTrack } from '@types'
import { receiveTracks } from '../reducers/track.reducer'

function onResult(querySnapshot: any) {
  const tracks: iTrack[] = []
  querySnapshot.forEach((documentSnapshot: any) => {
    tracks.push({ ...documentSnapshot.data(), id: documentSnapshot.id })
  })
  store.dispatch(receiveTracks(tracks))
}

function onError(error: any) {
  console.error(error)
}
export function subscribe() {
  firestore().collection('media').onSnapshot(onResult, onError)
}
