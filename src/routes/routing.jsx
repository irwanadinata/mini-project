import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "@/pages/homePage/home";
import MovieList from "@/components/movieList";
import Movie from "@/pages/movieDetail/movieDetail";
import OpenAI from "@/pages/openAI/openAI";
import Navbar from "@/components/navbar";
import SearchMovie from "@/pages/search/searchMovie";
import "@/styles/app.css"
function Routing() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="chatme" element={<OpenAI/>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
          <Route path="/search" element={<SearchMovie/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
