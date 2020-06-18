import React from 'react';
import classes from './answers.module.css';
import PropTypes from 'prop-types';

function Answers({answers, result, choosenAnswer, disabled}) {    
    const answersList = answers.map((answer, index) => {
        let cls;    
        (answer.id in result) ? cls = result[answer.id] : cls = '';  
        
        return (
            <li key={index}>
                <button className={classes[cls]}
                        onClick={() => choosenAnswer(answer.id)}
                        disabled={disabled}>
                    {answer.text}
                </button>
            </li>
        )
    })
    
    return (
        <div>
            <ul className={classes.answerList}>{answersList}</ul>
        </div>
    )
}

Answers.propTypes = {
    answers: PropTypes.array,
    result: PropTypes.object,
    choosenAnswer: PropTypes.func,
    disabled: PropTypes.bool
}

export default Answers;