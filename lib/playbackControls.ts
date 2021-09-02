import TrackPlayer, { Track } from 'react-native-track-player'
import {
  getAlbumForTrack,
  getPresenterForAlbum,
  getTracksForAlbum,
} from '@selectors'
import { iTrack } from '@types'
import { select } from './redux'
import { Analytics } from '@services'

interface iPlayTrack {
  track: iTrack
  position?: number
  autoplay?: boolean
}

export const PlaybackControls = {
  playTrack: async ({ track, position, autoplay = true }: iPlayTrack) => {
    const album = select(getAlbumForTrack(track))
    const trackQueue = select(getTracksForAlbum(album))

    const presenter = select(getPresenterForAlbum(album))
    const queue: Track[] = trackQueue.map((queueEntry: Track) => {
      return {
        id: queueEntry.id,
        url: queueEntry.file.src,
        title: queueEntry.title,
        artist: `${presenter.firstName} ${presenter.lastName}`,
        album: album.title,
        artwork: album.coverPicture?.src,
      }
    })
    await TrackPlayer.reset()
    await TrackPlayer.add(queue)
    await TrackPlayer.skip(track.id)

    if (position) {
      await TrackPlayer.seekTo(position)
    }
    if (autoplay) {
      await TrackPlayer.play()
    }
  },
}
