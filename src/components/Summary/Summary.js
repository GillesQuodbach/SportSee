import React from "react";
import s from "./style.module.css";
import PropTypes from "prop-types";
/**
 * Render a component with summary data
 * @params {array} - user summary datas
 * @return {JSX}
 */
export default function Summary(props) {
  let value = props.value;
  let formatedValue = new Intl.NumberFormat("en-In", {
    maximumSignificantDigits: 3,
  }).format(value);

  // console.log("props: ", props);
  return (
    <div className={s.summary_component}>
      <img className={s.summary_component_img} src={props.img} alt="" />
      <div className={s.summary_component_text_container}>
        <p className={s.summary_component_text_value}>{formatedValue}</p>
        <p className={s.summary_component_text_unit}>{props.unit}</p>

        <p className={s.summary_component_category}>{props.text}</p>
      </div>
    </div>
  );
}

Summary.propTypes = {
  props: PropTypes.array,
};
