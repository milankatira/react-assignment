import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import combineReducers from './CombineReducer'

const Store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default Store;