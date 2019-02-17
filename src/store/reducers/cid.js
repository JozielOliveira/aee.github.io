import { fromJS } from 'immutable';
import {  GET_LIST, DELETE_CID  } from '../constants/CID';

const INITIAL_STATE = fromJS({ 
    listCID : []
});

export default (state = INITIAL_STATE, action) => {
    console.log('create CID ',action.type)
    switch(action.type) {
        case GET_LIST : 
            return state.withMutations( mutableState => {
                mutableState.set('listCID', action.payload);
            });
        case DELETE_CID : 
            return state.withMutations( mutableState => 
                mutableState
                    .set(`listCID`, mutableState.get(`listCID`).filter( i => i !== action.payload) )
            );
        default :
            return state;
    }
}