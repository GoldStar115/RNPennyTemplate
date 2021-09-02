import * as React from 'react'

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Container, ContainerScroll, H1 } from '@styles'
import { NavigationParamList } from '@navigation'
import { getIsUserLoggedIn, getUser } from '@selectors'
import { useSelector } from 'react-redux'
import { AuthControls } from '@components'

export const AssureLoggedInScreen = () => {
  const route = useRoute<RouteProp<NavigationParamList, 'AssureLoggedIn'>>()
  const { forwardToRoute, forwardParams } = route.params
  const nav = useNavigation()
  const isUserLoggedIn = useSelector(getIsUserLoggedIn())
  if (isUserLoggedIn) {
    nav.navigate(forwardToRoute, forwardParams)
  }

  return (
    <Container>
      <AuthControls />
    </Container>
  )
}
