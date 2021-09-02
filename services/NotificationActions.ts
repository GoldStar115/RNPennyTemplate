import { FirebaseMessagingTypes } from '@react-native-firebase/messaging'

interface iNotificationData {
  action?: 'open_screen'
  content_type?: 'album' | 'presenter' | 'category'
  content_id?: string
}

export const handleNotificationAction = (
  notification: FirebaseMessagingTypes.RemoteMessage,
  navigation: any,
) => {
  const data = notification.data as iNotificationData
  const { action, content_type, content_id } = data
  switch (action) {
    case 'open_screen':
      switch (content_type) {
        case 'album':
          navigation.navigate('Album', { id: content_id })
          break
        case 'presenter':
          navigation.navigate('Presenter', { id: content_id })
          break
        case 'category':
          navigation.navigate('Category', { id: content_id })
          break
      }
      break
  }
}
