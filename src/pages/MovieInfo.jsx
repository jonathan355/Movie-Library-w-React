import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function MovieInfo() {
    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

  return (

    
    <div id="movie__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="movie__selected">
              <Link to="/Movies" className="movie__link"> 
              <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to='/Movies'>
              <h2 className='movie__selected--title'>Movies</h2>
              </Link> 
              <div className="movie__selected">
                <figure className='movie__selected--figure'>

                </figure>
              </div>
                
                {!loading && movies.map(movie => (
                    <div key={movie.imdbID} className="movie__body"> 
                        <img 
                            src={movie.Poster} 
                            alt={`${movie.Title} poster`} 
                            className="small-image"
                        />
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                ))}
          </div>
         </div>
        </div>
      </main>          
    </div>
  )
}

export default MovieInfo