import React from "react";
import "./UserInput.css";
const UserInput = ({ onChange, userName }) => {
  return <input type="name" onChange={onChange} value={userName} />;
};
export default UserInput;
