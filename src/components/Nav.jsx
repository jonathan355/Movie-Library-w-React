import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <header className="nav">
        <div className="nav__container">
            <nav>
                <i className="fa-solid fa-film icon-large"></i>
            </nav>
            <h1 className="landing__title">Movie Library</h1>   
        </div>
      </header>
           
        </nav>
    );
}

export default Nav;