import { Avatar } from '@components'
import { Colors, H1, H3, Text } from '@styles'
import styled from 'styled-components/native'

export const RoomTitle = styled(H1)`
  margin-top: 50px;
  text-align: center;
`
export const RoomDescription = styled(H3)`
  color: #ccc;
  text-align: center;
`

export const AvatarWrapper = styled.View`
  margin: 0 10px 0 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100px;
  display: flex;
`
export const AvatarContainer = styled.View`
  margin: 50px 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const ParticipantName = styled(Text)`
  padding: 10px;
  text-align: center;
  height: 60px;
  display: flex;
  width: 100%;
`

export const MicButton = styled.TouchableOpacity`
  background-color: ${Colors.mint};
  padding: 10px;
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  align-self: center;
`
