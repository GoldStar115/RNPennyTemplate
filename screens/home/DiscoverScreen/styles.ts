import styled from 'styled-components/native'
import {
  GreenSmallHeading,
  WhiteSectionTitle,
  WhiteBodyText,
  Colors,
} from '@styles'

export const Title = styled(WhiteSectionTitle)`
  display: flex;
  color: #fff;
  width: 100%;
  padding-left: 5%;
  font-size: 24px;
`
export const PageTitle = styled(WhiteSectionTitle)`
  padding-left: 3%;
  font-size: 28px;
`
export const Text = styled(WhiteBodyText)`
  text-align: center;
  width: 75%;
  flex: 1;
`

export const CarouselContainer = styled.View`
  margin-top: 0;
  min-height: 600px;
  flex: 1;
`
export const PresenterTiles = styled.ScrollView`
  margin-top: 3%;
`

export const CategoryTiles = styled.ScrollView`
  height: 250px;
  margin-top: 5%;
`

export const PresenterCarouselContainer = styled.View`
  flex: 1;
  height: 250px;
`

export const FeatureTextContainer = styled.View`
  align-items: center;
  color: white;
  width: 95%;
  margin: 0 auto 15% auto;
  justify-content: flex-end;
  flex-grow: 1;
  flex: 1;
  flex-direction: column;
`

export const TagTextPresenter = styled(GreenSmallHeading)`
  text-align: center;
  font-size: 18px;
`
export const TagText = styled(GreenSmallHeading)`
  text-align: center;
  font-size: 18px;
  margin-top: -3%;
`
export const FeatureText = styled(WhiteBodyText)`
  text-align: center;
  font-size: 20px;
`
export const FeatureTitle = styled.Text`
  text-align: center;
  font-size: 46px;
  color: white;
  line-height: 46px;
  font-family: NoyhGeometric-Bold;
  text-transform: uppercase;
`
export const SettingsContainer = styled.TouchableOpacity`
  padding: 5% 5% 0 5%;
  position: absolute;
  right: 5%;
  box-shadow: 1px 1px 3px ${Colors.darkGray};
`
