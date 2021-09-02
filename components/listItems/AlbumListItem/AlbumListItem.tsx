import * as React from 'react'

import { ListItem } from '@styles'
import {
  AlbumCircle,
  AlbumTextInfo,
  AlbumTitle,
  AlbumPresenter,
  AlbumLength,
  AlbumDescription,
} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { iAlbum } from '@types'
import { useSelector } from 'react-redux'
import { getPresenterForAlbum, getTracksForAlbum } from '@selectors'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { formatTimeFromSeconds } from '@lib'

interface Props {
  album: iAlbum
}

export const AlbumListItem = ({ album }: Props) => {
  const presenter = useSelector(getPresenterForAlbum(album))
  const tracks = useSelector(getTracksForAlbum(album))
  const nav = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate('Album', { id: album.id })
      }}>
      <ListItem>
        <AlbumCircle source={{ uri: album.coverPicture?.src }}></AlbumCircle>
        <AlbumTextInfo>
          <AlbumTitle>{album.title}</AlbumTitle>
          <AlbumPresenter>
            {presenter?.firstName} {presenter?.lastName}
          </AlbumPresenter>
          <AlbumLength>
            {' '}
            <Icon name="time-outline" size={16} color="#fff" />
            {formatTimeFromSeconds(album.length)} min |{' '}
            <Icon name="musical-note" size={16} color="#fff" />
            {tracks.length} Tracks
          </AlbumLength>
          <AlbumDescription>{album.descriptionShort}</AlbumDescription>
        </AlbumTextInfo>
        <Icon name="md-play-circle-outline" size={50} color="#fff" />
      </ListItem>
    </TouchableOpacity>
  )
}
