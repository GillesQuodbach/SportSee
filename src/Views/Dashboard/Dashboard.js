import React from "react";
import "./Dashboard.css";
import User from "../../Components/User/User";
import Summary from "../../Components/Summary/Summary";
import DailyActivityChart from "../../Components/DailyActivityChart/DailyActivityChart";
import ScoreChart from "../../Components/ScoreChart/ScoreChart";
import AverageSessionChart from "../../Components/AverageSessionChart/AverageSessionChart";
import HexaChart from "../../Components/HexaChart/HexaChart";
import SelectUser from "../../Components/SelectUser/SelectUser";
import usersData from "../../context/mockedData";
import caloImg from "../../Assets/Icons/calories.svg";
import protImg from "../../Assets/Icons/protein.svg";
import carboImg from "../../Assets/Icons/carbohydrates.svg";
import lipidImg from "../../Assets/Icons/lipids.svg";

const selectUsersList = ["mockUser1", "mockUser2", "apiUser1", "apiUser2"];
const userName = usersData.USER_MAIN_DATA[0].userInfos.firstName;
const userActivityData = usersData.USER_ACTIVITY[0];
const userAverageSessionsData = usersData.USER_AVERAGE_SESSIONS[0];
const userSummaryData = usersData.USER_MAIN_DATA[0].keyData;
const userPerformanceData = usersData.USER_PERFORMANCE[0];
const userMainData = usersData.USER_MAIN_DATA[0];
console.log(userMainData);
export default function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <div className="user-container">
        <User userName={userName} />
        <SelectUser selectUsersList={selectUsersList} />
      </div>
      <div className="dashboard-all-infos-container">
        <div className="charts-container">
          <DailyActivityChart userActivityData={userActivityData} />
          <div className="mini-charts-container">
            <AverageSessionChart
              userAverageSessionsData={userAverageSessionsData}
            />
            <HexaChart userPerformanceData={userPerformanceData} />
            <ScoreChart userMainData={userMainData} />
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
