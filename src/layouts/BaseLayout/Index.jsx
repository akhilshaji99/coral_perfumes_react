import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./TopHeader";
import Account from "./Account";
import Menubar from "./Menubar";
import Footer from "./Footer";
const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="border-bottom ">
        <TopHeader />
        <Account />
        <Menubar />
      </div>
      <Outlet />
      <Footer/>
    </>
  );
};

export default BaseLayout;
