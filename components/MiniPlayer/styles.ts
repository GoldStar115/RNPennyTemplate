import styled from 'styled-components/native'
import { Colors, WhiteContentTitle } from '@styles'
import { ResponsiveImage } from '../ResponsiveImage'

export const Container = styled.View`
  background-color: ${Colors.darkGray};
  flex-direction: row;
  justify-content: center;
  height: 100px;
  padding: 10px;
  width: 100%;
  box-shadow: 1px 1px 5px black;
`

export const TouchableTrackInfo = styled.TouchableHighlight`
  flex: 1;
`

export const OpenPlayerControls = styled.View`
  flex: 1;
  flex-direction: row;
`

export const AlbumCoverImage = styled(ResponsiveImage)`
  width: 75px;
  height: 75px;
  background-color: white;
  border-radius: 6px;
`

export const TrackData = styled.View`
  flex-direction: column;
  justify-content: space-between;
  padding-left: 4%;
  padding-bottom: 1%;
  flex-grow: 1;
`

export const TextContainer = styled.View`
  overflow: hidden;
  justify-content: center;
  flex: 1;
`

export const TrackProgress = styled.View`
  margin-left: 0;
`

export const PresenterName = styled(WhiteContentTitle)`
  font-size: 16px;
`

export const PlayButton = styled.TouchableOpacity`
  align-items: flex-end;
  justify-content: center;
  width: 70px;
`
