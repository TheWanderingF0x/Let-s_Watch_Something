import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Search from './Components/Search';
import Movies from './Components/Movies';
import TVSeries from './Components/TVSeries';
import About from './Components/About';

function App() {
  return (
    <div className='homepage'>
    <Router>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/search' Component={Search }/>
        <Route path='/movies' Component={Movies }/>
        <Route path='/tv-series' Component={TVSeries }/>
        <Route path='/about' Component={About }/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;