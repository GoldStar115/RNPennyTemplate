import { iAction, iUser, iRating, iFollows, iUserProgress } from '@types'

export const USER_ACTIONS = {
  LOGIN: 'USER_ACTION.LOGIN',
  LOGOUT: 'USER_ACTION.LOGOUT',
  RECEIVE_RATINGS: 'USER_ACTION.RECEIVE_RATINGS',
  RECEIVE_FOLLOWS: 'USER_ACTION.RECEIVE_FOLLOWS',
  RECEIVE_PROGRESS: 'USER_ACTION.RECEIVE_PROGRESS',
}

export const login = (user: iUser) => {
  return {
    type: USER_ACTIONS.LOGIN,
    payload: user,
  }
}

export const logout = () => {
  return {
    type: USER_ACTIONS.LOGOUT,
  }
}

export const receiveRatings = (ratings: iRating[]) => {
  return {
    type: USER_ACTIONS.RECEIVE_RATINGS,
    payload: ratings,
  }
}

export const receiveFollows = (follows: iFollows[]) => {
  return {
    type: USER_ACTIONS.RECEIVE_FOLLOWS,
    payload: follows,
  }
}

export const receiveProgress = (progress: iUserProgress[]) => {
  return {
    type: USER_ACTIONS.RECEIVE_PROGRESS,
    payload: progress,
  }
}

const initialState: iUser = {
  id: null,
  ratings: [],
  follows: [],
  progress: [],
}

export const UserReducer = (state = initialState, action: iAction) => {
  switch (action.type) {
    case USER_ACTIONS.LOGIN:
      return { ...state, ...action.payload }
    case USER_ACTIONS.LOGOUT:
      return initialState
    case USER_ACTIONS.RECEIVE_RATINGS:
      return {
        ...state,
        ratings: action.payload,
      }
    case USER_ACTIONS.RECEIVE_FOLLOWS:
      return {
        ...state,
        follows: action.payload,
      }
    case USER_ACTIONS.RECEIVE_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      }
    default:
      return state
  }
}
