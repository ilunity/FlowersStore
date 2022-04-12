import React from 'react';
import styles from './buttonTtemplates.module.scss'
const CommunicationButton = ({iconURL, parentClass = ''}) => {
  console.log();
  return (
    <button className={parentClass + ' ' + styles['communication-btn']}>
      {iconURL ? <img src={iconURL} alt="contact" /> : ''}
    </button>
  )
}

export default CommunicationButton;