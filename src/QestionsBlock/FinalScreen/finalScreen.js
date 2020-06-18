import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import RetryButton from './../RetryButton/retryButton';
import classes from './finalScreen.module.css';
import PropTypes from 'prop-types';

function FinalScreen({finalScreen, correctAnswers, retryButton}) {
    const questions = finalScreen.map((question, index) => {
        return (
        <li key={index} className={classes.questionsList}>
            {question.question} 
            {(question.answer) === "correct" 
            ? <FontAwesomeIcon icon={faCheckCircle} className={classes.correct}/> 
            : <FontAwesomeIcon icon={faTimesCircle} className={classes.wrong}/>}
        </li>
        )
    })
    return (
        <div>
            <ul className={classes.allQuestions}>{questions}</ul>
            <span className={classes.correctCount}>Правильно: {correctAnswers} из {finalScreen.length}</span>
            <RetryButton retryButton={retryButton}/>
        </div>
    )
}

FinalScreen.propTypes = {
    finalScreen: PropTypes.array,
    correctAnswers: PropTypes.number,
    retryButton: PropTypes.func
}

export default FinalScreen;