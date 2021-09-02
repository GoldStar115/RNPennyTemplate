import * as React from 'react'

import { ListItem } from '@styles'
import {
  AlbumCircle,
  AlbumTextInfo,
  AlbumTitle,
  UnfollowButtonText,
  UnfollowButton,
} from './styles'
import { iCategory, iAlbum, iPresenter } from '@types'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface Props {
  category: iCategory
  onPress: Function
  album: iAlbum
  presenter: iPresenter
}

export const CategoryListItem = ({ category }: Props) => {
  const nav = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate('Category', { id: category.id })
      }}>
      <ListItem>
        <AlbumCircle source={{ uri: category?.icon }}></AlbumCircle>
        <AlbumTextInfo>
          <AlbumTitle> {category?.label}</AlbumTitle>
        </AlbumTextInfo>
        <UnfollowButton>
          <UnfollowButtonText>Unfollow</UnfollowButtonText>
        </UnfollowButton>
      </ListItem>
    </TouchableOpacity>
  )
}
