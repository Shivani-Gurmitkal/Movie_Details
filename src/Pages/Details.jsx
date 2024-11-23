import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  let [movie, setMovie] =useState({});
  let {imdbID} = useParams();
  useEffect (()=>{
    axios.get(`https://www.omdbapi.com/?apikey=86972dfa&s=${imdbID}`).then((movies)=>{
      setMovie(movies.data.Search);
    })
   })
  return (
    <div>
    <div className="">
      <img src={movie.poster} alt="" />
        
    </div>

    </div>
  )
}

export default Details
