import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import yogaIcon from "../../Assets/Icons/yoga.svg";
import swimmingIcon from "../../Assets/Icons/swimming.svg";
import bikinkIcon from "../../Assets/Icons/biking.svg";
import gymIcon from "../../Assets/Icons/gym.svg";

export default function SideBar() {
  return (
    <nav className="sidebar-container">
      <NavLink to="#">
        <img className="sidebar-icon" src={yogaIcon} alt="yoga-icon" />
      </NavLink>
      <NavLink to="#">
        <img className="sidebar-icon" src={swimmingIcon} alt="yoga-icon" />
      </NavLink>
      <NavLink to="#">
        <img className="sidebar-icon" src={bikinkIcon} alt="yoga-icon" />
      </NavLink>
      <NavLink to="#">
        <img className="sidebar-icon" src={gymIcon} alt="yoga-icon" />
      </NavLink>
      <p className="sidebar-copyright">Copyright Sportsee 2020</p>
    </nav>
  );
}
