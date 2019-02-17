import { fromJS } from 'immutable';
import { etaria } from '../../utils';
import { GET_ITEM, SUGGESTION, FORM_QUESTION, RESET_FORM } from '../constants/Avaliation';
import { valueChangedSuggestion, valuechangedItemSuggestion, 
    valueChangedKeyDownSuggestion, removeItemSuggestion  } from '../../helpers/suggestionChip';
    
const INITIAL_STATE = fromJS({ 
    id : '',
    name : '',
    description : '', 
    value : 0,
    valueOption : 'text',
    increment: 0,
    question : '',
    values: '',
    options : [],
    form : [],
    score : [],
    target_audienceInputValue: '',
    target_audienceSelectedItem: [],
    target_audienceSuggestions : [...etaria],
});

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ITEM :
            return state.withMutations( mutableState => {
                const { payload } = action;
                mutableState
                    .set('id', payload.id)
                    .set('name', payload.title)
                    .set('description', payload.description)
                    .set('target_audienceSelectedItem', payload.target_audience.arr)
                    .set('form', payload.questions.arr)
            })
        case SUGGESTION.VALUE_CHANGED_SUGESTION :
            return valueChangedSuggestion(state, action);
        case SUGGESTION.VALUE_CHANGED_ITEM_SUGESTION :  
            return valuechangedItemSuggestion(state, action);
        case SUGGESTION.VALUE_CHANGED_KEY_DOWN_SUGESTION :
            return valueChangedKeyDownSuggestion(state, action);
        case SUGGESTION.REMOVE_ITEM_SUGGESTION : 
            return removeItemSuggestion(state, action);  
        case FORM_QUESTION.VALUE_CHANGED_OPTION :
            return state.withMutations((mutableState) => {
                mutableState.set(action.payload.name, action.payload.data);
            });
        case FORM_QUESTION.ADD_OPTION :
            return state.withMutations((mutableState) => {
                mutableState.set('increment', mutableState.get('increment') + 1)
                mutableState.set('options', 
                    [...mutableState.get('options'), 
                        { 
                            label : mutableState.get('values'), 
                            value : `${mutableState.get('increment')}` }]);
                mutableState.set('values', '');
            });
        case FORM_QUESTION.REMOVE_OPTION : 
            return state.withMutations( mutableState => {
                mutableState.set('options', mutableState.get('options').filter( i => i !== action.payload ));
            })
        case FORM_QUESTION.SAVE_QUESTION :
            return state.withMutations((mutableState) => {
                let valueOption = mutableState.get('valueOption'), question = mutableState.get('question');
                if ( valueOption === 'text' || valueOption === 'switch')
                    mutableState.set('form', [...mutableState.get('form'), {
                        question,
                        type : valueOption,
                    }]);
                else
                    mutableState.set('form', [...mutableState.get('form') , {
                        question,
                        type : valueOption,
                        options : mutableState.get('options')
                    }]);
                // Reiniciar    
                mutableState.set('value', 0)
                .set('values', '')
                .set('question', '')
                .set('increment', 0)
                .set('options', []);
            });
        case RESET_FORM :
            return state.withMutations( mutableState =>
                mutableState.set('name', '')
                .set('description', '')
                .set('form', [])
                .set('score', [])
                .set('target_audienceSelectedItem', [])
            )
        default :
            return state;
    }
}