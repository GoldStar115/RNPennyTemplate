import * as React from 'react'

import { MiniPlayer } from '../MiniPlayer'
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import { getCurrentTrack } from '@selectors'
import { useSelector } from 'react-redux'

export const MainTabBar = (props: any) => {
  const currentTrack = useSelector(getCurrentTrack())
  return (
    <>
      {currentTrack && <MiniPlayer />}
      <BottomTabBar {...props} />
    </>
  )
}
