import styled from 'styled-components/native'
import { Colors } from '@styles'
import { ResponsiveImageBackground } from '../../ResponsiveImage'

interface TouchableTileProps {
  marginLeft?: number
}

export const TouchableTile = styled.TouchableOpacity<TouchableTileProps>`
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft}px` : '')};
`

interface TileContainerProps {
  backgroundColor: string
  height: number
}

export const TileContainer = styled(ResponsiveImageBackground).attrs({
  imageStyle: { borderRadius: 10 },
})<TileContainerProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || Colors.darkGray};
  width: 150px;
  height: 150px;
  border-radius: 10px;
  resize-mode: cover;
  overflow: hidden;
`

interface ProgressProps {
  progress: number
}

export const Progress = styled.View<ProgressProps>`
  background-color: ${Colors.mint};
  width: ${({ progress }) => progress}%;
  height: 7px;
  bottom: 0;
  position: absolute;
`
export const ProgressBackground = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 7px;
  bottom: 0;
  position: absolute;
`
