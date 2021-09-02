import * as React from 'react'
import { LogoutControls, AuthControls } from '@components'
import { OverlayModal } from '../OverlayModal'
import { getIsUserLoggedIn } from '@selectors'
import { useSelector } from 'react-redux'

interface Props {
  isVisible: boolean
  hideModal: Function
}

export const LoggedInModal = ({ isVisible, hideModal }: Props) => {
  const isUserLoggedIn = useSelector(getIsUserLoggedIn())
  return (
    <OverlayModal isVisible={isVisible} hideModal={hideModal}>
      {isUserLoggedIn ? <LogoutControls /> : <AuthControls />}
    </OverlayModal>
  )
}
