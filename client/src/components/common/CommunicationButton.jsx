import React from 'react';

const CommunicationButton = ({iconURL, parentClass = ''}) => {

  return (
    <button className={parentClass + ' ' + 'communication-btn btn'}>
      {iconURL ? <img src={iconURL} alt="contact" /> : ''}
    </button>
  )
}

export default CommunicationButton;