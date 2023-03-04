import React from "react";
import s from "./style.module.css";

export default function UserInfos(props) {
  console.log(props.userMainInfos.firstName);
  return (
    <div className={s.user_name_container}>
      <p className={s.user_greets}>
        Bonjour{" "}
        <span className={s.user_name}>{props.userMainInfos.firstName}</span>
      </p>
      <p className={s.user_congratulation}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}
