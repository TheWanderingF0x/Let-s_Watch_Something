// Search.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Search = () => {
  const [actorName, setActorName] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate ();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=16d630f79b861a94456b7cc14e9c1d6b&query=${actorName}`
      );

      const actorId = response.data.results[0].id;

      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=16d630f79b861a94456b7cc14e9c1d6b`
      );

      setMovies(movieResponse.data.cast);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEnterKey = (event) => {
    // Trigger search if Enter key is pressed
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleBack = () => {
    // Navigate back to the home page
    navigate('/');
  };

  return (
    <div>
        <div className='letsWatch'>
            <Link to="/">
                    <img src={process.env.PUBLIC_URL + '/assets/logo.png'}
                        alt="Logo"
                style={{ width: 'auto', height: '50px' }}/>
            </Link>   
        </div>
      <div className="sticky-search">
        <div className="search-container">
            <button onClick={handleBack} className='back-button'>
              Back to Home
            </button>
          <input
            type="text"
            placeholder="Enter actor name"
            value={actorName}
            onChange={(e) => setActorName(e.target.value)}
            className="search-input"
            onKeyDown={handleEnterKey}
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      </div>
      <div className="movie-grid">
        {movies.map((movie) => (
          <a
            key={movie.id}
            href={`https://www.themoviedb.org/movie/${movie.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="trending-link"
            >
            <div key={movie.id} className="movie-card">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <p>No Image Available</p>
              )}
              <h3>{movie.title}</h3>
              <p>Character: {movie.character}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Search;