import React from "react";
import moduleName from "/home/thibaudszy/Documents/Codaisseur/Week2-React/day2-states/src/App.css";

const RedButton = () => {
  return (
    <button id="BigRedButton" onClick={() => window.location.reload()}>
      <span>PARTY!</span>
    </button>
  );
};

export default RedButton;
