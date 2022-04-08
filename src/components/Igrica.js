import React from "react";

const Igrica = ({
  brojPokusaja,
  zamisljeniBroj,
  promijeniStanje,
  feedback,
}) => {
  function provjeri(e) {
    e.preventDefault();
    let uneseniBroj = e.target.childNodes[0].value;
    e.target.childNodes[0].value = "";
    if (uneseniBroj < zamisljeniBroj) {
      //zam broj je veći
      promijeniStanje("veći");
    } else if (uneseniBroj > zamisljeniBroj) {
      //zam broj je manji
      promijeniStanje("manji");
    } else {
      promijeniStanje("pogodak");
    }
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
      <div id='feedback'>{feedback}</div>
    </div>
  );
};

export default Igrica;
