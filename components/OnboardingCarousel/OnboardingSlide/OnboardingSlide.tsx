import * as React from 'react'
import { SlideContainer } from './styles'

interface Props {
  children: JSX.Element
}

export const OnboardingSlide = ({ children }: Props) => {
  return <SlideContainer>{children}</SlideContainer>
}
