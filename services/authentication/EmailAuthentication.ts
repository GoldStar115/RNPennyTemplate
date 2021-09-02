import auth from '@react-native-firebase/auth'
import { iAuthenticationProvider } from './types'
import { store } from '@state'
import { setAuthenticationState } from '@reducers'

export const EmailAuthentication: iAuthenticationProvider = {
  setup: () => () => {},
  login: (email: string, password: string) => {
    return auth().signInWithEmailAndPassword(email, password)
  },
  signInWithLink: (email: string, link: string) => {
    if (auth().isSignInWithEmailLink(link)) {
      store.dispatch(setAuthenticationState('validatingEmailLink'))
      console.log('is valid signin with email link', { email, link })
      return auth().signInWithEmailLink(email, link)
    } else {
      console.log('NOT A VALiD LINK!')
    }
  },
  sendSignInLink: (email: string) => {
    const actionCodeSettings = {
      handleCodeInApp: true,
      url: 'https://pennyfm.page.link/activate',
      android: {
        installApp: true,
        packageName: 'fm.penny',
        minimumVersion: '1',
      },
      iOS: {
        bundleId: 'fm.penny.app',
      },
    }
    return auth().sendSignInLinkToEmail(email, actionCodeSettings)
  },
  logout: () => {},
}
