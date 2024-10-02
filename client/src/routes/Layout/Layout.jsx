import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './../../components/navbar/Navbar';
import "./Layout.scss"
const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
