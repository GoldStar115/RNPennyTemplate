import * as React from 'react'
import { SettingsContainer, SettingsInfoContainer, Text, SectionTitle, CloseContainer,PageTitle } from './styles'
import { Title, Container } from '@styles'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

export function SettingsScreen() {
  const navigation = useNavigation()
  return (
    <Container>
    <LinearGradient
      colors={['rgba(	0, 0, 0, .7)',  'rgba(0, 0, 0, 1)']}
      locations={[0.0, 0.9]}
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <SettingsContainer>
      <Icon name="settings-sharp" size={45} color="#000" />
      <PageTitle>
       Settings</PageTitle>
        <CloseContainer onPress={navigation.goBack}>
          <Icon name="close-outline" color="#000" size={40} />
        </CloseContainer>
      </SettingsContainer>
      <SettingsInfoContainer>
      <SectionTitle>Welcome, [Username] </SectionTitle>
      <Button title="Log in" onPress={() => navigation.navigate('Login')} />
      </SettingsInfoContainer>
      </LinearGradient>
    </Container>
  )
} 
