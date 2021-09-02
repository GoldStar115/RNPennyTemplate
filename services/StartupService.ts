import { PlaybackControls, select } from '@lib'
import { getTrack } from '@selectors'
import { localStorage } from '@state'

export const StartupService = {
  onStartUp: (navigation: any) => {
    if (localStorage.firstOpen) {
      navigation.navigate('OnBoarding')
    } else {
      if (localStorage.lastPlayedTrack) {
        setTimeout(() => {
          const track = select(getTrack(localStorage.lastPlayedTrack))
          PlaybackControls.playTrack({
            track,
            position: localStorage.lastPlayedTrackProgress,
            autoplay: false,
          })
        }, 2000)
      }
    }
  },
}
