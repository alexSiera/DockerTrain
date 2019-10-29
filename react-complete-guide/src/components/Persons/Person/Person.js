import React from "react";
import classes from "./Person.css";
const person = ({ name, age, children, click, changed }) => {
  console.log("[Person.js] rendering!!!, ");

  return [
    <p key="i1" onClick={click}>
      I'am {name} i am {age}
    </p>,
    <p key="i2">{children}</p>,
    <input key="i3" type="text" onChange={changed} value={name} />
  ];
};
export default person;
