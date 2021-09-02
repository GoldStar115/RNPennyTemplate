import { iTrack, iAction } from '@types'
import { addTrackNumbers } from '@lib'

export const TRACK_ACTIONS = {
  RECEIVE: 'TRACK_ACTION.RECEIVE',
}

export const receiveTracks = (tracks: iTrack[]) => {
  return {
    type: TRACK_ACTIONS.RECEIVE,
    payload: tracks,
  }
}

const initialState: iTrack[] = []

export const TrackReducer = (state = initialState, action: iAction) => {
  switch (action.type) {
    case TRACK_ACTIONS.RECEIVE:
      addTrackNumbers(action.payload)
      return action.payload

    default:
      return state
  }
}
