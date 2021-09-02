import styled from 'styled-components/native'
import { GreenPresenterText, WhiteBodyText } from '@styles'
import { yay } from '../../../image'
import { ResponsiveImage } from '@components'

export const Text = styled(WhiteBodyText)`
  text-align: center;
  width: 90%;
  font-size: 20px;
  flex-shrink: 1;
  flex-wrap: wrap;
  padding-bottom: 5%;
`
export const Logo = styled.Image`
  flex: 0.15;
  top: 0;
  resize-mode: contain;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
`

export const Title = styled(GreenPresenterText)`
  text-align: center;
  font-size: 40px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 1;
  flex-wrap: wrap;
  margin: 30% 0 10%;
`

export const BodyText = styled(WhiteBodyText)`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
`

export const YayIcon = styled(ResponsiveImage).attrs(() => ({
  source: yay,
}))`
  width: 80px;
  height: 80px;
  margin: 10% 0;
`
