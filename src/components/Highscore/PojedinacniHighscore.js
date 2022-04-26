import React from "react";
import PrikazHighscorea from "./PrikazHighscorea";

const PojedinacniHighscore = ({ highscore, username, imeIgre }) => {
  if (!highscore[imeIgre]) {
    return (
      <div>
        <h1>Igra: {imeIgre}</h1> <h2>Nemam rezultata za ovu igru</h2>{" "}
      </div>
    );
  }
  const Osobni = highscore[imeIgre].filter(
    (element) => element.ime === username
  );
  return (
    <div>
      <h1>Igra: {imeIgre}</h1>
      <PrikazHighscorea parcijalniHighscore={highscore[imeIgre]} />
      <PrikazHighscorea parcijalniHighscore={Osobni} />
    </div>
  );
};

export default PojedinacniHighscore;
