import React from 'react';
import { Link } from 'react-router-dom';

const AppNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">Project Y</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/inventory" className="nav-link">Inventory</Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">Add Item</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavigation;
