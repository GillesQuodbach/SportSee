import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import { App } from "./App";
import { SelectUser } from "./components/SelectUser/SelectUser";
import { Dashboard } from "./views/Dashboard/Dashboard";

const usersList = ["userId12 🧙", "userId18 👩"];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<SelectUser selectUserList={usersList} />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
