import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>

      <div className="flex gap-5 items-center justify-between mt-4 w-full">
      <div className="flex items-center justify-center gap-2 text-white text-2xl ml-10"><span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
        <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
      </svg></span>CineScope</div>
      <div className=" text-white flex gap-10 justify-center items-center">
        <p className=' hover:cursor-pointer'>Home</p>
        <p className='text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer'>New</p>
        <Link to="/movies"><p className="text-[#b8b8b8] hover:text-neutral-400">Movies</p></Link>
        <p className='text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer'>Popular</p>
        <p className='text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer'>Sports</p>
      </div>

      <div className="text-white flex gap-4 items-center justify-center mr-10">
        <input type="text" className='flex items-center justify-center gap-3  px-3 py-2 pr-40 rounded-md text-white outline-none bg-[#303030]' placeholder='Search for movies...' />
        <button className='bg-yellow-500 text-white px-3 py-2 rounded-md'>Sign In</button>
      </div>
    </div>

    </div>
  )
}

export default NavBar