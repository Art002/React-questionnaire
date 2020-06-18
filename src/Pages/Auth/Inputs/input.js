import React from 'react';
import classes from './input.module.css';
import PropTypes from 'prop-types';

function Input({touched, isValid, errorMessage, label, type, value, onChange}) {
  const errorMsg = (touched && !isValid) ? errorMessage : null
  return (  
      <label>
          {label}
          <input type={type}
                 value={value} 
                 onChange={onChange} />
          <span className={classes.errorMessage}>{errorMsg}</span>
          <br/>
      </label>  
  )
}

Input.propTypes = {
  touched: PropTypes.bool,
  isValid: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Input;