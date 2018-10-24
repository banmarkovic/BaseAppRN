import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import serviceReducer from './ServiceReducer'

const AppReducers = combineReducers({
    serviceReducer,
});

const rootReducer = (state, action) => {
	return AppReducers(state,action)
}

export default rootReducer