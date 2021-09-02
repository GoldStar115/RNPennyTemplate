import styled from 'styled-components/native'
import {
  GreenPresenterText,
  SmallContentInfo,
  WhiteContentTitle,
  GreenSmallHeading,
  WhiteSectionTitle,
  WhiteBodyText,
  ClearContainer,
  Colors,
} from '@styles'
import { ResponsiveImageBackground } from '@components'

export const ItemsRow = styled(ClearContainer)`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0%;
`

export const Title = styled(WhiteSectionTitle)`
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

export const AlbumsContainer = styled.View`
  padding-left: 0%;
  margin-top: 10%;
  margin-left: 4%;
  width: 100%;
  position: relative;
`

export const AlbumTitle = styled(WhiteContentTitle)`
  text-align: left;
  width: 90%;
  font-size: 20px;
`
export const AlbumDescription = styled(WhiteBodyText)`
  text-align: left;
  width: 90%;
  font-size: 16px;
  flex: 1;
`
export const AlbumPresenter = styled(GreenPresenterText)`
  flex: 1;
  text-align: left;
  width: 90%;
  font-size: 18px;
`

export const AlbumLength = styled(SmallContentInfo)`
  flex: 1;
  text-align: left;
  width: 90%;
  font-size: 16px;
`
export const AlbumCircle = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`
export const AlbumTextInfo = styled.View`
  padding-left: 3%;
`

export const CategoryTextContainer = styled.View`
  align-items: center;
  color: white;
  width: 90%;
  margin: 0 auto;
  justify-content: flex-end;
  flex-grow: 1;
  flex-direction: column;
`

export const TagTextPresenter = styled(GreenSmallHeading)`
  text-align: center;
  font-size: 18px;
`
export const TagText = styled(GreenSmallHeading)`
  text-align: center;
  font-size: 18px;
`
export const FeatureText = styled(WhiteBodyText)`
  text-align: center;
  font-size: 20px;
`
export const FeatureTitle = styled.Text`
  text-align: center;
  font-size: 46px;
  color: white;
  font-family: NoyhGeometric-Bold;
  text-transform: uppercase;
`
export const SettingsContainer = styled.TouchableOpacity`
  padding: 0% 5%;
  position: absolute;
  right: 5%;
  box-shadow: 1px 1px 2px ${Colors.darkGray};
`
export const PresenterCoverBackground = styled(ResponsiveImageBackground)`
  flex: 1;
  resize-mode: contain;
  width: 100%;
`
export const GradientOverlay = styled.View`
  height: 650px;
  flex-grow: 1;
`
