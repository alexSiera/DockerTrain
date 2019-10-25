import React, { Component } from "react";
import classes from "./App.css";
// import Person from "./Person/Person";
import Person from "./Person/Person";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
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
    let btnClass = '';
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}><Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}
              /></ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
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
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is reworking</p>
        {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}
        <button onClick={this.togglePersonsHandler} className={btnClass}>Toggle Persons</button>
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

