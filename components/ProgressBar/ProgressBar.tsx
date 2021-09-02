import * as React from 'react'

import {
  Container,
  Progress,
  // BufferProgress,
  Knob,
  ProgressBackground,
} from './styles'
import { ProgressComponent } from 'react-native-track-player'
import { Animated, Dimensions } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import TrackPlayer from 'react-native-track-player'

interface Props {
  isDraggable?: boolean
}

const PROGRESS_MARGIN = 26
export class ProgressBar extends ProgressComponent<Props> {
  _windowWidth = Dimensions.get('window').width
  _progressWidth = this._windowWidth - PROGRESS_MARGIN * 2
  _dragInProgress = false
  _touchX = new Animated.Value(0)
  _translateX = Animated.diffClamp(
    Animated.add(this._touchX, -2 * PROGRESS_MARGIN),
    0,
    this._progressWidth,
  )
  _onPanGestureEvent = Animated.event([{ nativeEvent: { x: this._touchX } }], {
    useNativeDriver: true,
  })
  _onHandlerStateChange = (data: any, duration: number) => {
    if (data.nativeEvent.state === State.ACTIVE) {
      this._dragInProgress = true
    }
    if (data.nativeEvent.state === State.END) {
      const seekTo = (data.nativeEvent.x / this._progressWidth) * duration
      TrackPlayer.seekTo(seekTo)
      setTimeout(() => (this._dragInProgress = false), 600)
    }
  }

  render() {
    const { position, duration } = this.state
    const { isDraggable } = this.props
    // const bufferPercent =
    //   duration && bufferedPosition ? (bufferedPosition / duration) * 100 : 0
    const progressPercent =
      duration && position ? (position / duration) * 100 : 0
    if (!this._dragInProgress) {
      const val = (progressPercent / 100) * this._progressWidth
      this._touchX.setValue(val)
    }

    return (
      <Container isDraggable={isDraggable}>
        <ProgressBackground />
        {/* <BufferProgress progress={bufferPercent} /> */}
        <Progress progress={progressPercent} />
        {isDraggable && (
          <PanGestureHandler
            onGestureEvent={this._onPanGestureEvent}
            onHandlerStateChange={(data) =>
              this._onHandlerStateChange(data, duration)
            }>
            <Animated.View>
              <Animated.View
                style={[
                  {
                    padding: 20,
                  },
                  {
                    transform: [
                      {
                        translateX: Animated.add(
                          this._translateX,
                          new Animated.Value(-12),
                        ),
                      },
                    ],
                  },
                ]}>
                <Knob />
              </Animated.View>
            </Animated.View>
          </PanGestureHandler>
        )}
      </Container>
    )
  }
}
