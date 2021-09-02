import * as React from 'react'
import Modal from 'react-native-modal'
import { GrayOverlay, WhiteBodyText } from '@styles'
import { useState } from 'react'

interface Props {
  isVisible: boolean
  hideModal: Function
  children: React.ReactElement
}

export const OverlayModal = ({ isVisible, hideModal, children }: Props) => {
  // HACK: Since redux takes a few milliseconds to updates and blocks the UI, this
  // use this hack to override the redux state and update redux after hide in the background
  const [forceHide, setForceHide] = useState(false)
  const hideImmediately = () => {
    setForceHide(true)
    setTimeout(() => {
      hideModal()
    }, 400)
    setTimeout(() => {
      setForceHide(false)
    }, 1000)
  }
  return (
    <Modal
      isVisible={forceHide ? false : isVisible}
      backdropOpacity={0.7}
      onBackdropPress={() => hideImmediately()}
      style={{ margin: 0 }}
      swipeDirection={'down'}
      onSwipeComplete={() => hideImmediately()}>
      <GrayOverlay>{children}</GrayOverlay>
    </Modal>
  )
}
