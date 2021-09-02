import * as React from 'react'
import { useEffect } from 'react'
import messaging from '@react-native-firebase/messaging'
import { useNavigation } from '@react-navigation/native'
import { Analytics, handleNotificationAction } from '@services'

const setupMessaging = async () => {
  await messaging().requestPermission()
  const token = await messaging().getToken()
  console.log('FCM Messaging device token: ', { token })
  messaging().subscribeToTopic('all')
}

const listenToNotificationEvents = async (navigation: any) => {
  messaging().onMessage((remoteMessage) => {
    console.log('Remote notification received', { remoteMessage })
    Analytics.notificationOpened(remoteMessage, 'open')
  })

  messaging().onNotificationOpenedApp((remoteMessage) => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
      remoteMessage.data,
    )
    Analytics.notificationOpened(remoteMessage, 'background')
    handleNotificationAction(remoteMessage, navigation)
  })

  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log(
      'Notification caused app to open from background message handler:',
      remoteMessage.notification,
      remoteMessage.data,
    )
    Analytics.notificationOpened(remoteMessage, 'background')
    handleNotificationAction(remoteMessage, navigation)
  })

  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
          remoteMessage.data,
        )
        Analytics.notificationOpened(remoteMessage, 'quit')
        handleNotificationAction(remoteMessage, navigation)
      }
    })
}

export const HiddenMessagingTokenListener = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setupMessaging()
    listenToNotificationEvents(navigation)
  }, [])
  return <>{false && null}</>
}
