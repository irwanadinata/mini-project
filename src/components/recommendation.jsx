import React, { useEffect, useState } from "react";
import "@/styles/recommendation.css";
import Cards from "@/components/card";
import axios from "axios";
import Button from "@/components/button";
import Swal from "sweetalert2";

const Recommendation = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
      )
      .then((response) => {
        setMovieList([...movieList, ...response.data.results]);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
        });
      });
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="movie-list">
      <h2 className="list-title">Recommendation</h2>
      <div className="list-cards">
        {movieList.map((movie) => (
          <Cards movie={movie} key={movie.id} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="btn btn-wide" onClick={loadMore} label="Load More" />
      </div>
    </div>
  );
};

export default Recommendation;
