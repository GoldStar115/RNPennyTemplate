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
import { PrimaryButton, PrimaryButtonText } from '@styles'
import { onboarding2 } from '../../../image'

export const Slide2 = () => {
  return (
    <OnboardingSlide>
      <SampleSlideStyle source={onboarding2}>
        <OnboardingTextContainer>
          <Title>
            Listen{'\n'}
            On The Go
          </Title>
          <Text>Bite-sized content you can listen to anytime, anywhere.</Text>
        </OnboardingTextContainer>
      </SampleSlideStyle>
    </OnboardingSlide>
  )
}
