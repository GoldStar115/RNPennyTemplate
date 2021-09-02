import * as React from 'react'
import {
  Progress,
  ProgressBackground,
  TileContainer,
  TouchableTile,
} from './styles'

interface Props {
  children?: JSX.Element
  onPress?: Function
  backgroundSource?: any
  backgroundColor?: string
  height?: number
  marginLeft?: number
  progress?: number
}

export const Tile = ({
  children,
  onPress,
  backgroundSource,
  backgroundColor,
  height = 150,
  marginLeft = null,
  progress = null,
}: Props) => {
  return (
    <TouchableTile onPress={() => onPress()} marginLeft={marginLeft}>
      <TileContainer
        source={backgroundSource}
        backgroundColor={backgroundColor}
        height={height}>
        {children}
        {!!progress && (
          <>
            <ProgressBackground />
            <Progress progress={progress} />
          </>
        )}
      </TileContainer>
    </TouchableTile>
  )
}
