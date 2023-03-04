import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./style.module.css";
import UserInfos from "../../components/UserInfos/UserInfos";
import AverageSessionChart from "../../components/AverageSessionChart/AverageSessionChart";
import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import Webchart from "../../components/Webchart/Webchart";
import Scorechart from "../../components/ScoreChart/Scorechart";
import Summary from "../../components/Summary/Summary";
import { getData } from "../../api/getData";

export function Dashboard() {
  const [userMainInfos, setUserMainInfos] = useState([]);
  const [userActivity, setuserActivity] = useState([]);
  const [userAverageSessionsData, setAverageSessionsData] = useState([]);
  const [userPerformanceData, setUserPerformanceData] = useState([]);

  const { id } = useParams();

  //*? MAIN DATA REQUEST
  useEffect(() => {
    const userMainData = async () => {
      const request = await getData("USER_MAIN_DATA", id);
      if (!request) return alert("Main data error");
      console.log(request.data);
      setUserMainInfos(request.data);
    };
    userMainData();
  }, [id]);

  //*? ACTIVITY DATA REQUEST
  useEffect(() => {
    const userActivityData = async () => {
      const request = await getData("USER_ACTIVITY", id);
      if (!request) return alert("Activity data error");
      console.log(request.data);
      setuserActivity(request.data);
    };
    userActivityData();
  }, [id]);

  //*? AVERAGE SESSIONS DATA REQUEST
  useEffect(() => {
    const userAverageSessionsData = async () => {
      const request = await getData("USER_AVERAGE_SESSIONS", id);
      if (!request) return alert("Average sessions data error");
      console.log(request.data);
      setAverageSessionsData(request.data);
    };
    userAverageSessionsData();
  }, [id]);

  //*? PERFORMANCE DATA REQUEST
  useEffect(() => {
    const userPerformanceData = async () => {
      const request = await getData("USER_PERFORMANCE", id);
      if (!request) return alert("Performance data error");
      console.log(request.data);
      setUserPerformanceData(request.data);
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
          <DailyActivityChart />
          <div className={s.mini_charts_container}>
            <AverageSessionChart />
            <Webchart />
            <Scorechart />
          </div>
        </div>
        <div className={s.summary_container}>
          <Summary />
          <Summary />
          <Summary />
          <Summary />
        </div>
      </div>
    </div>
  );
}
