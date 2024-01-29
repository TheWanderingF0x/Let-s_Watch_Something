import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate ();

    const handleBack = () => {
        // Navigate back to the home page
        navigate('/');
      };

    return (
        <div>
            <div className='letsWatch'>
                <Link to="/">
                    <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Logo"
                    style={{ width: 'auto', height: '65px' }}/>
                </Link>
            </div>
            <button onClick={handleBack} className='back-button'>
                Back to Home
            </button>
            <div className='aboutpage'>
                <h2 className='aboutsite'>
                    About this site
                </h2> 
                <p style={{fontSize: '25px'}}>
                    This website was made as a part of a course project regarding JS and now will be also added into my git portofolio, cuz why not.
                </p>
                <p style={{fontSize: '35px'}}>
                    The basics functionalities are:
                </p>
                <div style={{fontSize: '25px', marginLeft: '20px', marginRight: '20px'}}>
                    <p>
                        <Link to="/search">
                            <button style={{marginRight: '10px'}}>Search Actor</button>
                        </Link>
                            - The user can search the movie actors by their name and show in which movies they are playing;
                    </p>
                    <p>
                        <Link to="/movies">
                            <button style={{marginRight: '10px'}} className="movies-button">Search Movies</button>
                        </Link>
                        - Search Movies - The user can search movies using even one letter, later will be upgraded with features like to give the movies from a specific range of years or genres;
                    </p>
                    <p>
                        <Link to="/tv-series">
                            <button style={{marginRight: '10px'}} className="tv-series-button">Search TV Series</button>
                        </Link> 
                        - Series TV Series - The user can search TV series using even one letter, later will be upgraded with features like to give the movies from a specific range of years or genres;
                    </p>
                    <p>
                        - Back home - the button send the user back to the homepage, like clicking also, on the logo of the website;
                    </p>
                    <p>
                        - Trending or the homepage - it shows the first 6 movies/TV series which are currently in the trendings of the TMDB.
                    </p>   
                </div>    
            </div>
        </div>
    )
};

export default About;