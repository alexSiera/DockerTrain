import React from "react";
import "./Person.css";
const person = ({ name, age, children, click, changed }) => {
  return (
    <div className="Person">
      <p onClick={click}>
        I'am {name} i am {age}
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};
export default person;
