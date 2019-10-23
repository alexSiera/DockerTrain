import React from "react";
const person = ({ name, age, children, click }) => {
  return (
    <div>
      <p onClick={click}>
        I'am {name} i am {age}
      </p>
      <p>{children}</p>
    </div>
  );
};
export default person;
