import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import {
  DiscoverScreen,
  SearchScreen,
  FeedScreen,
  CategoryScreen,
  PresenterScreen,
  AlbumScreen,
  TrackScreen,
  FollowingScreen,
  LoginModal,
  LoggedInModal,
  PlayerModal,
  WelcomeToPremiumModal,
  JourneyListScreen,
  RoomListScreen,
  RoomScreen,
  CreateRoomScreen,
} from '@screens'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '@styles'
import {
  MainTabBar,
  HiddenAudioPlayer,
  HiddenConfiguration,
  HiddenDeepLinkListener,
  HiddenMessagingTokenListener,
  HiddenAppUpdateWatcher,
} from '@components'
import { useSelector, useDispatch } from 'react-redux'
import {
  getIsLoginModalVisible,
  getIsLoggedInModalVisible,
  getIsPlayerModalVisible,
  getIsWelcomeToPremiumModalVisible,
} from '@selectors'
import { hideModals } from '@reducers'
import { StatusBar } from 'react-native'
import { Config } from '@services'

const Tab = createBottomTabNavigator()

const DiscoverStack = createStackNavigator()
const DiscoverStackScreen = () => (
  <DiscoverStack.Navigator headerMode="none" mode={'card'}>
    <DiscoverStack.Screen name="Discover" component={DiscoverScreen} />
    <DiscoverStack.Screen name="Category" component={CategoryScreen} />
    <DiscoverStack.Screen name="Presenter" component={PresenterScreen} />
    <DiscoverStack.Screen name="Album" component={AlbumScreen} />
    <DiscoverStack.Screen name="Track" component={TrackScreen} />
  </DiscoverStack.Navigator>
)

const SearchStack = createStackNavigator()
const SearchStackScreen = () => (
  <SearchStack.Navigator headerMode="none" mode={'card'}>
    <SearchStack.Screen name="Search" component={SearchScreen} />
    <SearchStack.Screen name="Presenter" component={PresenterScreen} />
    <SearchStack.Screen name="Album" component={AlbumScreen} />
  </SearchStack.Navigator>
)

const FeedStack = createStackNavigator()
const FeedStackScreen = () => (
  <FeedStack.Navigator headerMode="none" mode={'card'}>
    <FeedStack.Screen name="Feed" component={FeedScreen} />
    <FeedStack.Screen name="Following" component={FollowingScreen} />
    <FeedStack.Screen name="Presenter" component={PresenterScreen} />
    <FeedStack.Screen name="Category" component={CategoryScreen} />
    <FeedStack.Screen name="Album" component={AlbumScreen} />
  </FeedStack.Navigator>
)

const JourneyStack = createStackNavigator()
const JourneyStackScreen = () => (
  <JourneyStack.Navigator headerMode="none" mode={'card'}>
    <JourneyStack.Screen name="Journeys" component={JourneyListScreen} />
  </JourneyStack.Navigator>
)

const ChatStack = createStackNavigator()
const ChatStackScreen = () => (
  <ChatStack.Navigator headerMode="none" mode={'card'}>
    <ChatStack.Screen name="ChatRoomList" component={RoomListScreen} />
    <ChatStack.Screen name="ChatRoom" component={RoomScreen} />
    <ChatStack.Screen name="CreateRoom" component={CreateRoomScreen} />
  </ChatStack.Navigator>
)

export const HomeTabNavigator = () => {
  const isLoginModalVisible = useSelector(getIsLoginModalVisible())
  const isLoggedInModalVisible = useSelector(getIsLoggedInModalVisible())
  const isPlayerModalVisible = useSelector(getIsPlayerModalVisible())
  const isWelcomeToPremiumModalVisible = useSelector(
    getIsWelcomeToPremiumModalVisible(),
  )

  const dispatch = useDispatch()
  return (
    <>
      <Tab.Navigator
        initialRouteName="Chat"
        tabBar={(props) => <MainTabBar {...props} />}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons: any = {
              Discover: 'headphones',
              Search: 'search',
              Feed: 'align-left',
              Journeys: 'paperclip',
              Chat: 'message-circle',
            }
            const activeIcon = icons[route.name]
            return <Icon name={activeIcon} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.mint,
          inactiveTintColor: 'gray',
          showLabel: false,
          style: {
            backgroundColor: Colors.darkGray,
          },
        }}>
        <Tab.Screen name="Discover" component={DiscoverStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        {Config.features.showChat && (
          <Tab.Screen name="Chat" component={ChatStackScreen} />
        )}
        <Tab.Screen name="Feed" component={FeedStackScreen} />
        {Config.features.showJourneys && (
          <Tab.Screen name="Journeys" component={JourneyStackScreen} />
        )}
      </Tab.Navigator>
      <StatusBar hidden={true} />
      <HiddenAudioPlayer />
      <HiddenConfiguration />
      <HiddenDeepLinkListener />
      <HiddenMessagingTokenListener />
      <HiddenAppUpdateWatcher />
      <LoginModal
        isVisible={isLoginModalVisible}
        hideModal={() => dispatch(hideModals())}
      />
      <LoggedInModal
        isVisible={isLoggedInModalVisible}
        hideModal={() => dispatch(hideModals())}
      />
      <PlayerModal
        isVisible={isPlayerModalVisible}
        hideModal={() => dispatch(hideModals())}
      />
      <WelcomeToPremiumModal
        isVisible={isWelcomeToPremiumModalVisible}
        hideModal={() => dispatch(hideModals())}
      />
    </>
  )
}
