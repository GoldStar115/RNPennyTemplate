import { getAuthenticationState } from '@selectors'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { ErrorValidatingEmailLink } from './ErrorValidatingEmailLink'
import { LinkSent } from './LinkSent'
import { LoginControls } from './LoginControls'
import { ValidatingEmailLink } from './ValidatingEmailLink'

export const AuthControls = () => {
  const authenticationState = useSelector(getAuthenticationState())
  return (
    <>
      {authenticationState === 'default' && <LoginControls />}
      {authenticationState === 'linkSent' && <LinkSent />}
      {authenticationState === 'validatingEmailLink' && <ValidatingEmailLink />}
      {authenticationState === 'errorValidatingEmailLink' && (
        <ErrorValidatingEmailLink />
      )}
    </>
  )
}
