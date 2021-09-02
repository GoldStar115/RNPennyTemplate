import * as React from 'react'
import {
  Container,
  Colors,
  ClearContainer,
  DefaultMessageHeader,
  DefaultMessageText,
} from '@styles'
import {
  PageTitle,
  FeedTabs,
  FeedContainer,
  FeedTab,
  TabText,
  TabContainer,
  DefaultFeedCTA,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import FollowIcon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler'
import { FeedListItem, FollowingListItem } from '@components'
import { useState } from 'react'
import { getFeed, getFollowedItems } from '@selectors'

type tTabs = 'all' | 'following'

export const FeedScreen = () => {
  const navigation = useNavigation()
  const itemsFollowed = useSelector(getFollowedItems())
  const follwedItems = useSelector(getFollowedItems())
  const feed = useSelector(getFeed())
  const [activeTab, setActiveTab] = useState<tTabs>('all')
  return (
    <Container>
      <>
        <FeedContainer>
          <PageTitle>YOUR FEED</PageTitle>
        </FeedContainer>
        <FeedTabs>
          <FeedTab onPress={() => setActiveTab('all')}>
            <TabContainer active={activeTab === 'all'}>
              <TabText> Feed</TabText>
            </TabContainer>
          </FeedTab>
          <FeedTab onPress={() => setActiveTab('following')}>
            <TabContainer active={activeTab === 'following'}>
              <TabText>Following</TabText>
            </TabContainer>
          </FeedTab>
        </FeedTabs>
        <LinearGradient
          colors={['rgba(	0, 0, 0, .7)', 'rgba(0, 0, 0, 1)']}
          locations={[0.0, 0.9]}
          style={{ flex: 1 }}>
          {activeTab === 'all' && (
            <ScrollView style={{ flex: 1, height: '100%' }}>
              {feed.map((album) => (
                <FeedListItem key={album.id} album={album} />
              ))}
            </ScrollView>
          )}
          {activeTab === 'following' && (
            <ScrollView style={{ flex: 1, height: '100%' }}>
              {follwedItems.map((followItem) => (
                <FollowingListItem
                  key={followItem.contentId}
                  followItem={followItem}
                />
              ))}
              {itemsFollowed?.length === 0 && (
                <ClearContainer>
                  <FollowIcon
                    name="paper-plane"
                    style={{
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      padding: '5%',
                    }}
                    size={32}
                    color={Colors.mint}
                  />

                  <DefaultMessageHeader>
                    You don't follow any Penny Presenters or Categories.
                  </DefaultMessageHeader>
                  <DefaultMessageText>
                    Tap the headphones icon to follow presenters or topics to
                    customize what you want to hear most.
                  </DefaultMessageText>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Discover')}>
                    <DefaultFeedCTA>Explore More Categories</DefaultFeedCTA>
                  </TouchableOpacity>
                </ClearContainer>
              )}
            </ScrollView>
          )}
        </LinearGradient>
      </>
    </Container>
  )
}
