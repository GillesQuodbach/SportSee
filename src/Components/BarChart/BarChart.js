import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../context/fulldata";

// Xaxis = id parametre
// Yaxis = caolires brulée et poids
export default function Chart() {
  const newData = USER_ACTIVITY[0].sessions;
  const data = [
    { name: "Facebook", value: 200000 },
    { name: "Twitter", value: 2000000 },
    { name: "Instagram", value: 300000 },
    { name: "Telegram", value: 205500 },
  ];
  console.log(data);
  console.log(newData);

  return (
    <div className="chart">
      <h1>Test chart</h1>
      <BarChart
        width={835}
        height={320}
        data={newData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tickCount={10} dataKey="kilogram" />
        <YAxis orientation="right" dataKey="calories" />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#E60000" />
        <Bar dataKey="calories" fill="#282D30" />
      </BarChart>
    </div>
  );
}
