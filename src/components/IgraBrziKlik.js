import React, { Component } from 'react'
import "./IgraBrziKlik.css";
export default class IgraBrziKlik extends Component {
    constructor(props) {
        super(props)

        this.state = {
            score: 0,
            timeCounter: 10,
            hasGameStarted: false,
            isGameOver: false
        }
    }

    NaKlikPovecajBrojBodova = () =>
    {
        this.setState({score: this.state.score + 1 });
    }

    SmanjujVrijeme = () =>
    {
        const timer = setInterval(() => 
        {
            if (this.state.timeCounter !== 0) 
            {
                this.setState({
                    timeCounter: this.state.timeCounter - 1
                });
            }
            else
            {
                this.ZavrsiIGru();
                clearInterval(timer);
            }
        }, 1000);
    }

    ZapocniIgru = () =>
    {
        if (this.state.hasGameStarted === false) 
        {
            this.setState({hasGameStarted: true})
            document.getElementById("clickButton").textContent = "Klikći!";
            this.SmanjujVrijeme();
        }
        else
        {
            this.NaKlikPovecajBrojBodova();
        }
    }

    ZavrsiIGru = () =>
    {
        this.setState({isGameOver: true});
        this.props.dodajUHighscore("igraBrziKlik", {
            ime: this.props.username,
            rezultat: this.state.score
        })
    }

    render() {
        return (
            <section>
                <div className='brziKlikInnerDiv'>
                    <div className='brziKlikText'>
                        <p>time left: {this.state.timeCounter}</p>
                        <p style={this.state.isGameOver ? {display: 'block'} : {display: 'none'}}>Igra je gotova</p>
                        <p>{this.props.username} - number of clicks {this.state.score}</p>
                    </div>
                    <button type='button' id='clickButton'
                    onClick={this.ZapocniIgru} disabled={this.state.isGameOver}>
                        Započni Igru
                        </button>
                </div>
            </section>
        )
    }
}

