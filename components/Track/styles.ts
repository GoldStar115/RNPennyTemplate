import styled from 'styled-components/native'
import {
  WhiteContentTitle,
  WhiteBodyText,
  GreenPresenterText,
  Colors,
} from '@styles'
import { ResponsiveImage } from '../ResponsiveImage'

interface TitleProps {
  active: boolean
}

export const Title = styled(WhiteContentTitle)<TitleProps>`
  color: ${({ active }) => (active ? Colors.mint : 'white')};
  font-size: 20px;
  flex-wrap: wrap;
  width: 80%;
`

export const Description = styled(WhiteBodyText)`
  font-size: 16px;
  max-width: 90%;
  font-family: NoyhGeometric-Light;
`
export const TrackTime = styled(WhiteBodyText)`
  font-size: 16px;
  flex: 1;
  right: 0;
  position: absolute;
  align-self: center;
  font-family: NoyhGeometric-Light;
`
export const TrackTextContainer = styled.View`
  max-width: 80%;
  padding-left: 2%;
`
export const TrackCompletedIndicator = styled(GreenPresenterText)`
  text-align: left;
  align-self: flex-start;
  padding-right: 2%;
  padding-top: 1%;
  width: 18px;
  font-size: 30px;
`
export const TrackNumberActive = styled(ResponsiveImage)`
  align-self: flex-start;
  resize-mode: contain;
  width: 18px;
  margin-top: -4%;
`

interface ListItemProps {
  active: boolean
}

export const ListItem = styled.View<ListItemProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 5% 0;
  border-bottom-color: #333;
  border-bottom-width: 1px;
  ${({ active }) => (active ? `color: ${Colors.mint}` : '')}
`
