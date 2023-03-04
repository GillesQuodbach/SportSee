import "./global.css";
import s from "./style.module.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className={s.main_container}>
      <Header />
      <div className={s.body_container}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
