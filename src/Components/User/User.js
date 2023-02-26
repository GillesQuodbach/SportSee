import React from "react";
import "./User.css";

export default function User(props) {
  return (
    <div className="user-greet-container">
      <p className="user-name">
        Bonjour <b className="name">{props.userName}</b>
      </p>
      <p className="user-greet">
        Félicitation! Vous avez explosé vos objectifs hier ! 👏{" "}
      </p>
    </div>
  );
}
