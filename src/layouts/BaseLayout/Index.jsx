import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./TopHeader";
import Account from "./Account";
import Menubar from "./Menubar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import OTPModal from "./OTPModal";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const BaseLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.href]);

  //Change language direction using js
  document.getElementsByTagName("html")[0].dir =
    localStorage.getItem("languageDirection");
  //#End
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="border-bottom ">
        <nav className="fixed-top bg-white ">
          <TopHeader />
          <Account />
          <Menubar />
        </nav>
        <CartDrawer />
        <OTPModal />
      </div>
      <div className="fixed-top-margin">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
