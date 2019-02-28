import { api, apiGraphQL } from './api'
import { request } from './requestLoading'
const ITEM =  id => `
    query {
        avaliation (id: "${id}") {
            id
            title
            description
            questions
            score
            target_audience
        }
    }
`
const LIST = `
    query {
        avaliations {
            id
            title
            target_audience
        }
    }
` 
const create = async (form, dispatch) =>  await request(api.post('/avaliations', form), dispatch)

const getAll = async (dispatch) => await request(apiGraphQL.post('', { query: LIST }), dispatch)

const getItem = async (id, dispatch) => await request(apiGraphQL.post('', { query : ITEM(id) }), dispatch)

const updateItem = async (item, dispatch) => await request(api.put(`/avaliations/${item.id}`, item), dispatch)

const deleteItem = async (id, dispatch) => request(api.delete(`/avaliations/${id}`), dispatch)

export default {
    create,
    getAll,
    getItem,
    deleteItem,
    updateItem,
}