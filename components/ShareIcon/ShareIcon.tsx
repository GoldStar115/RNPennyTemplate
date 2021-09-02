import * as React from 'react'

import { Platform } from 'react-native'
import { IconProps } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/Ionicons'

interface ShareIconProps extends Omit<IconProps, 'name'> {}

export const ShareIcon = (props: ShareIconProps) => {
  const iconName = Platform.OS == 'ios' ? 'share-outline' : 'share-social'
  return <Icon name={iconName} {...props} />
}
