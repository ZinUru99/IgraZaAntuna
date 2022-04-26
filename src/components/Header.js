import React from "react";
import { Link, NavLink } from "react-router-dom";
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
                <NavLink
                  to='/pogadjanjeBrojeva'
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}>
                  Pogađanje Brojeva
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/ivaninaIgra'
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}>
                  Ivanina igra
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/alanovaIgra'
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}>
                  Flood It!
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/tomislavovaIgra'
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}>
                  Memory game
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/domagojevaIgra'
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}>
                  TICtacTOE
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/highscore'
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}>
                  Highscore
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
