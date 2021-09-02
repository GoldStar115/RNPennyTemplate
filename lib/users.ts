import { iChatRoomParticipant, iUser } from '@types'
import firestore from '@react-native-firebase/firestore'
import { stringToNumber } from './strings'

export const userToChatRoomParticipant = ({
  user,
  isHost,
}: {
  user: iUser
  isHost?: boolean
}): iChatRoomParticipant => {
  const participant: iChatRoomParticipant = {
    userId: user.id,
    name: user.name,
    role: isHost ? 'host' : 'audience',
  }
  return participant
}
