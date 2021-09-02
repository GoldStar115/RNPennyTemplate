import * as React from 'react'
import { ContainerScroll } from '@styles'
import { Btn } from '@components'
import { getChatRooms } from '@selectors'
import { useSelector } from 'react-redux'
import {
  ChatRoom,
  ChatRoomDescription,
  ChatRoomList,
  ChatRoomTitle,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { iChatRoom } from '@types'
import { ChatRoomSubscription } from '@firestore'

export const RoomListScreen = () => {
  const chatRooms = useSelector(getChatRooms())
  const nav = useNavigation()
  const joinChatRoom = async (chatRoom: iChatRoom) => {
    nav.navigate('AssureLoggedIn', {
      forwardToRoute: 'ChatRoom',
      forwardParams: { id: chatRoom.id },
    })
  }
  return (
    <ContainerScroll contentContainerStyle={{ flexGrow: 1 }}>
      <ChatRoomList>
        {chatRooms.map((chatRoom) => (
          <ChatRoom onPress={() => joinChatRoom(chatRoom)} key={chatRoom.id}>
            <>
              <ChatRoomTitle>{chatRoom.title}</ChatRoomTitle>
              <ChatRoomDescription>{chatRoom.description}</ChatRoomDescription>
            </>
          </ChatRoom>
        ))}
      </ChatRoomList>

      <Btn
        onPress={() => nav.navigate('CreateRoom')}
        primary
        caption="Create room"
      />
    </ContainerScroll>
  )
}
