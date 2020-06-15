import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import RetryButton from './../RetryButton/retryButton';
import classes from './finalScreen.module.css';

function FinalScreen(props) {
    const questions = props.finalScreen.map((question, index) => {
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
            <span className={classes.correctCount}>Правильно: {props.correctAnswers} из {props.finalScreen.length}</span>
            <RetryButton retryButton={props.retryButton}/>
        </div>
    )
}

export default FinalScreen;