import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/trokut_logo.png";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link className='navbar-brand' to='/'>
        <img id='naslovnaSlika' src={Image} />
      </Link>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/igra1' className='nav-link active'>
                  Pogađanje Brojeva
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/highscore' className='nav-link'>
                  Highscore
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
