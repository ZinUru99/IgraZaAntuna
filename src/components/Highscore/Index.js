import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const Highscore = ({ highscore }) => {
  return (
    <div>
      <nav className='nav'>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to='/highscore'>
          Home Higscorea
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to='./igra1'>
          Pogađanje brojeva
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to='./igra2'>
          Tri boje
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default Highscore;

/*
{highscore.map((element, index) => {
        return <li key={index}>{element}</li>;
      })}
      */
