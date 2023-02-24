import React from "react";
import "./Dashboard.css";
import { useState, useContext } from "react";
import User from "../../Components/User/User";
import Summary from "../../Components/Summary/Summary";
import DailyActivityChart from "../../Components/DailyActivityChart/DailyActivityChart";
import ScoreChart from "../../Components/ScoreChart/ScoreChart";
import AverageSessionChart from "../../Components/AverageSessionChart/AverageSessionChart";
import HexaChart from "../../Components/HexaChart/HexaChart";
import SelectUser from "../../Components/SelectUser/SelectUser";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="user-container">
        <User />
        <SelectUser />
      </div>
      <div className="dashboard-all-infos-container">
        <div className="charts-container">
          <DailyActivityChart />
          <div className="mini-charts-container">
            <AverageSessionChart />
            <HexaChart />
            <ScoreChart />
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
