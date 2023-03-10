import React, { useState, useEffect } from "react";
import s from "./style.module.css";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * Render a Radarchart with user performance
 * @params {array} - user performace data
 * @return {JSX}
 */

function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export default function Webchart(props) {
  const screenWidth = useWindowSize().width;
  console.log("screenWidth: ", screenWidth);
  // console.log(props.userPerformanceData);
  const userRadarchartData = props.userPerformanceData;

  const userRadarchartArrayKindFormat = userRadarchartData.map((data) => {
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
    <ResponsiveContainer width="90%" height="100%">
      {screenWidth <= 1100 ? (
        <RadarChart
          cx="55%"
          cy="50%"
          outerRadius="55%"
          data={userRadarchartArrayKindFormat}
        >
          <PolarGrid />
          <PolarAngleAxis
            tickLine={false}
            dataKey="kind"
            tick={{ fontSize: "0.601rem", fill: "#fff", fontWeight: 500 }}
          />

          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      ) : (
        <RadarChart
          cx="55%"
          cy="50%"
          outerRadius="55%"
          data={userRadarchartArrayKindFormat}
        >
          <PolarGrid />
          <PolarAngleAxis
            tickLine={false}
            dataKey="kind"
            tick={{ fontSize: "0.6rem", fill: "#fff", fontWeight: 500 }}
          />

          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      )}
    </ResponsiveContainer>
  );
}

Webchart.propTypes = {
  props: PropTypes.array,
};
