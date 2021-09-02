import * as React from 'react'
import {
  OnBoardingScreen,
  PlayerScreen,
  SettingsScreen,
  AssureLoggedInScreen,
} from '@screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeTabNavigator } from './HomeTabNavigator'
import { useRef } from 'react'
import { Analytics } from '@services'

export type NavigationParamList = {
  OnBoarding: undefined
  Presenter: { id: string }
  Album: { id: string }
  Track: { id: string }
  ChatRoom: { id: string }
  Login: undefined
  Register: undefined
  Home: undefined
  Category: { id: string }
  Player: undefined
  Settings: undefined
  AssureLoggedIn: { forwardToRoute: string; forwardParams: object }
}

const Stack = createStackNavigator<NavigationParamList>()
const RootStack = createStackNavigator()

const MainStackScreen = () => (
  <Stack.Navigator headerMode={'none'}>
    <Stack.Screen name="Home" component={HomeTabNavigator} />
    <Stack.Screen
      name="OnBoarding"
      component={OnBoardingScreen}
      options={{ animationEnabled: false }}
    />
  </Stack.Navigator>
)

export const NavigationProvider = () => {
  const routeNameRef = useRef()
  const navigationRef = useRef()

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        // @ts-ignore: Object is possibly 'null'.
        (routeNameRef.current = navigationRef?.current?.getCurrentRoute().name)
      }
      onStateChange={() => {
        const previousRouteName = routeNameRef?.current
        // @ts-ignore: Object is possibly 'null'.
        const currentRoute = navigationRef?.current?.getCurrentRoute()
        if (previousRouteName !== currentRoute.name) {
          Analytics.logScreenView(currentRoute)
        }
        routeNameRef.current = currentRoute.name
      }}>
      <RootStack.Navigator headerMode={'none'} mode={'modal'}>
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="Player" component={PlayerScreen} />
        <RootStack.Screen name="Settings" component={SettingsScreen} />
        <RootStack.Screen
          name="AssureLoggedIn"
          component={AssureLoggedInScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
