import auth from '@react-native-firebase/auth'
import { store } from '@state'
import {
  login as loginAction,
  logout as logoutAction,
  hideLoggedInModal,
} from '@reducers'
import { FacebookAuthentication } from './FacebookAuthentication'
import { EmailAuthentication } from './EmailAuthentication'
import { GoogleAuthentication } from './GoogleAuthentication'
import { AppleAuthentication } from './AppleAuthentication'
import { iAuthenticationService } from './types'
import { subscribeToUserData, unsubscribeFromUserData } from '@firestore'
import { getUser } from '@selectors'
import { Analytics } from '../Analytics'
import { iState } from '@types'

function onAuthStateChanged(user: any) {
  if (user && !user.isAnonymous) {
    const state: iState = store.getState()
    const userOnStore = getUser()(state)
    const provider =
      user.providerData &&
      user.providerData[0] &&
      user.providerData[0]['providerId']
    if (!userOnStore || (userOnStore && user.uid !== userOnStore.id)) {
      const params = {
        id: user.uid,
        email: user.email,
        name: user.displayName,
        providerId: provider,
      }
      console.log('auth state changed', params)
      store.dispatch(loginAction(params))
      setTimeout(() => store.dispatch(hideLoggedInModal()), 2000)
      subscribeToUserData(user.uid)
      Analytics.signIn({
        lastEventBeforeLogin: state.ui.lastEventBeforeLogin,
        provider,
      })
    }
  } else {
    if (store.getState().user) {
      store.dispatch(logoutAction())
      unsubscribeFromUserData()
    }
  }
}

const subscribeToAuthenticationUpdates = () => {
  const subscription = auth().onAuthStateChanged(onAuthStateChanged)
  return subscription
}

const setup = () => {
  const authenticationUpdateSubscription = subscribeToAuthenticationUpdates()
  const googleAuthenticationSubscription = GoogleAuthentication.setup()
  const facebookAuthenticationSubscription = FacebookAuthentication.setup()
  const appleAuthenticationSubscription = AppleAuthentication.setup()
  return () => {
    authenticationUpdateSubscription()
    googleAuthenticationSubscription()
    facebookAuthenticationSubscription()
    appleAuthenticationSubscription()
  }
}

const getErrorMessage = (error: any): string => {
  return error?.nativeErrorMessage
}

const logout = () => {
  unsubscribeFromUserData()
  auth().signOut()
  store.dispatch(logoutAction())
  Analytics.signOut()
}

export const AuthenticationService: iAuthenticationService = {
  setup,
  logout,
  getErrorMessage,
  email: EmailAuthentication,
  facebook: FacebookAuthentication,
  google: GoogleAuthentication,
  apple: AppleAuthentication,
}
