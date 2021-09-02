import * as React from 'react'
import {
  Container,
  Description,
  PlayerBackground,
  PresenterTitle,
  TrackTitle,
  ItemsRow,
  AlbumTitle,
  TrackInfoContainer,
  OptionsRow,
  PlaybackSpeedControlText,
  PlaybackSpeedControl,
  SkipTimeOverLayText,
  SkipButton,
} from './styles'
import { Colors } from '@styles'
import {
  getCurrentTrack,
  getAlbumForTrack,
  getPresenterForAlbum,
} from '@selectors'
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'
import { ProgressBar, ShareIcon, TimeRemaining } from '@components'
import { usePlaybackControls } from '@hooks'
import TrackPlayer, { usePlaybackState } from 'react-native-track-player'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { hideModals } from '@reducers'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { shareAlbum } from '@services'

export function PlayerScreen() {
  const currentTrack = useSelector(getCurrentTrack())
  const currentAlbum = useSelector(getAlbumForTrack(currentTrack))
  const currentPresenter = useSelector(getPresenterForAlbum(currentAlbum))
  const playbackState = usePlaybackState()
  const presenter = useSelector(getPresenterForAlbum(currentAlbum))
  const playbackControls = usePlaybackControls()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [rate, setRate] = useState(1)
  const setRoundedRate = (rate: number) => {
    const roundedRate = Math.round(rate * 10) / 10
    setRate(roundedRate)
  }
  const speedUp = () => {
    // HACK: if we increase in 0.2 steps, there are weird floating point results
    // like, 1.59999999. The calculation below is a hack to avoid this
    let newRate = (rate * 10 + 2) / 10
    if (newRate > 2) {
      newRate = 1
    }
    playbackControls.setRate(newRate)
    setRoundedRate(newRate)
  }
  useEffect(() => {
    playbackControls.getRate().then((rate) => setRoundedRate(rate))
  }, [])

  useEffect(() => {
    if (!currentTrack) {
      dispatch(hideModals())
    }
  }, [currentTrack])

  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => dispatch(hideModals())}>
        <ItemsRow>
          <Icon name="chevron-down-outline" color={Colors.darkGray} size={32} />
          <AlbumTitle>Now Playing: {currentAlbum?.title}</AlbumTitle>
        </ItemsRow>
      </TouchableWithoutFeedback>
      <PlayerBackground
        imageStyle={{ borderRadius: 25 }}
        source={{ uri: currentAlbum?.coverPicture?.src }}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .7)', 'rgba(0, 0, 0, 1)']}
          locations={[0.0, 0.8, 0.9]}
          style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <TrackInfoContainer>
            <TrackTitle>
              {currentTrack?.number}. {currentTrack?.title}
            </TrackTitle>
            <PresenterTitle
              key={presenter?.id}
              onPress={() => {
                dispatch(hideModals())
                navigation.navigate('Presenter', {
                  id: presenter.id,
                })
              }}>
              by {currentPresenter?.firstName} {currentPresenter?.lastName}
            </PresenterTitle>
            <Description>{currentTrack?.description}</Description>
            <ProgressBar isDraggable={true} />
            <TimeRemaining
              style={{
                fontSize: 16,
                alignSelf: 'flex-end',
                padding: 1,
              }}
            />
            <ItemsRow>
              <TouchableOpacity
                onPress={() => {
                  playbackControls.playPreviousTrack()
                }}>
                <Icon name="play-skip-back-sharp" size={50} color="#fff" />
              </TouchableOpacity>
              <SkipButton
                onPress={() => {
                  playbackControls.seekBackward()
                }}>
                <FeatherIcon name="rotate-ccw" size={50} color="#fff" />
                <SkipTimeOverLayText>15</SkipTimeOverLayText>
              </SkipButton>
              <TouchableOpacity onPress={() => playbackControls.togglePlay()}>
                <Icon
                  name={
                    playbackState === TrackPlayer.STATE_PLAYING
                      ? 'pause-circle'
                      : 'play-circle'
                  }
                  size={90}
                  color="#fff"
                />
              </TouchableOpacity>
              <SkipButton
                onPress={() => {
                  playbackControls.seekForward()
                }}>
                <FeatherIcon name="rotate-cw" size={50} color="#fff" />
                <SkipTimeOverLayText>15</SkipTimeOverLayText>
              </SkipButton>
              <TouchableOpacity
                onPress={() => {
                  playbackControls.playNextTrack()
                }}>
                <Icon name="play-skip-forward-sharp" size={50} color="#fff" />
              </TouchableOpacity>
            </ItemsRow>
            <OptionsRow>
              <PlaybackSpeedControl onPress={() => speedUp()}>
                <PlaybackSpeedControlText>{rate}x</PlaybackSpeedControlText>
              </PlaybackSpeedControl>
              <TouchableOpacity onPress={() => shareAlbum(currentAlbum)}>
                <ShareIcon size={32} color={Colors.mint} />
              </TouchableOpacity>
            </OptionsRow>
          </TrackInfoContainer>
        </LinearGradient>
      </PlayerBackground>
    </Container>
  )
}
