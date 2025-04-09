import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function Details() {
  let {id} = useParams();
  let [movie, setMovie] = useState(null)
  let [loading, setLoading] = useState(true)

  function formatRuntime(runtimeString) {
    if (!runtimeString || !runtimeString.includes("min")) {
      return "Runtime not available";
    }
    const minutes = parseInt(runtimeString);
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
  }
  
  useEffect (()=>{
    setLoading(true);
    axios.get(`https://www.omdbapi.com/?apikey=86972dfa&i=${id}`).then((res)=>{
      setMovie(res.data)
      setLoading(false);
    }).catch ((err)=>{
      console.error("Error fetching movie details:", err)
      setLoading(false);
    })
   }, [id])

  return (
    <>

    <div className="pb-10">
      <Link to="/movies"><button className="absolute top-5 right-5 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded mb-6">← Back</button></Link>
      {
        loading ? (
        <div className="text-center">
          <div className="loader"></div>
        </div>
        ):(
        <>
        <div className="text-white p-8 pt-20 flex flex-col md:flex-row gap-6">
          <div className="">
            <img src={movie.Poster} alt={movie.Title} className="w-[200px] rounded-lg shadow-lg"/>
          </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold"> {movie.Title} <span className="text-gray-400 text-2xl">({movie.Year})</span></h1>
          <p className="text-lg text-gray-400 italic">Original Title: {movie.Title}</p>
          <div className="flex items-center gap-4 text-sm">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded font-semibold">IMDb: {movie.imdbRating}</span>
            <span>{movie.Rated}</span>
            <span>{formatRuntime(movie.Runtime)}</span>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-2xl mb-4">{movie.Plot !== "N/A" ? movie.Plot : "No plot available."}</p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition">Where to watch</button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition">Watch for free</button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition">Trailers</button>
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="p-8 space-y-6 text-gray-300">
          <div>
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-1">DIRECTOR</h3>
            <p className="mt-1">{movie.Director !== "N/A" ? movie.Director : "Unknown"}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-1">GENRES</h3>
            <p className="mt-1">{movie.Genre}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-1">Actors</h3>
            <p className="mt-1">{movie.Actors}</p>
          </div>
        </div>
        <div className="p-8 space-y-6 text-gray-300">
          <div>
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-1">Language</h3>
            <p className="mt-1">{movie.Language}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-1">Writer</h3>
            <p className="mt-1">{movie.Writer}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-1">Awards</h3>
            <p className="mt-1">{movie.Awards !== "N/A" ? movie.Awards : "No awards"}</p>
          </div>
        </div>
      </div>
      </>
        )}
    </div>
    
    </>
  )
}

export default Details
