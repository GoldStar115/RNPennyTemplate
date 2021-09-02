import * as React from 'react'
import {
  SampleSlideStyle,
  Title,
  Text,
  OnboardingTextContainer,
  GreenTagText,
  OnboardingCTA,
} from '../styles'
import { OnboardingSlide } from '@components'
import { WhiteBodyText} from '@styles'
import { onboarding1 } from '../../../image'
import { logo } from '../../../image'
import LinearGradient from 'react-native-linear-gradient'

export const Slide1 = () => {
  return (
    <OnboardingSlide>
      <SampleSlideStyle source={onboarding1}>
        <OnboardingTextContainer>
          <Title>Master Your Money</Title>
          <Text>Actionable insights from real people.</Text>
        </OnboardingTextContainer>
      </SampleSlideStyle>
    </OnboardingSlide>
  )
}
