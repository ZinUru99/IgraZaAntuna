import React, { Component } from 'react'
import "./IgraBrziKlik.css";
export default class IgraBrziKlik extends Component {
    constructor(props) {
        super(props)

        this.state = {
            score: 0,
            timeCounter: 10
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
                alert("igra gotova");
                clearInterval(timer);
            }
        }, 100);

    }

    render() {
        return (
            <section>
                <div className='brziKlikInnerDiv'>
                    <div className='brziKlikText'>
                        <p>time counter: {this.state.timeCounter}</p>
                        <p>username - number of clicks {this.state.score}</p>
                    </div>
                    <button type='button' className='clickButton'
                    onClick={this.NaKlikPovecajBrojBodova}>
                        Click button
                        </button>
                </div>
                <button type='button' onClick={this.SmanjujVrijeme}>Smanjuj vrijeme</button>
            </section>
        )
    }
}
