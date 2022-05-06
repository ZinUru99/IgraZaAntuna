import React, { Component } from 'react';
import Result from './result';
import "./glavno.css";
 
class Guess extends Component{
 
  static defaultProps =  {
    secret : Math.floor(Math.random() * 20) + 1
  }
 
  constructor(props){
    super(props)
    this.state = { term : '' }
 
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
 
  render(){
    return (
      <div className='container'>
        <div className='naslov'>
          <label htmlFor='term' className='label'>
            Guess Number between 1 to 20
          </label>
        </div>
        
        <div>
        <input
          id='term'
          type='text'
          name='term'
          value={this.state.term}
          onChange={this.handleChange}
        />
        </div>
   
        <Result term={this.state.term}
            secretNum={this.props.secret} />
      </div>
    )
  }
}
export default Guess