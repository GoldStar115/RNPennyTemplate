import styled from 'styled-components/native'
import { Input as ElementsInput } from 'react-native-elements'
import { ResponsiveImageBackground } from '../components/ResponsiveImage'
import { SafeAreaView } from 'react-native'

export const Colors = {
  mint: '#5FE2AF',
  gray1: '#4f5351',
  darkGray: '#222',
}
export const ClearContainer = styled.View``

export const Container = styled.View`
  flex: 1;
  background-color: black;
`

export const ContainerMargin = styled(SafeAreaView)`
  margin: 10% 5%;
`

export const ContainerScrollMask = styled.ScrollView`
  flex: 1;
  background-color: black;
  color: white;
  height: 100%;
  overflow: scroll;
`
export const ContainerScroll = styled.ScrollView`
  flex: 1;
  background-color: black;
  height: 100%;
  overflow: scroll;
`

export const PrimaryButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.85,
}))`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3%;
  color: white;
  background-color: ${Colors.mint};
  border-radius: 25px;
  width: 80%;
  margin: 5% auto;
`

export const SecondaryButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 3%;
  background-color: white;
  width: 80%;
  border-radius: 25px;
  margin: 0 auto;
`
export const SecondaryButtonText = styled.Text`
  color: #000;
  font-family: NoyhGeometric-Bold;
  font-size: 24px;
  align-self: center;
  padding-top: 6px;
`
export const PrimaryButtonText = styled.Text`
  color: #000;
  font-size: 24px;

  font-family: NoyhGeometric-Bold;
  align-self: center;
  padding-top: 6px;
`

export const PageHeader = styled.Text`
  color: #000;
  font-size: 40px;
  font-family: NoyhGeometric-Bold;
`
export const FollowButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.85,
}))`
  flex-direction: row;
  justify-content: center;
  text-align: center;
  padding: 2% 5%;
  align-items: center;
  background-color: white;
  border-radius: 40px;
`
export const ListContainer = styled.View`
  width: 100%;
  border-top-color: #333;
  flex: 0.5;
`

export const ListItem = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #333;
  border-bottom-width: 1px;
`

export const Text = styled.Text`
  font-family: NoyhGeometric-Regular;
  color: white;
`

export const TextBold = styled.Text`
  font-family: NoyhGeometric-Bold;
  color: white;
`

export const Title = styled(Text)`
  font-size: 18px;
  font-family: NoyhGeometric-Bold;
`

export const H1 = styled(Text)`
  font-size: 28px;
  font-family: NoyhGeometric-Bold;
`
export const H2 = styled(Text)`
  font-size: 26px;
  font-family: NoyhGeometric-Bold;
`
export const H3 = styled(Text)`
  font-size: 24px;
  font-family: NoyhGeometric-Bold;
`
export const H4 = styled(Text)`
  font-size: 22px;
  font-family: NoyhGeometric-Bold;
`

export const WhiteBodyText = styled(Text)`
  font-family: NoyhGeometric-Regular;
  font-size: 18px;
`

export const WhiteSectionTitle = styled(Text)`
  font-size: 24px;
  font-family: NoyhGeometric-Bold;
`
export const WhiteContentTitle = styled(Text)`
  font-family: NoyhGeometric-Bold;
`
export const GreenPresenterText = styled.Text`
  color: ${Colors.mint};
  font-family: NoyhGeometric-Bold;
`
export const SmallContentInfo = styled(Text)`
  font-size: 16px;
  font-family: NoyhGeometric-Regular;
`

export const Touch = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.85,
}))``

export const GrayOverlay = styled.View`
  align-items: center;
  justify-content: flex-start;
  background-color: #161616;
  flex: 1;
  min-height: 400px;
  flex-direction: column;
  padding: 10% 5% 0 5%;
  top: 8%;
  z-index: 999;
  overflow: scroll;
  border-radius: 25px;
  box-shadow: 1px 2px 5px black;
`
export const GreenSmallHeading = styled.Text`
  width: 100%;
  font-size: 14px;
  color: ${Colors.mint};
  text-transform: uppercase;
  font-family: NoyhGeometric-Bold;
`

export const Logo = styled.Image`
  flex: 1;
  top: 0;
  resize-mode: contain;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
`

export const PhotoBackground = styled(ResponsiveImageBackground)`
  flex: 1;
  resize-mode: cover;
  position: absolute;
  height: 200px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const CategoryFeatureContainer = styled.View`
  flex: 2;
  width: 100%;
  position: relative;
  height: 100%;
`

export const CategoryListContainer = styled.View`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 10px;
  height: 100px;
`
export const ItemsRow = styled(ClearContainer)`
  flex-direction: row;
  position: relative;
  padding: 4% 2% 0 2%;
  align-items: center;
`

export const WhiteBackButton = styled.TouchableOpacity`
  color: #fff;
  font-family: NoyhGeometric-Regular;
  font-size: 24px;
  position: absolute;
  padding: 5%;
  top: 0;
  left: 5%;
  z-index: 9999;
  box-shadow: 1px 1px 3px black;
`

export const Input = styled(ElementsInput).attrs(() => ({
  inputStyle: { color: '#fff', marginLeft: 10 },
  placeholderTextColor: '#999',
}))``

export const DefaultMessageText = styled(WhiteBodyText)`
  text-align: center;
  width: 80%;
  font-size: 18px;
  margin: 2% auto;
`
export const DefaultMessageHeader = styled(WhiteSectionTitle)`
  text-align: center;
  width: 80%;
  font-size: 24px;
  margin: 2% auto;
`

export const Link = styled.Text`
  color: ${Colors.mint};
  text-decoration-line: underline;
`
