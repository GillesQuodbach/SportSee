import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
/**
 * Render button with users available
 * @params {array} - users available
 * @return {JSX}
 */
export function SelectUser(props) {
  return (
    <div className={s.select_user_container}>
      <Link to="/user/12">
        <button>{props.selectUserList[0]}</button>
      </Link>
      <Link to="/user/18">
        <button>{props.selectUserList[1]}</button>
      </Link>
    </div>
  );
}

SelectUser.propTypes = {
  props: PropTypes.array,
};
