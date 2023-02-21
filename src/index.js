import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Error404 from "./Views/Error404/Error404"
import SelectUser from "./Views/SelectUser/SelectUser"
import Dashboard from './Views/Dashboard/Dashboard';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="*" element={<Error404/>}/>
        <Route path="/selectuser/:id" element={<SelectUser/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
);

