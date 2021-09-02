import { iState, iPresenter, iTrack, iAlbum, iCategory, iJourney } from '@types'
import { sortByRecency } from '@lib'

export const getJourney = (id: string) => (state: iState): iJourney =>
  state.journeys.find((journey) => journey.id === id)

export const getJourneys = () => (state: iState): iJourney[] => state.journeys
