import React, { Component } from "react";
import Igrica from "./components/Igrica";
import Highscore from "./components/Highscore";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highscore: 100,
      zamisljeniBroj: 50,
    };
    setInterval(() => {
      this.setState({ ...this.state, highscore: this.state.highscore - 1 });
    }, 2000);
  }

  ggg = { a: 5, b: 10 };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Igrica />
        <Highscore
          sime='frane'
          highscore={this.state.highscore}
          {...this.ggg}
        />
      </div>
    );
  }
}
