import * as React from 'react'
import { getUser } from '@selectors'
import { useSelector, useDispatch } from 'react-redux'

import {
  SectionTitle,
  AuthHeaderGreen,
  Text,
  LogoutContainer,
  LogoutContent,
} from './styles'
import { AuthenticationService } from '@services'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { hideModals } from '@reducers'
import { About } from '../About'
import { Btn } from '../Btn'

export const LogoutControls = () => {
  const user = useSelector(getUser())
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  return (
    <LogoutContainer>
      <LogoutContent>
        <AuthHeaderGreen>Welcome</AuthHeaderGreen>
        <SectionTitle>{user.name || user.email}!</SectionTitle>
        <Text>Thanks for signing into your account with Penny!</Text>
        <Btn
          primary
          onPress={() => {
            navigation.navigate('Discover')
            dispatch(hideModals())
          }}
          caption={'Explore'}
        />

        <Btn
          onPress={() => {
            AuthenticationService.logout()
          }}
          caption={'Log Out'}
        />
      </LogoutContent>
      <About />
    </LogoutContainer>
  )
}
