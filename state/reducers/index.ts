import { combineReducers } from 'redux'
import { PresenterReducer } from './presenter.reducer'
import { AlbumReducer } from './album.reducer'
import { TrackReducer } from './track.reducer'
import { FeatureReducer } from './feature.reducer'
import { PlayerReducer } from './player.reducer'
import { UserReducer } from './user.reducer'
import { UIReducer } from './ui.reducer'
import { JourneyReducer } from './journey.reducer'
import { ChatRoomReducer } from './chatRoom.reducer'

export const RootReducer = combineReducers({
  presenters: PresenterReducer,
  albums: AlbumReducer,
  tracks: TrackReducer,
  journeys: JourneyReducer,
  features: FeatureReducer,
  player: PlayerReducer,
  user: UserReducer,
  ui: UIReducer,
  chatRooms: ChatRoomReducer,
})

export * from './presenter.reducer'
export * from './album.reducer'
export * from './track.reducer'
export * from './feature.reducer'
export * from './player.reducer'
export * from './user.reducer'
export * from './ui.reducer'
export * from './journey.reducer'
export * from './chatRoom.reducer'
