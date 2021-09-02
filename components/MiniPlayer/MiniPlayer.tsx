import * as React from 'react'
import {
  Container,
  TextContainer,
  PlayButton,
  AlbumCoverImage,
  TrackProgress,
  OpenPlayerControls,
  TouchableTrackInfo,
  TrackData,
  PresenterName,
} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  getCurrentTrack,
  getPresenterForAlbum,
  getAlbumForTrack,
} from '@selectors'
import { useSelector, useDispatch } from 'react-redux'
import { ProgressBar } from '../ProgressBar'
import TrackPlayer, { usePlaybackState } from 'react-native-track-player'
import { usePlaybackControls } from '@hooks'
import TextTicker from 'react-native-text-ticker'
import { Easing } from 'react-native'
import { TimeRemaining } from '../TimeRemaining'
import { showPlayerModal } from '@reducers'

export const MiniPlayer = () => {
  const currentTrack = useSelector(getCurrentTrack())
  const currentAlbum = useSelector(getAlbumForTrack(currentTrack))
  const playbackState = usePlaybackState()
  const playbackControls = usePlaybackControls()
  const title = `${currentTrack?.title}  |  ${currentAlbum?.title}`
  const currentPresenter = useSelector(getPresenterForAlbum(currentAlbum))
  const dispatch = useDispatch()

  return (
    <Container>
      <TouchableTrackInfo onPress={() => dispatch(showPlayerModal())}>
        <OpenPlayerControls>
          <AlbumCoverImage source={{ uri: currentAlbum?.coverPicture?.src }} />
          <TrackData>
            <TextContainer>
              <TextTicker
                style={{
                  color: 'white',
                  fontSize: 20,
                  width: 100,
                  fontFamily: 'NoyhGeometric-Bold',
                }}
                bounce={false}
                loop
                isRTL={false}
                repeatSpacer={50}
                scrollSpeed={250}
                marqueeDelay={1000}
                easing={Easing.linear}>
                {title}
              </TextTicker>
              <PresenterName>
                by {currentPresenter?.firstName} {currentPresenter?.lastName}
              </PresenterName>
            </TextContainer>
            <TrackProgress>
              <ProgressBar />
            </TrackProgress>
            <TimeRemaining
              style={{ fontSize: 14, alignSelf: 'flex-start', marginTop: 5 }}
            />
          </TrackData>
        </OpenPlayerControls>
      </TouchableTrackInfo>
      <PlayButton onPress={() => playbackControls.togglePlay()}>
        {playbackState === TrackPlayer.STATE_PLAYING ? (
          <Icon name="pause-circle-outline" color="#fff" size={50} />
        ) : (
          <Icon name="play-circle-outline" color="#fff" size={50} />
        )}
      </PlayButton>
    </Container>
  )
}
