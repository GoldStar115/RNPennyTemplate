import { iAuthenticationProvider } from './types'
import { GoogleSignin } from 'react-native-google-signin'
import auth from '@react-native-firebase/auth'
import { Config } from '../Config'

const setup = () => {
  GoogleSignin.configure({
    scopes: ['email', 'profile'],
    webClientId: Config.auth.googleClientId,
  })
  return () => {}
}

const login = async () => {
  const { idToken } = await GoogleSignin.signIn()
  const googleCredential = auth.GoogleAuthProvider.credential(idToken)
  return auth().signInWithCredential(googleCredential)
}

export const GoogleAuthentication: iAuthenticationProvider = {
  setup,
  login,
  logout: () => {},
}
