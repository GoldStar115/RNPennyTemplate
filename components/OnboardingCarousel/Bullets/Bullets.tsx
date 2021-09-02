import * as React from 'react'
import { BulletsContainer, Bullet } from './styles'

interface Props {
  pages: JSX.Element[]
  currentPage: number
}

export const Bullets = ({ pages, currentPage }: Props) => (
  <BulletsContainer>
    {pages.map((_, index: number) => (
      <Bullet key={index} current={currentPage === index}>
        &bull;
      </Bullet>
    ))}
  </BulletsContainer>
)
