import { fromJS } from 'immutable';
import { causas, sintomas } from '../../utils';
import { VALUE_CHANGED_SUGESTION, VALUE_CHANGED_ITEM_SUGESTION, SAVE_FORM, GET_ITEM,
    VALUE_CHANGED_KEY_DOWN_SUGESTION, REMOVE_ITEM_SUGGESTION, VALUE_CHANGED } from '../constants/CID';
import { valueChangedSuggestion, valuechangedItemSuggestion, 
    valueChangedKeyDownSuggestion, removeItemSuggestion  } from '../../helpers/suggestionChip';

const INITIAL_STATE = fromJS({
    id : '', 
    name : '',
    description : '',
    // causes
    causesInputValue: '',
    causesSelectedItem: [],
    causesSuggestions : [...causas],
    //symptoms
    symptomsInputValue: '',
    symptomsSelectedItem: [],
    symptomsSuggestions : [...sintomas],
    // interventions
    interventions: '',
    reference : ''
});

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ITEM :
            return state.withMutations( mutableState => {
                const { payload } = action;
                mutableState
                    .set('id', payload.id)
                    .set('name', payload.name)
                    .set('description', payload.description)
                    .set('causesSelectedItem', payload.causes.arr)
                    .set('symptomsSelectedItem', payload.symptoms.arr)
                    .set('interventions', payload.interventions)
                    .set('reference', payload.reference)
            })
        case SAVE_FORM :
            return state.withMutations( mutableState => {
                mutableState
                    .set('name', '')
                    .set('description', '')
                    .set('causesSelectedItem', [])
                    .set('causesInputValue', '')
                    .set('symptomsSelectedItem', [])
                    .set('symptomsInputValue', '')
                    .set('interventions', '')
                    .set('reference', '')
            });
        case VALUE_CHANGED :
            return state.withMutations( mutableState => {
                mutableState.set(action.payload.name, action.payload.value);
            });
        case VALUE_CHANGED_SUGESTION :
            return valueChangedSuggestion(state, action);
        case VALUE_CHANGED_ITEM_SUGESTION :  
            return valuechangedItemSuggestion(state, action);
        case VALUE_CHANGED_KEY_DOWN_SUGESTION :
            return valueChangedKeyDownSuggestion(state, action);
        case REMOVE_ITEM_SUGGESTION : 
            return removeItemSuggestion(state, action);
        default :
            return state;
    }
}