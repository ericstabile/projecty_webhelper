import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, children, show }) => {
  if (show === false) return null;

  return (
    <li className="nav-item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
