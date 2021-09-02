import { subscribe as subscribeToPresenterUpdates } from './presenterSubscription'
import { subscribe as subscribeToAlbumUpdates } from './albumSubscription'
import { subscribe as subscribeToTrackUpdates } from './trackSubscription'
import { subscribe as subscribeToFeatureUpdates } from './featureSubscription'
import { subscribe as subscribeToJourneyUpdates } from './journeySubscription'
import { subscribe as subscribeToChatRooms } from './chatRoomSubscription'

export function subscribeAll() {
  subscribeToPresenterUpdates()
  subscribeToAlbumUpdates()
  subscribeToTrackUpdates()
  subscribeToJourneyUpdates()
  subscribeToFeatureUpdates()
  subscribeToChatRooms()
}

export * from './user'
export { ChatRoomSubscription } from './chatRoomSubscription'
