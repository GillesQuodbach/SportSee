import React from "react";
import s from "./style.module.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={s.header}>
      <NavLink to="/">
        <img className={s.logo} src={logo} alt="" />
      </NavLink>
      <ul className={s.header_links_container}>
        <li className={s.header_link_item}>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li className={s.header_link_item}>
          <NavLink to="/profil">Profil</NavLink>
        </li>
        <li className={s.header_link_item}>
          <NavLink to="/settings">Réglages</NavLink>
        </li>
        <li className={s.header_link_item}>
          <NavLink to="/community">Communauté</NavLink>
        </li>
      </ul>
    </div>
  );
}
