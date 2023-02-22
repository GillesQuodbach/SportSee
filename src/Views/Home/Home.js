import React from "react";
import "./Home.css";
import { useState, useContext } from "react";
import User from "../../Components/User/User";
import Summary from "../../Components/Summary/Summary";
import BarChart from "../../Components/BarChart/BarChart";
import CircleChart from "../../Components/CircleChart/CircleChart";
import LineChart from "../../Components/LineChart/LineChart";
import HexaChart from "../../Components/HexaChart/HexaChart";

export default function Home() {
  return (
    <div className="dashboard-container">
      <User />
      <div className="dashboard-all-infos-container">
        <div className="charts-container">
          <BarChart />
          <div className="mini-charts-container">
            <LineChart />
            <HexaChart />
            <CircleChart />
          </div>
        </div>
        <div className="summary-container">
          <Summary />
          <Summary />
          <Summary />
          <Summary />
        </div>
      </div>
    </div>
  );
}
