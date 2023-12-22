import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a target="_blank" href="#">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="#">
          Karan Gupta
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="#">
          YOUTUBE Tutorials
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
