
import Board from "./Board";
import React, { Component } from "react";

export default class TicTacToe extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        imeIgre: "Križić Kružić",
        rezultat: 0,
      };
    }
  
render() {
  
return (
    <Board username={this.props.username}/>
  )
}
}