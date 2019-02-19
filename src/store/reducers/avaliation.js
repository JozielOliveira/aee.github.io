import { fromJS } from 'immutable';
import {  GET_LIST, DELETE_ITEM  } from '../constants/Avaliation';

const INITIAL_STATE = fromJS({ 
    list : []
});

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_LIST : 
            return state.withMutations( mutableState => {
                mutableState.set('list', action.payload);
            });
        case DELETE_ITEM : 
            return state.withMutations( mutableState => 
                mutableState
                    .set(`list`, mutableState.get(`list`).filter( i => i !== action.payload) )
            );
        default :
            return state;
    }
}