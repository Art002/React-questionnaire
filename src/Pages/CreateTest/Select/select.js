import React from 'react';
function Select(props){
    return (
        <div>
            <label>
            {props.label}<br/>
                <select value={props.value}
                        onChange={props.onChange}>
                    {props.options.map((option, index) => {
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

export default Select;