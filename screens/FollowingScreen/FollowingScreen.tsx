import * as React from 'react'
import { Container, DefaultMessageText } from '@styles'
import { PageTitle, FeedContainer, RainbowIcon, CloseContainer } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'
import { FollowingListItem } from '@components'
import { potofgold } from '../../image'
import Icon from 'react-native-vector-icons/Ionicons'
import { getFollowedItems } from '@selectors'

export const FollowingScreen = () => {
  const navigation = useNavigation()
  const follwedItems = useSelector(getFollowedItems())
  const itemsFollowd = useSelector(getFollowedItems())

  return (
    <Container>
      <LinearGradient
        colors={['rgba(	0, 0, 0, .7)', 'rgba(0, 0, 0, .9)', 'rgba(0, 0, 0, 1)']}
        locations={[0.0, 0.8, 0.9]}
        style={{ flex: 1 }}>
        <FeedContainer>
          <RainbowIcon source={potofgold}></RainbowIcon>
          <PageTitle>FOLLOWING</PageTitle>
          <CloseContainer onPress={navigation.goBack}>
            <Icon name="close-outline" color="#000" size={40} />
          </CloseContainer>
        </FeedContainer>
        <ScrollView style={{ flex: 1 }}>
          <Container style={{ padding: '5%' }}>
            {itemsFollowd?.length === 0 && (
              <DefaultMessageText style={{ width: '80%' }}>
                You can edit the Presenters and Categories you follow here.
              </DefaultMessageText>
            )}
            {follwedItems.map((followItem) => (
              <FollowingListItem
                key={followItem.contentId}
                followItem={followItem}
            
              />
            ))}
          </Container>
        </ScrollView>
      </LinearGradient>
    </Container>
  )
}
