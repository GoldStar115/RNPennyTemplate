import styled from 'styled-components/native'
import {
  WhiteBodyText,
  SmallContentInfo,
  Colors,
  GreenPresenterText,
  WhiteContentTitle,
  WhiteBackButton,
} from '@styles'
import { ResponsiveImage } from '@components'

export const Description = styled(WhiteBodyText)`
  font-size: 20px;
  text-align: left;
  font-family: NoyhGeometric-Light;
  margin-bottom: 8%;
  width: 98%;
`
export const PresenterName = styled(GreenPresenterText)`
  text-align: center;
  font-size: 22px;
  width: 80%;
`
export const AlbumInfoSmall = styled(SmallContentInfo)`
  font-size: 18px;
`

export const AlbumTitle = styled(WhiteContentTitle)`
  font-size: 28px;
  text-align: center;
  width: 98%;
  margin: 3% auto;
`

export const AlbumInfoContainer = styled.View`
  width: 100%;
  flex: 1;
  height: 100%;
  align-items: center;
  padding: 40px 10px;
  margin-top: 5%;
  min-height: 100px;
`
export const PresenterCircle = styled(ResponsiveImage)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 5% auto;
`
export const AlbumScreenOverlay = styled.View`
  flex: 1;
  min-height: 400px;
  width: 90%;
  flex-direction: column;
  background-color: ${Colors.darkGray};
  margin: auto;
  top: 100px;
  margin-bottom: 150px;
  padding: 20px;
  z-index: 999;
  overflow: scroll;
  border-radius: 25px;
  shadow-color: #000;
  /* shadow-offset: {width: 3px, height: -10px}; */
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 5;
`
export const TrackContainer = styled.View`
  padding: 0 10px;
  width: 100%;
  height: auto;
`

export const CategoryTab = styled.View`
  position: absolute;
  border-top-left-radius: 15px;
  border-right-width: 100px;
  border-top-width: 100px;
  border-right-color: transparent;
  border-top-color: ${Colors.mint};
`

export const CategoryIconContainer = styled.View`
  position: absolute;
  top: 15px;
  left: 10px;
`
export const WhiteBackButtonLower = styled(WhiteBackButton)`
  top: 2%;
  box-shadow: 1px 1px 3px black;
`
