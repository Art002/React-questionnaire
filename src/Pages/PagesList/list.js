import React from 'react';
import classes from './list.module.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import Preloader from './../../Preloader/preloader'

class List extends React.Component {
    state = {
        tests: [],
        loading: true
    }
    async componentDidMount(){
        const response = await axios.get('https://react-tests-b0e1f.firebaseio.com/.json')
        const tests = []
        Object.keys(response.data).forEach((key, index) => {
            tests.push({
                id: key,
                name: `Тест №${index + 1}`
            })
        })
        this.setState({tests, loading: false})
    }
    render(){
    const {tests, loading} = this.state
    const testsList = tests.map((test) => {
        return (
            <li key={test.id}>
                <NavLink to={'/tests/' + test.id}>
                    {test.name}
                </NavLink>
            </li>
        )
    })
    return (
    <div className={classes.list}>
        Список тестов
        {loading
        ? <Preloader />
        : <ul>
             {testsList}
          </ul>
        }
        
    </div>
    )
    }
    
}

export default List;
