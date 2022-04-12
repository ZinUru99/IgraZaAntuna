import React, { Component } from "react";
import Igrica from "./components/Igrica";
import Highscore from "./components/Highscore";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    const stanjeIzBrowsera = JSON.parse(localStorage.getItem("stanje"));
    this.state = stanjeIzBrowsera
      ? {
          highscore: stanjeIzBrowsera.highscore,
          brojPokusaja: 0,
          feedback: "",
          zamisljeniBroj: Math.floor(Math.random() * 101),
        }
      : {
          highscore: [],
          brojPokusaja: 0,
          feedback: "",
          zamisljeniBroj: Math.floor(Math.random() * 101),
        };
  }

  promijeniStanje = (feedback) => {
    let novoStanje;
    if (feedback === "pogodak") {
      let noviBroj = Math.floor(Math.random() * 101);
      novoStanje = {
        ...this.state,
        highscore: [...this.state.highscore, this.state.brojPokusaja + 1].sort(
          (a, b) => a - b
        ),
        brojPokusaja: 0,
        zamisljeniBroj: noviBroj,
        feedback:
          "Pobijedili ste. Pogodili ste iz " +
          (this.state.brojPokusaja + 1) +
          ". puta. Zaigrajte ponovno.",
      };
    } else if (feedback === "manji") {
      novoStanje = {
        ...this.state,
        brojPokusaja: this.state.brojPokusaja + 1,
        feedback: "Zamišljeni broj je manji od unesenog!",
      };
    } else if (feedback === "veći") {
      novoStanje = {
        ...this.state,
        brojPokusaja: this.state.brojPokusaja + 1,
        feedback: "Zamišljeni broj je veći od unesenog!",
      };
    }
    localStorage.setItem("stanje", JSON.stringify(novoStanje));
    this.setState(novoStanje);
  };

  render() {
    return (
      <div id='nasApp'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route
              path='/igra1'
              element={
                <Igrica
                  brojPokusaja={this.state.brojPokusaja}
                  zamisljeniBroj={this.state.zamisljeniBroj}
                  feedback={this.state.feedback}
                  promijeniStanje={(feedback) => this.promijeniStanje(feedback)}
                />
              }
            />
            <Route
              path='/highscore'
              element={<Highscore highscore={this.state.highscore} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }
}
