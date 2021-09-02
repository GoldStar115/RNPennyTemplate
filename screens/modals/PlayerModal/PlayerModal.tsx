import * as React from 'react'
import { FullScreenModal } from '../FullScreenModal'
import { PlayerScreen } from '../../PlayerScreen'

interface Props {
  isVisible: boolean
  hideModal: Function
}

export const PlayerModal = ({ isVisible, hideModal }: Props) => {
  return (
    <FullScreenModal isVisible={isVisible} hideModal={hideModal}>
      <PlayerScreen />
    </FullScreenModal>
  )
}
