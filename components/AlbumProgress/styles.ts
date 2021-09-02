import styled from 'styled-components/native'
import { Colors, TextBold } from '@styles'

interface iContainerProps {
  isDraggable: boolean
}

export const Container = styled.View`
  width: 95%;
  margin: 3% auto;
  justify-content: flex-end;
  display: flex;
`

export const ProgressText = styled(TextBold)`
  margin-bottom: 10px;
  font-size: 18px;
`

interface ProgressProps {
  progress: number
}

export const Progress = styled.View<ProgressProps>`
  background-color: ${Colors.mint};
  width: ${({ progress }) => progress}%;
  height: 6px;
  border-radius: 3px;
  bottom: 0;
  position: absolute;
`
