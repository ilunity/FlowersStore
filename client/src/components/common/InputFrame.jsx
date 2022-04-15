import React from 'react';
import '../../scss/components/input-frame.scss';
import { v4 as uuidv4 } from 'uuid';


function InputFrame({type, value, placeholder, setValue, className}) {
    const onChange = (event) => {
        setValue(event.target.value);
    };

    const uniqueId = uuidv4();

    return (
        <div className={`input-frame ${className}`}>
            <input
                id={uniqueId}
                className={`input-frame__input`}
                type={type}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={uniqueId} className={'input-frame__label'}>
                {`${placeholder} *`}
            </label>
        </div>
    )
}

export {InputFrame};