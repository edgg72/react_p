import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

// styled components
// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  state = {
    persons: [
      {id: 'qwerty', name: 'Max', age: 28 },
      {id: 'asdfg', name: 'Manu', age: 29 },
      {id: 'zxcvb', name: 'Stephanie', age: 26 }
    ],
    username: 'supermax',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(prsn => {
      return prsn.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); <= another way to copy the array
    //next, the ES6 way with the spread operator
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  testHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      username: event.target.value
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((prsn, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={prsn.name}
              age={prsn.age}
              key={prsn.id}
              changed={(event) => this.nameChangedHandler(event, prsn.id)}/>
          })}
        </div>
      )
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            className='button'
            onClick={() => this.togglePersonsHandler()}>Toggle Persons
          </button>
          {persons}
          <UserInput
            changed={this.testHandler}
            currentName={this.state.username}
            >
            </UserInput>
            <UserOutput name={this.state.username}></UserOutput>
            <UserOutput name={this.state.username}></UserOutput>
            <UserOutput name='max'></UserOutput>
        </div>
    );
  }

  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now'))

}

export default App;
