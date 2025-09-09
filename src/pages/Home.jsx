
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import '../Home.css';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import heroImage from '../assets/hero.png';
import aboutImage from '../assets/who.png'
import classicsImage from '../assets/citizen-kane_1.png'
import contactUsImage from '../assets/contact__us.png'


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
              <Link className='nav__link' to="" >Contact</Link>               
              <Link className='nav__link' to="">Legal</Link>               
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
             className="search__field--home" 
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
                <div className= 'about__description'>
                    <div className='section__title'>Who We Are</div>
                    <div className='section__text'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem fugiat minima, natus eius consequuntur ut veniam vero sit quidem eveniet excepturi, laborum assumenda voluptate. 
                        Reiciendis aspernatur impedit recusandae sunt autem?
                    </div>
                </div>
            <img className='about__img' src= { aboutImage } alt="" />
            </div>
        </div>
        <div className="section">
            <div className="discover__classics">
            <div className='section__title'>Discover classics!</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure vel nemo voluptatem. Facere, quia mollitia consectetur repellat perferendis dolor dignissimos, rem vero fugiat rerum non autem! Ullam, recusandae repellat.</p>
            </div>
            <div className="classics__img">
                <img src= {classicsImage} alt="" />
            </div>
        </div>
        <div className="section">
            <div className='section__title'>Contact Us</div>
            <div className="contact">
            
            <input type="text" className="email__input" placeholder="Your E-mail Address"/>
                            <button className="email__btn">CONTACT US</button>
            </div>
            <div className="contact__us--wrapper">
                <img className='contact__us--img' src={contactUsImage} alt="" />
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
