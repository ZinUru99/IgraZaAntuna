import React from "react";

const Highscore = ({ highscore, sime, a, b }) => {
  return (
    <div>
      {sime} - Trenutni {a} highscore {b}: {highscore}
    </div>
  );
};

export default Highscore;
