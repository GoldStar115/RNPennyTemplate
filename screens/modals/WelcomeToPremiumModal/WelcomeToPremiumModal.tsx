import * as React from 'react'
import { Btn } from '@components'
import { OverlayModal } from '../OverlayModal'
import { getIsUserLoggedIn } from '@selectors'
import { useDispatch, useSelector } from 'react-redux'
import { Text } from '@styles'
import { BodyText, Title, YayIcon } from './styles'
import { hideModals } from '@reducers'
interface Props {
  isVisible: boolean
  hideModal: Function
}

export const WelcomeToPremiumModal = ({ isVisible, hideModal }: Props) => {
  const isUserLoggedIn = useSelector(getIsUserLoggedIn())
  const dispatch = useDispatch()
  return (
    <OverlayModal isVisible={isVisible} hideModal={hideModal}>
      <>
        <Title>Welcome To Premium</Title>
        <BodyText>
          Thanks for upgrading to premium. Check out Journeys and new features!
        </BodyText>
        <YayIcon />
        <Btn primary onPress={() => dispatch(hideModals())} caption={'OK'} />
      </>
    </OverlayModal>
  )
}
