import {
  Colors,
  ClearContainer,
  SmallContentInfo,
  WhiteContentTitle,
  GreenSmallHeading,
  WhiteBodyText,
  WhiteBackButton,
} from '@styles'
import styled from 'styled-components/native'
import { ResponsiveImageBackground } from '@components'

export const PresenterCoverBackground = styled(ResponsiveImageBackground)`
  flex: 1;
  resize-mode: cover;
  width: 100%;
  justify-content: space-between;
`

export const GradientOverlay = styled.View`
  min-height: 800px;
  flex-grow: 1;
  flex: 1;
  margin-bottom: auto;
`

export const ItemsRow = styled(ClearContainer)`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4%;
`

export const FollowRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4% 2% 0 2%;
  flex-wrap: wrap;
`

export const FollowersCount = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const FollowersText = styled(WhiteBodyText)`
  font-size: 20px;
  justify-content: center;
  flex-direction: row;
  padding-left: 2%;
  padding-top: 5px;
`

export const PresenterTitle = styled(WhiteContentTitle)`
  font-size: 46px;
  text-transform: uppercase;
`
export const PresenterHandle = styled(GreenSmallHeading)`
  font-size: 18px;
`

export const PresenterBio = styled(WhiteBodyText)`
  font-size: 20px;
  line-height: 24px;
`

export const PresenterContentInfo = styled(SmallContentInfo)`
  font-size: 20px;
  color: ${Colors.mint};
`

export const PresenterInfoContainer = styled.View`
  text-align: left;
  width: 90%;
  padding-left: 4%;
  flex: 1;
  flex-grow: 1;
  justify-content: flex-end;
  bottom: 5%;
`

export const AlbumsContainer = styled.View`
  padding: 0% 4%;
  margin-top: 4%;
  flex: 1;
  position: relative;
`
export const WhiteBackButtonLower = styled(WhiteBackButton)`
  top: 2%;
  box-shadow: 1px 1px 3px black;
`

export const ShareButton = styled.TouchableOpacity`
  position: absolute;
  right: 8%;
  top: 3%;
  box-shadow: 1px 1px 3px black;
`
