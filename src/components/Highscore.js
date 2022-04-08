import React from "react";

const Highscore = ({ highscore }) => {
  return (
    <ul>
      {highscore.map((element, index) => {
        return <li key={index}>{element}</li>;
      })}
    </ul>
  );
};

export default Highscore;
