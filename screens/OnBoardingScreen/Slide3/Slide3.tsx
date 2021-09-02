import * as React from 'react'
import {
  SampleSlideStyle,
  Title,
  OnboardingTextContainer3,
  OnboardingCTA,
  Text,
} from '../styles'
import { OnboardingSlide } from '@components'
import { PrimaryButton, PrimaryButtonText } from '@styles'
import { onboarding3 } from '../../../image'
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { setLocalStorageValue } from '@state'

export const Slide3 = () => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const navigateHome = () => {
    setIsLoading(true)
    navigation.navigate('Home')
    setLocalStorageValue({ firstOpen: false })
  }
  return (
    <OnboardingSlide>
      <SampleSlideStyle source={onboarding3}>
        {isLoading && <ActivityIndicator size={'large'} />}
        {!isLoading && (
          <>
            <OnboardingTextContainer3>
              <Title>
                Financial Literacy{'\n'}
                Made Easy
              </Title>
              <Text>
                Simplifying finance so you can {'\n'} level up quickly.
              </Text>
            </OnboardingTextContainer3>
            <OnboardingCTA>
              <PrimaryButton onPress={() => navigateHome()}>
                <PrimaryButtonText>Start Listening</PrimaryButtonText>
              </PrimaryButton>
            </OnboardingCTA>
          </>
        )}
      </SampleSlideStyle>
    </OnboardingSlide>
  )
}
