import React from "react";
import s from "./style.module.css";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

/**
 * Render a Piechart with user score Data
 * @params {array} - Average sessions datas
 * @return {JSX}
 */

const scoreChartMiddle = { value: 1 };
console.log("scoreChartMiddle: ", scoreChartMiddle);

export default function Scorechart(props) {
  console.log(props.userMainInfos);
  const userScore = [
    {
      value:
        props.userMainInfos.todayScore * 100 || props.userMainInfos.score * 100,
    },
    {
      value:
        100 - props.userMainInfos.todayScore * 100 ||
        props.userMainInfos.score * 100,
    },
  ];

  const userScoreMiddle = [
    {
      value: 0,
    },
    {
      value: 100,
    },
  ];

  const COLORS = ["#FF0000", "#FBFBFB"];
  console.log(userScore);
  return (
    <>
      <p className={s.scorechart_title}>Score</p>
      <div className={s.scorechart_percentage_container}>
        <p className={s.scorechart_score}>{userScore[0].value}%</p>
        <p className={s.scorechart_score_text1}>de votre</p>
        <p className={s.scorechart_score_text2}>objectif</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={100} height={100}>
          <Pie
            data={userScore}
            innerRadius={65}
            outerRadius={80}
            paddingAngle={0}
            startAngle={90}
            endAngle={360}
            dataKey="value"
            cornerRadius={10}
          >
            {userScore.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Pie
            data={userScoreMiddle}
            dataKey={"value"}
            nameKey="name"
            innerRadius={0}
            outerRadius={65}
            cx="50%"
            cy="50%"
            fill="#fff"
            stroke=""
          ></Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

Scorechart.propTypes = {
  props: PropTypes.array,
};
