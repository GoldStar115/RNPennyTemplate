import * as React from 'react'
import { ContainerMargin, ContainerScroll, H1, Text } from '@styles'

import { Input } from '@styles'
import { useState } from 'react'
import { Btn } from '@components'
import { FormContainer } from './styles'
import { ChatRoomSubscription } from '@firestore'
import { useNavigation } from '@react-navigation/native'

export const CreateRoomScreen = () => {
  const nav = useNavigation()
  const [roomTitle, setRoomTitle] = useState('some title')
  const [roomDescription, setRoomDescription] = useState('description')
  const [isLoading, setIsLoading] = useState(false)

  const createAndNavigateToChatroom = async () => {
    setIsLoading(true)
    const chatRoom = await ChatRoomSubscription.createChatRoom({
      roomTitle,
      roomDescription,
    })
    nav.navigate('ChatRoom', { id: chatRoom.id })
  }

  return (
    <ContainerScroll>
      <ContainerMargin>
        <H1>Create a room</H1>
        <Text>Start a conversation on Penny.</Text>
        <FormContainer>
          <Input
            placeholder="Room title"
            value={roomTitle}
            onChangeText={setRoomTitle}
          />
          <Input
            placeholder="Room description"
            value={roomDescription}
            onChangeText={setRoomDescription}
          />
        </FormContainer>
        <Btn
          primary
          disabled={roomTitle.length <= 3}
          onPress={() => createAndNavigateToChatroom()}
          loading={isLoading}
          caption={'Create'}
        />
      </ContainerMargin>
    </ContainerScroll>
  )
}
