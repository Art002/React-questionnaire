import React from 'react';
import classes from './retryButton.module.css';

function RetryButton(props) {
    
    return (
        <div>
            <button className={classes.retryButton}
                    onClick={props.retryButton}>
                    Повторить
            </button>
        </div>
    )
}

export default RetryButton;