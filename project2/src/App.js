import React, {Component} from 'react'
import Validation from './ValidationComponent/ValidationComponent'
import Char from './CharComponent/CharComponent'
import './App.css';
import './CharComponent/CharComponent.css'

class App extends Component {

  state = {
    userInput: ''
  }

  lengthHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const txt = this.state.userInput.split('');
    txt.splice(index, 1);
    const updatedText = txt.join('');
    this.setState({userInput: updatedText})
  }
  render(){
    return (
      <div className="App">
        <input type="text"  onChange={this.lengthHandler} value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation len={this.state.userInput.length}/>
        {this.state.userInput.split('').map((el, index) => {
          return <Char letter={el} key={index} click={() => this.deleteCharHandler(index)}/>
        })}

      </div>
    );
  }
}

export default App;
