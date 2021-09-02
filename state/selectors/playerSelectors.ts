import { iState, iTrack } from '@types'

export const getCurrentTrack = () => (state: iState): iTrack =>
  state.player.currentTrack

export const getIsCurrentTrack = (track: iTrack) => (state: iState): boolean =>
  state.player.currentTrack?.id === track.id

export const getIsPlaying = () => (state: iState): boolean =>
  state.player.isPlaying
