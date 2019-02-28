import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createAvaliation from './createAvaliation'
import auth from './auth'
import alert from './alert'
import cid from './cid'
import createCID from './createCID'
import avaliations from './avaliation'
import loading from './loading'

const reducers = combineReducers({
    alert,
    auth,
    avaliations,
    createAvaliation,
    cid,
    createCID,
    loading
})

export const store = createStore(reducers, applyMiddleware(thunk))