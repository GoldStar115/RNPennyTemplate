import { subscribeAll } from './firestore'
import { initLocalStorage } from './localStorage'
export * from './store'
export * from './localStorage'

export function subscribeToFirestore() {
  subscribeAll()
}

initLocalStorage()
