import * as React from 'react'
import { Tile } from '../TileCarousel/Tile'
import { Title, TileContainer } from './styles'
import { iJourney } from '@types'
interface Props {
  journey: iJourney
  onPress: Function
}

export const JourneyTile = ({ journey, onPress }: Props) => {
  return (
    <TileContainer onPress={() => onPress()}>
      <Tile
        backgroundSource={{ uri: journey.coverPicture?.src }}
        onPress={() => onPress()}
        height={150}
      />
      <Title>{journey.title}</Title>
    </TileContainer>
  )
}
