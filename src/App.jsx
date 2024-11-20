import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Link } from "react-router-dom";
import Details from "./Pages/Details";
import Movies from "./Pages/Movies";

function App(){
  return (
    <>
 
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/details" element={<Details />}/>
    </Routes>
    </>
  )
}

export default App;