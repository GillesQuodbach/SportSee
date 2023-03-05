import React from "react";
import s from "./style.module.css";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

/**
 * Render a Piechart with user score Data
 * @params {array} - Average sessions datas
 * @return {JSX}
 */

export default function Scorechart(props) {
  // console.log(props.userMainInfos);
  const userScore = [
    { value: props.userMainInfos.todayScore || props.userMainInfos.score },
    { value: 1 - props.userMainInfos.todayScore || props.userMainInfos.score },
  ];
  // console.log(userScore);
  return (
    <div className={s.circlechart}>
      <p className={s.scorechart_title}>Score</p>
      <div className={s.scorechart_percentage_container}>
        <p className={s.scorechart_score}>{userScore[0].value * 100}%</p>
        <p className={s.scorechart_score_text1}>de votre</p>
        <p className={s.scorechart_score_text2}>objectif</p>
      </div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <PieChart width={250} height={280}>
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
      {/* </ResponsiveContainer> */}
    </div>
  );
}

Scorechart.propTypes = {
  props: PropTypes.array,
};
