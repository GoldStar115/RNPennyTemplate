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
import { iAlbum, Categories } from '@types'
import { Background } from './styles'
import { getPresenterForAlbum } from '@selectors'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

interface Props {
  album: iAlbum
}

export const FeaturedAlbumSlide = ({ album }: Props) => {
  const presenter = useSelector(getPresenterForAlbum(album))
  const nav = useNavigation()
  return (
    <FeatureSlide>
      <Background source={{ uri: album?.coverPicture?.src }}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}>
          <FeatureTextContainer>
            <TagText>
              {[album.category1, album.category2]
                .filter((a) => a)
                .map((category) => Categories[category].label)
                .join(' | ')}
            </TagText>
            <FeatureTitle>{album.titleHook || album.title}</FeatureTitle>
            <TagTextPresenter>
              by {presenter?.firstName} {presenter?.lastName}
            </TagTextPresenter>
            <FeatureText>
              {album.descriptionHook || album.descriptionShort}
            </FeatureText>
            <PrimaryButton
              onPress={() => nav.navigate('Album', { id: album.id })}>
              <PrimaryButtonText>Listen Now</PrimaryButtonText>
            </PrimaryButton>
          </FeatureTextContainer>
        </LinearGradient>
      </Background>
    </FeatureSlide>
  )
}
