import auth from '../../services/auth';
import { alertError, alertSuccess } from './alert';

export const changeValue = e => {
    const { name, value } = e.target;
    return { type : 'VALUE_CHANGED_LOGIN', payload : { name , data : value } }
}

export const login = ( email, password ) => async dispatch => {
    try{
        const { data } = await auth.login(email, password)
        if(!data.user.blocked){
            localStorage.setItem('jwt', data.jwt)
            localStorage.setItem('user', data.user.id)
            localStorage.setItem('name', data.user.username)
            localStorage.setItem('email', data.user.email)
            localStorage.setItem('role', data.user.role.type);
            dispatch({ type : 'LOGIN'})
        } else {
            dispatch(alertError('Usuário bloqueado'))
        }
    } catch ({ response }) {
        dispatch(alertError(response.data.message))
    }
}

export const singup = ( username, email, password ) => async dispatch => {
    try {
        const response = await auth.register( username, email, password)
        localStorage.setItem('jwt', response.data.jwt);
        dispatch(alertSuccess('Cadastro efetuado com sucesso, verifique o email!'))
    } catch ({ response }) {
        dispatch(alertError(response.data.message))
    }
    
}   

export const logout = () => dispatch => {
    localStorage.clear()
    dispatch({ type : 'LOGOUT' })
}

export const forgotte_password = email => async dispatch => {
    try {
        const response = await auth.forgotte_password(email)
        if (response.data.ok)
            dispatch(alertSuccess('Email enviado'))
    } catch ({ response }) {
        dispatch(alertError(response.data.message))
    }
}

export const reset_password = (code, password, passwordConfirmation ) => async dispatch => {
    try {
        const response = await auth.reset_password(code, password, passwordConfirmation)
        localStorage.setItem('jwt', response.data.jwt);
        dispatch({ type : 'LOGIN'})
    } catch ({ response }) {
        dispatch(alertError(response.data.message))
    }
}
