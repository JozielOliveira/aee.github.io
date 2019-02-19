import { api, apiGraphQL } from './api';

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
const create = async form =>  await api.post('/avaliations', form)

const getAll = async () => await apiGraphQL.post('', { query: LIST })

const getItem = async id => apiGraphQL.post('', { query : ITEM(id) })

const updateItem = async item => await api.put(`/avaliations/${item.id}`, item) ;

const deleteItem = async id => api.delete(`/avaliations/${id}`);

export default {
    create,
    getAll,
    getItem,
    deleteItem,
    updateItem,
}