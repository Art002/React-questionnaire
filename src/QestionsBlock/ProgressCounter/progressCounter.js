import React from 'react';
import classes from './progressCounter.module.css';

function ProgressCounter(props) {   
    return (
        <div className={classes.counter}>
            {props.activeQuestion + 1} из {props.allQuestion}
        </div>
    )
}

export default ProgressCounter;