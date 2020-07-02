import {SET_TOKEN, LOGOUT} from './../Actions/Consts/consts'

const initialState = {
    token: null
}

export default function auth(state = initialState, action) {
    switch(action.type){
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case LOGOUT:
            return {
                ...state,
                token: null
            }
        default:
            return state
    } 
  }