import { api, apiGraphQL } from './api'
import { request } from './requestLoading'

const ITEM_CID =  id => `
    query {
        cid (id: "${id}") {
            id,
            name,
            description,
            symptoms,
            causes,
            interventions,
            reference
        }
    }
`
const LIST_CID = `
    query {
        cids {
            id
            name
        }
    }
`
const create = async (form, dispatch) =>  await request(api.post('/cids', form), dispatch)

const getAll = async (dispatch) => await request(apiGraphQL.post('', { query: LIST_CID }), dispatch)

const getItem = async (id, dispatch) => await request(apiGraphQL.post('', { query : ITEM_CID(id) }), dispatch)

const updateItem = async (item, dispatch) => await request(api.put(`/cids/${item.id}`, item), dispatch)

const deleteItem = async (id, dispatch) => await request(api.delete(`/cids/${id}`), dispatch)

export default {
    create,
    getAll,
    getItem,
    deleteItem,
    updateItem,
}