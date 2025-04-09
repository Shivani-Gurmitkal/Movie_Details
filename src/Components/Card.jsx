import React from 'react'
import { Link } from 'react-router-dom'

function Card({poster,id}) {
  return (
    <div>
      
      <div className="">
        <Link to={`/details/${id}`}><img src={poster} className='h-[220px] w-[180px] rounded-md shadow-md object-cover' alt="movie poster" /></Link>
      </div>

    </div>
  )
}

export default Card
