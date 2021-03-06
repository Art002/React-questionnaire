import React from 'react';
import { connect } from 'react-redux';
import { logOut } from './../../Actions/auth';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
    componentDidMount(){
        this.props.logOut()
    }
    render(){
        return <>           
            <Redirect to='/' />
        </>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(Logout)