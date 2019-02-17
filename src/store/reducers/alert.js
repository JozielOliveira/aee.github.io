import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({ 
    msg : 'Alert testes',
    open : false, 
    variant : 'error'
});

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {   
        case 'OPEN_ALERT' :
            return state.withMutations((mutableState) => {
                mutableState.set('msg', action.msg)
                .set('open', true)
                .set('variant', action.variant);
            });
        case 'CLOSE_ALERT' : 
            return state.withMutations((mutableState) => mutableState.set('open', false) );
        default : 
            return state;
    }
}