import React from "react";
import { useState } from "react";

const PrikazHighscorea = ({ parcijalniHighscore }) => {
  const [input, setInput] = useState("najbolji");
  const brojIzlistanih = 7;

  const sloziPrikazListe = () => {
    if (input === "najbolji") {
      return parcijalniHighscore.slice(0, brojIzlistanih).map(callbackNas);
    } else {
      return parcijalniHighscore
        .reverse()
        .slice(0, brojIzlistanih)
        .map(callbackNas);
    }
  };

  const callbackNas = (element, index) => {
    return (
      <li key={index}>
        {element.ime} - {element.rezultat}
      </li>
    );
  };

  return (
    <div>
      <select value={input} onChange={(e) => setInput(e.target.value)}>
        <option selected value='najbolji'>
          Najbolji rezultati
        </option>
        <option value='najgori'>Najgori rezultati</option>
      </select>

      <ul>{sloziPrikazListe()}</ul>
    </div>
  );
};

export default PrikazHighscorea;
