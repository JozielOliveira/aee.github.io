import { fromJS } from 'immutable'

const INITIAL_STATE = fromJS({
    active : false
})

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'loading_global':
            return state.withMutations( mutableState => mutableState.set('active', action.payload))
        default :
            return state
    }
}