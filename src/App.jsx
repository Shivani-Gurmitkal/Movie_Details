import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Details from "./Pages/Details";
import Error from "./Pages/Error";

function App(){
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/details/:id" element={<Details />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
 
    </>
  )
}

export default App;
