import { 
    VALUE_CHANGED, VALUE_CHANGED_SUGESTION, VALUE_CHANGED_ITEM_SUGESTION, SAVE_FORM,
    VALUE_CHANGED_KEY_DOWN_SUGESTION, REMOVE_ITEM_SUGGESTION } from '../constants/CID';
import service from '../../services/cid';
import { alertError, alertSuccess } from './alert';

export const resetForm = () => ({ type : SAVE_FORM });
export const changeValueTEXT = ({ name , value }) =>  ({ type : VALUE_CHANGED, payload : { name , value } });
export const changeValue = payload =>  ({ type : VALUE_CHANGED_SUGESTION, payload });
export const changeValueSugestion =  payload => ({ type : VALUE_CHANGED_ITEM_SUGESTION, payload });
export const changeKeyDown = payload => ({ type : VALUE_CHANGED_KEY_DOWN_SUGESTION, payload });
export const removeItemSuggestionCID = payload =>({ type : REMOVE_ITEM_SUGGESTION, payload });

export const saveCID = (name, description, symptoms, causes, interventions, reference) => async dispatch => {
    try {
        await service.create({
            name,
            description,
            symptoms : { arr : symptoms },
            causes : { arr : causes },
            interventions,
            reference
        });
        dispatch(alertSuccess('CID criado com sucesso'));
        dispatch({ type : SAVE_FORM })
        return true;
    } catch ({ response }) {
        dispatch(alertError(response.data.message));
        return false;
    }
}