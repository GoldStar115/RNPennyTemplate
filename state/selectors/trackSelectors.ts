import { iState, iAlbum, iTrack } from '@types'
import { getAlbum } from './albumSelectors'

export const getTrack = (id: string) => (state: iState): iTrack =>
  state.tracks.find((track) => track.id === id)

export const getTracks = () => (state: iState): iTrack[] => state.tracks

export const getTracksForAlbum = (album: iAlbum) => (
  state: iState,
): iTrack[] => {
  return state.tracks
    .filter((track) => track.albumId === album.id)
    .sort((a, b) => a.position - b.position)
}

// export const getNextTrack = (track: iTrack) => (state: iState) => {
//   if (track) {
//     const album = getAlbum(track.albumId)(state)
//     const tracks = getTracksForAlbum(album)(state)
//     const trackIndex = tracks.findIndex(
//       (currentTrack) => currentTrack.id === track.id,
//     )
//     if (trackIndex < tracks.length - 1) {
//       return tracks[trackIndex + 1]
//     }
//   }
//   return null
// }

// export const getPreviousTrack = (track: iTrack) => (state: iState) => {
//   if (track) {
//     const album = getAlbum(track.albumId)(state)
//     const tracks = getTracksForAlbum(album)(state)
//     const trackIndex = tracks.findIndex(
//       (currentTrack) => currentTrack.id === track.id,
//     )
//     if (trackIndex > 0) {
//       return tracks[trackIndex - 1]
//     }
//   }
//   return null
// }

export const getTrackAndQueue = (track: iTrack) => (state: iState) => {
  if (track) {
    const album = getAlbum(track.albumId)(state)
    const tracks = getTracksForAlbum(album)(state)
    const trackIndex = tracks.findIndex(
      (currentTrack) => currentTrack.id === track.id,
    )
    return tracks.slice(trackIndex)
  }
  return []
}
