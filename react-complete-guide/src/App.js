import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
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
    otherState: "some other value"
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
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is reworking</p>
        <button onClick={this.switchNameHandler.bind(this, "Maximilian")}>
          Switch Name
        </button>
        <button
          onClick={() => this.switchNameHandler("MaxiKilkackasaamamkcma")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
        >
          This is test children output
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "Does this work now ?")
    // );
  }
}

export default App;
