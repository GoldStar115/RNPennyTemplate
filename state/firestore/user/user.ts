import firestore from '@react-native-firebase/firestore'
import { getUser } from '@selectors'
import { store } from '@state'

export const getOrCreateUserDoc = async () => {
  const user = getUser()(store.getState())
  const doc = await firestore().collection('users').doc(user.id)
  await doc.set({}, { merge: true })
  return doc
}
