import { UserProgressSubscription } from '@firestore'
import { getCurrentTrack } from '@selectors'
import { localStorage, saveTrackProgress, store } from '@state'
import TrackPlayer from 'react-native-track-player'
import { Analytics } from './Analytics'

const trackListeningProgress = async () => {
  let currentState
  try {
    currentState = await TrackPlayer.getState()
  } catch (error) {
    console.log('error fetching player state', error)
  }
  if (currentState === TrackPlayer.STATE_PLAYING) {
    const track = getCurrentTrack()(store.getState())
    const position = await TrackPlayer.getPosition()
    const duration = await TrackPlayer.getDuration()
    if (position + 20 > duration) {
      console.log(console.log('track as finished', { position, duration }))
      Analytics.trackFinished(track)
      UserProgressSubscription.saveTrackProgress(track, -1)
    } else {
      console.log(console.log('track as listening', { position, duration }))
      UserProgressSubscription.saveTrackProgress(track, Math.round(position))
      saveTrackProgress(track, Math.round(position))
    }
  }
}

export const ProgressTrackingService = {
  startTracking: () => {
    setInterval(trackListeningProgress, 10000)
  },
}
