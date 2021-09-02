import { store } from '@state'

export const select = (selector: Function) => {
  return selector(store.getState())
}
