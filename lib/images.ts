import { URL } from 'react-native-url-polyfill'

export const getCloudimageUri = (
  uri: string,
  width: number,
  height: number,
) => {
  const url = new URL(uri)
  url.searchParams.set('w', width?.toString())
  url.searchParams.set('h', height?.toString())
  url.searchParams.set('org_if_sml', '1')
  const cloudimageUrl = 'https://atozesdoro.cloudimg.io/v7/'
  const transformedUri = `${cloudimageUrl}${url.toString()}`
  return transformedUri
}
