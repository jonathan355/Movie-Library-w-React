import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MovieSearch.css';

const MovieSearch = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const query = new URLSearchParams(useLocation().search);
    const searchTermFromQuery = query.get('query');

    useEffect(() => {
        if (searchTermFromQuery){
            setSearchTerm(searchTermFromQuery);
            searchMovies('',searchTermFromQuery);
        }
    },[searchTermFromQuery]);

    const searchMovies = async (searchFilter = filter, termToSearch = searchTerm) => {
        if (!termToSearch) return;
        
        setLoading(true);
        setError(null);
        
        try {
            const { data } = await axios.get(`http://www.omdbapi.com/?s=${termToSearch}&apikey=c6a26922`);
            
            if (data.Response === "True") {
                let movieResults = data.Search.slice(0, 6);
                
                if (searchFilter === 'TITLE_A_TO_Z') {
                    movieResults.sort((a, b) => a.Title.localeCompare(b.Title));
                } else if (searchFilter === 'TITLE_Z_TO_A') {
                    movieResults.sort((a, b) => b.Title.localeCompare(a.Title));
                } else if (searchFilter === 'OLDEST_TO_NEWEST') {
                    movieResults.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
                } else if (searchFilter === 'NEWEST_TO_OLDEST') {
                    movieResults.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
                }
                
                setMovies(movieResults);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch movies. Please try again later.')
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            searchMovies(searchTerm);
        }
    };

    const handleFilterChange = (event) => {
        const newFilter = event.target.value;
        setFilter(newFilter);
        searchMovies(newFilter);
    };

    return (
        <div>
            
<div className="return">
                <Link to="/" className="movie__link"> 
                    <FontAwesomeIcon icon="arrow-left" />
                    <h2 className='movie__selected--title'>Home</h2>
                </Link>
            </div>
            <div className='movie__search--bar'>
                <input
                    className='movie__search--field'
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onKeyDown={handleSearch}
                    placeholder="Search movies..."
                />
                
                <select value={filter} onChange={handleFilterChange} className='movie__search--filter'>
                    <option value="">No Filter</option>
                    <option value="TITLE_A_TO_Z">Title A-Z</option>
                    <option value="TITLE_Z_TO_A">Title Z-A</option>
                    <option value="OLDEST_TO_NEWEST">Oldest to Newest</option>
                    <option value="NEWEST_TO_OLDEST">Newest to Oldest</option>
                </select>

            </div>

            
            <div id="results">
               
                {loading && <i className="fas fa-spinner results__loading--spinner"></i>}
                {error && <p>{error}</p>}
                {!loading && movies.length === 0 && searchTerm && (
                    <p>No results found for "{searchTerm}".</p>
                )}
                
                {!loading && movies.map(movie => (
                    <div key={movie.imdbID} className="movie">
                        <Link to={`/movie/${movie.imdbID}`}> {}
                        <img 
                            src={movie.Poster} 
                            alt={`${movie.Title} poster`} 
                            className="small-image"
                        />
                        <h3 className='theme'>{movie.Title}</h3>
                        <p className='theme'>{movie.Year}</p>
                         </Link>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSearch;