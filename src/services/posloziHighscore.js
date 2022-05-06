export default function posloziHighscore(staro, noviRezultat, odVecegPremaManjem = false) {
    //vraca score poredan od veceg prema manjem ili manjem prema vecem
    if (odVecegPremaManjem) {
       return [...staro, noviRezultat].sort((a, b) => {
        return b.rezultat - a.rezultat;
      });
    } else {
      return [...staro, noviRezultat].sort((a, b) => {
        return a.rezultat - b.rezultat;
      });
    }
  }