import { iPresenter, iAction } from '@types'

export const PRESENTER_ACTIONS = {
  RECEIVE: 'PRESENTER_ACTION.RECEIVE',
}

export const receivePresenters = (presenters: iPresenter[]) => {
  return {
    type: PRESENTER_ACTIONS.RECEIVE,
    payload: presenters,
  }
}

const initialState: iPresenter[] = []

export const PresenterReducer = (state = initialState, action: iAction) => {
  switch (action.type) {
    case PRESENTER_ACTIONS.RECEIVE:
      return action.payload

    default:
      return state
  }
}
