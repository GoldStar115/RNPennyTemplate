import * as React from 'react'
import { ContainerMargin, ContainerScroll, Text } from '@styles'
import { Avatar, Btn } from '@components'
import {
  AvatarContainer,
  AvatarWrapper,
  MicButton,
  ParticipantName,
  RoomDescription,
  RoomTitle,
} from './styles'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { getChatRoom, getUser } from '@selectors'
import { useSelector } from 'react-redux'
import { NavigationParamList } from '@navigation'
import { ChatRoomSubscription } from '@firestore'
import { useEffect, useState } from 'react'
import { iChatRoomParticipant } from '@types'
import { AudioChat } from '@components'
import Icon from 'react-native-vector-icons/Ionicons'

export const RoomScreen = () => {
  const nav = useNavigation()
  const route = useRoute<RouteProp<NavigationParamList, 'ChatRoom'>>()
  const chatRoom = useSelector(getChatRoom(route.params.id))
  const user = useSelector(getUser())
  const [participants, setParticipants] = useState<iChatRoomParticipant[]>([])
  const [isMuted, setIsMuted] = useState(true)
  const [localActiveSpeakers, setActiveSpeakers] = useState<number[]>([])
  const endRoom = () => {
    ChatRoomSubscription.endChatRoom({ chatRoom })
  }

  const leaveRoom = async () => {
    await ChatRoomSubscription.leaveChatRoom({ chatRoom })
    nav.navigate('ChatRoomList')
  }

  useEffect(() => {
    if (!chatRoom) nav.navigate('ChatRoomList')
  }, [chatRoom])

  useEffect(() => {
    const subscription = ChatRoomSubscription.subscribeToRoomParticipants({
      chatRoom,
      callback: (participants: iChatRoomParticipant[]) => {
        setParticipants(participants)
      },
    })
    return () => {
      subscription()
    }
  }, [])

  if (!chatRoom) return <ContainerScroll />

  const updateActiveSpeakers = (_activeSpeakers: number[]) => {
    setActiveSpeakers(_activeSpeakers)
  }

  return (
    <ContainerScroll>
      <ContainerMargin>
        <RoomTitle>{chatRoom.title}</RoomTitle>
        <RoomDescription>{chatRoom.description}</RoomDescription>
        <AvatarContainer>
          {participants.map((participant: iChatRoomParticipant) => (
            <AvatarWrapper key={participant.userId}>
              <Avatar
                participant={participant}
                isTalking={
                  localActiveSpeakers.indexOf(participant.agoraUserId) >= 0 ||
                  (localActiveSpeakers.indexOf(0) >= 0 &&
                    participant.userId === user.id)
                }
              />
              <ParticipantName>{participant.name}</ParticipantName>
            </AvatarWrapper>
          ))}
        </AvatarContainer>
        <MicButton
          onPress={() => {
            ChatRoomSubscription.setMicMuteStatus({
              chatRoom,
              isMuted: !isMuted,
            })
            setIsMuted(!isMuted)
          }}>
          <Icon name={isMuted ? 'mic-off-outline' : 'mic-outline'} size={40} />
        </MicButton>
        <AudioChat
          chatRoom={chatRoom}
          muted={isMuted}
          user={user}
          activeSpeakersCallback={updateActiveSpeakers}
        />
        {!!(user.id === chatRoom.createdByUserId) ? (
          <Btn
            onPress={() => endRoom()}
            style={{ backgroundColor: '#d55', marginTop: 200 }}
            primary
            caption="End room"
          />
        ) : (
          <Btn onPress={() => leaveRoom()} primary caption="Leave quietly" />
        )}
      </ContainerMargin>
    </ContainerScroll>
  )
}
