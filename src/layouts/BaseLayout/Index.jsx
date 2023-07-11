import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./TopHeader";
import Account from "./Account";
import Menubar from "./Menubar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import OTPModal from "./OTPModal";
const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="border-bottom ">
        <TopHeader />
        <Account />
        <Menubar />
        <CartDrawer />
        <OTPModal />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
