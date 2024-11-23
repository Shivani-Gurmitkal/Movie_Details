import React from 'react'
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      
    <NavBar/>

    <div className="text-center w-[680px] mx-auto mt-40">
      <h1 className="text-white text-4xl w-[640px] ml-5 font-bold">Your Gateway to the World of Movies</h1>
      <p className="text-neutral-200 text-sm mt-4">Discover everything about your favorite films, from cast and crew to reviews and trivia</p>
      <Link to="/movies"><button className='mt-5 bg-yellow-500 text-white p-4 rounded-md font-bold text-xl'>Explore Movies</button></Link>
    </div>

    </div>
  )
}

export default Home;
