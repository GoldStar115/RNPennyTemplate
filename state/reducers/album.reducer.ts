import { iAlbum, iAction } from '@types'

export const ALBUM_ACTIONS = {
  RECEIVE: 'ALBUM_ACTION.RECEIVE',
}

export const receiveAlbums = (albums: iAlbum[]) => {
  return {
    type: ALBUM_ACTIONS.RECEIVE,
    payload: albums,
  }
}

const initialState: iAlbum[] = []

export const AlbumReducer = (state = initialState, action: iAction) => {
  switch (action.type) {
    case ALBUM_ACTIONS.RECEIVE:
      return action.payload

    default:
      return state
  }
}
