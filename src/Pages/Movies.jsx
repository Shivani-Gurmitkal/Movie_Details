import React from 'react'
import SearchBar from '../Components/SearchBar';
import NavBar from "../Components/NavBar";
import { useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';


function Movies() {
    const [information, setInformation] = useState([]);
    const [loading, setloading] = useState(false);
  
    const fetchMovies = async (movieName) => {
      setloading(true);
      try {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=86972dfa&s=${movieName}`);

        if (res.data.Response === "True" && res.data.Search.length > 1) {
          setInformation(res.data.Search); 
        } else {
          const singleRes = await axios.get(`https://www.omdbapi.com/?apikey=86972dfa&t=${movieName}`);

          if (singleRes.data.Response === "True") {
            setInformation([singleRes.data]);
          } else {
            setInformation([]);
          }
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
        setInformation([]);
      }finally{
        setloading(false);
      }
    };
    
    return (
    <>

    <NavBar searchComponent={<SearchBar onSearch={fetchMovies} />} />

    {
      loading ? (
      <div className="text-center">
        <div className="loader"></div>
      </div>
      ) : (
      <>
      <div className="flex gap-4 mt-4 mx-10 flex-wrap">
        {
        information.length > 0 ?
        information.map((movie)=> <Card key={movie.imdbID} id={movie.imdbID}  poster={movie.Poster} title={movie.Title}/>) : ""
        }
      </div>
      </>
    )}

    </>
  )
}

export default Movies
