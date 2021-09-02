import firestore from '@react-native-firebase/firestore'
import { store } from '../store'
import { receivePresenters } from '../reducers/presenter.reducer'
import { iPresenter } from '@types'

function onResult(querySnapshot: any) {
  const presenters: iPresenter[] = []
  querySnapshot.forEach((documentSnapshot: any) => {
    presenters.push({ ...documentSnapshot.data(), id: documentSnapshot.id })
  })
  store.dispatch(receivePresenters(presenters))
}

function onError(error: any) {
  console.error(error)
}
export function subscribe() {
  firestore().collection('presenters').onSnapshot(onResult, onError)
}
