import React from "react";

import "./SkupniHighscore.css";

const SkupniHighscore = () => {
  return (
    <div>
      <h2>Pregled najboljih igrača na platformi</h2>
      <div className='skupniHigscoreLayout'>
        <div>
          <h4>Najviše vodećih mjesta:</h4>
          <ul>
            <li>triba</li>
            <li>napraviti</li>
          </ul>
        </div>
        <div>
          <h4>5 3 1 sustav bodovanja:</h4>
          <ul>
            <li>triba</li>
            <li>napraviti</li>
          </ul>
        </div>
        <div>
          <h4>Najviše odigranih igra:</h4>
          <ul>
            <li>triba</li>
            <li>napraviti</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkupniHighscore;
