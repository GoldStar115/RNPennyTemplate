import firestore from '@react-native-firebase/firestore'
import { store } from '../store'
import { iAlbum } from '@types'
import { receiveAlbums } from '../reducers/album.reducer'

function onResult(querySnapshot: any) {
  const albums: iAlbum[] = []
  querySnapshot.forEach((documentSnapshot: any) => {
    albums.push({ ...documentSnapshot.data(), id: documentSnapshot.id })
  })
  store.dispatch(receiveAlbums(albums))
}

function onError(error: any) {
  console.error(error)
}
export function subscribe() {
  firestore().collection('albums').onSnapshot(onResult, onError)
}
