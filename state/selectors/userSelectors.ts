import {
  iState,
  iUser,
  iRating,
  iFollows,
  Categories,
  iAlbum,
  iUserProgress,
} from '@types'
import { getPresenter } from './presenterSelectors'
import {
  getAlbumsForCategory,
  getAlbumsForPresenter,
  getDiscoverAlbums,
} from './albumSelectors'
import { sortByRecency } from '@lib'

export const getIsUserLoggedIn = () => (state: iState): boolean =>
  !!state.user?.id

export const getUser = () => (state: iState): iUser => state.user

export const getItemLiked = (itemId: String) => (state: iState): iRating => {
  const ratings = state.user?.ratings?.filter(
    (rating) => rating.contentId === itemId,
  )
  if (ratings.length > 0) {
    return ratings[0]
  }
  return null
}

export const getItemFollowed = (itemId: String) => (
  state: iState,
): iFollows => {
  const followItems = state.user?.follows?.filter(
    (followItem) => followItem.contentId === itemId,
  )
  if (followItems.length > 0) {
    return followItems[0]
  }
  return null
}

export const getFollowedItems = () => (state: iState) => state.user.follows

const getAlbumsForFollowedItem = (followedItem: iFollows) => (
  state: iState,
) => {
  switch (followedItem.contentType) {
    case 'category':
      return getAlbumsForCategory(Categories[followedItem.contentId])(state)
    case 'presenter':
      const presenter = getPresenter(followedItem.contentId)(state)
      return getAlbumsForPresenter(presenter)(state)
    default:
      null
  }
}

export const getFollowedAlbums = () => (state: iState): iAlbum[] => {
  let feed: Array<iAlbum> = []
  if (state.user.follows.length > 0) {
    const feedSet = new Set<iAlbum>()
    state.user.follows.forEach((followItem) =>
      getAlbumsForFollowedItem(followItem)(state).forEach((album) => {
        feedSet.add(album)
      }),
    )
    feed = Array.from(feedSet)
  }
  return feed
}

export const getFeedFromFollows = () => (state: iState): iAlbum[] => {
  let followedAlbums: Array<iAlbum> = getFollowedAlbums()(state)
  return sortByRecency(followedAlbums).slice(0, 20)
}

export const getAlbumProgress = (album: iAlbum) => (
  state: iState,
): iUserProgress => {
  const results = state.user.progress.filter(
    (progress) => progress.id === album.id,
  )
  return results.length > 0 ? results[0] : null
}

export const getFeed = () => (state: iState): iAlbum[] => {
  let followedAlbums: Array<iAlbum> = getFollowedAlbums()(state)
  let feed: Array<iAlbum> = getDiscoverAlbums()(state).map((album: iAlbum) => {
    return {
      ...album,
      _isFollowed:
        followedAlbums.filter((followedAlbum) => followedAlbum.id === album.id)
          .length > 0,
    }
  })
  return sortByRecency(feed).slice(0, 30)
}

// export const getFeed: OutputSelector<iState, iAlbum[], any> = createSelector(
//   getFollowedAlbums(),
//   getAlbums(),
//   (followedAlbums: iAlbum[], albums: iAlbum[]) => {
//     let feed: iAlbum[] = albums.map((album) => {
//       return {
//         ...album,
//         _isFollowed:
//           followedAlbums.filter(
//             (followedAlbum) => followedAlbum.id === album.id,
//           ).length > 0,
//       }
//     })

//     return sortByRecency(feed).slice(0, 30)
//   },
// )
