const izracunaj = (feedback, stanje) => {
  if (feedback === "pogodak") {
    let noviBroj = Math.floor(Math.random() * 101);
    let stariHighscore = stanje.highscore.pogadjanjeBrojeva;
    let rezultatKojegUnosimo = stanje.brojPokusaja + 1;
    let userObject = {
      ime: stanje.username,
      rezultat: rezultatKojegUnosimo,
    };

    let index = stariHighscore.findIndex((element) => {
      return element.rezultat >= rezultatKojegUnosimo;
    });
    if (index == -1) index = stariHighscore.length;
    stariHighscore.splice(index, 0, userObject);

    return {
      ...stanje,
      highscore: {
        ...stanje.highscore,
        pogadjanjeBrojeva: [...stanje.highscore.pogadjanjeBrojeva],
      },
      brojPokusaja: 0,
      zamisljeniBroj: noviBroj,
      feedback:
        "Pobijedili ste. Pogodili ste iz " +
        (stanje.brojPokusaja + 1) +
        ". puta. Zaigrajte ponovno.",
    };
  } else if (feedback === "manji") {
    return {
      ...stanje,
      brojPokusaja: stanje.brojPokusaja + 1,
      feedback: "Zamišljeni broj je manji od unesenog!",
    };
  } else if (feedback === "veći") {
    return {
      ...stanje,
      brojPokusaja: stanje.brojPokusaja + 1,
      feedback: "Zamišljeni broj je veći od unesenog!",
    };
  }
};

export default izracunaj;
