import React from "react";
import reactLogo from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={reactLogo} alt="" className="nav--logo" />
      <h2 className="nav--logo-text">ReactFacts</h2>
      <h3 className="nav--extra-text">React Course - Project 1</h3>
    </nav>
  );
}
