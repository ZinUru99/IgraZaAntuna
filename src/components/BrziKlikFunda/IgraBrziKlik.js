import React, { Component } from 'react'
import "./IgraBrziKlik.css";
export default class IgraBrziKlik extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imeIgre: "Brzi Klik",
            score: 0,
            timeCounter: 10,
            hasGameStarted: false,
            hasScoreBeenEntered: false,
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
                    timeCounter: (this.state.timeCounter*10-0.1*10)/10
                });
            }
            else
            {
                this.ZavrsiIGru();
                clearInterval(timer);
            }
        }, 100);
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
    }

    UnesiRezultat = () =>
    {
        if (this.state.hasScoreBeenEntered === false) 
        {
            this.props.dodajUHighscore(this.state.imeIgre, {
                ime: this.props.username,
                rezultat: this.state.score
            })
            this.setState({hasScoreBeenEntered: true})
        }
    }

    ProbajPonovo = () =>
    {
        this.setState({
            score: 0,
            timeCounter: 10,
            hasGameStarted: false,
            hasScoreBeenEntered: false,
            isGameOver: false
        })
    }

    render() {
        return (
            <section>
                <div className='brziKlikOuterDiv'>
                    <div className='menuBotuni'>
                    <button className='menuBotun' onClick={this.ProbajPonovo} 
                            disabled={!this.state.isGameOver}>
                            Probaj Ponovno
                    </button>
                    <button className='menuBotun' onClick={this.UnesiRezultat}
                            disabled={this.state.hasScoreBeenEntered}>
                            Unesi rezultat
                    </button>
                    </div>
                    <div className='brziKlikInnerDiv'>
                        <div className='brziKlikText'>
                            <p>Preostalo vrijeme: {this.state.timeCounter}</p>
                            <p style={this.state.isGameOver ? {display: 'block'} : {display: 'none'}}>Igra je gotova</p>
                            <p>{this.props.username} - broj klikova: {this.state.score}</p>
                        </div>
                        <button type='button' id='clickButton'
                        onClick={this.ZapocniIgru} disabled={this.state.isGameOver}>
                            Započni Igru
                            </button>
                    </div>
                </div>
            </section>
        )
    }
}

