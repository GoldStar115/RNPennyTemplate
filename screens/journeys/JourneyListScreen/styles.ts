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
import { Button } from 'react-native-elements'

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

export const JourneysContainer = styled.View`
  padding: 0% 4%;
  margin-top: 10%;
  flex: 1;
  position: relative;
`
export const WhiteBackButtonLower = styled(WhiteBackButton)`
  top: 2%;
  box-shadow: 1px 1px 3px black;
`
