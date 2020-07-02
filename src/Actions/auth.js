import { SET_TOKEN, LOGOUT } from './Consts/consts';
import axios from 'axios'

export function logIn(email, password){
    return async dispatch => {
        try{
            const params = {email, password, returnSecureToken: true}
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCegsXsj4hSwieRMd2B2Yc_arxN5q8yat8', params)
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 2000)
            localStorage.setItem('token', response.data.idToken)
            localStorage.setItem('id', response.data.localId)
            localStorage.setItem('expire', expirationDate)
        } 
        catch(error){}
        dispatch(setToken())
    }    
}

export function register(email, password){
    return async dispatch => {
        try{
            const params = {email, password, returnSecureToken: true}
            await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCegsXsj4hSwieRMd2B2Yc_arxN5q8yat8', params)   
        } 
        catch(error){}
    }    
}

export function setToken(){
    const token = localStorage.getItem('token')
    return {
        type: SET_TOKEN,
        token: token
    }
}

export function logOut() {
    localStorage.clear()
    return {
        type: LOGOUT
    } 
}