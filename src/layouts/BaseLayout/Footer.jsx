import { useCallback, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import request from "../../utils/request";
import deviceImageRender from "../../utils/deviceImageRender";
import FacebookIcon from "../../assets/img/icons/social/facebook.svg";
import LinkedinIcon from "../../assets/img/icons/social/linkedin.svg";
import InstagramIcon from "../../assets/img/icons/social/instagram.svg";
import WhatsappIcon from "../../assets/img/icons/social/whatsapp.png";
import foot_ic1 from "../../assets/img/foot_ic_1.png";
import foot_ic2 from "../../assets/img/foot_ic_2.png";
import FlagUae from "../../assets/img/icons/lang/arab.png";
import AppStore from "../../assets/img/icons/App_Store.svg";
import Gplay from "../../assets/img/icons/Play_Store.svg";

// import FooterExpand from "../../assets/img/icons/footer-expand-icon.svg";
// import ScrollToTop from "react-scroll-to-top";
import toast from "react-hot-toast";
import AlerMessage from "../../../src/pages/common/AlerMessage";
import { BottomNavigation } from "reactjs-bottom-navigation";
import { useNavigate } from "react-router-dom";
import FooterText from "./FooterText";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});
function Footer({ changeMobileMenuStatus, changeMyAccountMenuStatus }) {
  //Cart Count :: Redux
  const cartTotalCount = useSelector((state) => state.cartCount.cartTotalCount);
  //#End

  const navigate = useNavigate();

  const handleOnSubmit = (values) => {
    subscribeNewsLetter(values);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Footer Api Call
  useEffect(() => {
    getFooterDatas();
  }, []);

  const [footerDatas, setFooterDatas] = useState(null);

  const getFooterDatas = async () => {
    try {
      const response = await request.get("api/footer");
      if (response?.data?.data) {
        setFooterDatas(response?.data?.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  //End of api call
  const bottomNavItems = [
    {
      title: "Home",
      onClick: ({ id }) => navigate("/"),
      icon: (
        <svg
          width={25}
          height={26}
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.502 20.3409V16.6724M10.1864 1.77805L1.87163 8.56487C0.935768 9.32304 0.335858 10.925 0.539828 12.1234L2.13559 21.8573C2.42354 23.5937 4.0553 25 5.78304 25H19.221C20.9367 25 22.5805 23.5815 22.8685 21.8573L24.4642 12.1234C24.6562 10.925 24.0563 9.32304 23.1324 8.56487L14.8177 1.79027C13.5339 0.738622 11.4582 0.738622 10.1864 1.77805Z"
            stroke="#584F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      activeIcon: (
        <svg
          width={25}
          height={26}
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.502 20.3409V16.6724M10.1864 1.77805L1.87163 8.56487C0.935768 9.32304 0.335858 10.925 0.539828 12.1234L2.13559 21.8573C2.42354 23.5937 4.0553 25 5.78304 25H19.221C20.9367 25 22.5805 23.5815 22.8685 21.8573L24.4642 12.1234C24.6562 10.925 24.0563 9.32304 23.1324 8.56487L14.8177 1.79027C13.5339 0.738622 11.4582 0.738622 10.1864 1.77805Z"
            stroke="#80BA27"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },

    // items can have either title, icon or both or neither!
    {
      title: "Categories",
      onClick: ({ id }) => {
        changeMobileMenuStatus();
      },
      icon: (
        <svg
          width={27}
          height={27}
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.75 9.30375V4.75875C24.75 2.97 24.03 2.25 22.2413 2.25H17.6962C15.9075 2.25 15.1875 2.97 15.1875 4.75875V9.30375C15.1875 11.0925 15.9075 11.8125 17.6962 11.8125H22.2413C24.03 11.8125 24.75 11.0925 24.75 9.30375Z"
            stroke="#584F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.8125 9.585V4.4775C11.8125 2.89125 11.0925 2.25 9.30375 2.25H4.75875C2.97 2.25 2.25 2.89125 2.25 4.4775V9.57375C2.25 11.1713 2.97 11.8012 4.75875 11.8012H9.30375C11.0925 11.8125 11.8125 11.1713 11.8125 9.585Z"
            stroke="#584F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.8125 22.2413V17.6962C11.8125 15.9075 11.0925 15.1875 9.30375 15.1875H4.75875C2.97 15.1875 2.25 15.9075 2.25 17.6962V22.2413C2.25 24.03 2.97 24.75 4.75875 24.75H9.30375C11.0925 24.75 11.8125 24.03 11.8125 22.2413Z"
            stroke="#584F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.875 17.4375H23.625"
            stroke="#584F4F"
            strokeLinecap="round"
          />
          <path
            d="M16.875 21.9375H23.625"
            stroke="#584F4F"
            strokeLinecap="round"
          />
        </svg>
      ),
      activeIcon: (
        <svg
          width={27}
          height={27}
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.75 9.30375V4.75875C24.75 2.97 24.03 2.25 22.2413 2.25H17.6962C15.9075 2.25 15.1875 2.97 15.1875 4.75875V9.30375C15.1875 11.0925 15.9075 11.8125 17.6962 11.8125H22.2413C24.03 11.8125 24.75 11.0925 24.75 9.30375Z"
            stroke="#80BA27"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.8125 9.585V4.4775C11.8125 2.89125 11.0925 2.25 9.30375 2.25H4.75875C2.97 2.25 2.25 2.89125 2.25 4.4775V9.57375C2.25 11.1713 2.97 11.8012 4.75875 11.8012H9.30375C11.0925 11.8125 11.8125 11.1713 11.8125 9.585Z"
            stroke="#80BA27"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.8125 22.2413V17.6962C11.8125 15.9075 11.0925 15.1875 9.30375 15.1875H4.75875C2.97 15.1875 2.25 15.9075 2.25 17.6962V22.2413C2.25 24.03 2.97 24.75 4.75875 24.75H9.30375C11.0925 24.75 11.8125 24.03 11.8125 22.2413Z"
            stroke="#80BA27"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.875 17.4375H23.625"
            stroke="#80BA27"
            strokeLinecap="round"
          />
          <path
            d="M16.875 21.9375H23.625"
            stroke="#80BA27"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Cart",
      onClick: ({ id }) => navigate("/cart"),
      icon: (
        <>
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4934 8.78291L16.4935 8.78358L17.4437 17.0991C17.4438 17.0992 17.4438 17.0993 17.4438 17.0993C17.592 18.4203 17.4556 19.51 16.9348 20.2592C16.4351 20.978 15.4962 21.5 13.7484 21.5H4.25513C2.50129 21.5 1.5602 20.9776 1.06083 20.2592C0.540515 19.5107 0.406174 18.4217 0.559552 17.101L0.559656 17.1001L1.51004 8.78358L1.51005 8.78358L1.51038 8.7805C1.6287 7.68488 1.77203 6.85454 2.23533 6.27525C2.668 5.73427 3.47329 5.3125 5.19495 5.3125H12.798C14.5194 5.3125 15.3252 5.73417 15.7593 6.27569C16.2243 6.85573 16.3696 7.68657 16.4934 8.78291Z"
              stroke="#584F4F"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <mask id="path-2-inside-1_6303_11498" fill="white">
              <path d="M4.6665 6.875V2.86458C4.6665 1.14583 5.74984 0 7.37484 0H10.6248C12.2498 0 13.3332 1.14583 13.3332 2.86458V6.875" />
            </mask>
            <path
              d="M3.6665 6.875C3.6665 7.42729 4.11422 7.875 4.6665 7.875C5.21879 7.875 5.6665 7.42729 5.6665 6.875H3.6665ZM12.3332 6.875C12.3332 7.42729 12.7809 7.875 13.3332 7.875C13.8855 7.875 14.3332 7.42729 14.3332 6.875H12.3332ZM5.6665 6.875V2.86458H3.6665V6.875H5.6665ZM5.6665 2.86458C5.6665 2.21619 5.8679 1.76039 6.13794 1.47477C6.40319 1.19422 6.80703 1 7.37484 1V-1C6.31764 -1 5.36732 -0.621304 4.68465 0.100749C4.00677 0.817736 3.6665 1.79422 3.6665 2.86458H5.6665ZM7.37484 1H10.6248V-1H7.37484V1ZM10.6248 1C11.1926 1 11.5965 1.19422 11.8617 1.47477C12.1318 1.76039 12.3332 2.21619 12.3332 2.86458H14.3332C14.3332 1.79422 13.9929 0.817736 13.315 0.100749C12.6324 -0.621304 11.682 -1 10.6248 -1V1ZM12.3332 2.86458V6.875H14.3332V2.86458H12.3332Z"
              fill="#584F4F"
              mask="url(#path-2-inside-1_6303_11498)"
            />
          </svg>
          {cartTotalCount > 0 ? (
            <span class="mob-footer-cart-count">{cartTotalCount}</span>
          ) : null}
        </>
      ),
      activeIcon: (
        <>
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4934 8.78291L16.4935 8.78358L17.4437 17.0991C17.4438 17.0992 17.4438 17.0993 17.4438 17.0993C17.592 18.4203 17.4556 19.51 16.9348 20.2592C16.4351 20.978 15.4962 21.5 13.7484 21.5H4.25513C2.50129 21.5 1.5602 20.9776 1.06083 20.2592C0.540515 19.5107 0.406174 18.4217 0.559552 17.101L0.559656 17.1001L1.51004 8.78358L1.51005 8.78358L1.51038 8.7805C1.6287 7.68488 1.77203 6.85454 2.23533 6.27525C2.668 5.73427 3.47329 5.3125 5.19495 5.3125H12.798C14.5194 5.3125 15.3252 5.73417 15.7593 6.27569C16.2243 6.85573 16.3696 7.68657 16.4934 8.78291Z"
              stroke="#80BA27"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <mask id="path-2-inside-1_6303_11498" fill="white">
              <path d="M4.6665 6.875V2.86458C4.6665 1.14583 5.74984 0 7.37484 0H10.6248C12.2498 0 13.3332 1.14583 13.3332 2.86458V6.875" />
            </mask>
            <path
              d="M3.6665 6.875C3.6665 7.42729 4.11422 7.875 4.6665 7.875C5.21879 7.875 5.6665 7.42729 5.6665 6.875H3.6665ZM12.3332 6.875C12.3332 7.42729 12.7809 7.875 13.3332 7.875C13.8855 7.875 14.3332 7.42729 14.3332 6.875H12.3332ZM5.6665 6.875V2.86458H3.6665V6.875H5.6665ZM5.6665 2.86458C5.6665 2.21619 5.8679 1.76039 6.13794 1.47477C6.40319 1.19422 6.80703 1 7.37484 1V-1C6.31764 -1 5.36732 -0.621304 4.68465 0.100749C4.00677 0.817736 3.6665 1.79422 3.6665 2.86458H5.6665ZM7.37484 1H10.6248V-1H7.37484V1ZM10.6248 1C11.1926 1 11.5965 1.19422 11.8617 1.47477C12.1318 1.76039 12.3332 2.21619 12.3332 2.86458H14.3332C14.3332 1.79422 13.9929 0.817736 13.315 0.100749C12.6324 -0.621304 11.682 -1 10.6248 -1V1ZM12.3332 2.86458V6.875H14.3332V2.86458H12.3332Z"
              fill="#80BA27"
              mask="url(#path-2-inside-1_6303_11498)"
            />
          </svg>
          {cartTotalCount > 0 ? (
            <span class="mob-footer-cart-count">{cartTotalCount}</span>
          ) : null}
        </>
      ),
    },
    {
      title: "Store",
      onClick: ({ id }) => navigate("/coral-perfumes-showrooms"),
      icon: (
        <svg
          width={27}
          height={27}
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0626 24.7501H4.59006C3.28506 24.7501 2.21631 23.7039 2.21631 22.4214V5.7264C2.21631 2.7789 4.41006 1.44015 7.09881 2.7564L12.0938 5.2089C13.1738 5.73765 14.0626 7.1439 14.0626 8.3364V24.7501Z"
            stroke="#584F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.7162 16.9427V21.1952C24.7162 23.6252 23.5912 24.7502 21.1612 24.7502H14.0625V11.7227L14.5913 11.8352L19.6537 12.9714L21.9375 13.4777C23.4225 13.8039 24.6375 14.5689 24.705 16.7289C24.7162 16.7964 24.7162 16.8639 24.7162 16.9427Z"
            stroke="#584F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.1875 10.1251H10.0913"
            stroke="#584F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.1875 14.6251H10.0913"
            stroke="#584F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.6538 12.9713V16.5938C19.6538 17.9888 18.5176 19.1251 17.1226 19.1251C15.7276 19.1251 14.5913 17.9888 14.5913 16.5938V11.8351L19.6538 12.9713Z"
            stroke="#584F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.7051 16.7288C24.6376 18.0563 23.5351 19.1251 22.1851 19.1251C20.7901 19.1251 19.6538 17.9888 19.6538 16.5938V12.9713L21.9376 13.4776C23.4226 13.8038 24.6376 14.5688 24.7051 16.7288Z"
            stroke="#584F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      activeIcon: (
        <svg
          width={27}
          height={27}
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0626 24.7501H4.59006C3.28506 24.7501 2.21631 23.7039 2.21631 22.4214V5.7264C2.21631 2.7789 4.41006 1.44015 7.09881 2.7564L12.0938 5.2089C13.1738 5.73765 14.0626 7.1439 14.0626 8.3364V24.7501Z"
            stroke="#80BA27"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.7162 16.9427V21.1952C24.7162 23.6252 23.5912 24.7502 21.1612 24.7502H14.0625V11.7227L14.5913 11.8352L19.6537 12.9714L21.9375 13.4777C23.4225 13.8039 24.6375 14.5689 24.705 16.7289C24.7162 16.7964 24.7162 16.8639 24.7162 16.9427Z"
            stroke="#80BA27"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.1875 10.1251H10.0913"
            stroke="#80BA27"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.1875 14.6251H10.0913"
            stroke="#80BA27"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.6538 12.9713V16.5938C19.6538 17.9888 18.5176 19.1251 17.1226 19.1251C15.7276 19.1251 14.5913 17.9888 14.5913 16.5938V11.8351L19.6538 12.9713Z"
            stroke="#80BA27"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.7051 16.7288C24.6376 18.0563 23.5351 19.1251 22.1851 19.1251C20.7901 19.1251 19.6538 17.9888 19.6538 16.5938V12.9713L21.9376 13.4776C23.4226 13.8038 24.6376 14.5688 24.7051 16.7288Z"
            stroke="#80BA27"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    // the render method enables custom item content
    {
      title: "Profile",
      onClick: ({ id }) => {
        // if (localStorage.getItem("userDatas")) {
        changeMyAccountMenuStatus();
        // } else {
        //   navigate("/login");
        // }
      },
      icon: (
        <svg
          width={27}
          height={27}
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6801 12.2287C13.5676 12.2175 13.4326 12.2175 13.3089 12.2287C10.6314 12.1387 8.50513 9.945 8.50513 7.245C8.50513 4.48875 10.7326 2.25 13.5001 2.25C16.2564 2.25 18.4951 4.48875 18.4951 7.245C18.4839 9.945 16.3576 12.1387 13.6801 12.2287Z"
            stroke="#584F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.05506 16.38C5.33256 18.2025 5.33256 21.1725 8.05506 22.9837C11.1488 25.0537 16.2226 25.0537 19.3163 22.9837C22.0388 21.1612 22.0388 18.1913 19.3163 16.38C16.2338 14.3213 11.1601 14.3213 8.05506 16.38Z"
            stroke="#584F4F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      activeIcon: (
        <svg
          width={27}
          height={27}
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6801 12.2287C13.5676 12.2175 13.4326 12.2175 13.3089 12.2287C10.6314 12.1387 8.50513 9.945 8.50513 7.245C8.50513 4.48875 10.7326 2.25 13.5001 2.25C16.2564 2.25 18.4951 4.48875 18.4951 7.245C18.4839 9.945 16.3576 12.1387 13.6801 12.2287Z"
            stroke="#80BA27"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.05506 16.38C5.33256 18.2025 5.33256 21.1725 8.05506 22.9837C11.1488 25.0537 16.2226 25.0537 19.3163 22.9837C22.0388 21.1612 22.0388 18.1913 19.3163 16.38C16.2338 14.3213 11.1601 14.3213 8.05506 16.38Z"
            stroke="#80BA27"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  const subscribeNewsLetter = async (values) => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("email", values.email);
      const response = await request.post(
        "subscribe-newsletter/",
        bodyFormData
      );

      console.log("response", response.data.message);
      let title = "ERROR";
      if (response.data.message != "Invalid email address.") {
        title = response.data.status ? "SUCCESS" : "MESSAGE";
      }
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={title}
          message={response.data.message}
        />
      ));
    } catch (error) {
      console.log("error", error);
    }
  };
  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  return (
    <footer className="footer">
    <div class="ft-icon-fixed">
 <a id="wppButton" class="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+971563298222&amp;text=https://www.coralperfumes.com/%0aHello..can you help me?">
            <div class="icon">
    
            <svg viewBox="0 0 636.3 639.4">
                           
                          
                           <path class="st0" d="M543.6,92.9C483.8,33,404.2,0,319.5,0C144.9,0,2.7,142.1,2.7,316.8c0,55.8,14.6,110.3,42.3,158.4L0,639.4
 l168-44.1c46.3,25.2,98.4,38.5,151.4,38.6h0.1c174.6,0,316.8-142.1,316.8-316.8C636.4,232.4,603.4,152.8,543.6,92.9z M319.5,604.1
 h-0.1c-51.5,0-102-13.9-146-40l-5.9,0.5L32.6,608l43.9-138.4l0,0c-28.7-45.7-43.9-98.5-43.9-152.7C32.6,158.7,161.3,30,319.6,30
 c76.6,0,148.7,29.9,202.9,84.1s84,126.3,84,203C606.4,475.4,477.6,604.1,319.5,604.1z"></path>
                           <path class="st0" d="M463.9,383.1c-7.9-4-46.8-23.1-54.1-25.8c-7.3-2.6-12.5-4-17.8,4c-5.3,7.9-20.4,25.8-25.1,31
 c-4.6,5.3-9.2,5.9-17.2,2c-7.9-4-33.4-12.3-63.7-39.3c-23.5-21-39.4-46.9-44-54.8c-4.6-7.9,0-11.8,3.5-16.2
 c8.6-10.6,17.2-21.8,19.8-27.1c2.6-5.3,1.3-9.9-0.7-13.9c-2-4-17.8-42.9-24.4-58.8c-6.4-15.4-13-13.3-17.8-13.6
 c-4.6-0.2-9.9-0.3-15.2-0.3c-5.3,0-13.9,2-21.1,9.9c-7.3,7.9-27.7,27.1-27.7,66s28.4,76.6,32.3,81.9c4,5.3,55.8,85.2,135.2,119.5
 c18.9,8.2,33.6,13,45.1,16.7c19,6,36.2,5.2,49.9,3.1c15.2-2.3,46.8-19.2,53.4-37.6c6.6-18.5,6.6-34.3,4.6-37.6
 C477.1,389.1,471.8,387.1,463.9,383.1z"></path>
                       </svg>
              
            </div>
        </a>
</div>
      <div className="d-block d-sm-none">
        <BottomNavigation
          items={bottomNavItems}
          selected={0}
          onItemClick={(item) => console.log(item)}
          activeBgColor="#fff"
          activeTextColor="#80BA27"
        />
      </div>
      <div className="container px-lg-4">
        <div className="row footer-row align-items-center">
          {/* <h6 className="mb-5 d-block d-sm-none">Keep in touch</h6> */}
          <div className="col-md-3">
            <div className="row  social-mdedia-icons">
              <h6>FOLLOW US</h6>
              <div className="col-md-3 col-2">
                <a
                  href={footerDatas?.social_media?.facebook_url}
                  target="_blank"
                >
                  <img src={FacebookIcon} alt="facebook" />
                </a>
              </div>
              <div className="col-md-3 col-2">
                <a
                  href={footerDatas?.social_media?.linkedin_url}
                  target="_blank"
                >
                  <img src={LinkedinIcon} alt="LinkedIn" />
                </a>
              </div>
              <div className="col-md-3 col-2">
                <a
                  href={footerDatas?.social_media?.instagram_url}
                  target="_blank"
                >
                  <img src={InstagramIcon} alt="Instagram" />
                </a>
              </div>
              <div className="col-md-3 col-2">
                <a
                  href={`https://wa.me/${footerDatas?.social_media?.whatsapp_number}`}
                  target="_blank"
                >
                  <img src={WhatsappIcon} alt="Whatsapp" />
                </a>
              </div>
            </div>
          </div>
          <h6 className="mt-5 mb-5 d-block d-sm-none">Payment methods</h6>
          <div className="col-md-4 py-lg-4">
            <div className="row mob-payment-icons align-items-center">
              {footerDatas?.payment_types?.map((payment_type, index) => {
                return (
                  <div className="col-md-3 col-3" key={index}>
                    <img src={deviceImageRender(payment_type)} alt="Tamara" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        <div className="row g-4 py-4 footer-row">
          <div className="col-md-6">
            <div className="row ">
              <div className="col-md-3">
                <h6>info</h6>
                <ul className="nav flex-column mb-5">
                  {footerDatas?.info?.map((infoData, index) => {
                    return (
                      <li className="nav-item mb-2" key={index}>
                        <Link to={infoData?.link} className="nav-link">
                          {infoData?.title}
                          <span className="footer-link-seperator">
                            &nbsp; | &nbsp;
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-md-3">
                <h6>shopping</h6>
                <ul className="nav flex-column mb-5">
                  {footerDatas?.shopping?.map((shoppingData, index) => {
                    return (
                      <li className="nav-item mb-2" key={index}>
                        <Link to={shoppingData?.link} className="nav-link">
                          {shoppingData?.title}
                          <span className="footer-link-seperator">
                            &nbsp; | &nbsp;
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-md-3">
                <h6>help</h6>
                <ul className="nav flex-column mb-5">
                  {footerDatas?.help?.map((helpData, index) => {
                    return (
                      <li
                        className="nav-item mb-2"
                        key={index}
                        onClick={(e) => {
                          if (helpData?.flag === "my_account") {
                            e.preventDefault();
                            if (localStorage.getItem("userDatas")) {
                              navigate("/dashboard");
                            } else {
                              navigate("/login");
                            }
                          }
                        }}
                      >
                        <Link
                          to={
                            helpData?.flag === "my_account"
                              ? "javascript:;"
                              : helpData?.link
                          }
                          className="nav-link"
                        >
                          {helpData?.title}
                          <span className="footer-link-seperator">
                            &nbsp; | &nbsp;
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-md-3">
                <h6>support</h6>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2 ft-top mob-set">
                    <a
                      href={`tel:${footerDatas?.contact_number}`}
                      className="nav-link"
                    >
                      {footerDatas?.contact_number}
                    </a>
                  </li>
                  <li className="nav-item mb-2 ">
                    <a
                      href={`mailto:${footerDatas?.footer_email}`}
                      className="nav-link"
                    >
                      {footerDatas?.footer_email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-md-8 col-8 align-items-center">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={formik.values.email}
                    onChange={(e) => setInputValue("email", e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-4 col-4">
                  {/* <NavLink to="/login"> */}
                  <button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                    className="btn btn-light w-100"
                  >
                    Submit
                  </button>
                  {/* </NavLink> */}
                </div>
              </div>
            </form>
            <div className="row mt-5 footer-row">
              <div className="col-md-8 col-8">
                <div className="row app-pay">
                  <div className="col-md-6 col-6">
                    <Link to="https://apps.apple.com/tn/developer/coral-perfumes/id1609370778">
                      <img
                        src={AppStore}
                        alt="foot_logo"
                        className="footer-apple-logo"
                      />
                    </Link>
                  </div>
                  <div className="col-md-6 col-6">
                    <Link to="https://play.google.com/store/apps/details?id=com.coralperfumes.app&pli=1">
                      <img
                        src={Gplay}
                        alt="foot_logo"
                        className="footer-gplay-logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-4">
                <img src={FlagUae} alt="UAE" />
                <span className="flag-span">&nbsp;&nbsp;UAE</span>
              </div>
            </div>
            <div className="row g-4 mt-2">
              <div className="col-8 sm-none"></div>
              <div className="col-2">
                <img
                  src={foot_ic1}
                  alt="foot_logo"
                  className="footer-logo-size"
                />
              </div>
              <div className="col-2  logo-m">
                <img
                  src={foot_ic2}
                  alt="foot_logo"
                  className="footer-logo-size"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-top py-4 footer-credits">
          <div className="row align-items-center footer-row">
            <div className="col-md-4 col-12">{footerDatas?.bottom_left}</div>
            <div className="col-md-4 text-mid col-6">
              {footerDatas?.bottom_middle?.map((middleData, index) => {
                return (
                  <>
                    <Link to={middleData?.link} key={index}>
                      {middleData?.title}
                    </Link>
                    {index + 1 !== footerDatas?.bottom_middle.length ? (
                      <span>/</span>
                    ) : null}
                  </>
                );
              })}
            </div>
            <div className="col-md-4 text-end col-6 ">
              <a href={footerDatas?.cloud6_link} target="_blank">
                {footerDatas?.bottom_right}
              </a>
            </div>
          </div>
        </div>
        <div className="border-top py-4 footer-bottom">
          <div className="d-block d-sm-none footer-expand-section">
            {/* <div className="row text-end">
              <div className="col-md-2">
                <a className="footer-expand" onClick={toggleCollapse}>
                  <img src={FooterExpand} alt="Coral Perfume" />
                </a>
              </div>
            </div> */}

            {/* {!isCollapsed && (
              <div>
                <p className="mb-5">BEST PERFUME ECOMMERCE IN DUBAI</p>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Sed eu neque ut mi sagittis sodales. Phasellus
                  auctor magna ac neque condimentum, et tincidunt ligula
                  viverra. Donec sed massa eget lectus dapibus iaculis. Integer
                  scelerisque, elit eusagittis efficitur, nisi libero viverra
                  dolor, ac laoreet enim velit id velit. Suspendisse ac metus eu
                  lorem egestas efficitur. In hac habitasse platea dictumst.
                  Pellentesque eu m
                </p>
                <ol>
                  <li className="mb-4">
                    BEST PERFUME ECOMMERCE IN DUBAI- Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nulla facilisi. Sed eu neque ut
                    mi sagittis sodales. Phasellus auctor magna ac neque
                    condimentum, et tincidunt ligula viverra. Donec sed massa
                    eget lectus dapibus iaculis. Integer scelerisque, elit
                    eusagittis efficitur, nisi libero viverra dolor, ac laoreet
                    enim velit id velit. Suspendisse ac metus eu lorem egestas
                    efficitur. In hac habitasse platea dictumst. Pellentesque eu
                    m
                  </li>
                  <li className="mb-4">
                    BEST PERFUME ECOMMERCE IN DUBAI- Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nulla facilisi. Sed eu neque ut
                    mi sagittis sodales. Phasellus auctor magna ac neque
                    condimentum, et tincidunt ligula viverra. Donec sed massa
                    eget lectus dapibus iaculis. Integer scelerisque, elit
                    eusagittis efficitur, nisi libero viverra dolor, ac laoreet
                    enim velit id velit. Suspendisse ac metus eu lorem egestas
                    efficitur. In hac habitasse platea dictumst. Pellentesque eu
                    m
                  </li>
                  <li className="mb-4">
                    BEST PERFUME ECOMMERCE IN DUBAI- Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nulla facilisi. Sed eu neque ut
                    mi sagittis sodales. Phasellus auctor magna ac neque
                    condimentum, et tincidunt ligula viverra. Donec sed massa
                    eget lectus dapibus iaculis. Integer scelerisque, elit
                    eusagittis efficitur, nisi libero viverra dolor, ac laoreet
                    enim velit id velit. Suspendisse ac metus eu lorem egestas
                    efficitur. In hac habitasse platea dictumst. Pellentesque eu
                    m
                  </li>
                  <li className="mb-4">
                    BEST PERFUME ECOMMERCE IN DUBAI- Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nulla facilisi. Sed eu neque ut
                    mi sagittis sodales. Phasellus auctor magna ac neque
                    condimentum, et tincidunt ligula viverra. Donec sed massa
                    eget lectus dapibus iaculis. Integer scelerisque, elit
                    eusagittis efficitur, nisi libero viverra dolor, ac laoreet
                    enim velit id velit. Suspendisse ac metus eu lorem egestas
                    efficitur. In hac habitasse platea dictumst. Pellentesque eu
                    m
                  </li>
                </ol>
              </div>
            )} */}
          </div>
          <FooterText />
        </div>
      </div>
      {/* <ScrollToTop smooth /> */}
    </footer>
  );
}
export default Footer;
