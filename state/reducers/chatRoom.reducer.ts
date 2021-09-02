import { iTrack, iAction, iChatRoom } from '@types'

export const CHAT_ROOM_ACTIONS = {
  RECEIVE: 'CHAT_ROOM_ACTION.RECEIVE',
}

export const receiveChatRooms = (chatRooms: iChatRoom[]) => {
  return {
    type: CHAT_ROOM_ACTIONS.RECEIVE,
    payload: chatRooms,
  }
}

const initialState: iChatRoom[] = []

export const ChatRoomReducer = (state = initialState, action: iAction) => {
  switch (action.type) {
    case CHAT_ROOM_ACTIONS.RECEIVE:
      return action.payload

    default:
      return state
  }
}
