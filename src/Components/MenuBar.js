import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
    return(
        <div className='mainMenu'>
          <Link to="/search">
            <button>Search Actor</button>
          </Link>
          <Link to="/movies">
            <button className="movies-button">Search Movies</button>
          </Link>
          <Link to="/tv-series">
            <button className="tv-series-button">Search TV Series</button>
          </Link>
          <Link to="/about">
            <button className="about-button">About</button>
          </Link>
        </div>
    )
}

export default MenuBar;