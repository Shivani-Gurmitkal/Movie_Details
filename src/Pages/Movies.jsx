import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';

function Movies() {
  let [movie, setMovie] = useState([])
 useEffect (()=>{
  axios.get('https://www.omdbapi.com/?apikey=86972dfa&s=thor').then((movies)=>{
    setMovie(movies.data.Search);
  })
 }, [])
  return (
    <div>

      <div className="flex gap-5 items-center justify-between mt-4 w-full">
      <Link to="/"><div className="flex items-center justify-center gap-2 text-white text-2xl ml-10"><span> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-camera-reel fill-white" viewBox="0 0 16 16">
            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/>
            <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
            <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
        </svg></span>CineScope</div></Link>
      <div className=" text-white flex gap-10 justify-center items-center">
        <Link to="/"><p className="text-[#b8b8b8] hover:text-neutral-400">Home</p></Link>
        <p className='text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer'>New</p>
        <p>Movies</p>
        <p className='text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer'>Popular</p>
        <p className='text-[#b8b8b8] hover:text-neutral-400 hover:cursor-pointer'>Sports</p>
      </div>
      
      <div className="text-white flex gap-4 items-center justify-center mr-10">
        <input type="text" className='flex items-center justify-center gap-3  px-3 py-2 pr-40 rounded-md text-white outline-none bg-[#303030]' placeholder='Search for movies...' />
      </div>
    </div>

    <div className="flex gap-3 flex-wrap mb-4">
      {
        movie.length > 0 ? movie.map(movie=><Card key={movie.imdbID} imdbID={movie.imdbID} poster={movie.Poster}/>) : <span class="loader"></span>
      }
    </div>
      
    </div>
  )
}

export default Movies