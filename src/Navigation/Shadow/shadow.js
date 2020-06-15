import React from 'react';
import classes from './shadow.module.css';

function Shadow(props) {
        return(
        <div className={classes.shadow}
             onClick={props.toggleMenu}>
        </div> 
        )
    }   
export default Shadow;