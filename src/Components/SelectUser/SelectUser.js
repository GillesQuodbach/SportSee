import React from "react";
import "./SelectUser.css";

export default function SelectUser(props) {
  return (
    <div className="select-user-container">
      <form>
        <label htmlFor="user">Choisissez un utilisateur</label>
        <select id="user">
          <option value="Utilisateur:">{props.selectUsersList[0]}</option>
          <option value="Utilisateur:">{props.selectUsersList[1]}</option>
          <option value="Utilisateur:">{props.selectUsersList[2]}</option>
          <option value="Utilisateur:">{props.selectUsersList[3]}</option>
        </select>
      </form>
    </div>
  );
}
