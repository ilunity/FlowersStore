import React from 'react'

const CommunicationButton = ({iconURL, extraСlass = ''}) => {

  return (
    <button className={'CommunicationBtn btn' + extraСlass}>
      {iconURL ? <img src={iconURL} alt="contact" /> : ''}
    </button>
  )
}

export default CommunicationButton