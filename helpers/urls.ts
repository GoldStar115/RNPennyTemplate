import { iAlbum, iPresenter } from '@types'
import slugify from 'slugify'
import { store } from '@state'
import { getPresenterForAlbum } from '@selectors'
import { Config } from '../services/Config'

export const getAlbumSlug = (album: iAlbum, short: boolean = false) => {
  if (short) {
    return `${Config.external.webUrl}/albums/${album.id}`
  } else {
    const presenter = getPresenterForAlbum(album)(store.getState())
    const presenterName = slugify(
      `${presenter?.firstName}-${presenter?.lastName}`,
      { lower: true },
    )
    const categorySlug = slugify(album.category1, { lower: true })
    const titleIdSlug = `${slugify(`${album.title}`, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    })}-${album.id}`
    return `${Config.external.webUrl}/albums/${presenterName}/${categorySlug}/${titleIdSlug}`
  }
}

export const getPresenterSlug = (
  presenter: iPresenter,
  short: boolean = false,
) => {
  if (short) {
    return `${Config.external.webUrl}/presenters/${presenter.id}`
  } else {
    const nameIdSlug = `${slugify(
      `${presenter.firstName}-${presenter.lastName}`,
      { lower: true },
    )}-${presenter.id}`
    return `${Config.external.webUrl}/presenters/${nameIdSlug}`
  }
}
