import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div id="header">
      <Link to="/" className="home">
        <span>NET</span>CHA
      </Link>
      {/*<Link to="/about">Search</Link>*/}
    </div>
  );
}

export default Navigation;
