import React from 'react'
import ListMessage from './ListMessage';

function Room({room}) {
  return (
    <ListMessage messages={room?.messages} />
  )
}

export default Room