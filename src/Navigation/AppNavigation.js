import React, { useState } from "react";
import NavItem from "./NavItem";
import "./AppNavigation.css";

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
            <NavItem to="/">Home</NavItem>
            <NavItem to="/experimental" show={showExperimental}>
              Experimental
            </NavItem>
            <NavItem to="/modifierService" show={!showExperimental}>
              Modifier Service
            </NavItem>
            <NavItem to="/actionService" show={!showExperimental}>
              Action Service
            </NavItem>
            <NavItem to="/inventory" show={!showExperimental}>
              Inventory Service
            </NavItem>
            <NavItem to="/sprite" show={!showExperimental}>
              Sprite Service
            </NavItem>
            <NavItem to="/enum" show={!showExperimental}>
              Enum Service
            </NavItem>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="switchToggle"
            checked={showExperimental}
            onChange={handleSwitchToggle}
          />
          <label className="form-check-label" htmlFor="switchToggle"></label>
        </div>
      </div>
    </nav>
  );
};

export default AppNavigation;
