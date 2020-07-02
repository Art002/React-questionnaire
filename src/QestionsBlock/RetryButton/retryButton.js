import React from 'react';
import classes from './retryButton.module.css';
import PropTypes from 'prop-types';

function RetryButton({ retryButton }) {
    
    return (
        <div>
            <button className={classes.retryButton}
                    onClick={retryButton}>
                    Повторить
            </button>
        </div>
    )
}

RetryButton.propTypes = {
    retryButton: PropTypes.func
}

export default RetryButton