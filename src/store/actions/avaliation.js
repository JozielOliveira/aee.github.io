import { GET_LIST,  DELETE_ITEM, GET_ITEM } from '../constants/Avaliation'
import service from '../../services/avaliation'
import { alertSuccess } from './alert'

export const getItem = item => async dispatch => {
    const { data, error } = await service.getItem(item.id, dispatch)
    if (error) {
        return false
    } else {
        dispatch({ type : GET_ITEM, payload : data.data.avaliation })
        return true
    }
}

export const getAll = () => async dispatch => {
    const { data, error } = await service.getAll(dispatch)
    if (error)
        console.log(error)
    else
        dispatch({ type : GET_LIST, payload : data.data.avaliations })
}

export const deleteItem = item => async dispatch => {
    const { error } = await service.deleteItem(item.id, dispatch)
    if (error) {
        console.log(error)
    } else {
        dispatch({ type : DELETE_ITEM, payload : item })
        dispatch(alertSuccess('Avaliação excluído com sucesso'))
    }
}