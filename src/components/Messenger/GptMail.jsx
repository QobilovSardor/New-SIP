import React from 'react'
import GptChat from './GptChat'

const GptMail = ({ selectedChat }) => {

  return (
    <div className='gpt-mail'>
      <GptChat selectedChat={selectedChat} />
    </div>
  )
}

export default GptMail