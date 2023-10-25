import React, { useEffect, useState } from "react";
import "@/styles/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import axios from "axios";
import Recommendation from "@/components/recommendation";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((response) => {
        setPopularMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`}
          >
            <div className="poster-image">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
              />
            </div>
            <div className="posterImage-overlay">
              <div className="posterImage-title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="posterImage-runtime">
                {movie ? movie.release_date : ""}
                <span className="posterImage-rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />{" "}
                </span>
              </div>
              <div className="posterImage-description">
                {movie ? movie.overview : ""}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <Recommendation />
    </div>
  );
};

export default Home;
