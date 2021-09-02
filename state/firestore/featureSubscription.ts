import firestore from '@react-native-firebase/firestore'
import { store } from '../store'
import { iFeaturedContent } from '@types'
import { receiveFeatures } from '../reducers/feature.reducer'

function onResult(querySnapshot: any) {
  const features: iFeaturedContent[] = []
  querySnapshot.forEach((documentSnapshot: any) => {
    features.push({ ...documentSnapshot.data(), id: documentSnapshot.id })
  })
  store.dispatch(receiveFeatures(features))
}

function onError(error: any) {
  console.error(error)
}
export function subscribe() {
  firestore().collection('featuredContent').onSnapshot(onResult, onError)
}
