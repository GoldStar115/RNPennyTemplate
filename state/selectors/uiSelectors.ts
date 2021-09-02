import { iState, tAuthenticationState } from '@types'

export const getIsLoginModalVisible = () => (state: iState): boolean =>
  state.ui.isLoginModalVisible

export const getIsLoggedInModalVisible = () => (state: iState): boolean =>
  state.ui.isLoggedInModalVisible

export const getIsPlayerModalVisible = () => (state: iState): boolean =>
  state.ui.isPlayerModalVisible

export const getIsWelcomeToPremiumModalVisible = () => (
  state: iState,
): boolean => state.ui.isWelcomeToPremiumModalVisible

export const getAuthenticationState = () => (
  state: iState,
): tAuthenticationState => state.ui.authenticationState

export const getLocalStorageLoaded = () => (state: iState): boolean =>
  state.ui.localStorageLoaded
