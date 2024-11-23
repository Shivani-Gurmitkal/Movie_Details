import React from 'react'
import { Link } from 'react-router-dom'

function Card({poster,title}) {
  return (
    <div>

      <Link to={`/details`}>
      <div className="ml-2 mt-10">
        <img src={poster} className='h-[200px]' alt="" />
      </div>
      </Link>

    </div>
  )
}

export default Card
