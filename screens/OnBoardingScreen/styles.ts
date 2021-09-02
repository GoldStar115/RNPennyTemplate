import styled from 'styled-components/native'
import { WhiteBodyText, WhiteSectionTitle, GreenSmallHeading } from '@styles'
import { ResponsiveImageBackground } from '@components'

export const OnboardingTextContainer = styled.View`
  text-align: center;
  width: 80%;
  margin: 5% auto;
  top: 5%;
  flex-grow: 1;
  flex: 1;
`

export const OnboardingTextContainer3 = styled.View`
  text-align: center;
  width: 90%;
  margin: 5% auto;
  justify-content: flex-start;
  flex-grow: 1;
  flex: 1;
  top: 5%;
`
export const OnboardingCTA = styled.View`
  text-align: center;
  width: 90%;
  margin: auto;
  margin-bottom: 10%;
  justify-content: flex-end;
  flex: 0.3;
`
export const Title = styled(WhiteSectionTitle)`
  width: 100%;
  font-size: 46px;
  text-align: center;
`
export const GreenTagText = styled(GreenSmallHeading)`
  width: 100%;
  font-size: 24px;
  text-align: center;
`

export const Text = styled(WhiteBodyText)`
  text-align: center;
  font-size: 20px;
  width: 80%;
  margin: 3% auto;
`
export const SampleSlideStyle = styled(ResponsiveImageBackground)`
  flex: 1;
  resize-mode: contain;
  width: 100%;
`
