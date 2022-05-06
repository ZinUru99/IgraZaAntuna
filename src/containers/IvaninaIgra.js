import React, { Component } from "react";

export default class IvaninaIgra extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "djgnjkfsdnkg",
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.dodajUHighscore("dominaIgra", {
              ime: "Ivana",
              rezultat: 5,
            });
          }}>
          Posalji rez
        </button>
      </div>
    );
  }
}
