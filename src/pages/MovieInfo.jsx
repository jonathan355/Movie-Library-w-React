import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieInfo.css';

function MovieInfo() {
    
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async() => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=c6a26922`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  },[id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div id="movie__body">
      <main id="movie__main">
              <Link to="/MovieSearch" className="movie__link--info"> 
              <FontAwesomeIcon icon="arrow-left" />
              <h4 className='back__btn__selected'>Back to Movies</h4>
              </Link>
        <div className="movies__container">
           
          <div className="row">
              <h2 className='movie__info--title'>Your Selection:</h2>
              <div className="movie__selected">
                <figure className='movie__selected--figure'>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} className="movie__selected--img"/>
                </figure>
                <div className="movie__selected--description">
                        <h3 className='movie__text--title'>{movie.Title}</h3>
                        <p className='movie__text'>Released: {movie.Year}</p>
                        <p className='movie__text'>Director: { movie.Director }</p>
                        <p className='movie__text'>Writers: { movie.Writer }</p>
                        <p className='movie__text'>Actors: { movie.Actors }</p>
                        <p className='movie__text'>Language: { movie.Language }</p>
                        <p className='movie__text'>Plot: { movie.Plot }</p>
                </div>
              </div>
         </div>
        </div>
      </main>          
    </div>
  );
}

export default MovieInfo