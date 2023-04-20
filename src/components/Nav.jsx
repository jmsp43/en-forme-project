import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <Router>
          <Link className= 'missionNav' to="/mission">Our Mission</Link>
          <Link className = 'libraryNav' to="/library">Exercise Library</Link>
          <Link className = 'premiumNav' to="/premium">Go Premium</Link>
        </Router>
      </nav>
    </div>
  );
}
