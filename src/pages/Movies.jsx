import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

let currentFilter ='';

async function searchMovies(filter) {
    const searchTitle = document.getElementById('searchInput').value; 
   
    const resultsDiv = document.getElementById('results'); 
    
    const moviesWrapper = document.getElementById("results"); 

    moviesWrapper.classList.add('movies__loading');
    resultsDiv.innerHTML = '<i class="fas fa-spinner results__loading--spinner"></i>'

const Movies = () => {
    const { id } = useParams();

    useEffect(() => {
        async function fetchMovies() {
            const { data } = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=c6a26922')
            const moviesData = await Response.json();

            if (moviesData.Response === "True") {
            const movies = moviesData.Search.slice(0, 6);

            if (filter === 'TITLE_A_TO_Z') {
                    movies.sort((a, b) => a.Title.localeCompare(b.Title));
            }

                else if (filter === 'TITLE_Z_TO_A') {
                    movies.sort((a, b) => b.Title.localeCompare(a.Title));
            }

                else if (filter === 'OLDEST_TO_NEWEST') {
                    movies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year)); 
            }
                else if (filter === 'NEWEST_TO_OLDEST') {
                    movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
            }

            resultsDiv.innerHTML = movies
            .map(movie => movieHTML(movie))
            .join('');
        } else {
            resultsDiv.innerHTML = `<p>No results found for "${searchTitle}".</p>`;
        }

        } catch (error) {
            console.error('Error fetching data:', error)
        }
        fetchMovies();
    }

},[]);

  return (
    <>
       `
        <div class="movie">
            <img src="${movie.Poster}" alt="${movie.Title} poster" class= "small-image">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        </div>
    `;
    </>
  );
}

export default Movies;