import * as React from 'react'
import { Tile } from '../TileCarousel/Tile'
import { iAlbum } from '@types'
import { useSelector } from 'react-redux'
import { getTracksForAlbum, getPresenterForAlbum } from '@selectors'
import {
  AlbumTitle,
  TileContainer,
  PresenterName,
  AlbumInfoSmall,
} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { formatTimeFromSeconds } from '@lib'
import { getAlbumProgress } from '@selectors'
interface Props {
  album: iAlbum
  onPress: Function
}

export const AlbumTile = ({ album, onPress }: Props) => {
  const presenter = useSelector(getPresenterForAlbum(album))
  const tracks = useSelector(getTracksForAlbum(album))
  const albumProgress = useSelector(getAlbumProgress(album))
  return (
    <TileContainer onPress={() => onPress()}>
      <Tile
        backgroundSource={{ uri: album.coverPicture?.src }}
        onPress={() => onPress()}
        height={150}
        progress={albumProgress?.progressPercent}
      />
      <AlbumTitle>{album.title}</AlbumTitle>
      <PresenterName>
        {presenter?.firstName} {presenter?.lastName}
      </PresenterName>
      <AlbumInfoSmall>
        {' '}
        <Icon name="time-outline" size={16} color="#fff" />{' '}
        {formatTimeFromSeconds(album.length)}
        {'  '}| <Icon name="musical-note" size={16} color="#fff" />{' '}
        {tracks.length} Tracks
      </AlbumInfoSmall>
    </TileContainer>
  )
}
