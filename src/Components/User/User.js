import React from "react";
import "./User.css";

export default function User() {
  return (
    <div className="user-container">
      <p className="user-name">
        Bonjour <b className="name">Thomas</b>
      </p>
      <p className="user-greet">
        Félicitation! Vous avez explosé vos objectifs hier ! 👏{" "}
      </p>
    </div>
  );
}
