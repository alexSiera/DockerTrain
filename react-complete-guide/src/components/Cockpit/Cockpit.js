import React, { useEffect } from "react";
import classes from "./Cockpit.css";
const cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] use Effect");
    //Http request...
    setTimeout(() => {
      alert("saved data to cloud");
    }, 1000);
  }, []);
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
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is reworking</p>
      <button onClick={props.onTogglePersons} className={btnClass}>
        Toggle Persons
      </button>
    </React.Fragment>
  );
};
export default cockpit;
