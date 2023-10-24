import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-black p-2.5">
      <div className="container flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 ml-5 w-40" />
        </Link>
        <div className="ml-8">
          <Link to="/movies/popular" className="text-white ml-8">
            <i className="fas fa-fire"></i> Popular
          </Link>
          <Link to="/movies/top_rated" className="text-white ml-8">
            <i className="fas fa-star"></i> TopRated
          </Link>
          <Link to="/movies/upcoming" className="text-white ml-8">
            <i className="fas fa-calendar-alt"></i> Upcoming
          </Link>
          <Link to="/chatme" className="text-white ml-8">
            <i className="fas fa-comments"></i> ChatMe
          </Link>
          <Link to="/search" className="text-white ml-8">
            <i className="fas fa-search"></i> SearchMovie
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
