import firestore from '@react-native-firebase/firestore'
import { store } from '../../store'
import { iFollows } from '@types'
import { showLoginModal, receiveFollows } from '@reducers'
import { getUser, getIsUserLoggedIn, getItemFollowed } from '@selectors'

let followsSubscription: Function = null

function onReceiveFollows(querySnapshot: any) {
  const follows: iFollows[] = []
  querySnapshot.forEach((documentSnapshot: any) => {
    follows.push({ ...documentSnapshot.data(), id: documentSnapshot.id })
  })
  store.dispatch(receiveFollows(follows))
}

function onError(error: any) {
  console.error(error)
}

const subscribeToFollows = (userId: string) => {
  unsubscribeFromFollows()
  const subscription = firestore()
    .collection('follows')
    .where('userId', '==', userId)
    .onSnapshot(onReceiveFollows, onError)

  return subscription
}

const follow = (contentId: string, contentType: string): void => {
  const user = getUser()(store.getState())
  if (user.id) {
    firestore().collection('follows').add({
      contentId,
      contentType,
      userId: user.id,
    })
  }
}

const unfollow = (contentId: string): void => {
  const followItem = getItemFollowed(contentId)(store.getState())
  firestore().collection('follows').doc(followItem.id).delete()
}

export const toggleFollows = (contentId: string, contentType: string) => {
  const isLoggedIn = getIsUserLoggedIn()(store.getState())
  if (isLoggedIn) {
    const followedItem = getItemFollowed(contentId)(store.getState())
    if (followedItem) {
      unfollow(contentId)
    } else {
      follow(contentId, contentType)
    }
  } else {
    store.dispatch(showLoginModal({ lastEventBeforeLogin: 'follow' }))
  }
}

const unsubscribeFromFollows = () => {
  if (followsSubscription) {
    followsSubscription()
  }
}

export const UserFollowsSubscription = {
  subscribe: subscribeToFollows,
  unsubscribe: unsubscribeFromFollows,
  toggle: toggleFollows,
}
