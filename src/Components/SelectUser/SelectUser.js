import React from "react";
import "./SelectUser.css";

export default function SelectUser() {
  return (
    <div className="select-user-container">
      <form>
        <label htmlFor="user">Choisissez un utilisateur</label>
        <select id="user">
          <option value="Utilisateur:">mockUser1</option>
          <option value="Utilisateur:">moc50kUser2</option>
          <option value="Utilisateur:">apiUser1</option>
          <option value="Utilisateur:">apiUser2</option>
        </select>
      </form>
    </div>
  );
}
