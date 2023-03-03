import "./global.css";
import s from "./style.module.css";

export function App() {
  return (
    <div className={s.main_container}>
      <div className={s.header}>header</div>
      <div className={s.body_container}>
        <div className={s.sidebar}>sidebar</div>
        <div className={s.user_infos_container}>
          <div className={s.user_name}>User name</div>
          <div className={s.user_stats_container}>
            <div className={s.charts_container}>
              <div className={s.barchart}>barchart</div>
              <div className={s.mini_charts_container}>
                <div className={s.linechart}>linechart</div>
                <div className={s.webchart}>webchart</div>
                <div className={s.circlechart}>circlechart</div>
              </div>
            </div>
            <div className={s.summary_container}>Summary container</div>
          </div>
        </div>
      </div>
    </div>
  );
}
