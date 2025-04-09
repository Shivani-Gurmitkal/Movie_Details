import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [movie, setmovie] = useState("");

  const handleSearch = () => {
    if (movie) onSearch(movie);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>

      <div></div>
        <input type="text" className='flex items-center justify-center gap-3  px-3 py-2 pr-40 rounded-md text-white outline-none focus:outline-none bg-[#303030]' value={movie} placeholder='Search for movies...'
        onChange={(e) => setmovie(e.target.value)} onKeyDown={handleKeyDown} />
    
    </>
  );
}
