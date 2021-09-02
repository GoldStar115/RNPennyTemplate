import * as React from 'react'

import { Description, Title } from './styles'
import { ListItem, Touch } from '@styles'
import { iAlbum } from '@types'

interface Props {
  album: iAlbum
  onPress(): void
}

export const Album = ({ album, onPress }: Props) => {
  return (
    <Touch onPress={onPress}>
      <ListItem>
        <Title>{album.title}</Title>
        <Description>{album.descriptionShort}</Description>
      </ListItem>
    </Touch>
  )
}
