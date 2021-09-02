import * as React from 'react'

import {
  Description,
  Title,
  TrackTextContainer,
  TrackTime,
  ListItem,
  TrackCompletedIndicator,
  TrackNumberActive,
} from './styles'
import { activeTrackIcon } from '../../image'
import { Touch } from '@styles'
import { iTrack } from '@types'
import { getIsCurrentTrack } from '@selectors'
import { useSelector } from 'react-redux'
import { formatTimeFromSeconds } from '@lib'
import Octicons from 'react-native-vector-icons/Octicons'

interface Props {
  track: iTrack
  onPress(): void
  completed?: boolean
}

export const Track = ({ track, onPress, completed = false }: Props) => {
  const isCurrentTrack = useSelector(getIsCurrentTrack(track))

  return (
    <Touch onPress={onPress}>
      <ListItem active={isCurrentTrack}>
        {isCurrentTrack ? (
          <TrackNumberActive source={activeTrackIcon} />
        ) : (
          <TrackCompletedIndicator>
            {completed ? <Octicons name="primitive-dot" /> : null}
          </TrackCompletedIndicator>
        )}
        <TrackTextContainer>
          <Title active={isCurrentTrack}>
            {track.number}. {track.title}
          </Title>
          <Description>
            {track.description || 'This track brought to you by Penny.'}
          </Description>
        </TrackTextContainer>
        <TrackTime>{formatTimeFromSeconds(track.length)}</TrackTime>
      </ListItem>
    </Touch>
  )
}
