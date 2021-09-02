import * as React from 'react'
import { CarouselContainer, StyledScrollView } from './styles'

interface Props {
  children: JSX.Element[]
  loops?: number
}

export const TileCarousel = ({ children, loops = 1 }: Props) => {
  return (
    <CarouselContainer>
      <StyledScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={1}
        decelerationRate="fast">
        {[...Array(loops)].map((_, __) => children)}
      </StyledScrollView>
    </CarouselContainer>
  )
}
