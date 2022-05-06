
import Board from "./Board";
import React, { Component } from "react";
import "./IgraTicTacDome.css";
import { Navigate } from "react-router-dom";


export default class TicTacToe extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        imeIgre: "Križić Kružić",
        rezultat: 0,
      };
    }
    dodajRezultat=(trenutniRezultat)=>{
      this.setState((state)=>{
        return{rezultat:trenutniRezultat}
      })
    }
  
render() {
  
return (
  <div className="main">
     {this.props.username || <Navigate to='/' replace={true} />}: {this.state.rezultat}
     <br/>
    <button
          onClick={() => {
            this.props.dodajUHighscore(this.state.imeIgre, {
              ime: this.props.username,
              rezultat: this.state.rezultat,
            },true);
          }}>
          Spremi rezultat
        </button>
        <Board username={this.props.username}
         dodajRezultat={(trenutniRezultat) =>
          this.dodajRezultat(trenutniRezultat)
        }
        />
        

  </div>
  )
}
}