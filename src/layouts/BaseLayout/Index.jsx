import React, { useState } from "react";
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
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  const changeMobileMenuStatus = (status = null) => {
    setMobileMenuStatus(status === false ? status : !mobileMenuStatus);
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="border-bottom ">
        <nav className="fixed-top bg-white ">
          <TopHeader />
          <Account changeMobileMenuStatus={changeMobileMenuStatus} />
          <Menubar
            mobileMenuStatus={mobileMenuStatus}
            setMobileMenuStatus={setMobileMenuStatus}
          />
        </nav>
        <CartDrawer />
        <OTPModal />
      </div>
      <div className="fixed-top-margin main-layout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
