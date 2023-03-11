import React from "react";
import s from "./syle.module.css";

export default function Error404() {
  return (
    <div className={s.error404_container}>
      <p className={s.error404_text1}>Oups, il y a eu une erreur !</p>
      <p className={s.error404_text2}>La page est introuvable.</p>
    </div>
  );
}
