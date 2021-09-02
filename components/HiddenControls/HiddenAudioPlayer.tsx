import * as React from 'react'
import { useEffect } from 'react'
import TrackPlayer from 'react-native-track-player'

async function setupPlayer() {
  await TrackPlayer.setupPlayer({})
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_JUMP_BACKWARD,
      TrackPlayer.CAPABILITY_JUMP_FORWARD,
    ],
    compactCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_JUMP_BACKWARD,
      TrackPlayer.CAPABILITY_JUMP_FORWARD,
    ],
  })
}

export const HiddenAudioPlayer = () => {
  useEffect(() => {
    setupPlayer()
  }, [])

  return <>{false && <></>}</>
}
