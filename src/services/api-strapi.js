import axios from 'axios';

const baseURL = 'http://localhost:1337';

export const api = axios.create({ baseURL });
export const api_auth = axios.create({ 
    baseURL, 
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
});

export const apiGraphQL = axios.create({
    baseURL: `${baseURL}/graphql`,
});