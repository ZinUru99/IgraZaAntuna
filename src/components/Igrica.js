import React from "react";

const Igrica = ({ brojPokusaja, zamisljeniBroj, promijeniStanje }) => {
  function provjeri(e) {
    e.preventDefault();
    let uneseniBroj = e.target.childNodes[0].value;
    promijeniStanje();
  }

  return (
    <div>
      <form onSubmit={provjeri}>
        <input
          type='number'
          id='broj'
          placeholder='Pogodite broj koji sam zamislio (0 - 100)'></input>
      </form>
      <div id='pokusaji'>Broj pokušaja: {brojPokusaja}</div>
      <div id='feedback'></div>
    </div>
  );
};

export default Igrica;
