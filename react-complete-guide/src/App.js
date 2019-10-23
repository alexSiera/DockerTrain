import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is reworking</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">
          This is test children output
        </Person>
        <Person name="Alex" age="99" />
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
