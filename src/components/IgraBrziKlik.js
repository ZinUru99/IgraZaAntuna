import React, { Component } from 'react'
import "./IgraBrziKlik.css";
export default class IgraBrziKlik extends Component {
    constructor(props) {
        super(props)

        this.state = {
            score: 0,
            timeCounter: 10,
            hasGameStarted: false,
            isDisabled: false
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
                //pri završetku zovi funkcije za prekid igre i gašenje botuna
                //this.ZavršiIGru();
                alert("igra gotova");
                clearInterval(timer);
            }
        }, 1000);
    }

    ZapocniIgru = () =>
    {
        if (this.state.hasGameStarted === false) 
        {
            this.setState({hasGameStarted: !this.state.hasGameStarted})
            document.getElementById("clickButton").textContent = "Klikći!";
            this.SmanjujVrijeme();
        }
        else
        {
            this.NaKlikPovecajBrojBodova();
        }
    }

    ZavršiIGru = () =>
    {
        this.UgasiBotun();
    }

    UgasiBotun = () =>
    {
        this.setState({isDisabled: !this.state.isDisabled})
    }


    render() {
        return (
            <section>
                <div className='brziKlikInnerDiv'>
                    <div className='brziKlikText'>
                        <p>time left: {this.state.timeCounter}</p>
                        <p>username - number of clicks {this.state.score}</p>
                    </div>
                    <button type='button' id='clickButton'
                    onClick={this.ZapocniIgru}>
                        Započni Igru
                        </button>
                </div>
                <button disabled={this.state.isDisabled} onClick={this.UgasiBotun}>Klikni za ugasit</button>
            </section>
        )
    }
}
