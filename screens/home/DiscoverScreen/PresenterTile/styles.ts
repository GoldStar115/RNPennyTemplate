import styled from 'styled-components/native'
import {
  Colors,
  WhiteContentTitle,
  GreenSmallHeading,
  WhiteBodyText,
} from '@styles'
import { ResponsiveImageBackground } from '@components'

export const PresenterTile = styled(ResponsiveImageBackground)`
  height: 150px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
`
export const Contents = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`

export const TextContainer = styled.View`
  margin-top: 10px;
`

export const Name = styled(WhiteContentTitle)`
  font-size: 18px;
  text-align: center;
  margin: auto;
`
export const PresenterID = styled(WhiteBodyText)`
  font-size: 14px;
  text-align: center;
  min-height: 40px;
`

export const Handle = styled(GreenSmallHeading)`
  color: ${Colors.mint};
  text-align: center;
  margin: 0 auto;
  font-size: 12px;
`
