import { FirebaseAuthTypes } from '@react-native-firebase/auth'

export interface iAuthenticationProvider {
  setup(): Function
  login(
    email?: string,
    password?: string,
  ): Promise<FirebaseAuthTypes.UserCredential>
  sendSignInLink?(email?: string): Promise<void>
  signInWithLink?(
    email: string,
    link: string,
  ): Promise<FirebaseAuthTypes.UserCredential>
  logout?(): void
}

export interface iAuthenticationService {
  setup(): Function
  logout(): void
  getErrorMessage(error: any): string
  email: iAuthenticationProvider
  facebook: iAuthenticationProvider
  google: iAuthenticationProvider
  apple: iAuthenticationProvider
}
