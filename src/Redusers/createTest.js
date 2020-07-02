import {PUSH_QUESTION, RESET_TEST} from './../Actions/Consts/consts'

const initialState = {
    tests: []
}

export default function createTest(state = initialState, action) {
    switch(action.type){
        case PUSH_QUESTION:
            return {
                ...state,
                tests: [...state.tests, action.test]
            }
        case RESET_TEST:
            return {
                ...state,
                tests: []
            }
        default:
            return state
    } 
  }