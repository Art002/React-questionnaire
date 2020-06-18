import React from 'react';
import classes from './oneQuestion.module.css';
import PropTypes from 'prop-types';

function OneQuestion({question}) {
  return (
    <div className={classes.OneQuestion}>
      {question}
    </div>
  )
}

OneQuestion.propTypes = {
  question: PropTypes.string
}

export default OneQuestion;
