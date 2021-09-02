import analytics from '@react-native-firebase/analytics'
import { iAlbum, iLoginSource, iPresenter, iState, iTrack } from '@types'
import { store } from '@state'
import {
  getAlbumForTrack,
  getPresenterForAlbum,
  getCurrentTrack,
  getPresenter,
  getAlbum,
} from '@selectors'
import TrackPlayer from 'react-native-track-player'
import { getParamsFromURL } from '@lib'
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging'

const select = (selector: Function) => {
  return selector(store.getState())
}

const stateHistory: string[] = []
let activeAlbum: iAlbum = null

const quarterMinuteIntervalCheck = async () => {
  // This method is called every 15 seconds and remembers the
  // player state every time it's called. It caches 10 of these
  // status values in a rolling cache. If there are 4 blocks of
  // 15 seconds recorded it assumes there was a continuous minute
  // of playback and sends the minute_played event to analytics.
  // After that it clears the cache and starts over.
  let currentState
  try {
    currentState = (await TrackPlayer.getState()).toString()
  } catch (error) {
    console.log('error fetching player state', error)
  }
  if (currentState) {
    stateHistory.push(currentState)
    const quarterMinuteBlocks = stateHistory.filter(
      (state) => state === TrackPlayer.STATE_PLAYING.toString(),
    )
    if (quarterMinuteBlocks.length >= 4) {
      Analytics.minutePlayed(quarterMinuteBlocks.length * 15)
      stateHistory.splice(0) // reset state cache
    } else {
      stateHistory.splice(0, Math.max(stateHistory.length - 10, 0))
    }
  } else {
  }
}

setInterval(quarterMinuteIntervalCheck, 15000)

export const Analytics = {
  minutePlayed: (seconds: number) => {
    const track = select(getCurrentTrack())
    const album = select(getAlbumForTrack(track))
    const presenter = select(getPresenterForAlbum(album))
    const eventData = {
      title: track?.title,
      album: album?.title,
      trackNumber: track?.number,
      presenter: `${presenter?.firstName} ${presenter?.lastName}`,
      seconds: seconds,
    }
    // console.log('analytics.minutePlayed', { eventData })
    analytics().logEvent('minute_played', eventData)
  },
  trackStart: (track: iTrack) => {
    if (track) {
      const album = select(getAlbumForTrack(track))
      const presenter = select(getPresenterForAlbum(album))
      const eventData = {
        title: track?.title,
        album: album?.title,
        trackNumber: track?.number,
        presenter: `${presenter?.firstName} ${presenter?.lastName}`,
      }
      analytics().logEvent('track_start', eventData)
    }
  },
  trackFinished: (track: iTrack) => {
    const album = select(getAlbumForTrack(track))
    const presenter = select(getPresenterForAlbum(album))
    const eventData = {
      title: track?.title,
      album: album?.title,
      trackNumber: track?.number,
      presenter: `${presenter?.firstName} ${presenter?.lastName}`,
    }
    // console.log('analytics.trackFinished', { eventData })
    analytics().logEvent('track_finished', eventData)
  },
  albumStarted: (album: iAlbum) => {
    if (!activeAlbum || album.id !== activeAlbum.id) {
      const presenter = select(getPresenterForAlbum(album))
      const eventData = {
        title: album?.title,
        presenter: `${presenter?.firstName} ${presenter?.lastName}`,
      }
      // console.log('analytics.albumStarted', { eventData })
      analytics().logEvent('album_started', eventData)
      activeAlbum = album
    }
  },
  albumFinished: (album: iAlbum) => {
    const presenter = select(getPresenterForAlbum(album))
    const eventData = {
      title: album?.title,
      presenter: `${presenter?.firstName} ${presenter?.lastName}`,
    }
    // console.log('analytics.albumFinished', { eventData })
    analytics().logEvent('album_finished', eventData)
  },
  sendSignInLink: () => {
    const state: iState = store.getState()
    analytics().logEvent('send_sign_in_link', {
      action: state.ui.lastEventBeforeLogin,
    })
  },
  signIn: ({ lastEventBeforeLogin, provider }: iLoginSource) => {
    analytics().logEvent('signed_in', {
      action: lastEventBeforeLogin || '',
      provider,
    })
  },
  signOut: () => {
    analytics().logEvent('signed_out', {})
  },
  logScreenView: (route: any) => {
    let title = null
    switch (route.name) {
      case 'Presenter':
        const presenter: iPresenter = select(getPresenter(route.params?.id))
        title = `${presenter?.firstName} ${presenter?.lastName}`
        break
      case 'Album':
        const album: iAlbum = select(getAlbum(route.params?.id))
        title = album.title
        break
      case 'Category':
        title = route.params?.id
        break
      default:
    }
    const eventData = {
      screen_class: route.name,
      screen_name: title || route.name,
    }
    // console.log('analytics.logScreenView', eventData)
    analytics().logScreenView(eventData)
  },
  sharePresenter: (presenter: iPresenter, app: string) => {
    const eventData = {
      presenter: `${presenter?.firstName} ${presenter?.lastName}`,
      app,
    }
    analytics().logEvent('share_presenter', eventData)
  },
  shareAlbum: (album: iAlbum, app: string) => {
    const eventData = {
      album: album?.title,
      app,
    }
    analytics().logEvent('share_album', eventData)
  },
  deepLinkReceived: (url: string, isInitialURL: boolean) => {
    const params = getParamsFromURL(url)
    const eventData = {
      ...params,
      deep_link_url: url,
      is_initial_url: isInitialURL,
    }
    analytics().logEvent('deep_link_received', eventData)
  },
  deepLinkProcessed: (action: string, title: string, url: string) => {
    const params = getParamsFromURL(url)
    const eventData = {
      ...params,
      deep_link_url: url,
      action,
      title,
    }
    analytics().logEvent('deep_link_processed', eventData)
  },
  notificationOpened: (
    remoteMessage: FirebaseMessagingTypes.RemoteMessage,
    appStateOnReception: 'quit' | 'background' | 'open',
  ) => {
    const { title, body } = remoteMessage.notification
    const eventData = {
      title,
      body,
      app_state_on_reception: appStateOnReception,
      ...remoteMessage.data,
    }
    analytics().logEvent('notification_opened', eventData)
  },
}
