import React from "react";
import s from "./style.module.css";
import {
  LineChart,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
/** custom tooltype for user activity barChart
 * @param  {bool} active
 * @param  {array} payload
 * @return {JSX}
 */

const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <div className={s.linechart_custom_tooltip_container}>
        <p className={s.linechart_custom_tooltip_container}>
          {payload[0].value}min
        </p>
      </div>
    );
  }
  return null;
};

/**
 * Render a linechart with user average activity Data
 * @params {array} - Average sessions datas
 * @return {JSX}
 */
//Transformation des chiffres en lettres du jour de la semaine
export default function AverageSessionChart(props) {
  const sessionsDataArray = props.userAverageSessionsData;
  console.log("sessionsDataArray: ", sessionsDataArray);
  const userAverageSessionsDataFormat = sessionsDataArray.map((data) => {
    switch (data.day) {
      case 1:
        return { ...data, day: "L" };
      case 2:
        return { ...data, day: "M" };

      case 3:
        return { ...data, day: "M" };
      case 4:
        return { ...data, day: "J" };
      case 5:
        return { ...data, day: "V" };
      case 6:
        return { ...data, day: "S" };
      case 7:
        return { ...data, day: "D" };
      default:
        return { ...data };
    }
  });

  return (
    <>
      <span className={s.mini_linechart_text}>Durée moyennes des sessions</span>
      <ResponsiveContainer>
        <LineChart
          height={200}
          className="average_session_linechart"
          data={userAverageSessionsDataFormat}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              let div = document.querySelector(".average_session_linechart");
              let windowWidth = div.clientWidth;
              let mouseXpercentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              );
              // @ts-ignore
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
              div.style.borderRadius = "5px";
            }
          }}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1.2" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            label={{ color: "red" }}
            dataKey="day"
            height={40}
            type="category"
            tickLine={false}
            axisLine={false}
            stroke="#FF0000"
            tick={{
              fill: "#fff",
              fontSize: 14,
              fontWeight: 500,
              opacity: 0.5,
            }}
          />

          <Tooltip content={<CustomTooltip />} />

          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            dot={false}
            activeDot={{ r: 4 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

AverageSessionChart.propTypes = {
  props: PropTypes.array,
};
