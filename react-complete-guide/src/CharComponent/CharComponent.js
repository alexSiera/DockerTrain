import React from "react";
import "./CharComponent.css";
const charComponent = ({ textValue, clickOnDelete }) => {
    return (<p onClick={clickOnDelete}>{textValue}</p>);
};
export default charComponent;
