import React from 'react'
import ListMessage from './ListMessage'
import Room from './Room';

function ListRoom({rooms}) {
  return (
    <>
    {
        rooms.map((room, index) => {
            return (
                <Room key={index} room={room} />
            )
        })
    }
    </>
  )
}

export default ListRoom