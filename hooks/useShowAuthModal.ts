import { useDispatch, useSelector } from 'react-redux'
import { showLoginModal, showLoggedInModal } from '@reducers'
import { getIsUserLoggedIn } from '@selectors'

interface iUseShowAuthModal {
  lastEventBeforeLogin: string
}

export function useShowAuthModal() {
  const dispatch = useDispatch()
  const isUserLoggedIn = useSelector(getIsUserLoggedIn())

  return ({ lastEventBeforeLogin }: iUseShowAuthModal) => {
    if (isUserLoggedIn) {
      dispatch(showLoggedInModal())
    } else {
      dispatch(showLoginModal({ lastEventBeforeLogin }))
    }
  }
}
