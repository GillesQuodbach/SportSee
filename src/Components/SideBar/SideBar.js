import React from "react";
import "./SideBar.css";
import yogaIcon from "../../Assets/Icons/yoga.svg";
import swimmingIcon from "../../Assets/Icons/swimming.svg";
import bikinkIcon from "../../Assets/Icons/biking.svg";
import gymIcon from "../../Assets/Icons/gym.svg";

export default function SideBar() {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-link-container">
        <li className="sidebar-link-item">
          <img src={yogaIcon} alt="yoga-icon" />
        </li>
        <li className="sidebar-link-item">
          <img src={swimmingIcon} alt="yoga-icon" />
        </li>
        <li className="sidebar-link-item">
          <img src={bikinkIcon} alt="yoga-icon" />
        </li>
        <li className="sidebar-link-item">
          <img src={gymIcon} alt="yoga-icon" />
        </li>
      </ul>
      <p className="sidebar-copyright">Copyright Sportsee 2020</p>
    </div>
  );
}
