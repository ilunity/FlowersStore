import React from 'react'

const InteractionButton = ({content = 'Заказать', extraСlass = ''}) => {
  return (
    <button className={'InteractionBtn btn' + extraСlass}>{content}</button>
  )
}

export default InteractionButton