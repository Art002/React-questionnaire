import React from 'react';
import classes from './list.module.css';
import { NavLink } from 'react-router-dom';
import Preloader from './../../Preloader/preloader';
import { connect } from 'react-redux';
import { getTests } from './../../Actions/pagesList'

class List extends React.Component {   
    async componentDidMount(){    
        this.props.getTests()
    }
    
    render(){
    const { tests, loading } = this.props
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

const mapStateToProps = state => {
    return {
        tests: state.pagesList.tests,
        loading: state.pagesList.loading,
        token: state.auth.token
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTests: () => dispatch(getTests())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
