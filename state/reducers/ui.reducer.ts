import { iUI, iAction, tAuthenticationState } from '@types'

export const UI_ACTIONS = {
  SHOW_LOGIN_MODAL: 'UI_ACTION.SHOW_LOGIN_MODAL',
  SHOW_LOGGED_IN_MODAL: 'UI_ACTION.SHOW_LOGGED_IN_MODAL',
  HIDE_LOGGED_IN_MODAL: 'UI_ACTION.HIDE_LOGGED_IN_MODAL',
  SHOW_PLAYER_MODAL: 'UI_ACTION.SHOW_PLAYER_MODAL',
  SHOW_WELCOME_TO_PREMIUM_MODAL: 'UI_ACTION.SHOW_WELCOME_TO_PREMIUM_MODAL',
  SET_AUTHENTICATION_STATE: 'UI_ACTION.SET_AUTHENTICATION_STATE',
  HIDE_LOGIN_MODAL: 'UI_ACTION.HIDE_LOGIN_MODAL',
  HIDE_MODALS: 'UI_ACTION.HIDE_MODALS',
  SET_LOCAL_STORAGE_LOADED: 'UI_ACTION.SET_LOCAL_STORAGE_LOADED',
}

interface iShowLoginModal {
  lastEventBeforeLogin: string
}

export const showLoginModal = (payload: iShowLoginModal) => {
  return {
    type: UI_ACTIONS.SHOW_LOGIN_MODAL,
    payload,
  }
}

export const showLoggedInModal = () => {
  return {
    type: UI_ACTIONS.SHOW_LOGGED_IN_MODAL,
  }
}

export const hideLoggedInModal = () => {
  return {
    type: UI_ACTIONS.HIDE_LOGGED_IN_MODAL,
  }
}

export const showPlayerModal = () => {
  return {
    type: UI_ACTIONS.SHOW_PLAYER_MODAL,
  }
}

export const showWelcomeToPremiumModal = () => {
  return {
    type: UI_ACTIONS.SHOW_WELCOME_TO_PREMIUM_MODAL,
  }
}

export const setAuthenticationState = (
  authenticationState: tAuthenticationState,
) => {
  return {
    type: UI_ACTIONS.SET_AUTHENTICATION_STATE,
    payload: authenticationState,
  }
}

export const hideModals = () => {
  return {
    type: UI_ACTIONS.HIDE_MODALS,
  }
}

export const setLocalStorageLoaded = () => {
  return {
    type: UI_ACTIONS.SET_LOCAL_STORAGE_LOADED,
  }
}

const initialState: iUI = {
  isLoginModalVisible: false,
  isLoggedInModalVisible: false,
  isPlayerModalVisible: false,
  isWelcomeToPremiumModalVisible: false,
  lastEventBeforeLogin: null,
  authenticationState: 'default',
  localStorageLoaded: false,
}

export const UIReducer = (state: iUI = initialState, action: iAction) => {
  switch (action.type) {
    case UI_ACTIONS.SHOW_LOGIN_MODAL:
      return { ...state, ...action.payload, isLoginModalVisible: true }
    case UI_ACTIONS.SHOW_LOGGED_IN_MODAL:
      return { ...state, isLoggedInModalVisible: true }
    case UI_ACTIONS.HIDE_LOGGED_IN_MODAL:
      return { ...state, isLoggedInModalVisible: false }
    case UI_ACTIONS.SHOW_PLAYER_MODAL:
      return { ...state, isPlayerModalVisible: true }
    case UI_ACTIONS.SHOW_WELCOME_TO_PREMIUM_MODAL:
      return { ...state, isWelcomeToPremiumModalVisible: true }
    case UI_ACTIONS.SET_AUTHENTICATION_STATE:
      return {
        ...state,
        isLoginModalVisible: true,
        authenticationState: action.payload,
      }
    case UI_ACTIONS.HIDE_MODALS:
      return {
        ...state,
        isLoginModalVisible: false,
        isLoggedInModalVisible: false,
        isPlayerModalVisible: false,
        isWelcomeToPremiumModalVisible: false,
      }
    case UI_ACTIONS.SET_LOCAL_STORAGE_LOADED:
      return {
        ...state,
        localStorageLoaded: true,
      }

    default:
      return state
  }
}
