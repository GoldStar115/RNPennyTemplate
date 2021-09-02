import { Colors } from '@styles'
import { iAlbum, iPresenter } from '@types'
import { Platform, Share, ShareContent, ShareOptions } from 'react-native'
import { getAlbumSlug, getPresenterSlug } from '@helpers'
import { Analytics } from './Analytics'

const getSharingParams = ({
  title,
  message,
  url,
}: {
  title: string
  message: string
  url: string
}): {
  content: ShareContent
  options: ShareOptions
} => {
  const content = {
    message: Platform.OS == 'ios' ? message : `${message} \n\n${url}`,
    // iOS only
    url,
    // android only
    // title,
  }
  const options = {
    // iOS only
    // subject: title,
    tintColor: Colors.mint,
    // Android only
    // dialogTitle: title,
  }
  return { content, options }
}

const share = async (title: string, message: string, url: string) => {
  const { content, options } = getSharingParams({ title, message, url })
  const shareResult = await Share.share(content, options)
  if (shareResult.action === Share.sharedAction) {
    return {
      shared: true,
      activityType: shareResult.activityType,
    }
  } else if (shareResult.action === Share.dismissedAction) {
    return {
      shared: false,
    }
  }
}

export const sharePresenter = async (presenter: iPresenter) => {
  const result = await share(
    `Check out ${presenter.firstName} ${presenter.lastName} on Penny`,
    `${presenter.firstName} ${presenter.lastName} on Penny`,
    getPresenterSlug(presenter, true),
  )
  if (result.shared) {
    Analytics.sharePresenter(presenter, result.activityType)
  }
}

export const shareAlbum = async (album: iAlbum) => {
  const result = await share(
    `"${album.title}" on Penny`,
    `Listen to "${album.title}" on Penny`,
    getAlbumSlug(album, true),
  )
  if (result.shared) {
    Analytics.shareAlbum(album, result.activityType)
  }
}
