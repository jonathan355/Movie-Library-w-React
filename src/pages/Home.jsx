import React, {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import '../Home.css';

const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState('');

    const searchMovies = () => {
        setResults('You searched for: ${searchTerm}');
    };

  return (
<> 
      <header className="nav">
        <div className="nav__container">
            <nav>
                <i className="fa-solid fa-film icon-large"></i>
            </nav>
            <h1 className="landing__title">Movie Library</h1>   
        </div>
      </header>
    
      <div className="movie__search--container">
        <div className="movie__search">
            <label className="movie__search--label">
                Search by Movie Title:
            </label>
            <input 
             className="search" 
             type="text" 
             id="searchInput" 
             placeholder="Title"
             value={searchTerm}
             onChange={(event) => setSearchTerm(event.target.value)} 
             />
            <button className="search__button" onClick={searchMovies}> 
                Search 
            </button>
            </div>
            {results && <div id="results">{results}</div>}
        </div>
            </>
        );

    };

export default Home;