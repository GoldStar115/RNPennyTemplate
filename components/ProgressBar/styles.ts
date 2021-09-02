import styled from 'styled-components/native'
import { Colors } from '@styles'

interface iContainerProps {
  isDraggable: boolean
}

export const Container = styled.View<iContainerProps>`
  width: 95%;
  margin: 3% auto;
  height: ${({ isDraggable }) => (isDraggable ? 30 : 6)}px;
  justify-content: flex-end;
  display: flex;
`

interface ProgressProps {
  progress: number
}

export const ProgressBackground = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 6px;
  border-radius: 3px;
  bottom: 0;
  position: absolute;
`

export const Progress = styled.View<ProgressProps>`
  background-color: ${Colors.mint};
  width: ${({ progress }) => progress}%;
  height: 6px;
  border-radius: 3px;
  bottom: 0;
  position: absolute;
`

export const BufferProgress = styled.View<ProgressProps>`
  background-color: rgba(180, 180, 180, 0.5);
  width: ${({ progress }) => progress}%;
  height: 6px;
  border-radius: 3px;
  top: 0;
  position: absolute;
`

export const Knob = styled.View`
  background-color: ${Colors.mint};
  height: 24px;
  width: 24px;
  border-radius: 25px;
  border: 0;
  bottom: -8px;
  position: absolute;
`
