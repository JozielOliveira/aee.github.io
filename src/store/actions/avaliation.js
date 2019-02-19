import { GET_LIST,  DELETE_ITEM, GET_ITEM } from '../constants/Avaliation';
import service from '../../services/avaliation';
import {  alertSuccess } from './alert';


export const getItem = item => async dispatch => {
    try {
        const {data} = await service.getItem(item.id)
        dispatch({ type : GET_ITEM, payload : data.data.avaliation });
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

export const getAll = () => async dispatch => {
    try {
        const {data} = await service.getAll();
        dispatch({ type : GET_LIST, payload : data.data.avaliations });
    } catch (error) {
        console.log(error);
    }
}

export const deleteItem = item => async dispatch => {
    try {
        await service.deleteItem(item.id)
        dispatch({ type : DELETE_ITEM, payload : item });
        dispatch(alertSuccess('Avaliação excluído com sucesso'));
    } catch (error) {
        console.log(error);
    }
}