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
import mockedData from "../../context/mockedData";
import caloImg from "../../Assets/Icons/calories.svg";
import protImg from "../../Assets/Icons/protein.svg";
import carboImg from "../../Assets/Icons/carbohydrates.svg";
import lipidImg from "../../Assets/Icons/lipids.svg";
const userSummaryData = mockedData.USER_MAIN_DATA[0].keyData;
const userName = mockedData.USER_MAIN_DATA[0].userInfos.firstName;

console.log(userName);
export default function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <div className="user-container">
        <User userName={userName} />
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
          <Summary
            img={caloImg}
            value={userSummaryData.calorieCount}
            unit={"kCal"}
            text={"Calories"}
          />
          <Summary
            img={protImg}
            value={userSummaryData.proteinCount}
            unit={"g"}
            text={"Protéines"}
          />
          <Summary
            img={carboImg}
            value={userSummaryData.carbohydrateCount}
            unit={"g"}
            text={"Protéines"}
          />
          <Summary
            img={lipidImg}
            value={userSummaryData.lipidCount}
            unit={"g"}
            text={"Glucides"}
          />
        </div>
      </div>
    </div>
  );
}
