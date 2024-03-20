import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuBar from './MenuBar';

const Home = () => {
const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTVSeries, setTrendingTVSeries] = useState([]);

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        // Fetch trending movies
        const trendingMoviesResponse = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/week?api_key=16d630f79b861a94456b7cc14e9c1d6b'
        );
        setTrendingMovies(trendingMoviesResponse.data.results.slice(0, 8));

        // Fetch trending TV series
        const trendingTVSeriesResponse = await axios.get(
          'https://api.themoviedb.org/3/trending/tv/week?api_key=16d630f79b861a94456b7cc14e9c1d6b'
        );
        setTrendingTVSeries(trendingTVSeriesResponse.data.results.slice(0, 8));
      } catch (error) {
        console.error('Error fetching trending data:', error);
      }
    };

    fetchTrendingData();
  }, []);

  return (
    <div>
        <div className='letsWatch'>
            <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Logo"
            style={{ width: 'auto', height: '100px' }}/>
        </div>
        <MenuBar/>
        <div className="trending-section">
          <h1 className='trendingCateg'>Trending Movies</h1>
        <div className="trending-grid">
          {trendingMovies.map((movie) => (
                <a
                    key={movie.id}
                    href={`https://www.themoviedb.org/movie/${movie.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trending-link"
                >
                <div key={movie.id} className="trending-card">
                {movie.poster_path ? (
                    <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    />
                ) : (
                    <p>No Image Available</p>
                )}
                <h3>{movie.title}</h3>
                </div>
              </a>
          ))}
        </div>
      </div>

      <div className="trending-section">
        <h1 className='trendingCateg'>Trending TV Series</h1>
        <div className="trending-grid">
          {trendingTVSeries.map((tvSeries) => (
            <a
                key={tvSeries.id}
                href={`https://www.themoviedb.org/tv/${tvSeries.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="trending-link"
            >
            <div key={tvSeries.id} className="trending-card">
              {tvSeries.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${tvSeries.poster_path}`}
                  alt={tvSeries.name}
                />
              ) : (
                <p>No Image Available</p>
              )}
              <h3>{tvSeries.name}</h3>
            </div>
            </a>
          ))}
        </div>
      </div>  
    </div>
  );
};

export default Home;