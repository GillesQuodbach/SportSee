import React from "react";
import s from "./style.module.css";
import logo from "../../assets/logo.svg";
export default function Header() {
  return (
    <div className={s.header}>
      <img className={s.logo} src={logo} alt=""></img>
      <ul className={s.header_links_container}>
        <li className={s.header_link_item}>Accueil</li>
        <li className={s.header_link_item}>Profil</li>
        <li className={s.header_link_item}>Réglages</li>
        <li className={s.header_link_item}>Communauté</li>
      </ul>
    </div>
  );
}
