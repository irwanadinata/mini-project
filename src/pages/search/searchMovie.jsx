import React, { useState } from "react";
import axios from "axios";
import Cards from "@/components/card";
import "@/styles/searchMovie.css";
import Input from "@/components/input";
import Swal from "sweetalert2";

const SearchMovie = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const search = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      setResults(response.data.results);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message,
      })
    }
  };

  return (
    <div className="w-full h-screen bg-dark text-white overflow-auto py-4 px-8">
      <div className="flex items-center gap-3 mx-44 mb-12">
      <Input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-outline btn-warning" onClick={search}>
        <i className="fas fa-search"></i>
      </button>
      </div>
      <div className="list-cards">
        {results.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchMovie;
