import React from 'react'

const Home = () => {
  return (
    <div>
         <header className="nav">
        <div className="nav__container">
                <nav>
                <i className="fa-solid fa-film icon-large"></i>
                </nav>
                <h1 className="landing__title">Movie Library</h1>   
        </div>
    </header>
    </div>
    <div className="movie__search--container">
                    <div className="movie__search">
                        <label className="movie__search--label">
                            Search by Movie Title:
                        </label>
                        <input className="search" type="text" id="searchInput" placeholder="Title" />
                        <button className="search__button" onclick="searchMovies()">Search</button>
                    </div>
            </div>
  )
}

<script>
        function searchMovies() {
            const query = document.getElementById('searchInput').value;
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = `You searched for: ${query}`;
        }
    </script>

export default Home