import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default store = createStore(rootReducer, applyMiddleware(thunk))