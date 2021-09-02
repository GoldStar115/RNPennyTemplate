import styled from 'styled-components/native'
import { WhiteBodyText } from '@styles'

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
