import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);

    const searchMovies = async (searchFilter = filter) => {
        if (!searchTerm) return;
        
        setLoading(true);
        
        try {
            const { data } = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=c6a26922`);
            
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
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            searchMovies();
        }
    };

    const handleFilterChange = (event) => {
        const newFilter = event.target.value;
        setFilter(newFilter);
        searchMovies(newFilter);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onKeyDown={handleSearch}
                    placeholder="Search movies..."
                />
                
                <select value={filter} onChange={handleFilterChange}>
                    <option value="">No Filter</option>
                    <option value="TITLE_A_TO_Z">Title A-Z</option>
                    <option value="TITLE_Z_TO_A">Title Z-A</option>
                    <option value="OLDEST_TO_NEWEST">Oldest to Newest</option>
                    <option value="NEWEST_TO_OLDEST">Newest to Oldest</option>
                </select>
            </div>

            <div id="results">
                {loading && <i className="fas fa-spinner results__loading--spinner"></i>}
                
                {!loading && movies.length === 0 && searchTerm && (
                    <p>No results found for "{searchTerm}".</p>
                )}
                
                {!loading && movies.map(movie => (
                    <div key={movie.imdbID} className="movie">
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
    );
};

export default Movies;