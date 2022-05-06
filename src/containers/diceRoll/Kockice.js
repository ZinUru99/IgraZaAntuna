import React, { Component } from "react";
import "./Kockice.css";

import one from "./images/dice-1.png";
import two from "./images/dice-2.png";
import three from "./images/dice-3.png";
import four from "./images/dice-4.png";
import five from "./images/dice-5.png";
import six from "./images/dice-6.png";

class Kockice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imeIgre: "tinovaIgra",
      numberOfDice: 6,
      rolls: [],
      rollSum: 0,
      overallSum: [],
      numberOfRolls: 0,
      zbrojSvih: 0,
    };
  }
  diceRoll = (numberOfDice) => {
    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      rollSum += rolls[i];
    }
    this.setState({
      numberOfDice,
      rolls,
      rollSum,
      overallSum: [...this.state.overallSum, rollSum],
      numberOfRolls: this.state.numberOfRolls + 1,
    });
  };
  zbroji = () => {
    this.state.zbrojSvih = this.state.overallSum.reduce((a, b) => a + b, 0);
    return this.state.overallSum.reduce((a, b) => a + b, 0);
  };

  gameOver = () => {
    this.state.isDisabled = true;
  };

  startAndFinish = (number) => {
    if (this.state.numberOfRolls < 3) {
      this.diceRoll(number);
    } else {
      alert("Igra je završena, pošaljite rezultat");
      this.gameOver();
    }
  };

  render() {
    return (
      <div className="DiceRoll">
        {this.props.username}
        <h1>Baci kocke</h1>
        <div className="buttons">
          <button
            key={this.state.numberOfDice}
            onClick={() => this.startAndFinish(this.state.numberOfDice)}
            className="button"
          >
            Baci kocke
          </button>
        </div>
        {this.state.rolls.map((roll, index) => (
          <DiceImage roll={roll} key={index} />
        ))}
        {this.state.numberOfDice ? (
          <div className="highscore-box">
            <h2>
              Rezultat bacanja:
              <div>{this.state.rollSum}</div>
              Highscore :
              <div className="sum">
                {this.state.overallSum.length > 0 ? this.zbroji() : "0"}
              </div>
            </h2>
          </div>
        ) : null}

        <div>
          <button
            onClick={() => {
              this.props.dodajUHighscore(this.state.imeIgre, {
                username: this.props.username,
                rezultat: this.state.zbrojSvih,
              });
              alert("Rezultat je poslan");
              this.setState({
                rolls: [],
                rollSum: 0,
                overallSum: [],
                numberOfRolls: 0,
                zbrojSvih: 0,
              });
            }}
          >
            Posalji rez
          </button>
        </div>
      </div>
    );
  }
}

const DiceImage = ({ roll }) => {
  if (roll === 1) {
    return <img className="dice-image" src={one} alt="1" />;
  } else if (roll === 2) {
    return <img className="dice-image" src={two} alt="2" />;
  } else if (roll === 3) {
    return <img className="dice-image" src={three} alt="3" />;
  } else if (roll === 4) {
    return <img className="dice-image" src={four} alt="4" />;
  } else if (roll === 5) {
    return <img className="dice-image" src={five} alt="5" />;
  } else if (roll === 6) {
    return <img className="dice-image" src={six} alt="6" />;
  }
};

export default Kockice;
