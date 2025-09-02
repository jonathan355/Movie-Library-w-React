
import React, {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import '../Home.css';
import { Link } from "react-router-dom";
import heroImage from '../assets/hero.png';
import '../Home.css'


const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState('');

    const searchMovies = () => {
        setResults(`You searched for: ${searchTerm}`);
    };

  return (
<> 
      <header className="nav">
        <div className="nav__container">
            <nav>
                <i className="fa-solid fa-film icon-large"></i>
            </nav>
            <h1 className="landing__title">Movie Library</h1>
             <ul>   
             <li className='nav__links'>
              <Link className='nav__link' to="/">Home</Link>               
              <Link className='nav__link' to="/MovieSearch">Movie Search</Link>               
             </li>
            </ul>   
        </div>
      </header>
     <div className="hero__container">
                    
                    <div className="email__form">
                        <div className="hero__title__description">
                         <h1 className="hero__title">Because Cinema matters <span className="purple">to you.</span></h1>
                         <p className="header__description">Movie Library has the biggest collection of titles from around the world.</p>
                         <p className='header__description'>Subscribe to our spam free newsletter to be updated on: </p>
                         <ul>
                          <li>Latest production start dates </li>
                          <li>Recently signed actors and actresses. </li>
                         </ul>
                        </div>
                            <input type="text" class="email__input" placeholder="Your E-mail Address"/>
                            <button className="email__btn">SIGN UP FOR FREE</button>
                    </div>
                <div className="hero__image">
                <img src={heroImage} alt=""/>
                </div>
    </div> 

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


     <>
        
        <div className="main__content">
         <div className='about'>
         <h2>What is Movie Library?</h2>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem fugiat minima, natus eius consequuntur ut veniam vero sit quidem eveniet excepturi, laborum assumenda voluptate. Reiciendis aspernatur impedit recusandae sunt autem?</p>
         </div>

         <div className="services">
            <h2>Discover classics!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure vel nemo voluptatem. Facere, quia mollitia consectetur repellat perferendis dolor dignissimos, rem vero fugiat rerum non autem! Ullam, recusandae repellat.</p>
         </div>
         <div className="contact">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iure!</p>
         </div>
        </div>
        <div className="footer">
            <p> &copy;2025 Movie Library. All rights reserved. </p>
        </div>
        
    </>
            </>  
        );
    };

       
export default Home;
