import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
const cockpit = props => {
  const toggleBtnRef = useRef(null);
  useEffect(() => {
    console.log("[Cockpit.js] use Effect");
    //Http request...
    // const timer = setTimeout(() => {
    //   alert("saved data to cloud");
    // }, 1000);
    toggleBtnRef.current.click();

    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.js] clean data");
    };
  }, []);
  useEffect(() => {
    console.log("[Cockpit.js] clean data second use effect");

    return () => {
      console.log("[Cockpit.js] clean data");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is reworking</p>
      <button
        ref={toggleBtnRef}
        onClick={props.onTogglePersons}
        className={btnClass}
      >
        Toggle Persons
      </button>
      <button onClick={props.login}>Login</button>
    </React.Fragment>
  );
};
export default React.memo(cockpit);
