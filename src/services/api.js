import axios from 'axios';

//const baseURL = 'https://localhost:1337';
const baseURL = 'https://aee-piloto.herokuapp.com';

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