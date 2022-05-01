import React from 'react';
import warningSign from '../../img/icons/alert-svgrepo-com.svg';

const ModalWarningWindow = ({tilte}) => {
    return (
        <div className='warn-window'>
            <div className="warn-window__tilte">{tilte}</div>
            <div className="warn-window__img">
                <img src={warningSign} alt="знак предупреждения"/>
            </div>
        </div>
    );
};

export default ModalWarningWindow;