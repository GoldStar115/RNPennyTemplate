import * as React from 'react'
import { OnboardingCarousel } from '@components'
import { Slide1 } from './Slide1/Slide1'
import { Slide2 } from './Slide2/Slide2'
import { Slide3 } from './Slide3/Slide3'

export const OnBoardingScreen = () => {
  return (
    <OnboardingCarousel>
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </OnboardingCarousel>
  )
}
