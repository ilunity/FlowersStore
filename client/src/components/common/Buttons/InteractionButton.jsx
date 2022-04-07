import React from 'react'

const InteractionButton = ({content = '', parentClass = ''}) => {
  return (
    <button className={parentClass + ' ' + 'interactionBtn btn'}>{content}</button>
  )
}

export default InteractionButton