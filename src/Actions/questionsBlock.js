import { DISABLED, 
         ALLOWED, 
         CORRECT_ANSWER_RESULT,
         ERROR_ANSWER_RESULT,
         ACTIVE_QUESTION, 
         IS_FINISHED, 
         CLEAR_RESULT,
         RESET_STATE,
         FETCH_TEST } from './Consts/consts';
import axios from 'axios';

export function disabled(){
    return {
        type: DISABLED
    }
}
export function allowed(){
    return {
        type: ALLOWED
    }
}
export function answerResult(finalScreenList, result){
    return {
        type: CORRECT_ANSWER_RESULT,
        finalScreenList,
        result
    }
}
export function errorAnswerResult(finalScreenList, result){
    return {
        type: ERROR_ANSWER_RESULT,
        finalScreenList,
        result
    }
}
export function currentQuestion(){
    return {
        type: ACTIVE_QUESTION,
    }
}
export function isFinished(){
    return {
        type: IS_FINISHED,
    }
}
export function clearResult(){
    return {
        type: CLEAR_RESULT,
    }
}
export function resetState(){
    return {
        type: RESET_STATE
    }
}
export function setTest(questionsList){
    return {
        type: FETCH_TEST,
        questionsList
    }
}

export function fetchTest (id, error){
    return async dispatch => {
        try{
            const list = await axios.get(`https://react-tests-b0e1f.firebaseio.com/${id}.json`)
            const questionsList = list.data
            if(questionsList !== null){
                dispatch(setTest(questionsList))
            } else {
                error.push('/error')
            }
        } catch(err){}
    }
}

export function timeout(questionsList, activeQuestion){
    return async dispatch => {
        setTimeout(() => {
            if(activeQuestion < questionsList.length - 1){
                dispatch(currentQuestion())
            } else if(activeQuestion === questionsList.length - 1){
                dispatch(isFinished())
            }
            dispatch(clearResult())
        }, 1000)
    }
}

export function oneQuestion(id){
    return (dispatch, getState) => {
        dispatch(disabled())

        const {questionsList, activeQuestion} = getState().questionBlock
        
        if(id === questionsList[activeQuestion].correctAnswer){
            const correct = {question: questionsList[activeQuestion].question, answer: 'correct'}
            dispatch(answerResult(correct, {[id]: 'success'}))
        } else {
            const error = {question: questionsList[activeQuestion].question, answer: 'error'}
            dispatch(errorAnswerResult(error, {[id]: 'error'}))
        }
        dispatch(timeout(questionsList, activeQuestion))
    }
}

