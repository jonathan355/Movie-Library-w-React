import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Nav from './components/Nav';
import './App.css'
import MovieInfo from './pages/MovieInfo';


function App() {
  return (
    <Router>
        <div className="app__container">  
          
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/Movies" element={<Movies />}>Movies</Route>
        <Route path="/MovieInfo" element={<MovieInfo />}>MovieInfo </Route>
      </Routes>

        <h2>What is Movie Library?</h2>
        </div>
    </Router>
  );
}

export default App;
