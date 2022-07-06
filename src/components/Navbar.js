import React from "react";
import reactLogo from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={reactLogo} alt="" className="react-logo"/>
        <h2>ReactFacts</h2>
      </div>
      <h3 className="extra-title">React Course - Project 1</h3>
    </nav>
  );
}
