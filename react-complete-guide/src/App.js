import React, { Component } from "react";
import "./App.css";
// import Person from "./Person/Person";
import Person from "./Person/Person";
import person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 28
      },
      {
        name: "Many",
        age: 25
      },
      {
        name: "Stephanie",
        age: 26
      }
    ],
    otherState: "some other value",
    showPersons: false
  };
  switchNameHandler = newName => {
    // this.state.persons[0].name = "Maximilli";
    this.setState({
      persons: [
        {
          name: newName,
          age: 333
        },
        {
          name: "MAAAAAAAAAAAAAAAAAAAAAX",
          age: 1234
        },
        {
          name: "Stephanie",
          age: 566
        }
      ]
    });
  };
  nameChangedHandler = event => {
    this.setState({
      persons: [
        {
          name: "Max",
          age: 333
        },
        {
          name: event.target.value,
          age: 1234
        },
        {
          name: "Stephanie",
          age: 566
        }
      ]
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

  render() {
    const style = {
      backgroundColor: "yellow",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person name={person.name} age={person.age} key={person.name} />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            This is test children output
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p style={style}>This is reworking</p>
        <button onClick={this.switchNameHandler.bind(this, "Maximilian")}>
          Switch Name
        </button>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
