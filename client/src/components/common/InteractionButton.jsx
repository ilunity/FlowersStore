import React from 'react';

const InteractionButton = ({content = '', parentClass = ''}) => {
  return (
    <button className={parentClass + ' ' + 'interaction-btn btn'}>{content}</button>
  )
}

export default InteractionButton;