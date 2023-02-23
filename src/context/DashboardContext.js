import React, { createContext, useState } from "react";
import fulldata from "./fulldata";

//Création du context
export const DashboardContext = createContext();

const DashboardContextProvider = (props) => {
  const [dataChart, setDataChart] = useState(fulldata.USER_ACTIVITY);
  const [userData, setUserData] = useState(fulldata.USER_ACTIVITY[0].userId);

  const changeUser = (el) => {
    setDataChart(el.target.value);
    setUserData(fulldata.el.target.value);
  };
  return (
    <DashboardContext.Provider value={{ changeUser, dataChart, userData }}>
      {props.children}
    </DashboardContext.Provider>
  );
};
export default DashboardContextProvider;
