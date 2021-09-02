import * as React from 'react'

import { ListItem } from '@styles'
import {
  AlbumCircle,
  AlbumTextInfo,
  AlbumTitle,
  AlbumDescription,
  UnfollowButtonText,
  UnfollowButton,
} from './styles'
import { iFollows, Categories } from '@types'
import { useSelector } from 'react-redux'
import { getPresenter } from '@selectors'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { toggleFollowing } from '@firestore'

interface Props {
  followItem: iFollows
}

export const FollowingListItem = ({ followItem }: Props) => {
  const nav = useNavigation()
  let displayItem = {
    image: {},
    title: '',
    description: '',
    navigateTo: () => {},
  }
  const presenter = useSelector(getPresenter(followItem.contentId))
  switch (followItem.contentType) {
    case 'category':
      const category = Categories[followItem.contentId]
      const Icon = category?.icon
      displayItem = {
        image: <Icon width={50} height={50} style={{ color: 'white' }} />,
        title: category.label,
        description: 'category',
        navigateTo: () => nav.navigate('Category', { id: category.id }),
      }
      break
    case 'presenter': {
      displayItem = {
        image: <AlbumCircle source={{ uri: presenter.profilePicture?.src }} />,
        title: `${presenter.firstName} ${presenter.lastName}`,
        description: `@${presenter.handle}`,
        navigateTo: () =>
          nav.navigate('Presenter', {
            id: presenter.id,
          }),
      }
    }
  }

  return (
    <TouchableOpacity onPress={displayItem.navigateTo}>
      <ListItem>
        {displayItem.image}
        <AlbumTextInfo>
          <AlbumTitle> {displayItem.title}</AlbumTitle>
          <AlbumDescription>{displayItem.description}</AlbumDescription>
        </AlbumTextInfo>
        <UnfollowButton
          onPress={() =>
            toggleFollowing(followItem.contentId, followItem.contentType)
          }>
          <UnfollowButtonText>Unfollow</UnfollowButtonText>
        </UnfollowButton>
      </ListItem>
    </TouchableOpacity>
  )
}
