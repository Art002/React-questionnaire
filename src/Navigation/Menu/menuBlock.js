import React from 'react';
import classes from './menuBlock.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function MenuBlock({ toggleMenu, isOpen, token }) {
    let links = [
        {to: '/', label: 'Список вопросов', exact: false},
    ]
    token 
    ? links.push({to: '/createTest', label: 'Создать тест', exact: false},
                 {to: '/logout', label: 'Выйти', exact: false})
    : links.push({to: '/auth', label: 'Авторизация', exact: false})    

    const LinksList = links.map((link, index) => {
        return (
            <NavLink key={index} to={link.to} exact={link.exact} onClick={toggleMenu}>
                <li>{link.label}</li><hr/>
            </NavLink>
        )
    })
    return(
    <>
    {isOpen
    ? <div className={classes.menuBlock}>
        <ul>
            {LinksList}
        </ul>
    </div>
    : <div className={classes.hiddenMenu}></div>}
    </>
    )
}
    
MenuBlock.propTypes = {
    isOpen: PropTypes.bool,
    toggleMenu: PropTypes.func
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(MenuBlock)