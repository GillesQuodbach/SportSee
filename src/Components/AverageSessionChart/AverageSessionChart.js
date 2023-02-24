import React from "react";
import "./AverageSessionChart.css";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import mockedData from "../../context/mockedData";

export default function AverageSessionChart() {
  const userAverageSessionsArray = mockedData.USER_AVERAGE_SESSIONS[0].sessions;

  const userAverageSessionsArrayFormat = userAverageSessionsArray.map(
    (data) => {
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
    }
  );

  const CustomTooltip = ({ payload, active }) => {
    if (active) {
      return (
        <div className="linechart-custom-tooltip-container">
          <p className="linechart-custom-tooltip-container">
            {payload[0].value}min
          </p>
        </div>
      );
    }
    return null;
  };
  //Transformation des chiffres en lettre du jour de la semaine

  return (
    <ResponsiveContainer
      className={"linechart-main-container"}
      width={260}
      height={260}
    >
      <LineChart
        className="average-session-linechart"
        data={userAverageSessionsArrayFormat}
        onMouseMove={(e) => {
          if (e.isTooltipActive === true) {
            let div = document.querySelector(".average-session-linechart");
            let windowWidth = div.clientWidth;
            let mouseXpercentage = Math.round(
              (e.activeCoordinate.x / windowWidth) * 100
            );
            // @ts-ignore
            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
          }
        }}
      >
        <XAxis
          type="category"
          dataKey={"day"}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey={"sessionLength"}
          tickLine={false}
          axisLine={false}
          tickCount={0}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#82ca9d"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
