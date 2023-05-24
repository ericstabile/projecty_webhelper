import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AppNavigation.css';

const AppNavigation = () => {
  const [showExperimental, setShowExperimental] = useState(false);

  const handleSwitchToggle = () => {
    setShowExperimental((prevShowExperimental) => !prevShowExperimental);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
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
              <NavLink exact to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            {showExperimental && (
              <li className="nav-item">
                <NavLink to="/experimental" className="nav-link" activeClassName="active">
                  Experimental
                </NavLink>
              </li>
            )}
            {!showExperimental && (
              <li className="nav-item">
                <NavLink to="/inventory" className="nav-link" activeClassName="active">
                  Inventory Service
                </NavLink>
              </li>
            )}
            {!showExperimental && (
              <li className="nav-item">
                <NavLink to="/sprite" className="nav-link" activeClassName="active">
                  Sprite Service
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        {/* <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="switchToggle"
            checked={showExperimental}
            onChange={handleSwitchToggle}
          />
          <label className="form-check-label" htmlFor="switchToggle">
          </label>
        </div> */}
      </div>
    </nav>
  );
};

export default AppNavigation;
