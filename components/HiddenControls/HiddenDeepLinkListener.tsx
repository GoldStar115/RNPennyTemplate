import * as React from 'react'
import { useEffect } from 'react'
import { Linking } from 'react-native'
import { DeepLinkListener } from '@services'
import { useNavigation } from '@react-navigation/native'

interface iUrlOpenEvent {
  url: string
}

export const HiddenDeepLinkListener = () => {
  const navigation = useNavigation()
  useEffect(() => {
    Linking.getInitialURL().then((initialUrl) =>
      DeepLinkListener.handleUrl(initialUrl, navigation, true),
    )
    const handler = (event: iUrlOpenEvent) =>
      DeepLinkListener.handleUrl(event.url, navigation, false)
    Linking.addEventListener('url', handler)
    return () => {
      Linking.removeEventListener('url', handler)
    }
  }, [])
  return <>{false && null}</>
}
