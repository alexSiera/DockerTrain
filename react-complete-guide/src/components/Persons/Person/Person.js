import React from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
const Person = ({ name, age, children, click, changed }) => {
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
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);
