import { localStorage } from '@state'
import { URL } from 'react-native-url-polyfill'
import { EmailAuthentication } from './authentication/EmailAuthentication'
import { store } from '@state'
import { setAuthenticationState, showWelcomeToPremiumModal } from '@reducers'
import { Analytics } from './Analytics'
import { getPresenter, getAlbum } from '@selectors'
import { Categories } from '@types'
import { getParamsFromURL } from '@lib'
import auth from '@react-native-firebase/auth'

const handlePresenterLink = (link: string, navigation: any) => {
  const match = link.match(/^penny:\/\/presenters\/(\w+)$/i)
  if (match) {
    navigation.navigate('Presenter', { id: match[1] })
    return true
  }
}

const handleAlbumLink = (link: string, navigation: any) => {
  const match = link.match(/^penny:\/\/albums\/(\w+)$/i)
  if (match) {
    navigation.navigate('Album', { id: match[1] })
    return true
  }
}

const handleCategoryLink = (link: string, navigation: any) => {
  const match = link.match(/^penny:\/\/categories\/(\w+)$/i)
  if (match) {
    navigation.navigate('Album', { id: match[1] })
    return true
  }
}

const handleAuthLink = async (link: string) => {
  if (link) {
    const url = new URL(link)
    const signInLink = url.searchParams.get('link')
    try {
      const user = await EmailAuthentication.signInWithLink(
        localStorage.signInEmail,
        signInLink,
      )
      store.dispatch(setAuthenticationState('default'))
      return true
    } catch (error) {
      store.dispatch(setAuthenticationState('errorValidatingEmailLink'))
      console.log('error authenticating via email link')
      console.log(error)
    }
  }
}

const handleContentLink = (link: string, navigation: any) => {
  const match = link.match(/^https?:\/\/pennyfm\.page\.link\/content/i)
  console.log('link is', link)
  if (match) {
    const params = getParamsFromURL(link)
    if (params.authToken) {
      auth().signInWithCustomToken(params.authToken)
    }
    const { id, type } = params
    if (type) {
      switch (type) {
        case 'album':
          const album = getAlbum(id)(store.getState())
          if (album) {
            navigation.navigate('Album', { id })
            Analytics.deepLinkProcessed(
              'Album screen opened',
              album.title,
              link,
            )
          } else {
            Analytics.deepLinkProcessed(
              'Album not found',
              `id not found ${id}`,
              link,
            )
          }
          break
        case 'presenter':
          const presenter = getPresenter(id)(store.getState())
          if (presenter) {
            navigation.navigate('Presenter', { id })
            Analytics.deepLinkProcessed(
              'Presenter',
              `${presenter.firstName} ${presenter.lastName}`,
              link,
            )
          } else {
            Analytics.deepLinkProcessed(
              'Presenter screen opened',
              `id not found ${id}`,
              link,
            )
          }
          break
        case 'welcomeToPremium':
          store.dispatch(showWelcomeToPremiumModal())
          navigation.navigate('Journeys', { id })
          Analytics.deepLinkProcessed(
            'First open after premium subscription',
            ``,
            link,
          )
          break
        case 'category':
          const category = Categories[id]
          if (category) {
            navigation.navigate('Category', { id })
            Analytics.deepLinkProcessed(
              'Category screen opened',
              category.label,
              link,
            )
          } else {
            Analytics.deepLinkProcessed(
              'Category not found',
              `id not found ${id}`,
              link,
            )
          }
          break
      }
      console.log('DeepLink: content link')
      return true
    }
  }
}

export const DeepLinkListener = {
  handleUrl: async (
    linkUrl: string,
    navigation: any,
    isInitialURL: boolean,
  ) => {
    if (!linkUrl) return
    Analytics.deepLinkReceived(linkUrl, isInitialURL)
    if (handlePresenterLink(linkUrl, navigation)) return
    if (handleAlbumLink(linkUrl, navigation)) return
    if (handleCategoryLink(linkUrl, navigation)) return
    if (handleContentLink(linkUrl, navigation)) return
    if (await handleAuthLink(linkUrl)) return
  },
}
