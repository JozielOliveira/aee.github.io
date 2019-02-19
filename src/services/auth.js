import { api } from './api';

const register = async ( username, email, password ) =>  
  await api.post('/auth/local/register', { username, email, password })

const login =  async ( identifier, password ) => 
  await api.post('/auth/local', { identifier, password })

const forgotte_password = async email => 
  await api.post('/auth/forgot-password', {
    email,
    url: `http://localhost:3000/auth/reset-password`
  })

export const reset_password = async ( code, password, passwordConfirmation ) => 
  await api.post('/auth/reset-password', { code, password, passwordConfirmation })

export default {
  register,
  login,
  forgotte_password,
  reset_password
}