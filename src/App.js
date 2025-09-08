import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieSearch from './pages/MovieSearch';
import './App.css'
import MovieInfo from './pages/MovieInfo';


function App() {
  return (
    <Router>
        <div className="app__container">  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieSearch" element={<MovieSearch />} />
        <Route path="/movie/:id" element={<MovieInfo />} />

      </Routes>
        </div>
    </Router>
  );
}

export default App;
