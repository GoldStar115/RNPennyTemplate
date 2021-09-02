import styled from 'styled-components/native'
import {
  WhiteContentTitle,
  WhiteBodyText,
  GreenPresenterText,
  SmallContentInfo,
} from '@styles'
import { ResponsiveImage } from '../../ResponsiveImage'

export const AlbumCircle = styled(ResponsiveImage)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`
export const AlbumTextInfo = styled.View`
  flex: 1;
  padding-left: 3%;
`

export const AlbumTitle = styled(WhiteContentTitle)`
  text-align: left;
  width: 90%;
  font-size: 20px;
  flex: 1;
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
