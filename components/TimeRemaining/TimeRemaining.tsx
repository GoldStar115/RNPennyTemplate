import * as React from 'react'

import { TimeRemainingText } from './styles'
import { ProgressComponent } from 'react-native-track-player'
import { formatTimeFromSeconds } from '@lib'

interface Props {
  style?: Object
}

export class TimeRemaining extends ProgressComponent<Props> {
  render() {
    const { position, duration } = this.state
    const timeRemaining = duration && position && duration - position
    return (
      <TimeRemainingText style={this.props.style}>
        {timeRemaining ? formatTimeFromSeconds(timeRemaining) + ' left' : ''}
      </TimeRemainingText>
    )
  }
}
