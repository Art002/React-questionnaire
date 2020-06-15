import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import classes from './menu.module.css';

function MenuButton(props) {
 
        return(
        <>
            {props.isOpen
            ? <FontAwesomeIcon icon={faTimesCircle} 
            className={classes.menuClose}
            onClick={props.toggleMenu}/>
            :<FontAwesomeIcon icon={faBars} 
            className={classes.menuBar}
            onClick={props.toggleMenu}/>}                
        </>
        )
    }   

export default MenuButton;