import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { UserAuth } from "@/utils/contexts/authContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="bg-black p-2.5">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 ml-2.5 w-40" />
        </Link>
        <div className="hidden lg:flex items-center">
          <Link to="/movies/popular" className="text-white">
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
        <div className="hidden lg:flex items-center ml-20">
          {user ? (
            <div className="text-white">
              <span className="text-white">Welcome, </span>
              <span className="text-warning">{user.displayName} </span>
              <button
                onClick={handleSignOut}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded mr-2.5"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/signin"
              className="text-white bg-blue-500 px-2 py-1 rounded mr-2.5"
            >
              Sign in
            </Link>
          )}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleNav} className="text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      {isNavOpen && (
        <div className="lg:hidden">
          <Link to="/movies/popular" className="block text-white ml-2">
            <i className="fas fa-fire"></i> Popular
          </Link>
          <Link to="/movies/top_rated" className="block text-white ml-2">
            <i className="fas fa-star"></i> TopRated
          </Link>
          <Link to="/movies/upcoming" className="block text-white ml-2">
            <i className="fas fa-calendar-alt"></i> Upcoming
          </Link>
          <Link to="/chatme" className="block text-white ml-2">
            <i className="fas fa-comments"></i> ChatMe
          </Link>
          <Link to="/search" className="block text-white ml-2">
            <i className="fas fa-search"></i> SearchMovie
          </Link>
          {user ? (
            <div className="block text-white ml-2">
              <span className="text-white">Welcome, {user.displayName}</span>
              <button
                onClick={handleSignOut}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/signin"
              className="text-white ml-2 bg-blue-500 px-2 py-1 rounded"
            >
              Sign in
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
