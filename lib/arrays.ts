import { iTrack } from '@types'

export const addTrackNumbers = (tracks: iTrack[]) => {
  const albumIdSet = new Set(tracks.map((track) => track.albumId))
  albumIdSet.forEach((albumId) => {
    tracks
      .filter((track) => track.albumId === albumId)
      .sort((a, b) => a.position - b.position)
      .forEach((track, index) => {
        track.number = index + 1
      })
  })
}

export const first = (array: Array<any>, filter: Function) => {
  if (array) {
    const hits = array.filter((item) => filter(item))
    if (hits.length > 0) {
      return hits[0]
    }
  }
  return null
}

export const sortByRecency = (array: Array<any>) =>
  array.sort((a, b) => b.createdate.toDate() - a.createdate.toDate())

export const compact = (array: Array<any>) =>
  array?.filter((el) => {
    return el != null
  })
