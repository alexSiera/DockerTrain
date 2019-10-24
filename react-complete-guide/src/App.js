import React, { Component } from "react";
import "./App.css";
// import Person from "./Person/Person";
import Person from "./Person/Person";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    persons: [
      {
        id: "2oddkwdowodwk",
        name: "Max",
        age: 28
      },
      {
        id: "sfefewfwefee",
        name: "Many",
        age: 25
      },
      {
        id: "239192ijfewi",
        name: "Stephanie",
        age: 26
      }
    ],
    otherState: "some other value",
    showPersons: false,
    paragraphValue: [],
    paragraphLength: 0
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons
    });
  };
  onInputEmit = event => {
    this.setState({
      userName: [
        {
          name: event.target.value
        }
      ]
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };
  onChangeText = event => {
    const paragraphValue = Array.from(event.target.value);
    const paragraphLength = event.target.value.length;
    this.setState({ paragraphLength, paragraphValue });
  };
  onCharDelete(index) {
    const paragraphValue = [...this.state.paragraphValue];
    paragraphValue.splice(index, 1);
    this.setState({ paragraphValue})
  }
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }
    let charComponent = null;
    charComponent = (
      <div>
        {this.state.paragraphValue.map((el, index)=> {
          return (<CharComponent textValue={el} key={index} clickOnDelete={() => this.onCharDelete(index)}/>);
        })}
      </div>
    );
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is reworking</p>
        {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}
        <button onClick={this.togglePersonsHandler} style={style}>Toggle Persons</button>
        {persons}
        <p>{this.state.paragraphLength}</p>
        <input onChange={this.onChangeText} />
        <ValidationComponent inputTextLength={this.state.paragraphLength} />
        {charComponent}
      </div>
    );
  }
}

export default App;
