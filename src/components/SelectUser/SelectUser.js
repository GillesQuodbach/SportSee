import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export function SelectUser(props) {
  return (
    <div className={s.select_user_container}>
      <Link to="/user/12">
        <button>{props.selectUserList[0]}</button>
      </Link>
      <Link to="/user/18">
        <button>{props.selectUserList[1]}</button>
      </Link>
      <button>{props.selectUserList[2]}</button>
      <button>{props.selectUserList[3]}</button>
    </div>
  );
}
