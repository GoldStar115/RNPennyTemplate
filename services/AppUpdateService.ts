import { Alert, BackHandler, Linking } from 'react-native'
import VersionCheck from 'react-native-version-check'

export const checkIfAppUpdateAvailable = async () => {
  try {
    const needUpdateResponse = await VersionCheck.needUpdate()
    if (needUpdateResponse?.isNeeded) {
      Alert.alert(
        'Update required',
        'We added some new features for you. Please update the app to access them.',
        [
          {
            text: 'Update',
            onPress: () => {
              BackHandler.exitApp()
              Linking.openURL(needUpdateResponse.storeUrl)
            },
          },
        ],
        { cancelable: false },
      )
    }
  } catch (error) {}
}
