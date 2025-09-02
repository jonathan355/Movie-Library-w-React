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
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/MovieSearch" element={<MovieSearch />}>Movies</Route>
        <Route path="/MovieInfo" element={<MovieInfo />}>MovieInfo </Route>
      </Routes>
        </div>
    </Router>
  );
}

export default App;
