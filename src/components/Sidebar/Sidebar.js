import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";
import yogaIcon from "../../assets/icons/yoga.svg";
import swimIcon from "../../assets/icons/swimming.svg";
import bikeIcon from "../../assets/icons/biking.svg";
import gymIcon from "../../assets/icons/gym.svg";

export default function Sidebar() {
  return (
    <div className={s.sidebar_container}>
      <div className={s.sidebar_icons_container}>
        <NavLink to="#">
          <img src={yogaIcon} alt="" />
        </NavLink>
        <NavLink to="#">
          <img src={swimIcon} alt="" />
        </NavLink>
        <NavLink to="#">
          <img src={bikeIcon} alt="" />
        </NavLink>
        <NavLink to="#">
          <img src={gymIcon} alt="" />
        </NavLink>
      </div>
      <p className={s.copyright}>Copyright. SportSee 2020</p>
    </div>
  );
}
