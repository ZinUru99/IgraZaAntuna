import React, { Component } from "react";
import Igrica from "./components/Igrica";
import Highscore from "./components/Highscore";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highscore: 100,
      brojPokusaja: 0,
      feedback: "",
      zamisljeniBroj: Math.floor(Math.random() * 101),
    };
  }

  promijeniStanje = (feedback) => {
    if (feedback === "pogodak") {
      let noviBroj = Math.floor(Math.random() * 101);
      this.setState({
        ...this.state,
        brojPokusaja: 0,
        zamisljeniBroj: noviBroj,
        feedback:
          "Pobijedili ste. Pogodili ste iz " +
          this.state.brojPokusaja +
          ". puta. Zaigrajte ponovno.",
      });
    } else if (feedback === "manji") {
      this.setState({
        ...this.state,
        brojPokusaja: this.state.brojPokusaja + 1,
        feedback: "Zamišljeni broj je manji od unesenog!",
      });
    } else if (feedback === "veći") {
      this.setState({
        ...this.state,
        brojPokusaja: this.state.brojPokusaja + 1,
        feedback: "Zamišljeni broj je veći od unesenog!",
      });
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Igrica
          brojPokusaja={this.state.brojPokusaja}
          zamisljeniBroj={this.state.zamisljeniBroj}
          feedback={this.state.feedback}
          promijeniStanje={(feedback) => this.promijeniStanje(feedback)}
        />
        <Highscore />
      </div>
    );
  }
}
