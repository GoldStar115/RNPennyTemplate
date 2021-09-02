import * as React from 'react'

import {
  FeatureTitle,
  FeatureText,
  FeatureTextContainer,
  TagTextPresenter,
  TagText,
} from '../styles'
import { FeatureSlide } from '@components'
import { PrimaryButton, PrimaryButtonText } from '@styles'
import LinearGradient from 'react-native-linear-gradient'
import { iPresenter } from '@types'
import { Background } from './styles'

interface Props {
  presenter: iPresenter
}

export const FeaturedPresenterSlide = ({ presenter }: Props) => {
  return (
    <FeatureSlide>
      <Background source={{ uri: presenter?.backgroundPicture?.src }}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}>
          <FeatureTextContainer>
            <TagTextPresenter>Lisette Calveiroe</TagTextPresenter>
            <FeatureTitle>Rags to Riches</FeatureTitle>
            <TagText>[category] | Album</TagText>

            <FeatureText>
              How I eliminated credit card debt in 12 months and taught others
              how to succeed
            </FeatureText>
            <PrimaryButton>
              <PrimaryButtonText>Listen Now</PrimaryButtonText>
            </PrimaryButton>
          </FeatureTextContainer>
        </LinearGradient>
      </Background>
    </FeatureSlide>
  )
}
