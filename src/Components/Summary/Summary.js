import React from "react";
import "./Summary.css";

export default function Summary(props) {
  let value = props.value;
  let formatedValue = new Intl.NumberFormat("en-In", {
    maximumSignificantDigits: 3,
  }).format(value);

  return (
    <div className="summary-component">
      <img className="summary-component-img" src={props.img} alt="" />
      <div className="summary-component-text-container">
        <p className="summary-component-text-value">{formatedValue}</p>
        <p className="summary-component-text-unit">{props.unit}</p>

        <p className="summary-component-category">{props.text}</p>
      </div>
    </div>
  );
}
