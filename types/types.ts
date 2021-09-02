import { iPlayerReducerState } from '@reducers'
import { iUser } from './userTypes'

export interface iFirebaseTimestamp {
  _seconds: number
}

export interface iPresenter {
  id: string
  firstName: string
  lastName: string
  handle: string
  bio: string
  profilePicture: iPicture
  backgroundPicture: iPicture
  corporateLogoPicture: iPicture
  createdate: iFirebaseTimestamp
  lastupdate: iFirebaseTimestamp
  idStatement: string
  powerReadCount: number
  albumCount: number
  followersCount: number
  isCorporate: boolean
  corporationName: string
}

export interface iAlbum {
  id: string
  presenterId: string
  isPublished: boolean
  title: string
  titleHook: string
  descriptionShort: string
  descriptionHook: string
  description: string
  category1: string
  category2: string
  coverPicture: iPicture
  trackCount: number
  ratingsCount: 5
  ratingsAverage: 3.2
  createdate: any
  lastupdate: any
  updatedby: string
  createdby: string
  length: number
  journeyId?: string
  _isFollowed?: boolean // helper tag that is not part of actual data on firebase but added via selectors
}

export interface iJourney {
  id: string
  title: string
  descriptionShort: string
  description: string
  category1: string
  coverPicture: iPicture
  createdate: any
  lastupdate: any
  updatedby: string
  createdby: string
  length: number
}

export interface iTrack {
  id: string
  albumId: string
  title: string
  description: string
  position: number
  file: iFile
  createdate: any
  lastupdate: any
  updatedby: string
  createdby: string
  number: number
  length: number
}

export type tAuthenticationState =
  | 'default'
  | 'linkSent'
  | 'validatingEmailLink'
  | 'errorValidatingEmailLink'

export interface iUI {
  isLoginModalVisible: boolean
  isLoggedInModalVisible: boolean
  isPlayerModalVisible: boolean
  isWelcomeToPremiumModalVisible: boolean
  authenticationState: tAuthenticationState
  lastEventBeforeLogin: string
  localStorageLoaded: boolean
}

export interface iState {
  presenters: iPresenter[]
  albums: iAlbum[]
  tracks: iTrack[]
  journeys: iJourney[]
  features: iFeaturedContent[]
  player: iPlayerReducerState
  user: iUser
  ui: iUI
  chatRooms: iChatRoom[]
}

export interface iAction {
  type: string
  payload?: any
}

export interface iFeaturedContent {
  id: string
  contentId: string
  contentType: string
  createdate: any
  createdby: string
  lastupdate: any
  updatedby: string
}

interface iPicture {
  title: string
  src: string
}
export interface iFile {
  title: string
  src: string
}

export interface iCategory {
  label: string
  id: string
  color: string
  icon: any
  backgroundPicture: any
  description: string
}

export interface iCategories {
  [key: string]: iCategory
}

export interface iDimensions {
  height: number
  width: number
}

export interface iLoginSource {
  lastEventBeforeLogin: string
  provider?: string
}

export interface iChatRoom {
  id: string
  title: string
  description: string
  createdByUserId: string
  createdByUserName: string
}
