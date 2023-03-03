import "./global.css";
import Header from "./components/Header/Header";
import s from "./style.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import UserInfos from "./components/UserInfos/UserInfos";
import AverageSessionChart from "./components/AverageSessionChart/AverageSessionChart";
import DailyActivityChart from "./components/DailyActivityChart/DailyActivityChart";
import Webchart from "./components/Webchart/Webchart";
import Scorechart from "./components/ScoreChart/Scorechart";
import Summary from "./components/Summary/Summary";

export function App() {
  return (
    <div className={s.main_container}>
      <Header />
      <div className={s.body_container}>
        <Sidebar />
        <div className={s.user_infos_container}>
          <UserInfos />
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
      </div>
    </div>
  );
}
