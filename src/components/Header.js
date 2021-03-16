import React from "react";
import "./header.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <li>
        <Router>
          <Link to="/">Home</Link>
        </Router>
      </li>
      <li>
        <Router>
          <Link to="/about">About Me</Link>
        </Router>
      </li>
      <li>
        <Router>
          <Link to="/works">Works</Link>
        </Router>
      </li>

      <li>
        <Router>
          <Link to="/skills">Skills</Link>
        </Router>
      </li>
    </div>
  );
};

export default Header;
