import React from "react";
import "./header.css";
import { Link, Router } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a exact href="/about">
          About
        </a>
      </li>
      <li>
        <a exact href="/users">
          Users
        </a>
      </li>
    </div>
  );
};

export default Header;
