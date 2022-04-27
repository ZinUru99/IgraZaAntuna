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
      <nav className='nav' style={{ marginBottom: "25px" }}>
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
          to='./pogadjanjeBrojeva'>
          Pogađanje brojeva
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to='./alanovaIgra'>
          Flood It!
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to='./tomislavovaIgra'>
          Memory game
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to='./lukaFundaIgra'>
          Brzi klik
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to='./domagojevaIgra'>
          TICtacTOE
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
