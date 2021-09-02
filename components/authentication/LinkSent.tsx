import { setAuthenticationState } from '@reducers'
import { localStorage } from '@state'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import {
  ButtonContainerLogout,
  BackButton,
  BackButtonText,
  AuthHeaderGreen,
  Text,
  FormContainer,
  LogoutContainer,
} from './styles'

export const LinkSent = () => {
  const dispatch = useDispatch()

  return (
    <LogoutContainer>
      <FormContainer>
        <AuthHeaderGreen>Link Sent</AuthHeaderGreen>
        <Text>
          We sent your login-link to{'\n'}{' '}
          <Text style={{ fontWeight: 'bold' }}>{localStorage.signInEmail}</Text>
          .
        </Text>
        <BackButton onPress={() => dispatch(setAuthenticationState('default'))}>
          <BackButtonText>I did not receive an email</BackButtonText>
        </BackButton>
      </FormContainer>
    </LogoutContainer>
  )
}
