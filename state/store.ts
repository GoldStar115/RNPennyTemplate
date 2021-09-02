import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { RootReducer } from './reducers'
export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware()),
)
