import React from "react";
import "./header.css";
import { Link, BrowserRouter as Router, Redirect } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About Me</a>
      </li>
      <li>
        <a href="/work">Works</a>
      </li>

      <li>
        <a href="/skills">Skills</a>
      </li>
    </div>
  );
};

export default Header;
