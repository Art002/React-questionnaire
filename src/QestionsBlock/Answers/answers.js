import React from 'react';
import classes from './answers.module.css';

function Answers(props) {
    
    const answers = props.answers.map((answer, index) => {
        let cls;    
        (answer.id in props.result) ? cls = props.result[answer.id] : cls = '';  
        
        return (
            <li key={index}>
                <button className={classes[cls]}
                        onClick={() => props.choosenAnswer(answer.id)}
                        disabled={props.disabled}>
                    {answer.text}
                </button>
            </li>
        )
    })
    
    return (
        <div>
            <ul className={classes.answerList}>{answers}</ul>
        </div>
    )
}

export default Answers;