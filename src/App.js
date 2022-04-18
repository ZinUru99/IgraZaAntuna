import React, { Component } from "react";
import IgraPogadjanjeBrojeva from "./components/IgraPogadjanjeBrojeva";
import Highscore from "./components/Highscore/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Igra1Highscore from "./components/Highscore/Igra1";

import { Routes, Route, Navigate } from "react-router-dom";

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
          username: "",
          inputName: "",
          zamisljeniBroj: Math.floor(Math.random() * 101),
        }
      : {
          highscore: { pogadjanjeBrojeva: [], igraBoja: [] },
          brojPokusaja: 0,
          feedback: "",
          username: "",
          inputName: "",
          zamisljeniBroj: Math.floor(Math.random() * 101),
        };
  }

  handleLogin = (username = "", inputName = "") => {
    this.setState((state) => {
      return { username: username, inputName: inputName };
    });
  };

  promijeniStanje = (feedback) => {
    let novoStanje;
    if (feedback === "pogodak") {
      let noviBroj = Math.floor(Math.random() * 101);
      let stariHighscore = this.state.highscore.pogadjanjeBrojeva;
      let rezultatKojegUnosimo = this.state.brojPokusaja + 1;
      let userObject = {
        ime: this.state.username,
        rezultat: rezultatKojegUnosimo,
      };

      let index = stariHighscore.findIndex((element) => {
        return element.rezultat >= rezultatKojegUnosimo;
      });
      if (index == -1) index = stariHighscore.length;
      stariHighscore.splice(index, 0, userObject);

      novoStanje = {
        ...this.state,
        highscore: {
          ...this.state.highscore,
          pogadjanjeBrojeva: [...this.state.highscore.pogadjanjeBrojeva],
        },
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
            <Route
              path='/'
              element={
                <Login
                  inputName={this.state.inputName}
                  handleLogin={(username, inputName) =>
                    this.handleLogin(username, inputName)
                  }
                />
              }
            />
            <Route
              path='/igra1'
              element={
                <IgraPogadjanjeBrojeva
                  brojPokusaja={this.state.brojPokusaja}
                  zamisljeniBroj={this.state.zamisljeniBroj}
                  username={this.state.username}
                  feedback={this.state.feedback}
                  promijeniStanje={(feedback) => this.promijeniStanje(feedback)}
                />
              }
            />
            <Route
              path='/highscore'
              element={<Highscore highscore={this.state.highscore} />}>
              <Route path='igra1' element={<Igra1Highscore />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }
}
