import * as React from 'react'
import { getUser } from '@selectors'
import { useSelector } from 'react-redux'
import { AuthControls } from '@components'
import { OverlayModal } from '../OverlayModal'
import { SectionTitle, AuthHeaderGreen } from './styles'

interface Props {
  isVisible: boolean
  hideModal: Function
}

export const LoginModal = ({ isVisible, hideModal }: Props) => {
  const user = useSelector(getUser())

  return (
    <OverlayModal isVisible={isVisible} hideModal={hideModal}>
      <>
        {user?.id ? (
          <>
            <AuthHeaderGreen>Welcome</AuthHeaderGreen>
            <SectionTitle> {user.name || user.email}!</SectionTitle>
          </>
        ) : (
          <AuthControls />
        )}
      </>
    </OverlayModal>
  )
}
