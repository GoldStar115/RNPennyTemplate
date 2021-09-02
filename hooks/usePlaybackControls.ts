import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerProgress,
} from 'react-native-track-player'
import { iTrack, iState } from '@types'
import { useStore } from 'react-redux'
import { PlaybackControls } from '@lib'

interface iPlayTrack {
  track: iTrack
  state: iState
}

export function usePlaybackControls() {
  const playbackState = usePlaybackState()
  const { position } = useTrackPlayerProgress()
  const store = useStore()

  return {
    play: (track: iTrack) => {
      return PlaybackControls.playTrack({ track })
    },
    seekForward: () => {
      TrackPlayer.seekTo(position + 15)
    },
    seekBackward: () => {
      TrackPlayer.seekTo(position - 15)
    },
    seekTo: (seconds: number) => {
      TrackPlayer.seekTo(seconds)
    },
    playNextTrack: () => {
      TrackPlayer.skipToNext()
    },
    playPreviousTrack: () => {
      if (position > 10) {
        TrackPlayer.seekTo(0)
      } else {
        try {
          TrackPlayer.skipToPrevious()
        } catch {
          console.log('at beginning of queue')
        }
      }
    },
    togglePlay: () => {
      if (playbackState === TrackPlayer.STATE_PLAYING) {
        TrackPlayer.pause()
      } else {
        TrackPlayer.play()
      }
    },
    setRate: (rate: number) => {
      TrackPlayer.setRate(rate)
    },
    getRate: async () => {
      return await TrackPlayer.getRate()
    },
  }
}
