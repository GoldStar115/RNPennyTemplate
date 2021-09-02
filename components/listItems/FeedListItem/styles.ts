import styled from 'styled-components/native'
import { WhiteContentTitle, WhiteBodyText } from '@styles'
import { ResponsiveImage } from '../../ResponsiveImage'

export const ListItem = styled.View`
  padding: 20px;
  /* flex: 1; */
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #333;
  border-bottom-width: 1px;
`
export const AlbumCircle = styled(ResponsiveImage)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`
export const AlbumTextInfo = styled.View`
  flex: 1;
  padding-left: 3%;
`
export const FollowingTag = styled.View`
  position: absolute;
  right: 0;
  
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
`

export const FeedPlayButton = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 30px;
  height: 35px;
  padding: 0;
  width: 40%;
  margin-top: 4%;
  justify-content: center;
`
export const FeedButtonText = styled.Text`
  color: #000;
  font-size: 18px;
  font-family: NoyhGeometric-Bold;
  align-self: center;
  padding-top: 2%;
`

export const TimeAgo = styled(WhiteBodyText)`
font-size: 16px`
