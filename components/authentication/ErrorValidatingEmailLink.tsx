import * as React from 'react'
import { setAuthenticationState } from '@reducers'
import { useDispatch } from 'react-redux'
import {
  ButtonContainer,
  BackButton,
  BackButtonText,
  AuthHeaderGreen,
  Text,
  FormContainer, LoginContentContainer
} from './styles'

export const ErrorValidatingEmailLink = () => {
  const dispatch = useDispatch()

  return (
    <LoginContentContainer>
       <FormContainer>
      <AuthHeaderGreen>Error logging you in</AuthHeaderGreen>
      <Text>
        The login link you sent is either expired or has already been used.
      </Text>
      <BackButton
          onPress={() => {
            dispatch(setAuthenticationState('default'))
          }}>
          <BackButtonText>Resend authentication link</BackButtonText>
        </BackButton>
        </FormContainer>
      
    </LoginContentContainer>
  )
}
