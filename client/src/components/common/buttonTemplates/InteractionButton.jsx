import React from 'react';
import '../../../scss/components/buttonTemplates.scss';


const InteractionButton = ({value, className = "", onClick}) => {
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