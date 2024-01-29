import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TVSeries = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=16d630f79b861a94456b7cc14e9c1d6b&query=${searchQuery}`
      );

      // Sort the results: first with images, then without
      const sortedResults = response.data.results.sort((a, b) =>
        a.poster_path && !b.poster_path ? -1 : 1
      );

      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(
      'en-IN',
      options
    );
    return formattedDate;
  };

  const handleEnterKey = (event) => {
    // Trigger search if Enter key is pressed
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleBack = () => {
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
          <button onClick={handleBack} className="back-button">
            Back to Home
          </button>
          <input
            type="text"
            placeholder="Search for TV Series"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            onKeyDown={handleEnterKey}
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      </div>
      <div className="movie-grid">
        {searchResults.map((item) => (
          <a
            key={item.id}
            href={`https://www.themoviedb.org/tv/${item.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="trending-link"
           >
            <div key={item.id} className="movie-card">
              {item.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.name}
                />
              ) : (
                <p>No Image Available</p>
              )}
              <h3>{item.name}</h3>
              <p>Release Date: {formatDate(item.first_air_date)}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TVSeries;