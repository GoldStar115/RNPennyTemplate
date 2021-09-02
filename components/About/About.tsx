import { Link } from '@styles'
import * as React from 'react'
import { Linking } from 'react-native'
import { AboutContainer, VersionInfo } from './styles'
import DeviceInfo from 'react-native-device-info'

export const About = () => (
  <AboutContainer>
    <VersionInfo>
      Version {DeviceInfo.getVersion()}.{DeviceInfo.getBuildNumber()} -{' '}
    </VersionInfo>
    <Link onPress={() => Linking.openURL('http://www.penny.fm/privacy-policy')}>
      Privacy Policy
    </Link>
  </AboutContainer>
)
