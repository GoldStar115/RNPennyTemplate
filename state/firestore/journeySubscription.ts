import firestore from '@react-native-firebase/firestore'
import { store } from '../store'
import { iJourney } from '@types'
import { receiveJourneys } from '@reducers'

function onResult(querySnapshot: any) {
  const journeys: iJourney[] = []
  querySnapshot.forEach((documentSnapshot: any) => {
    journeys.push({ ...documentSnapshot.data(), id: documentSnapshot.id })
  })
  store.dispatch(receiveJourneys(journeys))
}

function onError(error: any) {
  console.error(error)
}
export function subscribe() {
  firestore().collection('journeys').onSnapshot(onResult, onError)
}
