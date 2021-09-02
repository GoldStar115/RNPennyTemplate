import TrackPlayer from 'react-native-track-player'
import { store } from '@state'
import { setCurrentTrack, showLoginModal } from '@reducers'
import { getTrack, getAlbumForTrack, getIsUserLoggedIn } from '@selectors'
import { Analytics } from './Analytics'
import { iTrack } from '@types'
import { UserProgressSubscription } from '@firestore'

module.exports = async function () {
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play()
  })

  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause()
  })

  TrackPlayer.addEventListener('remote-next', () => {
    TrackPlayer.skipToNext()
  })

  TrackPlayer.addEventListener('remote-previous', () => {
    TrackPlayer.skipToPrevious()
  })

  TrackPlayer.addEventListener('remote-jump-forward', async () => {
    const position = await TrackPlayer.getPosition()
    TrackPlayer.seekTo(position + 15)
  })

  TrackPlayer.addEventListener('remote-jump-backward', async () => {
    const position = await TrackPlayer.getPosition()
    TrackPlayer.seekTo(position - 15)
  })

  TrackPlayer.addEventListener('remote-stop', () => {
    TrackPlayer.destroy()
  })

  TrackPlayer.addEventListener('playback-track-changed', (data) => {
    const { nextTrack: currentTrackId, track: previousTrackId } = data
    const currentTrack: iTrack = getTrack(currentTrackId)(store.getState())
    const previousTrack: iTrack = getTrack(previousTrackId)(store.getState())
    Analytics.trackStart(currentTrack)
    store.dispatch(setCurrentTrack(currentTrack))
  })

  TrackPlayer.addEventListener('playback-queue-ended', ({ track: trackId }) => {
    // The android version of rn-track-player will fire this event after every
    // manual track change (i.e. when a new queue gets created)
    // checking the track value to work around this bug
    // console.log('in playback-queue-ended', trackId)
    if (trackId) {
      const state = store.getState()
      const track = getTrack(trackId)(state)
      const album = getAlbumForTrack(track)(state)
      const isUserLoggedIn = getIsUserLoggedIn()(state)
      if (!isUserLoggedIn) {
        store.dispatch(
          showLoginModal({ lastEventBeforeLogin: 'album_finished' }),
        )
      }
      Analytics.albumFinished(album)
    }
  })
}
