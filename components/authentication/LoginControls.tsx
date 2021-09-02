import * as React from 'react'
import { WhiteBodyText, WhiteSectionTitle } from '@styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  ButtonContainer,
  FormContainer,
  BackButton,
  BackButtonText,
  AuthHeaderGreen,
  Text,
  LoginContentContainer,
} from './styles'

import { Input } from '@styles'
import { ActivityIndicator, Linking } from 'react-native'
import { useState } from 'react'
import { AuthenticationService } from '@services'
import { SocialLoginControls } from './SocialLoginControls'
import { setAuthenticationState } from '@reducers'
import { useDispatch } from 'react-redux'
import { localStorage, setLocalStorageValue } from '@state'
import { About } from '../About'
import { Analytics } from '@services'
import { Btn } from '../Btn'

export const LoginControls = () => {
  const [email, setEmail] = useState(localStorage.signInEmail || '')
  const [error, setError] = useState('')
  const [isRegister, setIsRegister] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const authenticate = () => {
    setIsLoading(true)
    AuthenticationService.email
      .sendSignInLink(email)
      .then(() => {
        setIsLoading(false)
        setLocalStorageValue({ signInEmail: email })
        dispatch(setAuthenticationState('linkSent'))
        Analytics.sendSignInLink()
      })
      .catch((loginError: Error) => {
        setError(loginError.toString())
        setIsLoading(false)
        console.error(loginError)
      })
  }
  return (
    <LoginContentContainer>
      <AuthHeaderGreen>
        Sign {isRegister ? 'Up For' : 'into'} Your {'\n'}Penny Account
      </AuthHeaderGreen>
      <Text>You are moments away from mastering your money.</Text>
      <FormContainer>
        <Input
          placeholder="Enter Email"
          leftIcon={<Icon name="envelope" size={16} color="white" />}
          value={email}
          onChangeText={setEmail}
        />

        {!!error && <Text>{error}</Text>}
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Btn
            primary
            disabled={email.length <= 3}
            style={{ marginTop: 0 }}
            onPress={authenticate}
            caption={isRegister ? 'Sign Up' : 'Login'}
          />
        )}
        <WhiteBodyText style={{ textAlign: 'center' }}>
          Quick Sign {isRegister ? 'Up' : 'In'}
        </WhiteBodyText>
        <SocialLoginControls />
      </FormContainer>
      <ButtonContainer>
        <WhiteSectionTitle style={{ textAlign: 'center', fontSize: 20 }}>
          {isRegister ? 'Already have an account' : 'Need an account'}?
        </WhiteSectionTitle>
        <BackButton onPress={() => setIsRegister(!isRegister)}>
          <BackButtonText>
            {isRegister ? 'go to log in' : 'sign up for free'}
          </BackButtonText>
        </BackButton>
      </ButtonContainer>
      <About />
    </LoginContentContainer>
  )
}
