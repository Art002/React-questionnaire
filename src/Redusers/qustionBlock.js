import {DISABLED, ALLOWED, CORRECT_ANSWER_RESULT, ERROR_ANSWER_RESULT, ACTIVE_QUESTION, IS_FINISHED, CLEAR_RESULT, RESET_STATE, FETCH_TEST} from './../Actions/Consts/consts';

const initialState = {
    loading: true,
    activeQuestion: 0,
    result: {},
    finalScreen: [],
    correctAnswers: 0,
    disabled: false,
    isFinished: false,
    questionsList: [],
    error: ''
}

export default function questionBlock(state = initialState, action) {
    switch(action.type){
        case DISABLED:
            return {
                ...state,
                disabled: true
            }
        case ALLOWED:
            return {
                ...state,
                disabled: false
            }
        case CORRECT_ANSWER_RESULT:
            return {
                ...state,
                finalScreen: [...state.finalScreen, action.finalScreenList],
                correctAnswers: state.correctAnswers + 1,
                result: action.result
            }
        case ERROR_ANSWER_RESULT:
            return {
                ...state,
                finalScreen: [...state.finalScreen, action.finalScreenList],
                result: action.result
            }
        case ACTIVE_QUESTION:
            return {
                ...state,
                activeQuestion: state.activeQuestion + 1
            }
        case IS_FINISHED:
            return {
                ...state,
                isFinished: true
            }
        case CLEAR_RESULT:
            return {
                ...state,
                result: {},
                disabled: false
            }
        case RESET_STATE:
            return {
                ...state,
                activeQuestion: 0,
                result: {},
                correctAnswers: 0,
                isFinished: false,
                finalScreen: []
            }
        case FETCH_TEST:
            return {
                ...state,
                questionsList: action.questionsList,
                loading: false
            }
        default:
            return state
    } 
}