import React from "react";
import "./HexaChart.css";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function HexaChart(props) {
  const userRadarchartData = props.userPerformanceData;

  const userRadarchartArrayKindFormat = userRadarchartData.data.map((data) => {
    switch (data.kind) {
      case 1:
        return { ...data, kind: "Cardio" };
      case 2:
        return { ...data, kind: "Energie" };

      case 3:
        return { ...data, kind: "Endurance" };
      case 4:
        return { ...data, kind: "Force" };
      case 5:
        return { ...data, kind: "Vitesse" };
      case 6:
        return { ...data, kind: "Intensité" };
      default:
        return { ...data };
    }
  });

  return (
    <div className="mini-hexachart-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          // margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          cx="50%"
          cy="50%"
          outerRadius="65%"
          data={userRadarchartArrayKindFormat}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" tick={{ fontSize: 10 }} />

          <Radar
            dataKey="value"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
