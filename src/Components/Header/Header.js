import React from "react";
import "./Header.css";
import logo from "../../Assets/Logo/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="sportsee-logo" />
      <nav className="navbar">
        <ul className="nav-link-container">
          <li className="nav-link-item nav-link-home">
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className="nav-link-item  nav-link-profil">
            <NavLink to="/profil">Profil</NavLink>
          </li>
          <li className="nav-link-item  nav-link-settings">
            <NavLink to="/settings">Réglages</NavLink>
          </li>
          <li className="nav-link-item  nav-link-community">
            <NavLink to="/community">Communauté</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
