import React from 'react';

const CommunicationButton = ({className, iconURL}) => {
  return (
    <button className={`communication-btn ${className}`}>
      {iconURL ? <img src={iconURL} alt="contact" /> : ''}
    </button>
  )
}

export default CommunicationButton;