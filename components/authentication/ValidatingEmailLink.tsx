import * as React from 'react'
import { setAuthenticationState } from '@reducers'
import { ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux'
import {
  BackButton,
  BackButtonText,
  AuthHeaderGreen,
  FormContainer,
  LogoutContainer
} from './styles'

export const ValidatingEmailLink = () => {
  const dispatch = useDispatch()

  return (
    <LogoutContainer>
     <FormContainer>
      <AuthHeaderGreen>Logging you in..</AuthHeaderGreen>
      <ActivityIndicator size="large" color={'white'} />
     
        <BackButton onPress={() => dispatch(setAuthenticationState('default'))}>
          <BackButtonText>Back to the login form</BackButtonText>
        </BackButton>
     
      </FormContainer>
      
    </LogoutContainer>
  )
}
