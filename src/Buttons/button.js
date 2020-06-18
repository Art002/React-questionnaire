import React from 'react';
import classes from './button.module.css';
import PropTypes from 'prop-types';

function Button({view, disabled, onClick, value}){
    return (
        <button className={classes[view]}
                disabled={disabled}
                onClick={onClick}>
                    {value}
        </button>
    )
}

Button.propTypes = {
    view: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    value: PropTypes.string
}

export default Button;