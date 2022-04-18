import React from "react";
import PrikazHighscorea from "./PrikazHighscorea";

const Igra1Highscore = ({ highscore, username }) => {
  console.log(highscore);
  const Osobni = highscore.pogadjanjeBrojeva.filter(
    (element) => element.ime === username
  );
  return (
    <div>
      <PrikazHighscorea parcijalniHighscore={highscore.pogadjanjeBrojeva} />
      <PrikazHighscorea parcijalniHighscore={Osobni} />
    </div>
  );
};

export default Igra1Highscore;
