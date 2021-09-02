import styled from 'styled-components/native'
import { Text as NativeText } from 'react-native'
import { WhiteBodyText, PageHeader, Colors } from '@styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/Ionicons'

export const Text = styled(WhiteBodyText)`
  text-align: center;
  width: 75%;
  font-size: 16px;
`

export const PageTitle = styled(PageHeader)`
  text-align: center;
  width: 100%;
  justify-content: center;
  font-size: 40px;
`

export const SearchContainer = styled.View`
  margin-top: 0;
  padding: 8% 5% 3% 5%;
  height: 150px;
  justify-content: flex-start;
  background-color: ${Colors.mint};
`

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const SearchIcon = styled(Icon).attrs(() => ({
  size: 24,
  color: 'white',
  name: 'search',
}))`
  position: absolute;
  left: 10%;
  top: 30%;
  z-index: 999;
  opacity: 0.5;
`

export const SearchInput = styled.TextInput`
  background-color: ${Colors.darkGray};
  padding: 1%;
  height: 45px;
  padding-left: 15%;
  font-family: NoyhGeometric-Regular;
  border-radius: 50px;
  width: 90%;
  color: #fff;
  margin: 4% auto;
  font-size: 20px;
`

export const SearchResultsScroll = styled(KeyboardAwareScrollView)``

export const SearchResultsContainer = styled.View`
  padding-bottom: 20px;
`

export const ClearSearchButton = styled.TouchableOpacity``

export const ClearSearchContainer = styled.View`
  position: absolute;
  right: 10%;
  background-color: ${Colors.darkGray};
  border-radius: 10px;
  padding: 5px;
`

export const ClearSearchIcon = styled(Icon).attrs(() => ({
  size: 24,
  color: 'white',
  name: 'close',
}))``
