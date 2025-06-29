import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 bg-gray-200">
      <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;