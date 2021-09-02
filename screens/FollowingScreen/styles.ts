import styled from 'styled-components/native'
import { Text as NativeText } from 'react-native'
import { WhiteSectionTitle, WhiteBodyText, PageHeader, Colors } from '@styles'

export const FeedTitle = styled(WhiteSectionTitle)`
  text-align: left;
  width: 100%;
  font-size: 24px;
`
export const RainbowIcon = styled.Image`
  width: 50px;
  height: 50px;
  margin: 1%;
`
export const CloseContainer = styled.TouchableOpacity`
  padding: 5% 5% 0 5%;
  position: absolute;
  right: 8%;
  top: 30%;
`
export const Text = styled(WhiteBodyText)`
  text-align: center;
  width: 75%;
  font-size: 16px;
`
export const FeedContainer = styled.View`
  margin-top: 0;
  padding: 15% 5% 0% 10%;
  flex: 0.15;
  flex-direction: row;
  background-color: ${Colors.mint};
  box-shadow: 1px 1px 3px ${Colors.darkGray};
`
export const FeedTabs = styled.View`
  padding: 0%;
  flex: 0.1;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  background-color: ${Colors.mint};
`
export const TabTitle = styled.Text`
  text-align: center;
  width: 100%;
  padding-bottom: 15px;
  font-size: 18px;
  text-transform: uppercase;
`
export const PageTitle = styled(PageHeader)`
  text-align: left;
  font-size: 40px;
  margin-top: 2%;
  padding-left: 2%;
`
export const ActiveTab = styled.TouchableOpacity`
  text-align: center;
  font-family: NoyhGeometric-Bold;
  width: 50%;
  opacity: 1;
  border-bottom-color: white;
  border-bottom-width: 5px;
`
export const InactiveTab = styled.TouchableOpacity`
  text-align: center;
  width: 50%;
  opacity: 0.5;
  border-bottom-color: transparent;
  border-bottom-width: 5px;
`
export const FeedPlayButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4%;
  color: black;
  background-color: white;
  border-radius: 25px;
  width: 30%;
  margin: 4% auto;
`
