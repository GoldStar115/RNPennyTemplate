import * as React from 'react'
import { Container, WhiteSectionTitle } from '@styles'
import { Description } from './styles'
import { NavigationParamList } from '@navigation'
import { useRoute, RouteProp } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { getTrack } from '@selectors'

export const TrackScreen = () => {
  const route = useRoute<RouteProp<NavigationParamList, 'Track'>>()
  const track = useSelector(getTrack(route.params.id))
  return (
    <Container>
      <WhiteSectionTitle>{track.title}</WhiteSectionTitle>
      <Description>{track.description}</Description>
    </Container>
  )
}
