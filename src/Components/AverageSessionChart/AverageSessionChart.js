import React from "react";
import "./AverageSessionChart.css";
import { LineChart, XAxis, Tooltip, Line, ResponsiveContainer } from "recharts";

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

const CustomLegend = ({ payload }) => {
  <h1>${payload}</h1>;
};

export default function AverageSessionChart(props) {
  const userAverageSessionsData = props.userAverageSessionsData.sessions;

  const userAverageSessionsDataFormat = userAverageSessionsData.map((data) => {
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

  //Transformation des chiffres en lettre du jour de la semaine

  return (
    <div className="mini-linechart-container">
      <p className="mini-linechart-text">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          className="average-session-linechart"
          data={userAverageSessionsDataFormat}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              let div = document.querySelector(".average-session-linechart");
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
          <XAxis
            dataKey="day"
            type="category"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            activeDot={{ r: 4 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
