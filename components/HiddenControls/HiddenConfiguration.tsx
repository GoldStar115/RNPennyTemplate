import * as React from 'react'
import { useEffect } from 'react'
import { AuthenticationService } from '@services'

export const HiddenConfiguration = () => {
  useEffect(() => {
    const subscription = AuthenticationService.setup()
    return () => {
      subscription()
    }
  }, [])
  return <>{false && null}</>
}
