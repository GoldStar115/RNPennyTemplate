import { URL } from 'react-native-url-polyfill'

export const getParamsFromURL = (url: string) => {
  const urlObject = new URL(url)
  let params: any = {}
  for (let [key, value] of urlObject.searchParams) {
    params[key] = value
  }
  return params
}
