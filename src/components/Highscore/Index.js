import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const Highscore = ({ highscore }) => {
  /*
  const [cijeliHighscore, setCijeliHighscore] = useState(highscore);
  const [nesto, setNesto] = useState("Nesto pise");

  const callbackFunction = () => {
    console.log(`Novo stanje je: ${nesto}`);
    return function () {
      console.log(`Odradjujem se prije novog renderiranja`);
    };
  };

  useEffect(callbackFunction, [nesto]);
  */
  return (
    <div>
      {/*
      {nesto}
      <button onClick={() => setNesto(nesto + "A")}>
        Promijeni stanje uneseno hookicom
      </button>
      */}
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
