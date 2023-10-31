import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./TopHeader";
import Account from "./Account";
import Menubar from "./Menubar";
import Footer from "./Footer";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import MobileMyAccount from "../../pages/common/MobileMyAccount";
import MobileMenu from "./Mobilemenu";
import request from "../../utils/request";

const BaseLayout = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.className = "";
    document.body.classList.add(
      window.location.pathname.split("/")[1] === ""
        ? "home"
        : window.location.pathname.split("/")[1]
    );
  }, [window.location.href]);

  //Change language direction using js
  document.getElementsByTagName("html")[0].dir =
    localStorage.getItem("languageDirection");
  //#End
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);
  const [myAccountStatus, setMyAccountStatus] = useState(false);

  const changeMobileMenuStatus = (status = null) => {
    setMobileMenuStatus(status === false ? status : !mobileMenuStatus);
  };

  const changeMyAccountMenuStatus = (status = null) => {
    setMobileMenuStatus(false);
    setMyAccountStatus(status === false ? status : !myAccountStatus);
  };

  useEffect(() => {
    getMenuList();
  }, []);

  const getMenuList = async () => {
    try {
      const response = await request.get("get_menus/");
      setMenuItems(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  const closeMoibileMenu = () => {
    setMobileMenuStatus(false);
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="">
        <nav className="fixed-top bg-white ">
          <TopHeader />
          <Account
            changeMyAccountMenuStatus={changeMyAccountMenuStatus}
            mobileMenuStatus={mobileMenuStatus}
            myAccountStatus={myAccountStatus}
            closeMoibileMenu={closeMoibileMenu}
          />
          <Menubar
            mobileMenuStatus={mobileMenuStatus}
            setMobileMenuStatus={setMobileMenuStatus}
            menuItems={menuItems}
          />
          <MobileMenu
            mobileMenuStatus={mobileMenuStatus}
            setMobileMenuStatus={setMobileMenuStatus}
            menuItems={menuItems}
          />
        </nav>
      </div>
      <div className="fixed-top-margin main-layout ">
        <Outlet />
      </div>
      <MobileMyAccount
        myAccountStatus={myAccountStatus}
        setMyAccountStatus={setMyAccountStatus}
        mobileMenuStatus={mobileMenuStatus}
        closeMoibileMenu={closeMoibileMenu}
        changeMyAccountMenuStatus={changeMyAccountMenuStatus}
      />
      <Footer changeMobileMenuStatus={changeMobileMenuStatus} />
    </>
  );
};

export default BaseLayout;
