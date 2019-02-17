import { api, apiGraphQL } from './api-strapi';

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
const create = async form =>  await api.post('/cids', form)

const getAll = async () => await apiGraphQL.post('', { query: LIST_CID })

const getItem = async id => apiGraphQL.post('', { query : ITEM_CID(id) })

const updateItem = async item => await api.put(`/cids/${item.id}`, item) ;

const deleteItem = async id => api.delete(`/cids/${id}`)

export default {
    create,
    getAll,
    getItem,
    deleteItem,
    updateItem,
}