import * as React from 'react'
import {
  AlbumCircle,
  AlbumTextInfo,
  AlbumTitle,
  AlbumDescription,
  FeedPlayButton,
  FeedButtonText,
  ListItem,
  TimeAgo,
  FollowingTag,
} from './styles'
import { iAlbum } from '@types'
import { useSelector } from 'react-redux'
import { getPresenterForAlbum } from '@selectors'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { formatDistance } from 'date-fns'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors, GreenSmallHeading } from '@styles'

interface Props {
  album: iAlbum
}

export const FeedListItem = ({ album }: Props) => {
  const presenter = useSelector(getPresenterForAlbum(album))
  const nav = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate('Album', { id: album.id })
      }}>
      <ListItem>
        <AlbumCircle source={{ uri: album.coverPicture?.src }}></AlbumCircle>
        <AlbumTextInfo>
          {album._isFollowed && (
            <FollowingTag>
              <GreenSmallHeading>
                {' '}
                <Icon name="checkmark" size={16} color={Colors.mint} />{' '}
                FOLLOWING
              </GreenSmallHeading>
            </FollowingTag>
          )}
          <AlbumTitle>
            {presenter?.firstName} {presenter?.lastName}
          </AlbumTitle>
          <TimeAgo>
            {formatDistance(album.createdate.toDate(), new Date())} ago
          </TimeAgo>
          <AlbumDescription>New album dropped: {album.title}</AlbumDescription>
          <FeedPlayButton
            onPress={() => nav.navigate('Album', { id: album.id })}>
            <FeedButtonText>Listen Now</FeedButtonText>
          </FeedPlayButton>
        </AlbumTextInfo>
      </ListItem>
    </TouchableOpacity>
  )
}
