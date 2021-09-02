import * as React from 'react'
import {
  ContainerScroll,
  FollowButton,
  WhiteSectionTitle,
  WhiteBodyText,
  PrimaryButtonText,
} from '@styles'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import {
  getPresenter,
  getAlbumsForPresenter,
  getItemFollowed,
} from '@selectors'
import { useSelector } from 'react-redux'
import { NavigationParamList } from '@navigation'
import {
  GradientOverlay,
  PresenterCoverBackground,
  PresenterInfoContainer,
  PresenterTitle,
  PresenterHandle,
  PresenterBio,
  PresenterContentInfo,
  ItemsRow,
  FollowersText,
  AlbumsContainer,
  FollowRow,
  FollowersCount,
  WhiteBackButtonLower,
  ShareButton,
} from './styles'
import { AlbumTile, ShareIcon } from '@components'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import { toggleFollowing } from '@firestore'
import { useState } from 'react'
import { sharePresenter } from '@services'

export const PresenterScreen = () => {
  const navigation = useNavigation()
  const route = useRoute<RouteProp<NavigationParamList, 'Presenter'>>()
  const presenter = useSelector(getPresenter(route.params.id))
  const albums = useSelector(getAlbumsForPresenter(presenter))
  const isFollowing = useSelector(getItemFollowed(presenter.id))
  const [cachedFollowersCount] = useState(presenter.followersCount || 0)
  return (
    <ContainerScroll contentContainerStyle={{ flexGrow: 1 }}>
      <GradientOverlay>
        <PresenterCoverBackground
          source={{ uri: presenter.backgroundPicture?.src }}>
          <LinearGradient
            colors={[
              'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, .9)',
              'rgba(0, 0, 0, 1)',
            ]}
            locations={[0.0, 0.8, 0.9]}
            style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <PresenterInfoContainer>
              <PresenterHandle>@{presenter.handle}</PresenterHandle>
              <PresenterTitle>
                {presenter.firstName} {presenter.lastName}
              </PresenterTitle>
              <WhiteBodyText>{presenter.idStatement}</WhiteBodyText>
              <PresenterContentInfo>
                {' '}
                <Icon name="albums-outline" size={18} /> {albums.length} Albums{' '}
              </PresenterContentInfo>
              <PresenterBio>{presenter.bio}</PresenterBio>
              <FollowRow>
                <FollowButton
                  onPress={() => toggleFollowing(presenter.id, 'presenter')}>
                  {!isFollowing && (
                    <>
                      <Icon name="add" size={24} />
                      <PrimaryButtonText>Follow</PrimaryButtonText>
                    </>
                  )}
                  {isFollowing && (
                    <>
                      <Icon name="remove" size={24} />
                      <PrimaryButtonText>Unfollow</PrimaryButtonText>
                    </>
                  )}
                </FollowButton>
                <FollowersCount>
                  <Icon name="md-people" size={24} color={'white'} />
                  <FollowersText>
                    {isFollowing
                      ? cachedFollowersCount + 1
                      : cachedFollowersCount}{' '}
                    Followers
                  </FollowersText>
                </FollowersCount>
              </FollowRow>
            </PresenterInfoContainer>
          </LinearGradient>
        </PresenterCoverBackground>
        <WhiteBackButtonLower onPress={navigation.goBack}>
          <Icon name="arrow-back" color="#fff" size={32} />
        </WhiteBackButtonLower>
        <ShareButton onPress={() => sharePresenter(presenter)}>
          <ShareIcon color={'#fff'} size={28} />
        </ShareButton>
      </GradientOverlay>
      <AlbumsContainer>
        <WhiteSectionTitle>Albums</WhiteSectionTitle>
        <ItemsRow>
          {albums.map((album) => (
            <AlbumTile
              key={album.id}
              album={album}
              onPress={() => navigation.navigate('Album', { id: album.id })}
            />
          ))}
        </ItemsRow>
      </AlbumsContainer>
    </ContainerScroll>
  )
}
