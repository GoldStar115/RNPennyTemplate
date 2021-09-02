import { iAction, iJourney } from '@types'

export const JOURNEY_ACTIONS = {
  RECEIVE: 'JOURNEY_ACTION.RECEIVE',
}

export const receiveJourneys = (journeys: iJourney[]) => {
  return {
    type: JOURNEY_ACTIONS.RECEIVE,
    payload: journeys,
  }
}

const initialState: iJourney[] = []

export const JourneyReducer = (state = initialState, action: iAction) => {
  switch (action.type) {
    case JOURNEY_ACTIONS.RECEIVE:
      return action.payload

    default:
      return state
  }
}
