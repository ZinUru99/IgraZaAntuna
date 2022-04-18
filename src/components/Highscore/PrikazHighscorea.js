import React from "react";
import { useState } from "react";

const PrikazHighscorea = ({ parcijalniHighscore }) => {
  const [input, setInput] = useState("najbolji");
  return (
    <div>
      <select value={input} onChange={(e) => setInput(e.target.value)}>
        <option selected value='najbolji'>
          Najbolji rezultati
        </option>
        <option value='najgori'>Najgori rezultati</option>
      </select>

      <ul>{input}</ul>
    </div>
  );
};

export default PrikazHighscorea;
