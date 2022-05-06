import React, { Component } from "react";
import IgraPogadjanjeBrojeva from "./components/IgraPogadjanjeBrojeva";
import SnakeLukaStegic from "./containers/snake-lukastegic/SnakeLukaStegic.js";
import Highscore from "./components/Highscore/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Naslovna from "./components/Naslovna";
import PojedinacniHighscore from "./components/Highscore/PojedinacniHighscore";
import SkupniHighscore from "./components/Highscore/SkupniHighscore";
//import VjezbamoHookice from "./components/VjezbamoHookice";
//import ProbaKonteksta from "./containers/ProbaKonteksta";
import izracunajIgru1 from "./services/izracunajIgru1";
import posloziHighscore from "./services/posloziHighscore";

import IvaninaIgra from "./containers/IvaninaIgra";
import FloodGame from "./containers/Flood-It/Game.js";
import Guess from "./containers/romano_game/guess.js"
import TicTacToe from "./components/TicTacToe/IgraTicTacDome";
import TomislavovaIgra from "./containers/t-pandzic/TomislavovaIgra";
import IgraBrziKlik from "./components/BrziKlikFunda/IgraBrziKlik";
import Kockice from "./containers/diceRoll/Kockice";

import { MojaTemaContext } from "./services/konteksti";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import pocetnoStanjeIzFilea from "./services/pocetnoStanje";
import { NavDropdown } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
    const stanjeIzBrowsera = JSON.parse(localStorage.getItem("stanje"));
    const inicijalnoStanje = {
      highscore: stanjeIzBrowsera
        ? stanjeIzBrowsera.highscore
        : pocetnoStanjeIzFilea.highscore,
      brojPokusaja: 0,
      feedback: "",
      username: "",
      inputName: "",
      zamisljeniBroj: Math.floor(Math.random() * 101),
    };
    this.state = inicijalnoStanje;
  }

  static defaultProps = {
    proizvod: "Čekić",
  };

  componentDidMount() {
    localStorage.setItem("stanje", JSON.stringify(this.state));
  }

  componentDidUpdate() {
    localStorage.setItem("stanje", JSON.stringify(this.state));
  }

  handleLogin = (username = "", inputName = "") => {
    this.setState((state) => {
      return { username: username, inputName: inputName };
    });
  };

  promijeniStanje = (feedback) => {
    let novoStanje = izracunajIgru1(feedback, this.state);
    this.setState(novoStanje);
  };

  //Kada budeš pozivao ovu funkciju iz svog koda ne zaboravi dati ova 2 parametra
  dodajHighscoreUStanje = (
    imeIgre,
    noviRezultat,
    odVecegPremaManjem = false
  ) => {
    this.setState((state) => {
      const staro = !state.highscore[imeIgre] ? [] : state.highscore[imeIgre];
      return {
        highscore: {
          ...state.highscore,
          // Funkcija vraca score poredan od veceg prema manjem ili manjem prema vecem
          [imeIgre]: posloziHighscore(staro, noviRezultat, odVecegPremaManjem),
        },
      };
    });
  };

  render() {
    return (
      <MojaTemaContext.Provider
        value={{ pozdrav: "Dobar dan", odzdrav: "laku noć" }}>
        <div id='nasApp'>
          <Header />
          <main>
            <Routes>
              <Route
                path='/'
                element={
                  this.state.username === "" ? (
                    <Navigate to='/login' replace={true} />
                  ) : (
                    <Naslovna />
                  )
                }
              />
              <Route
                path='/login'
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
                path='/pogadjanjeBrojeva'
                element={
                  this.state.username === "" ? (
                    <Navigate to='/login' replace={true} />
                  ) : (
                    <IgraPogadjanjeBrojeva
                      brojPokusaja={this.state.brojPokusaja}
                      zamisljeniBroj={this.state.zamisljeniBroj}
                      username={this.state.username}
                      feedback={this.state.feedback}
                      promijeniStanje={(feedback) =>
                        this.promijeniStanje(feedback)
                      }
                    />
                  )
                }
              />
               
              <Route
                path='/ivaninaIgra'
                element={
                  this.state.username === "" ? (
                    <Navigate to='/login' replace={true} />
                  ) : (
                    <IvaninaIgra
                      dodajUHighscore={(
                        imePropa,
                        vrijednostPropa,
                        odVecegPremaManjem
                      ) =>
                        this.dodajHighscoreUStanje(
                          imePropa,
                          vrijednostPropa,
                          odVecegPremaManjem
                        )
                      }
                      username={this.state.username}
                    />
                  )
                }
              />
              <Route
                path='/alanovaIgra'
                element={
                  this.state.username === "" ? (
                    <Navigate to='/login' replace={true} />
                  ) : (
                    <FloodGame
                      dodajUHighscore={(
                        imePropa,
                        vrijednostPropa,
                        odVecegPremaManjem
                      ) =>
                        this.dodajHighscoreUStanje(
                          imePropa,
                          vrijednostPropa,
                          odVecegPremaManjem
                        )
                      }
                      username={this.state.username}
                    />
                  )
                }
              />

              <Route
                path='/romano-game'
                element={
                  this.state.username === "" ? (
                    <Navigate to='/login' replace={true} />
                  ) : (
                    <Guess
                      dodajUHighscore={(
                        imePropa,
                        vrijednostPropa,
                        odVecegPremaManjem
                      ) =>
                        this.dodajHighscoreUStanje(
                          imePropa,
                          vrijednostPropa,
                          odVecegPremaManjem
                        )
                      }
                      username={this.state.username}
                    />
                  )
                }
              />
              <Route
                path='/tinovaIgra'
                element={
                  this.state.username === "" ? (
                    <Navigate to='/login' replace={true} />
                  ) : (
                    <Kockice
                      dodajUHighscore={(
                        imePropa,
                        vrijednostPropa,
                        odVecegPremaManjem
                      ) =>
                        this.dodajHighscoreUStanje(
                          imePropa,
                          vrijednostPropa,
                          odVecegPremaManjem
                        )
                      }
                      username={this.state.username}
                    />
                  )
                }
              />
              <Route
                path='/tomislavovaIgra'
                element={
                  this.state.username === "" ? (
                    <Navigate to='/login' replace={true} />
                  ) : (
                    <TomislavovaIgra
                      dodajUHighscore={(
                        imePropa,
                        vrijednostPropa,
                        odVecegPremaManjem
                      ) =>
                        this.dodajHighscoreUStanje(
                          imePropa,
                          vrijednostPropa,
                          odVecegPremaManjem
                        )
                      }
                      username={this.state.username}
                    />
                  )
                }
              />
              <Route
                path='/lukaFundaIgra'
                element={
                  this.state.username === "" ? (
                    <Navigate to='/login' replace={true} />
                  ) : (
                    <IgraBrziKlik
                      dodajUHighscore={(
                        imePropa,
                        vrijednostPropa,
                        odVecegPremaManjem
                      ) =>
                        this.dodajHighscoreUStanje(
                          imePropa,
                          vrijednostPropa,
                          odVecegPremaManjem
                        )
                      }
                      username={this.state.username}
                    />
                  )
                }
              />
              <Route
                path='/domagojevaIgra'
                element={
                  this.state.username === "" ? (
                    <Navigate to='/login' replace={true} />
                  ) : (
                    <TicTacToe
                      dodajUHighscore={(
                        imePropa,
                        vrijednostPropa,
                        odVecegPremaManjem
                      ) =>
                        this.dodajHighscoreUStanje(
                          imePropa,
                          vrijednostPropa,
                          odVecegPremaManjem
                        )
                      }
                      username={this.state.username}
                    />
                  )
                }
              />
              <Route
                path='/SnakeLukaStegic'
                element={
                  this.state.username === "" ? (
                    <Navigate to='/login' replace={true} />
                  ) : (
                    <SnakeLukaStegic
                      dodajUHighscore={(
                        imePropa,
                        vrijednostPropa,
                        odVecegPremaManjem
                      ) =>
                        this.dodajHighscoreUStanje(
                          imePropa,
                          vrijednostPropa,
                          odVecegPremaManjem
                        )
                      }
                      username={this.state.username}
                    />
                  )
                }
              />
              <Route
                path='/highscore'
                element={
                  this.state.username === "" ? (
                    <Navigate to='/login' replace={true} />
                  ) : (
                    <Highscore highscore={this.state.highscore} />
                  )
                }>
                <Route index element={<SkupniHighscore />} />
                <Route
                  path='pogadjanjeBrojeva'
                  element={
                    <PojedinacniHighscore
                      highscore={this.state.highscore}
                      username={this.state.username}
                      imeIgre='pogadjanjeBrojeva'
                    />
                  }
                />
                <Route
                  path='alanovaIgra'
                  element={
                    <PojedinacniHighscore
                      highscore={this.state.highscore}
                      username={this.state.username}
                      imeIgre='floodIt'
                    />
                  }
                />
               
                <Route
                  path='tomislavovaIgra'
                  element={
                    <PojedinacniHighscore
                      highscore={this.state.highscore}
                      username={this.state.username}
                      imeIgre='Tomislavova Igra'
                    />
                  }
                />
                <Route
                  path='lukaFundaIgra'
                  element={
                    <PojedinacniHighscore
                      highscore={this.state.highscore}
                      username={this.state.username}
                      imeIgre='Brzi Klik'
                    />
                  }
                />
                <Route
                  path='domagojevaIgra'
                  element={
                    <PojedinacniHighscore
                      highscore={this.state.highscore}
                      username={this.state.username}
                      imeIgre='Križić Kružić'
                    />
                  }
                />
                <Route
                  path='SnakeLukaStegic'
                  element={
                    <PojedinacniHighscore
                      highscore={this.state.highscore}
                      username={this.state.username}
                      imeIgre='SnakeLukaStegic'
                    />
                  }
                />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </MojaTemaContext.Provider>
    );
  }
}
