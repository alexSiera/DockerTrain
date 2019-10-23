import React from "react";
import "./UserOutput.css";

const UserOutput = ({ userName, userChanged }) => {
  const stylingUserOutput = {
    color: "green"
  };
  return (
    <div>
      <p className="UserOutput" onClick={userChanged}>
        {userName}
      </p>
      <p style={stylingUserOutput}>{userName}</p>
    </div>
  );
};
export default UserOutput;
