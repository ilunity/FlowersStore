import React from 'react';
import '../../scss/components/modal/modal.scss';

function Modal({isActive, hideModal, children}) {
    const onWindowClick = () => {
        hideModal();
    };
    const onContentClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div
            className={isActive ? 'modal' : 'modal_nonactive'}
            onClick={onWindowClick}
        >
            <div
                className="modal__content"
                onClick={onContentClick}
            >
                {children}
            </div>
        </div>
    )
}

export {Modal};