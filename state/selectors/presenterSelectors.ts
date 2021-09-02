import { iState, iAlbum, iPresenter } from '@types'

export const getPresenter = (id: string) => (state: iState): iPresenter => {
  return state.presenters.find((presenter) => presenter.id === id)
}

export const getPresenters = () => (state: iState): iPresenter[] => {
  return state.presenters.sort(
    (a, b) => b.lastupdate._seconds - a.lastupdate._seconds,
  )
}

export const getPresenterForAlbum = (album: iAlbum) => (
  state: iState,
): iPresenter =>
  album &&
  state.presenters.filter((presenter) => presenter.id === album.presenterId)[0]
