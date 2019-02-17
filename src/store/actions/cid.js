import { VALUE_CHANGED, GET_ITEM, GET_LIST,  DELETE_CID, SAVE_FORM } from '../constants/CID';
import service from '../../services/cid';
import {  alertSuccess } from './alert';

export const changeValue = ({ name , value }) =>  ({ type : VALUE_CHANGED, payload : { name , value } });

export const getListCID = () => async dispatch => {
    try {
        const {data} = await service.getAll();
        dispatch({ type : GET_LIST, payload : data.data.cids });
    } catch (error) {
        console.log(error);
    }
}

export const getCID = item => async dispatch => {
    try {
        const {data} = await service.getItem(item.id)
        dispatch({ type : GET_ITEM, payload : data.data.cid });
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

export const updateCID = ({id,name, description, symptoms, causes, interventions,reference }) => async dispatch => {
    try {
        await service.updateItem({
            id,
            name,
            description,
            symptoms : { arr : symptoms },
            causes : { arr : causes },
            interventions,
            reference 
        })
        dispatch(alertSuccess('CID atualizado com sucesso'));
        dispatch({ type : SAVE_FORM })
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

export const deleteCID = item => async dispatch => {
    try {
        await service.deleteItem(item.id)
        dispatch({ type : DELETE_CID, payload : item });
        dispatch(alertSuccess('CID excluído com sucesso'));
    } catch (error) {
        console.log(error);
    }
}

