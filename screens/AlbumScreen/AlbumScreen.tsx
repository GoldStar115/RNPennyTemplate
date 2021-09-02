import * as React from 'react'
import {
  ContainerScroll,
  PrimaryButton,
  PrimaryButtonText,
  PhotoBackground,
  Colors,
  ClearContainer,
} from '@styles'
import LinearGradient from 'react-native-linear-gradient'
import { iAlbum, iTrack, iPresenter, iCategory, Categories } from '@types'
import {
  Description,
  PresenterCircle,
  AlbumScreenOverlay,
  TrackContainer,
  AlbumInfoContainer,
  PresenterName,
  AlbumTitle,
  AlbumInfoSmall,
  CategoryTab,
  CategoryIconContainer,
  WhiteBackButtonLower,
} from './styles'
import { NavigationParamList } from '@navigation'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import {
  getTracksForAlbum,
  getAlbum,
  getPresenterForAlbum,
  getItemLiked,
  getIsUserLoggedIn,
} from '@selectors'
import { AlbumProgress, ShareIcon, Track } from '@components'
import Icon from 'react-native-vector-icons/Ionicons'

import { Svg, Polygon } from 'react-native-svg'
import { usePlaybackControls } from '@hooks'
import { TouchableOpacity } from 'react-native'
import { toggleRating } from '@firestore'
import { Analytics, shareAlbum } from '@services'
import { getAlbumProgress } from '@selectors'

interface Props {
  album: iAlbum
  track: iTrack
  category: iCategory
  presenter: iPresenter
  onPress: Function
}

export const AlbumScreen = () => {
  const navigation = useNavigation()
  const route = useRoute<RouteProp<NavigationParamList, 'Track'>>()
  const album = useSelector(getAlbum(route.params.id))
  const albumProgress = useSelector(getAlbumProgress(album))
  const presenter = useSelector(getPresenterForAlbum(album))
  const tracks = useSelector(getTracksForAlbum(album))
  const playbackControls = usePlaybackControls()
  const liked = useSelector(getItemLiked(album.id))
  const isUserLoggedIn = useSelector(getIsUserLoggedIn())
  const category = Categories[album.category1]
  const CategoryIcon = category?.icon
  const WrappedSvg = () => (
    <ClearContainer style={{ aspectRatio: 1 }}>
      <Svg height="100%" width="100%" viewBox="0 0 100 63">
        <Polygon points="50,0 0,30 100,30 50,0" fill="black" />
      </Svg>
    </ClearContainer>
  )
  return (
    <ContainerScroll>
      <PhotoBackground source={{ uri: album?.coverPicture?.src }}>
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, .9)',
            'rgba(0, 0, 0, 1)',
          ]}>
          <WrappedSvg />
        </LinearGradient>
      </PhotoBackground>
      <WhiteBackButtonLower onPress={navigation.goBack}>
        <Icon name="arrow-back" color="#fff" size={32} />
      </WhiteBackButtonLower>

      <ClearContainer style={{ flex: 1 }}>
        <AlbumScreenOverlay
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 3, height: -2 },
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 5,
          }}>
          <CategoryTab />
          <CategoryIconContainer>
            <CategoryIcon
              width={40}
              height={40}
              style={{ color: Colors.darkGray }}
            />
          </CategoryIconContainer>
          <TouchableOpacity
            onPress={() => toggleRating(album.id, 'album')}
            style={{
              position: 'absolute',
              right: '8%',
            }}>
            <Icon
              name={liked ? 'heart' : 'heart-outline'}
              size={32}
              color={Colors.mint}
              style={{ paddingTop: '5%' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => shareAlbum(album)}
            style={{
              position: 'absolute',
              right: '23%',
            }}>
            <ShareIcon
              size={32}
              color={Colors.mint}
              style={{ paddingTop: '5%' }}
            />
          </TouchableOpacity>
          <AlbumInfoContainer>
            <PresenterName
              key={presenter.id}
              onPress={() =>
                navigation.navigate('Presenter', {
                  id: presenter.id,
                })
              }>
              {presenter?.firstName} {presenter?.lastName} Presents:
            </PresenterName>
            <PresenterCircle
              source={{ uri: album?.coverPicture?.src }}></PresenterCircle>
            <AlbumInfoSmall>
              {' '}
              <Icon name="md-albums-outline" size={16} color="#fff" />
              {'  '}Album
              {'  '}| <Icon name="musical-note" size={16} color="#fff" />{' '}
              {tracks.length} Tracks
            </AlbumInfoSmall>
            <AlbumTitle>{album.title}</AlbumTitle>
            <Description>{album.description}</Description>
            <PrimaryButton
              onPress={() => {
                playbackControls.play(tracks[0])
                Analytics.albumStarted(album)
              }}>
              <PrimaryButtonText>Start Listening</PrimaryButtonText>
            </PrimaryButton>
            {isUserLoggedIn && albumProgress?.progressPercent > 0 && (
              <AlbumProgress album={album} albumProgress={albumProgress} />
            )}
          </AlbumInfoContainer>
          <PresenterName style={{ textAlign: 'left' }}>
            TRACK LIST:
          </PresenterName>
          <TrackContainer>
            {tracks.map((track) => (
              <Track
                key={track.id}
                track={track}
                completed={albumProgress?.completedTracks[track.id] === -1}
                onPress={() => {
                  Analytics.albumStarted(album)
                  playbackControls.play(track)
                }}
              />
            ))}
          </TrackContainer>
        </AlbumScreenOverlay>
      </ClearContainer>
    </ContainerScroll>
  )
}
