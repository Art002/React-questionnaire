import React from 'react';
import classes from './menuBlock.module.css';
import {NavLink} from 'react-router-dom';

function MenuBlock(props) {
        const links = [
            {to: '/', label: 'Список вопросов', exact: false},
            {to: '/auth', label: 'Авторизация', exact: false},
            {to: '/createTest', label: 'Создать тест', exact: false}
        ];
        const LinksList = links.map((link, index) => {
            return (
                <NavLink key={index} to={link.to} exact={link.exact} onClick={props.toggleMenu}>
                    <li>{link.label}</li><hr/>
                </NavLink>
            )
        })
        return(
        <>
        {props.isOpen
        ? <div className={classes.menuBlock}>
            <ul>
                {LinksList}
            </ul>
        </div>
        : <div className={classes.hiddenMenu}></div>}
        </>
        )
    }   

export default MenuBlock;