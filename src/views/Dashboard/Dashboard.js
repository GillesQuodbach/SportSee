import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./style.module.css";
import UserInfos from "../../components/UserInfos/UserInfos";
import AverageSessionChart from "../../components/AverageSessionChart/AverageSessionChart";
import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import Webchart from "../../components/Webchart/Webchart";
import Scorechart from "../../components/ScoreChart/Scorechart";
import Summary from "../../components/Summary/Summary";
import caloImg from "../../assets/icons/calories.svg";
import protImg from "../../assets/icons/protein.svg";
import carboImg from "../../assets/icons/carbohydrates.svg";
import lipidImg from "../../assets/icons/lipids.svg";
import {
  getUserActivity,
  getUserAverageSessions,
  getUserInfos,
  getUserPerformance,
} from "../../api/apiCall";

import {
  getMockedUserActivity,
  getMockedUserAverageSessions,
  getMockedUserInfos,
  getMockedUserPerformance,
} from "../../api/mockedData";
/**
 * Render the dashboard with all user datas
 * @params {array} - userMainInfos
 * @params {array} - userActivity
 * @params {array} - userAverageSessionsData
 * @params {array} - userPerformanceData
 * @return {JSX}
 */
export function Dashboard() {
  const [userMainInfos, setUserMainInfos] = useState([]);
  const [userActivity, setuserActivity] = useState([]);
  const [userAverageSessionsData, setAverageSessionsData] = useState([]);
  const [userPerformanceData, setUserPerformanceData] = useState([]);

  const { id } = useParams();
  const summaryItem = userMainInfos.keyData;

  //*? MAIN DATA REQUEST
  useEffect(() => {
    const userMainData = async () => {
      const request = await getUserInfos(id);
      if (request) {
        setUserMainInfos(request.data);
      } else if (!request) {
        const request = await getMockedUserInfos(id);
        setUserMainInfos(request.data);
      }
    };
    userMainData();
  }, [id]);

  //*? ACTIVITY DATA REQUEST
  useEffect(() => {
    const userActivityData = async () => {
      const request = await getUserActivity(id);
      if (request) {
        setuserActivity(request.data);
      } else if (!request) {
        const request = await getMockedUserActivity(id);
        setuserActivity(request.data);
      }
    };
    userActivityData();
  }, [id]);

  //*? AVERAGE SESSIONS DATA REQUEST
  useEffect(() => {
    const userAverageSessionsData = async () => {
      const request = await getUserAverageSessions(id);
      if (request) {
        setAverageSessionsData(request.data);
      } else if (!request) {
        const request = await getMockedUserAverageSessions(id);
        setAverageSessionsData(request.data);
      }
    };
    userAverageSessionsData();
  }, [id]);

  //*? PERFORMANCE DATA REQUEST
  useEffect(() => {
    const userPerformanceData = async () => {
      const request = await getUserPerformance(id);
      if (request) {
        setUserPerformanceData(request.data);
      }
      if (!request) {
        const request = await getMockedUserPerformance(id);
        setUserPerformanceData(request.data);
      }
    };
    userPerformanceData();
  }, [id]);

  return (
    <div className={s.user_infos_container}>
      {userMainInfos.userInfos && (
        <UserInfos userMainInfos={userMainInfos.userInfos} />
      )}
      <div className={s.user_stats_container}>
        <div className={s.charts_container}>
          {userActivity.sessions && (
            <DailyActivityChart userActivity={userActivity.sessions} />
          )}
          <div className={s.mini_charts_container}>
            <div className={s.lineChart_container}>
              {userAverageSessionsData.sessions && (
                <AverageSessionChart
                  userAverageSessionsData={userAverageSessionsData.sessions}
                />
              )}
            </div>
            <div className={s.webChart_container}>
              {userPerformanceData.data && (
                <Webchart userPerformanceData={userPerformanceData.data} />
              )}
            </div>
            <div className={s.radarChart_container}>
              {userMainInfos && <Scorechart userMainInfos={userMainInfos} />}
            </div>
          </div>
        </div>

        <div className={s.summary_container}>
          {summaryItem && (
            <Summary
              img={caloImg}
              unit={"g"}
              text={"Calories"}
              value={summaryItem.calorieCount}
            />
          )}
          {summaryItem && (
            <Summary
              img={protImg}
              unit={"g"}
              text={"Protéines"}
              value={summaryItem.proteinCount}
            />
          )}
          {summaryItem && (
            <Summary
              img={carboImg}
              unit={"g"}
              text={"Lipides"}
              value={summaryItem.carbohydrateCount}
            />
          )}
          {summaryItem && (
            <Summary
              img={lipidImg}
              unit={"g"}
              text={"Glucides"}
              value={summaryItem.lipidCount}
            />
          )}
        </div>
      </div>
    </div>
  );
}
