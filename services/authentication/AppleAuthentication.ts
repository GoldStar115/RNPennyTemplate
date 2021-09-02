import { iAuthenticationProvider } from './types'
import auth from '@react-native-firebase/auth'
import appleAuth, {
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
} from '@invertase/react-native-apple-authentication'

const setup = () => {
  return () => {}
}

const login = async () => {
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: AppleAuthRequestOperation.LOGIN,
    requestedScopes: [
      AppleAuthRequestScope.EMAIL,
      AppleAuthRequestScope.FULL_NAME,
    ],
  })

  // Ensure Apple returned a user identityToken
  if (!appleAuthRequestResponse.identityToken) {
    throw 'Apple Sign-In failed - no identify token returned'
  }

  // Create a Firebase credential from the response
  const { identityToken, nonce } = appleAuthRequestResponse
  const appleCredential = auth.AppleAuthProvider.credential(
    identityToken,
    nonce,
  )

  // Sign the user in with the credential
  return auth().signInWithCredential(appleCredential)
}

export const AppleAuthentication: iAuthenticationProvider = {
  setup,
  login,
  logout: () => {},
}
