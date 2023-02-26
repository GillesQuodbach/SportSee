import React from "react";
import "./ScoreChart.css";
import mockedData from "../../context/mockedData";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const userMainDataArray = mockedData.USER_MAIN_DATA[1];

const userScore = [
  { value: userMainDataArray.todayScore || userMainDataArray.score },
  { value: 1 - userMainDataArray.todayScore || userMainDataArray.score },
];

export default function ScoreChart() {
  return (
    <div className="mini-scorechart-container">
      <p className="scorechart-title">Score</p>
      <div className="scorechart-percentage-container">
        <p className="scorechart-score">{userScore[0].value * 100}%</p>
        <p className="scorechart-score-text1">de votre</p>
        <p className="scorechart-score-text2">objectif</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={250} height={250}>
          <Pie
            data={userScore}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={85}
            fill="#8884d8"
            startAngle={90}
            dataKey="value"
          >
            {userScore.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
              )
            )}
          </Pie>
          <Pie
            data={userScore}
            cx={420}
            cy={200}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          ></Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
