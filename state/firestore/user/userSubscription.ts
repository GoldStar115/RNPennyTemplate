import { UserRatingSubscription } from './userRatingSubscription'
import { UserFollowsSubscription } from './userFollowsSubscription'
import { UserProgressSubscription } from './userProgressSubscription'

export function subscribeToUserData(userId: string) {
  UserRatingSubscription.subscribe(userId)
  UserFollowsSubscription.subscribe(userId)
  UserProgressSubscription.subscribe(userId)
}

export function unsubscribeFromUserData() {
  UserRatingSubscription.unsubscribe()
  UserFollowsSubscription.unsubscribe()
  UserProgressSubscription.unsubscribe()
}

export const toggleRating = UserRatingSubscription.toggle
export const toggleFollowing = UserFollowsSubscription.toggle
