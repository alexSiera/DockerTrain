import React from "react";
import classes from "./Cockpit.css";
const cockpit = props => {
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <React.Fragment>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is reworking</p>
      <button onClick={props.onTogglePersons} className={btnClass}>
        Toggle Persons
      </button>
    </React.Fragment>
  );
};
export default cockpit;
