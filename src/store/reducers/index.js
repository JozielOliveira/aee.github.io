import { combineReducers } from 'redux';
import createAvaliation from './createAvaliation';
import auth from './auth';
import alert from './alert';
import cid from './cid';
import createCID from './createCID';
import avaliations from './avaliation';

export const reducers = combineReducers({
    alert,
    auth,
    avaliations,
    createAvaliation,
    cid,
    createCID,
});