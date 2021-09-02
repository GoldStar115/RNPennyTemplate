import { iTrack, iAction } from '@types'

export const PLAYER_ACTIONS = {
  PLAY: 'PLAYER.PLAY',
  SET_CURRENT_TRACK: 'PLAYER.SET_CURRENT_TRACK',
  STOP: 'PLAYER.STOP',
  TOGGLE_PLAYBACK: 'PLAYER.TOGGLE_PLAYBACK',
  UPDATE_PROGRESS: 'PLAYER.UPDATE_PROGRESS',
  UPDATE_TRACK_DETAILS: 'PLAYER.UPDATE_TRACK_DETAILS',
}

export const play = (track: iTrack) => {
  return {
    type: PLAYER_ACTIONS.PLAY,
    payload: track,
  }
}

export const setCurrentTrack = (track: iTrack) => {
  return {
    type: PLAYER_ACTIONS.SET_CURRENT_TRACK,
    payload: track,
  }
}

export const stop = () => {
  return {
    type: PLAYER_ACTIONS.STOP,
  }
}

export const updateProgress = (currentTime: number) => {
  return {
    type: PLAYER_ACTIONS.UPDATE_PROGRESS,
    payload: Math.round(currentTime),
  }
}

interface updateTrackDetailsProps {
  duration: number
}

export const updateTrackDetails = ({ duration }: updateTrackDetailsProps) => {
  return {
    type: PLAYER_ACTIONS.UPDATE_TRACK_DETAILS,
    payload: Math.round(duration),
  }
}

export const togglePlayback = () => {
  return {
    type: PLAYER_ACTIONS.TOGGLE_PLAYBACK,
  }
}

export interface iPlayerReducerState {
  currentTrack?: iTrack
  isPlaying: boolean
  currentTime: number
  currentTrackDuration: number
}

const initialState: iPlayerReducerState = {
  currentTrack: null,
  currentTime: null,
  isPlaying: false,
  currentTrackDuration: null,
}

export const PlayerReducer = (
  state: iPlayerReducerState = initialState,
  action: iAction,
): iPlayerReducerState => {
  switch (action.type) {
    case PLAYER_ACTIONS.PLAY:
      return {
        currentTime: null,
        currentTrackDuration: null,
        currentTrack: action.payload,
        isPlaying: true,
      }
    case PLAYER_ACTIONS.SET_CURRENT_TRACK:
      return {
        currentTime: null,
        currentTrackDuration: null,
        currentTrack: action.payload,
        isPlaying: true,
      }
    case PLAYER_ACTIONS.STOP:
      return {
        ...state,
        currentTime: 0,
        currentTrack: null,
        isPlaying: false,
      }
    case PLAYER_ACTIONS.TOGGLE_PLAYBACK:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      }
    case PLAYER_ACTIONS.UPDATE_PROGRESS:
      return {
        ...state,
        currentTime: action.payload,
      }
    case PLAYER_ACTIONS.UPDATE_TRACK_DETAILS:
      return {
        ...state,
        currentTrackDuration: action.payload,
      }
    default:
      return state
  }
}
