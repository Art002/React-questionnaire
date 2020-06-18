import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import classes from './menu.module.css';
import PropTypes from 'prop-types';

function MenuButton({isOpen, toggleMenu}) { 
    return(
    <>
        {isOpen
        ? <FontAwesomeIcon icon={faTimesCircle} 
        className={classes.menuClose}
        onClick={toggleMenu}/>
        :<FontAwesomeIcon icon={faBars} 
        className={classes.menuBar}
        onClick={toggleMenu}/>}                
    </>
    )
} 

MenuButton.propTypes = {
    isOpen: PropTypes.bool,
    toggleMenu: PropTypes.func
}

export default MenuButton;