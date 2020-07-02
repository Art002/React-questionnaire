import React from 'react';
import classes from './progressCounter.module.css';
import PropTypes from 'prop-types';

function ProgressCounter({ activeQuestion, allQuestion }) {   
    return (
        <div className={classes.counter}>
            {activeQuestion + 1} из {allQuestion}
        </div>
    )
}

ProgressCounter.propTypes = {
    activeQuestion: PropTypes.number,
    allQuestion: PropTypes.number
}

export default ProgressCounter