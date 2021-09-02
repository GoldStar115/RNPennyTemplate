import * as React from 'react'
import { Dimensions } from 'react-native'
import { useState } from 'react'
import { Bullets } from './Bullets/Bullets'
import { CarouselContainer, StyledScrollView } from './styles'

interface Props {
  children: JSX.Element[]
}

export const OnboardingCarousel = ({ children }: Props) => {
  const [currentPage, setCurrentPage] = useState(0)
  const setCurrentPageFromScrollOffset = (offset: any) => {
    const width = Dimensions.get('window').width - 1
    setCurrentPage(Math.floor(offset / width))
  }

  return (
    <CarouselContainer>
      <StyledScrollView
        horizontal={true}
        contentContainerStyle={{
          width: `${100 * children.length}%`,
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={1}
        onScroll={(data) => {
          setCurrentPageFromScrollOffset(data.nativeEvent.contentOffset.x)
        }}
        pagingEnabled
        decelerationRate="fast">
        {children}
      </StyledScrollView>
      <Bullets pages={children} currentPage={currentPage} />
    </CarouselContainer>
  )
}
