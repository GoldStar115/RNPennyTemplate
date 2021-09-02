import { iChatRoom, iState } from '@types'

export const getChatRooms = () => (state: iState): iChatRoom[] =>
  state.chatRooms

export const getChatRoom = (id: string) => (state: iState): iChatRoom =>
  state.chatRooms.find((chatRoom) => chatRoom.id === id)
