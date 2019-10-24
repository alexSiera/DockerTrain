import React from "react";
import "./ValidationComponent.css";
const validationComponent = ({ inputTextLength }) => {
  let outputText;
  if (inputTextLength < 5) {
    outputText = "Too short";
  } else {
    outputText = "Too long";
  }
  return <p>{outputText}</p>;
};
export default validationComponent;
