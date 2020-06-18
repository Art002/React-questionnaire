import React from 'react';
import classes from './select.module.css'
import PropTypes from 'prop-types';

function Select({label, value, onChange, options}){
    return (
        <div>
            <label>
            {label}<br/>
                <select value={value}
                        onChange={onChange}
                        className={classes.select}>
                    {options.map((option, index) => {
                        return <option value={option.value}
                                       key={option.value + index}>
                                           {option.text}
                                </option>
                    })}
                </select>
            </label>
        </div>
    )
}

Select.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func,
    options: PropTypes.array
}

export default Select;