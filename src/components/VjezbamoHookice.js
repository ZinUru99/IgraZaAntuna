import React, { useState, useEffect } from "react";

const VjezbamoHookice = () => {
  const [brojac, setBrojac] = useState(0);
  const [brojacUnazad, setBrojacUnazad] = useState(0);

  /*
  //najjednostavniji useEffect, za bilo koju promijenu stanja se aktivira
  useEffect(() => {
    console.log(brojac);
  });

  //malo slozeniji, aktivira se samo za promjenu stanja "brojac"
  useEffect(() => {
    console.log(`Promijenio se i brojac`);
  }, [brojac]);
  */

  //najslozeniji oblik useEffecta, cleanup funkica se poziva prije promijene stanja, pandan shouldComponentUpdate
  useEffect(() => {
    console.log(`Promijenio se i brojac, te sada iznosi ${brojac}`);
    return function cleanup() {
      console.log(
        `pozivam se prije promijene stanja. Evo ti dokaz. Trenutno stanje je ${brojac}`
      );
    };
  }, [brojac]);

  const promijeniStanje = () => {
    setBrojac(brojac + 1);
    setBrojacUnazad(brojacUnazad - 1);
  };

  return (
    <>
      <h1>Brojač: {brojac}</h1>
      <h1>Brojač unazad: {brojacUnazad}</h1>
      <button onClick={promijeniStanje}>Povećaj brojač</button>
      <button onClick={() => setBrojacUnazad(brojacUnazad - 1)}>
        Mijenjam samo brojac unazad
      </button>
    </>
  );
};

export default VjezbamoHookice;
