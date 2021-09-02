import { Colors, Text } from '@styles'
import styled from 'styled-components/native'

export const Circle = styled.View<{
  isHost?: boolean
  onStage?: boolean
  isTalking: boolean
}>`
  background-color: ${({ onStage, isHost }) =>
    isHost ? '#ffd7dF' : onStage ? '#BAF7FF' : '#FAFABE'};
  border-radius: 50px;
  height: ${({ isHost }) => (isHost ? 90 : 80)}px;
  width: ${({ isHost }) => (isHost ? 90 : 80)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 4px;
  border-color: ${({ isTalking }) => (isTalking ? '#d55' : '#000')};
`
export const Initials = styled(Text)`
  color: black;
  font-size: 40px;
  padding-top: 8px;
  align-items: flex-end;
`

export const MicMutedIcon = styled.View`
  position: absolute;
  left: 0px;
  bottom: -8px;
  background-color: rgba(255, 255, 255, 0.8);
  color: white;
  border-radius: 30px;
  padding: 5px;
`
