import { iState, iPresenter, iAlbum } from '@types'
import { getPresenter } from './presenterSelectors'
import { getAlbum } from './albumSelectors'
import { compact, sortByRecency } from '@lib'

export const getFeaturedPresenters = () => (state: iState): iPresenter[] =>
  state.features
    .filter((feature) => feature.contentType === 'presenters')
    .map((feature) => getPresenter(feature.contentId)(state))

export const getFeaturedAlbums = () => (state: iState): iAlbum[] =>
  compact(
    sortByRecency(
      state.features.filter((feature) => feature.contentType === 'albums'),
    ).map((feature) => getAlbum(feature.contentId)(state)),
  )
