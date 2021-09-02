import { Text, Title, Colors, H3 } from '@styles'
import styled from 'styled-components/native'

export const ChatRoomTitle = styled(H3)`
  margin-bottom: 10px;
`

export const ChatRoomDescription = styled(Text)``

export const ChatRoomList = styled.View`
  margin: 60px 30px 20px;
`
export const ChatRoom = styled.TouchableOpacity`
  background-color: ${Colors.gray1};
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 25px;
`
