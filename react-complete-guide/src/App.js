import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
const app = props => {
  const [personsState, setPersonsState] = useState({
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
    ]
  });
  const [otherState, setOtherState] = useState("some other value");
  console.log(personsState, otherState);
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {
          name: "Alex",
          age: 334
        },
        {
          name: "Unnames",
          age: 25
        },
        {
          name: "Stephanie",
          age: 212
        }
      ]
    });
  };
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is reworking</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        This is test children output
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", { className: "App" }, "Does this work now ?")
  // );
};

export default app;

// state = {
//   persons: [
//     {
//       name: "Max",
//       age: 28
//     },
//     {
//       name: "Many",
//       age: 25
//     },
//     {
//       name: "Stephanie",
//       age: 26
//     }
//   ],
//   otherState: "some other value"
// };
// switchNameHandler = () => {
//   // this.state.persons[0].name = "Maximilli";
//   this.setState({
//     persons: [
//       {
//         name: "Killer B",
//         age: 333
//       },
//       {
//         name: "MAAAAAAAAAAAAAAAAAAAAAX",
//         age: 1234
//       },
//       {
//         name: "Stephanie",
//         age: 566
//       }
//     ]
//   });
// };
