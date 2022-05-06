import React, { Component } from "react";
import { MojaTemaContext } from "../services/konteksti";

export default class ProbaKonteksta extends Component {
  static contextType = MojaTemaContext;
  render() {
    return <div>ProbaKonteksta {this.context.pozdrav}</div>;
  }
}

/*
export default class ProbaKonteksta extends Component {
  render() {
    return (
      <MojaTemaContext.Consumer>{(value) => value}</MojaTemaContext.Consumer>
    );
  }
}
*/
