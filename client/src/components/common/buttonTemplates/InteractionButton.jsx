import React from 'react';
import styles from './buttonTtemplates.module.scss'
const InteractionButton = ({content = '', parentClass = ''}) => {
  return (
    <button className={parentClass + ' ' + styles['interaction-btn btn']}>{content}</button>
  )
}

export default InteractionButton;