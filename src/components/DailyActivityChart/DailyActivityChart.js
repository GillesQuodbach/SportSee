import React from "react";
import s from "./style.module.css";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import blackIcon from "../../assets/icons/blackIcon.svg";
import redIcon from "../../assets/icons/redIcon.svg";

/** custom tooltype for user activity barChart
 * @param  {bool} active
 * @param  {array} payload
 * @return {JSX}
 */
const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <>
        <div className={s.custom_tooltip}>
          <p className={s.custom_tooltip_kilo}>{payload[0].value}kg</p>
          <p className={s.custom_tooltip_calo}>{payload[1].value}Kcal</p>
        </div>
      </>
    );
  }
  return null;
};

/**
 * Render a barchart with user daily activity Datas
 * @params {array} - Daily sessions datas
 * @return {JSX}
 */
export default function DailyActivityChart(props) {
  // console.log(props.userActivity);
  const userSessions = props.userActivity;

  //Transformation de la date en id
  for (let i = 0; i < userSessions.length; i++) {
    userSessions[i].day = i + 1;
  }

  return (
    <>
      <div className={s.barchart_header}>
        <h2 className={s.barchart_header_title}>Activité quotidienne</h2>
        <div className={s.barchart_legend_container}>
          <div className={s.barchart_kilo_legend}>
            <img
              className={s.barchart_kilo_legend_icon}
              src={blackIcon}
              alt=""
            />
            <p className={s.barchart_kilo_legend_text}>Poids (kg)</p>
          </div>
          <div className={s.barchart_calo_legend}>
            <img className={s.barchart_calo_legend_icon} src={redIcon} alt="" />
            <p className={s.barchart_calo_legend_text}>
              Calories brûlées (kCal)
            </p>
          </div>
        </div>
      </div>
      <div className={s.barchart_main_container}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={830}
            barGap={8}
            barCategoryGap={32}
            data={userSessions}
          >
            <XAxis
              dataKey={"day"}
              tickLine={false}
              tick={{ fontSize: 14 }}
              stroke="#9B9EAC"
            />
            <YAxis
              yAxisId={"kilograph"}
              type="number"
              dataKey={"kilogram"}
              orientation="right"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
              stroke="#9B9EAC"
              tickCount={5}
              domain={["dataMin - 2", "dataMax + 1"]}
            ></YAxis>
            <YAxis
              yAxisId={"calograph"}
              type="number"
              dy={15} //margin en y des chiffres
              // domain={["dataMin", "dataMax"]}
              dataKey={"calories"}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 0 }}
              stroke="#9B9EAC"
              domain={["dataMin - 20", "dataMax + 10"]}
            />
            <CartesianGrid
              strokeDasharray="1 1"
              horizontal={true}
              vertical={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              yAxisId={"kilograph"}
              barSize={7}
              name="Poids (kg)"
              dataKey="kilogram"
              fill="#282D30"
              radius={[50, 50, 0, 0]}
              legendType="circle"
            />
            <Bar
              yAxisId={"calograph"}
              barSize={7}
              name="Calories brûlées (kCal)"
              dataKey="calories"
              fill="#E60000"
              radius={[50, 50, 0, 0]}
              legendType="circle"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
DailyActivityChart.propTypes = {
  props: PropTypes.array,
};
