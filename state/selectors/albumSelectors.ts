import { iState, iPresenter, iTrack, iAlbum, iCategory } from '@types'
import { sortByRecency } from '@lib'

export const getAlbum = (id: string) => (state: iState): iAlbum =>
  state.albums.find((album) => album.id === id)

export const getAlbums = () => (state: iState): iAlbum[] => state.albums

export const getDiscoverAlbums = () => (state: iState): iAlbum[] =>
  state.albums.filter((album) => album.isPublished === true && !album.journeyId)

export const getAlbumsForPresenter = (presenter: iPresenter) => (
  state: iState,
): iAlbum[] =>
  presenter
    ? getDiscoverAlbums()(state).filter(
        (album) => album.presenterId === presenter.id,
      )
    : []

export const getAlbumsForCategory = (category: iCategory) => (
  state: iState,
): iAlbum[] =>
  getDiscoverAlbums()(state).filter(
    (album) =>
      album.category1 === category.id || album.category2 === category.id,
  )

export const getAlbumForTrack = (track: iTrack) => (state: iState): iAlbum =>
  track && state.albums.filter((album) => album.id === track.albumId)[0]

export const getRecentAlbums = () => (state: iState): iAlbum[] => {
  const albums = getDiscoverAlbums()(state)
  return sortByRecency(albums).slice(0, 5)
}
