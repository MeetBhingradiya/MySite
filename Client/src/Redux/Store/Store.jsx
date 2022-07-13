// ! Store
import thunk from 'redux-thunk'
import Reducers from '../Reducers'
import { applyMiddleware , createStore } from 'redux'

export const Store = createStore(Reducers, {}, applyMiddleware(thunk))