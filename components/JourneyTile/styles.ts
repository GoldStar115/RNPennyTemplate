import styled from 'styled-components/native'
import { WhiteBodyText, GreenPresenterText, SmallContentInfo } from '@styles'

export const TileContainer = styled.TouchableOpacity`
  width: 150px;
  align-items: flex-start;
  margin-right: 20px;
  flex-basis: 40%;
  margin-bottom: 24px;
  justify-content: flex-start;
`

export const Contents = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`
export const InfoSmall = styled(SmallContentInfo)`
  font-size: 16px;
`

export const Title = styled(WhiteBodyText)`
  font-size: 18px;
  font-family: NoyhGeometric-Bold;
  text-align: left;
  margin-top: 10px;
`
