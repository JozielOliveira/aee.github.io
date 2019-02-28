import { api } from './api'
import { request } from './requestLoading'

const register = async ( username, email, password, dispatch ) =>  
  await request(api.post('/auth/local/register', { username, email, password }), dispatch)

const login =  async ( identifier, password, dispatch ) =>  
  await request(api.post('/auth/local', { identifier, password }), dispatch)

const forgotte_password = async (email, dispatch) => 
  await request(api.post('/auth/forgot-password', {
    email,
    url: `https://aee-js.firebaseapp.com/auth/reset-password`
  }), dispatch)

export const reset_password = async ( code, password, passwordConfirmation, dispatch ) => 
  await request(api.post('/auth/reset-password', { code, password, passwordConfirmation }), dispatch)

export default {
  register,
  login,
  forgotte_password,
  reset_password
}