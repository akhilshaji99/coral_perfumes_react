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
import { useNavigate } from "react-router-dom";

const BaseLayout = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    console.log("window.location.href", window.location.href);
    // window.scrollTo(0, 1);
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 1);
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
    //for category
    setMyAccountStatus(false);
    setMobileMenuStatus(status === false ? status : !mobileMenuStatus);
  };

  const changeMyAccountMenuStatus = (status = null) => {
    //For my account
    console.log("hereee");
    setMobileMenuStatus(false);
    if (localStorage.getItem("userDatas")) {
      setMyAccountStatus(status === false ? status : !myAccountStatus);
    } else {
      navigate("/login");
    }

    //for category
    // setMyAccountStatus(false);
    // setMobileMenuStatus(status === false ? status : !mobileMenuStatus);
  };

  useEffect(() => {
    getMenuList();
  }, []);

  const getMenuList = async () => {
    try {
      const response = await request.get("get_menus/");
      setMenuItems(response.data);
      console.log('menu:', response?.data);
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
        <nav className="fixed-top bg-white " id="product_slider_fix">
          <TopHeader />
          <Account
            changeMyAccountMenuStatus={changeMobileMenuStatus}
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
            changeMyAccountMenuStatus={changeMyAccountMenuStatus}
            myAccountStatus={myAccountStatus}
            closeMoibileMenu={closeMoibileMenu}
          />
        </nav>
      </div>
      <div
        className="fixed-top-margin main-layout "
        style={{ minHeight: "600px" }}
      >
        <Outlet />
      </div>
      <MobileMyAccount
        myAccountStatus={myAccountStatus}
        setMyAccountStatus={setMyAccountStatus}
        mobileMenuStatus={mobileMenuStatus}
        closeMoibileMenu={closeMoibileMenu}
        changeMyAccountMenuStatus={changeMyAccountMenuStatus}
      />
      <Footer
        changeMobileMenuStatus={changeMobileMenuStatus}
        changeMyAccountMenuStatus={changeMyAccountMenuStatus}
      />
    </>
  );
};

export default BaseLayout;
