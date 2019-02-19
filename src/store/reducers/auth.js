import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
    username: '',
    email : '',
    password : '',
    passwordConfirmation: '',
    code : '',
    redirectToReferrer : localStorage.getItem('jwt') !== null,
});

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'VALUE_CHANGED_LOGIN' :
            return state.withMutations((mutableState) => mutableState.set(action.payload.name, action.payload.data));
        case 'LOGIN' :
            return state.withMutations((mutableState) => mutableState.set('redirectToReferrer', true));
        case 'LOGOUT' :
            return state.withMutations((mutableState) => mutableState.set('redirectToReferrer', false));
        default :
            return state;
    }
}