import { iFirebaseTimestamp } from './types'

export interface iRating {
  id: string
  contentType: string
  contentId: string
  userId: string
  value: number
}

export interface iFollows {
  id: string
  contentType: string
  contentId: string
  userId: string
}

export interface iUser {
  id?: string
  name?: string
  email?: string
  handle?: string
  providerId?: string
  ratings?: iRating[]
  follows?: iFollows[]
  progress?: iUserProgress[]
}

export interface iChatRoomParticipant {
  userId?: string
  name?: string
  joinedAt?: iFirebaseTimestamp
  role: 'host' | 'audience'
  agoraUserId?: number
  isMuted?: boolean
}

interface iCompletedTracks {
  [key: string]: number
}
export interface iUserProgress {
  id: string
  progressPercent: number
  completedTracks: iCompletedTracks
}
