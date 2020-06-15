import React from 'react';
import classes from './oneQuestion.module.css'

function OneQuestion(props) {
  return (
    <div className={classes.OneQuestion}>
      {props.question}
    </div>
  );
}

export default OneQuestion;
