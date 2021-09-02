import { getAlbum, getTracksForAlbum } from '@selectors'
import { iAlbum, iUserProgress } from '@types'
import * as React from 'react'
import { useSelector } from 'react-redux'

import { Container, Progress, ProgressText } from './styles'

export const AlbumProgress = ({
  album,
  albumProgress,
}: {
  album: iAlbum
  albumProgress: iUserProgress
}) => {
  const progressPercent = albumProgress?.progressPercent || 0
  return (
    <Container>
      <ProgressText>{progressPercent}% Complete</ProgressText>
      <Progress progress={progressPercent} />
    </Container>
  )
}
