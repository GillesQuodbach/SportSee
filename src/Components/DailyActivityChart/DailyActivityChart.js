import React, { useState, useEffect, useContext } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Label,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import "./DailyActivityChart.css";
import mockedData from "../../context/mockedData";
import blackIcon from "../../Assets/Icons/blackIcon.svg";
import redIcon from "../../Assets/Icons/redIcon.svg";
import { DashboardContext } from "../../context/DashboardContext";
// Xaxis = id parametre
// Yaxis = caolires brulée et poids

const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="custom-tooltip-kilo">{payload[0].value}kg</p>
        <p className="custom-tooltip-calo">{payload[1].value}Kcal</p>
      </div>
    );
  }
  return null;
};

export default function DailyActivityChart() {
  const userID = mockedData.USER_ACTIVITY[0].userId; // ici user12
  const userSessions = mockedData.USER_ACTIVITY[0].sessions; // ici user12

  const [data, setData] = useState(mockedData.USER_ACTIVITY.userId);

  const { dataChart, changeUser, userData } = useContext(DashboardContext);

  //Transformation de la date en id
  for (let i = 0; i < userSessions.length; i++) {
    userSessions[i].day = i + 1;
  }

  return (
    <>
      <div className="barchart-header">
        <h2 className="barchart-header-title">Activité quotidienne</h2>
        <div className="barchart-legend-container">
          <div className="barchart-kilo-legend">
            <img className="barchart-kilo-legend-icon" src={blackIcon} alt="" />
            <p className="barchart-kilo-legend-text">Poids (kg)</p>
          </div>
          <div className="barchart-calo-legend">
            <img className="barchart-calo-legend-icon" src={redIcon} alt="" />
            <p className="barchart-calo-legend-text">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer
        className={"barchart-main-container"}
        width="100%"
        height={400}
      >
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
    </>
  );
}