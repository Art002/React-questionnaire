import { PUSH_QUESTION, RESET_TEST } from './Consts/consts';
import axios from 'axios'

export function addQuestion (test)  {
    return {
        type: PUSH_QUESTION,
        test
    }
}

export function createNewTest(){
    return async (dispatch, getState) => {
        try{
            await axios.post('https://react-tests-b0e1f.firebaseio.com/.json', getState().createTest.tests)
            dispatch(resetTest())
        } 
        catch(error){}
    }   
}

export function resetTest(){
    return {
        type: RESET_TEST
    }
}