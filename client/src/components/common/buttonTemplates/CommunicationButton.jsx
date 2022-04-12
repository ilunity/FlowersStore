import React from 'react';
import '../../../scss/components/buttons.scss'

const CommunicationButton = ({className, iconURL}) => {
  console.log();
  return (
    <button className={`communication-btn ${className}`}>
      {iconURL ? <img src={iconURL} alt="contact" /> : ''}
    </button>
  )
}

export default CommunicationButton;