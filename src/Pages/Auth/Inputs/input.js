import React from 'react';
import classes from './input.module.css';

function Input(props) {
  const errorMsg = (props.touched && !props.isValid) ? props.errorMessage : null
  return (  
      <label>
          {props.label}
          <input type={props.type}
                 value={props.value} 
                 onChange={props.onChange} />
          <span className={classes.errorMessage}>{errorMsg}</span>
          <br/>
      </label>  
  );
}

export default Input;