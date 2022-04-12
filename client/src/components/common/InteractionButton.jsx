import React from 'react';

const InteractionButton = ({type= 'button', value, className,  onClick}) => {
  return (
    <button
        type={type}
        className={`interaction-btn btn ${className}`}
        onClick={onClick}
    >
      {value}
    </button>
  )
}

export default InteractionButton;