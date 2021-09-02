import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'
import { store } from '../store'
import { iChatRoom, iUser } from '@types'
import { receiveChatRooms } from '../reducers'
import { getUser } from '@selectors'
import { select, userToChatRoomParticipant } from '@lib'

function onResult(querySnapshot: any) {
  const chatRooms: iChatRoom[] = []
  querySnapshot.forEach((documentSnapshot: any) => {
    chatRooms.push({ ...documentSnapshot.data(), id: documentSnapshot.id })
  })
  store.dispatch(receiveChatRooms(chatRooms))
}

function onError(error: any) {
  console.error(error)
}

export function subscribe() {
  firestore().collection('chatRooms').onSnapshot(onResult, onError)
}

const createChatRoom = async ({
  roomTitle,
  roomDescription,
}: {
  roomTitle: string
  roomDescription: string
}): Promise<iChatRoom> => {
  const user = select(getUser())
  if (user.id) {
    const chatRoomRef = await firestore().collection('chatRooms').add({
      title: roomTitle,
      description: roomDescription,
      createdByUserId: user.id,
      createdByUserName: user.name,
    })
    const chatRoomDoc = await chatRoomRef.get()
    const chatRoomData = await chatRoomDoc.data()
    const chatRoom: iChatRoom = {
      ...chatRoomData,
      id: chatRoomRef.id,
    } as iChatRoom
    return chatRoom
  }
  return null
}

const endChatRoom = async ({
  chatRoom,
}: {
  chatRoom: iChatRoom
}): Promise<void> => {
  await firestore().collection('chatRooms').doc(chatRoom.id).delete()
  return
}

const joinChatRoom = async ({
  chatRoom,
  agoraUserId,
  isHost,
}: {
  chatRoom: iChatRoom
  agoraUserId: number
  isHost?: boolean
}): Promise<boolean> => {
  const user = select(getUser())
  const doc = await firestore()
    .collection('chatRooms')
    .doc(chatRoom.id)
    .collection('participants')
    .doc(user.id)
  const docSnap = await doc.get()
  if (!docSnap.exists) {
    doc.set({
      ...userToChatRoomParticipant({ user, isHost }),
      agoraUserId: agoraUserId,
      joinedAt: firestore.FieldValue.serverTimestamp(),
      muted: true,
    })
  }
  return true
}

const setMicMuteStatus = async ({
  chatRoom,
  isMuted,
}: {
  chatRoom: iChatRoom
  isMuted?: boolean
}): Promise<boolean> => {
  const user = select(getUser())
  const doc = await firestore()
    .collection('chatRooms')
    .doc(chatRoom.id)
    .collection('participants')
    .doc(user.id)
    .set(
      {
        isMuted,
      },
      { merge: true },
    )

  return true
}

const leaveChatRoom = async ({
  chatRoom,
}: {
  chatRoom: iChatRoom
}): Promise<boolean> => {
  const user = select(getUser())
  await firestore()
    .collection('chatRooms')
    .doc(chatRoom.id)
    .collection('participants')
    .doc(user.id)
    .delete()

  return true
}

const subscribeToRoomParticipants = ({
  chatRoom,
  callback,
}: {
  chatRoom: iChatRoom
  callback: Function
}): any => {
  const onResult = (
    querySnapshot: FirebaseFirestoreTypes.QuerySnapshot<
      FirebaseFirestoreTypes.DocumentData
    >,
  ) => {
    const users: iChatRoom[] = []
    querySnapshot.forEach((documentSnapshot: any) => {
      users.push({ ...documentSnapshot.data(), id: documentSnapshot.id })
    })
    callback(users)
  }
  const response = firestore()
    .collection('chatRooms')
    .doc(chatRoom.id)
    .collection('participants')
    .orderBy('joinedAt')
    .onSnapshot((snapshot) => onResult(snapshot), onError)
  return response
}

export const ChatRoomSubscription = {
  createChatRoom,
  endChatRoom,
  joinChatRoom,
  leaveChatRoom,
  subscribeToRoomParticipants,
  setMicMuteStatus,
}
