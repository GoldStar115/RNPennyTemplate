import AsyncStorage from '@react-native-community/async-storage'
import { setLocalStorageLoaded } from '@reducers'
import { iTrack } from '@types'
import { store } from '../store'

interface iLocalStorage {
  firstOpen?: boolean
  signInEmail?: string
  lastPlayedTrack?: string
  lastPlayedTrackProgress?: number
}

const initialStorage: iLocalStorage = {
  firstOpen: true,
  signInEmail: '',
  lastPlayedTrack: null,
  lastPlayedTrackProgress: null,
}

export let localStorage: iLocalStorage = initialStorage

const persistLocalStorage = () => {
  try {
    AsyncStorage.setItem('STORAGE', JSON.stringify(localStorage))
    console.log('write local storage', { localStorage })
  } catch (error) {
    console.log('error setting local storage')
  }
}

const readLocalStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('STORAGE')
    if (value !== null) {
      localStorage = JSON.parse(value)
    }
    console.log('finished loading local storage, dispatch', { localStorage })
    store.dispatch(setLocalStorageLoaded())
  } catch (error) {
    console.log('error reading local storage', error)
  }
}

export const setLocalStorageValue = (values: iLocalStorage) => {
  localStorage = { ...localStorage, ...values }
  persistLocalStorage()
}

export const resetLocalStorage = () => {
  localStorage = { ...initialStorage }
  persistLocalStorage()
}

export const initLocalStorage = () => {
  readLocalStorage()
}

export const saveTrackProgress = (track: iTrack, progress: number) => {
  localStorage = {
    ...localStorage,
    lastPlayedTrack: track.id,
    lastPlayedTrackProgress: progress,
  }
  persistLocalStorage()
}
