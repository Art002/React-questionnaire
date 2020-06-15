import React from 'react';
import classes from './button.module.css';

function Button(props){
    return (
        <button className={classes[props.class]}
                disabled={props.disabled}
                onClick={props.onClick}>
                    {props.value}
        </button>
    )
}

export default Button;