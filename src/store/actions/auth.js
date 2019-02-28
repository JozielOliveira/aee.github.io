import auth from '../../services/auth'
import { alertError, alertSuccess } from './alert'

export const changeValue = e => {
    const { name, value } = e.target
    return { type : 'VALUE_CHANGED_LOGIN', payload : { name , data : value } }
}

export const login = ( email, password ) => async dispatch => {
    const { data, error } = await auth.login(email, password, dispatch)
    if (error) {
        dispatch(alertError(error))
    } else if(!data.user.blocked && data.user.confirmed){
        localStorage.setItem('jwt', data.jwt)
        localStorage.setItem('user', data.user.id)
        localStorage.setItem('name', data.user.username)
        localStorage.setItem('email', data.user.email)
        localStorage.setItem('role', data.user.role.type)
        dispatch({ type : 'LOGIN'})
    } else {
        dispatch(alertError('Usuário bloqueado'))
    }
}

export const singup = ( username, email, password ) => async dispatch => {
    const { data, error } = await auth.register( username, email, password, dispatch)
    if (error){
        dispatch(alertError(error))
    } else {
        localStorage.setItem('jwt', data.jwt)
        dispatch(alertSuccess('Cadastro efetuado com sucesso, verifique o email!'))
    }
}   

export const logout = () => dispatch => {
    localStorage.clear()
    dispatch({ type : 'LOGOUT' })
}

export const forgotte_password = email => async dispatch => {
    const { data, error } = await auth.forgotte_password(email, dispatch)
    if (error){
        dispatch(alertError(error))
    } else if (data.ok){        
            dispatch(alertSuccess('Email enviado'))
    } else {
        dispatch(alertSuccess('Erro desconhecido'))
    }
}

export const reset_password = (code, password, passwordConfirmation ) => async dispatch => {
    const { data, error } = await auth.reset_password(code, password, passwordConfirmation, dispatch)
    if (error) {
        dispatch(alertError(error))
    } else {
        localStorage.setItem('jwt', data.jwt)
        dispatch({ type : 'LOGIN'})
    }
}
