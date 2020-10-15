import React from "react";
import "./RedButton.scss";

const RedButton = (props) => {
  return (
    <button id="BigRedButton" onClick={() => props.reload()}>
      <span>PARTY!</span>
    </button>
  );
};

export default RedButton;
