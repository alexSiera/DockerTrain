import React from "react";
const person = ({ name, age, children }) => {
  return (
    <div>
      <p>
        I'am {name} i am {age}
      </p>
      <p>{children}</p>
    </div>
  );
};
export default person;
