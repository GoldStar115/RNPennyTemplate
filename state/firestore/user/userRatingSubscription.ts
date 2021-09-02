import firestore from '@react-native-firebase/firestore'
import { store } from '../../store'
import { iRating } from '@types'
import { receiveRatings, showLoginModal } from '@reducers'
import { getUser, getItemLiked, getIsUserLoggedIn } from '@selectors'

let ratingsSubscription: Function = null

function onReceiveRatings(querySnapshot: any) {
  const ratings: iRating[] = []
  querySnapshot.forEach((documentSnapshot: any) => {
    ratings.push({ ...documentSnapshot.data(), id: documentSnapshot.id })
  })
  store.dispatch(receiveRatings(ratings))
}

function onError(error: any) {
  console.error(error)
}

const subscribeToRatings = (userId: string) => {
  unsubscribeFromRatings()
  ratingsSubscription = firestore()
    .collection('ratings')
    .where('userId', '==', userId)
    .onSnapshot(onReceiveRatings, onError)
  return ratingsSubscription
}

const addRating = (
  contentId: string,
  contentType: string,
  rating: number = 5,
): void => {
  const user = getUser()(store.getState())
  if (user.id) {
    firestore().collection('ratings').add({
      contentId,
      contentType,
      userId: user.id,
      rating,
    })
  }
}

const removeRating = (contentId: string): void => {
  const rating = getItemLiked(contentId)(store.getState())
  firestore().collection('ratings').doc(rating.id).delete()
}

const toggleRating = (contentId: string, contentType: string) => {
  const isLoggedIn = getIsUserLoggedIn()(store.getState())
  if (isLoggedIn) {
    const rating = getItemLiked(contentId)(store.getState())
    if (rating) {
      removeRating(contentId)
    } else {
      addRating(contentId, contentType)
    }
  } else {
    store.dispatch(showLoginModal({ lastEventBeforeLogin: 'like' }))
  }
}

const unsubscribeFromRatings = () => {
  if (ratingsSubscription) {
    ratingsSubscription()
  }
}

export const UserRatingSubscription = {
  subscribe: subscribeToRatings,
  unsubscribe: unsubscribeFromRatings,
  toggle: toggleRating,
}
