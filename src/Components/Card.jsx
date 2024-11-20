import React from 'react'

function Card({poster}) {
  return (
    <div>
      <div className="w-[200px]">
        <img src={poster} className='w-[200px]' alt="" />
      </div>
    </div>
  )
}

export default Card
