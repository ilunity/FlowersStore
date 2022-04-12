import React from 'react';
import '../../../scss/components/buttons.scss'

const InteractionButton = ({value, className, onClick}) => {
    return (
        <button
            className={`interaction-btn ${className}`}
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default InteractionButton;