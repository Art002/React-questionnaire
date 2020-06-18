import React from 'react';
import classes from './shadow.module.css';
import PropTypes from 'prop-types';

function Shadow({toggleMenu}) {
    return(
    <div className={classes.shadow}
            onClick={toggleMenu}>
    </div> 
    )
}

Shadow.propTypes = {
    toggleMenu: PropTypes.func
}
export default Shadow;