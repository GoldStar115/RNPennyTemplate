import * as React from 'react'
import { Colors } from '@styles'
import { SocialIcons, GoogleIcon} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AuthenticationService } from '@services'
import { ActivityIndicator, Platform } from 'react-native'
import { useState } from 'react'

export const SocialLoginControls = () => {
  const [loading, setLoading] = useState(false)

  const wrapAuthLoading = async (call: Function) => {
    setLoading(true)
    try {
      await call()
    } catch (error) {
      console.log('error on auth', error)
      setLoading(false)
    }
  }

  const facebookLogin = async () => {
    wrapAuthLoading(AuthenticationService.facebook.login)
  }

  const googleLogin = async () => {
    wrapAuthLoading(AuthenticationService.google.login)
  }

  const appleLogin = async () => {
    wrapAuthLoading(AuthenticationService.apple.login)
  }

  return (
    <>
      {loading && <ActivityIndicator />}
      {!loading && (
        <SocialIcons>
          <GoogleIcon onPress={googleLogin}>
          <Icon name="google" size={22} color={'black'}  />
          </GoogleIcon>
          <GoogleIcon  onPress={facebookLogin}>
          <Icon
            name="facebook"
            size={22}
            color={'black'}
           
          />
          </GoogleIcon>
          {Platform.OS === 'ios' && (
            <GoogleIcon onPress={appleLogin}>
            <Icon name="apple" size={22} color={'black'}  />
            </GoogleIcon>
          )}
        </SocialIcons>
      )}
    </>
  )
}
