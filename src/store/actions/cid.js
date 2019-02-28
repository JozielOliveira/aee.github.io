import { VALUE_CHANGED, GET_ITEM, GET_LIST,  DELETE_CID, SAVE_FORM } from '../constants/CID'
import service from '../../services/cid'
import {  alertSuccess } from './alert'

export const changeValue = ({ name , value }) =>  ({ type : VALUE_CHANGED, payload : { name , value } })

export const getListCID = () => async dispatch => {
    const { data, error } = await service.getAll(dispatch)
    if (error)
        console.log(error)
    else
        dispatch({ type : GET_LIST, payload : data.data.cids })
}

export const getCID = item => async dispatch => {
    const { data, error } = await service.getItem(item.id, dispatch)
    if (error) {
        console.log(error)
        return false
    } else {
        dispatch({ type : GET_ITEM, payload : data.data.cid })
        return true
    }
}

export const updateCID = ({id,name, description, symptoms, causes, interventions,reference }) => async dispatch => {
    const cid = {
        id,
        name,
        description,
        symptoms : { arr : symptoms },
        causes : { arr : causes },
        interventions,
        reference 
    }
    const { error } = await service.updateItem(cid, dispatch)
    if (error) {
        console.log(error)
        return false
    } else {
        dispatch(alertSuccess('CID atualizado com sucesso'))
        dispatch({ type : SAVE_FORM })
        return true
    }
}

export const deleteCID = item => async dispatch => {
    const { error } = await service.deleteItem(item.id, dispatch)
    if (error){
        console.log(error)
    } else {
        dispatch({ type : DELETE_CID, payload : item })
        dispatch(alertSuccess('CID excluído com sucesso'))
    }
}

