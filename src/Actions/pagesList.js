import { GET_TESTS } from './Consts/consts'
import axios from 'axios';

export function getTests(){
    return async dispatch => {
        try {
            const response = await axios.get('https://react-tests-b0e1f.firebaseio.com/.json')
            const tests = []
            Object.keys(response.data).forEach((key, index) => {
                tests.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })
            dispatch(fetchSuccess(tests))
        }
        catch(e){}
    }
}

export function fetchSuccess(tests){
    return {
        type: GET_TESTS,
        tests
    }
}
