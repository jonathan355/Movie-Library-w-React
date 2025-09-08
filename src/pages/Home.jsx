
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import '../Home.css';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import heroImage from '../assets/hero.png';


const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        if(event.key === 'Enter') {
            navigate(
                `/MovieSearch?query=${searchTerm}`
                    ); 
        }
    };

    const searchMovies = () => {
            navigate(
                `/MovieSearch?query=${searchTerm}`
            );
    };

  return (
  <>
      <header className="navbar">
        <ul>   
             <li className='nav__links'>
              <Link className='nav__link' to="/">Home</Link>               
              <Link className='nav__link' to="/MovieSearch">Movie Search</Link>               
              <Link className='nav__link' to="/MovieSearch">Contact</Link>               
              <Link className='nav__link' to="/MovieSearch">Legal</Link>               
             </li>
        </ul>   
        
        <div className="nav__container">
            <img className= "main__logo" src={ logo } alt="" />
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
                            <input type="text" className="email__input" placeholder="Your E-mail Address"/>
                            <button className="email__btn">SIGN UP FREE</button>
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
             placeholder="Search Movies"
             value={searchTerm}
             onChange={(event) => setSearchTerm(event.target.value)} 
             onKeyDown={handleSearch}
             />
            <button className="search__button" onClick={searchMovies}> 
                Search 
            </button>
        </div>
            {results && <div id="results">{results}</div>}
        </div>


     
        
        <div className="main__content">
        <div className="section">
            <div className='about'>
            <h2 className='section__title'>Who We Are</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem fugiat minima, natus eius consequuntur ut veniam vero sit quidem eveniet excepturi, laborum assumenda voluptate. Reiciendis aspernatur impedit recusandae sunt autem?</p>
            </div>
        </div>
        <div className="section">
            <div className="services">
            <h2 className='section__title'>Discover classics!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure vel nemo voluptatem. Facere, quia mollitia consectetur repellat perferendis dolor dignissimos, rem vero fugiat rerum non autem! Ullam, recusandae repellat.</p>
            </div>
        </div>
        <div className="section">
            <div className="contact">
            <h2 className='section__title'>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iure!</p>
            </div>
        </div>
        <div className="footer">
            <p className='section__title'> &copy;2025 Movie Library. All rights reserved. </p>
        </div>

        </div>
        </>
    
        );
    };

       
export default Home;
