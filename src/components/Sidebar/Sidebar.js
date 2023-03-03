import React from "react";
import s from "./style.module.css";
import yogaIcon from "../../assets/icons/yoga.svg";
import swimIcon from "../../assets/icons/swimming.svg";
import bikeIcon from "../../assets/icons/biking.svg";
import gymIcon from "../../assets/icons/gym.svg";

export default function Sidebar() {
  return (
    <div className={s.sidebar_container}>
      <div className={s.sidebar_icons_container}>
        <img src={yogaIcon} alt="" />
        <img src={swimIcon} alt="" />
        <img src={bikeIcon} alt="" />
        <img src={gymIcon} alt="" />
      </div>
      <p className={s.copyright}>Copyright. SportSee 2020</p>
    </div>
  );
}
