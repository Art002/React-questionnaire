import {GET_TESTS} from './../Actions/Consts/consts'

const initialState = {
    tests: [],
    loading: true
}

export default function pageList(state = initialState, action) {
    switch(action.type){
        case GET_TESTS:
            return {
                ...state,
                tests: action.tests,
                loading: false
            }
        default:
            return state
    } 
  }