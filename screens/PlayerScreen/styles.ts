import styled from 'styled-components/native'
import {
  WhiteSectionTitle,
  WhiteBodyText,
  GreenPresenterText,
  Colors,
  Text,
} from '@styles'
import { ResponsiveImageBackground } from '@components'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.mint};
  padding-top: 5%;
`
export const TrackInfoContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 4%;
  justify-content: flex-end;
  margin-bottom: 5%;
`
export const ItemsRow = styled.View`
  flex-direction: row;
  position: relative;
  margin: 0 5%;
  justify-content: space-between;
  align-items: center;
`
export const SkipButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PlayerBackground = styled(ResponsiveImageBackground)`
  flex: 1;
  align-items: center;
  flex-direction: column;
  height: 100%;
  border-radius: 25px;
  width: 100%;
  box-shadow: 1px 5px 10px ${Colors.darkGray};
`
export const TrackTitle = styled(WhiteSectionTitle)`
  font-size: 36px;
  text-transform: uppercase;
`
export const AlbumTitle = styled.Text`
  font-size: 18px;
  width: 100%;
  text-align: center;
  padding: 5%;
  color: ${Colors.darkGray};
  font-family: NoyhGeometric-Bold;
`
export const PresenterTitle = styled(GreenPresenterText)`
  font-size: 24px;
  width: 100%;
`
export const CloseButton = styled.TouchableHighlight``
export const Description = styled(WhiteBodyText)`
  font-size: 18px;
`

export const OptionsRow = styled.View`
  margin: 16px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PlaybackSpeedControl = styled.TouchableOpacity``

export const PlaybackSpeedControlText = styled(Text)`
  font-size: 30px;
  font-weight: 600;
  color: ${Colors.mint};
  padding-top: 2px;
`

export const SkipTimeOverLayText = styled(Text)`
  position: absolute;
  font-weight: bold;
  font-size: 16px;
  padding-top: 3px;
`
