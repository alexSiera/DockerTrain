import React from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
const person = ({ name, age, children, click, changed }) => {
  console.log("[Person.js] rendering!!!, ");

  return (
    <Aux>
      <p onClick={click}>
        I'am {name} i am {age}
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </Aux>
  );
};
export default person;
