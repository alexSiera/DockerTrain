import React, { Component } from "react";
import "./App.css";
// import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
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
    userName: [
      {
        name: "Alex1sdcdsd  "
      },
      {
        name: "Igor"
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
  onUserChange = () => {
    this.setState({
      userName: [
        {
          name: "ALOXADdodpwqdoqkdoqwkdowqkdowqko"
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
  render() {
    const style = {
      backgroundColor: "yellow",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };
    return (
      <div className="App">
        {/* <h1>Hi, I'm a React App</h1>
        <p style={style}>This is reworking</p>
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
          changed={this.nameChangedHandler}
        >
          This is test children output
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        /> */}
        <UserOutput
          userName={this.state.userName[0].name}
          userChanged={this.onUserChange}
        />
        <UserOutput userName="Igor" />
        <UserInput
          onChange={this.onInputEmit}
          userName={this.state.userName[0].name}
        />
      </div>
    );
  }
}

export default App;
