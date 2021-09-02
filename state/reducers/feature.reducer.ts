import { iAction, iFeaturedContent } from '@types'

export const FEATURE_ACTIONS = {
  RECEIVE: 'FEATURE_ACTION.RECEIVE',
}

export const receiveFeatures = (features: iFeaturedContent[]) => {
  return {
    type: FEATURE_ACTIONS.RECEIVE,
    payload: features,
  }
}

const initialState: iFeaturedContent[] = []

export const FeatureReducer = (state = initialState, action: iAction) => {
  switch (action.type) {
    case FEATURE_ACTIONS.RECEIVE:
      return action.payload

    default:
      return state
  }
}
