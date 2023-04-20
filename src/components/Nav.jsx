import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <Router>
          <Link className= 'missionNav' to="www.google.com">Our Mission</Link>
          <Link className = 'libraryNav' to="www.google.com">Exercise Library</Link>
          <Link className = 'premiumNav' to="www.google.com">Go Premium</Link>
        </Router>
      </nav>
    </div>
  );
}
