import React, {Fragment} from 'react';
import '../../scss/style.scss';

function InputFrame({type, value, placeholder, setValue, className}) {
    const onChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={`input-frame ${className}`}>
            <input
                id={placeholder}
                className={`input-frame__input`}
                type={type}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={placeholder} className={'input-frame__label'}>
                {`${placeholder} *`}
            </label>
        </div>
    )
};

export {InputFrame};