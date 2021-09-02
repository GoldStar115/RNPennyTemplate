import {
  LoginManager as FacebookLoginManager,
  AccessToken as FacebookAccessToken,
} from 'react-native-fbsdk'
import auth from '@react-native-firebase/auth'

const login = async () => {
  const result = await FacebookLoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ])

  if (result.isCancelled) {
    throw 'User cancelled the login process'
  }

  // Once signed in, get the users AccessToken
  const data = await FacebookAccessToken.getCurrentAccessToken()

  if (!data) {
    throw 'Something went wrong obtaining access token'
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  )

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential)
}

export const FacebookAuthentication = {
  setup: () => () => {},
  login,
  logout: () => {},
}
