import { NavLink } from "react-router-dom";
import personalInfo from "../../assets/img/icons/my-account/personal-info.svg";
import addressBook from "../../assets/img/icons/my-account/address-book.svg";
import myOrders from "../../assets/img/icons/my-account/my-orders.svg";
import myWishlist from "../../assets/img/icons/my-account/my-wishlist.svg";
import Returns from "../../assets/img/icons/my-account/returns.svg";
import Logout from "../../assets/img/icons/my-account/logout.svg";
import MobileHeader from "../../layouts/BaseLayout/MobileHeader";
import { useNavigate } from "react-router-dom";

function MobileMyAccount({
  myAccountStatus,
  setMyAccountStatus,
  mobileMenuStatus,
  closeMoibileMenu,
  changeMyAccountMenuStatus,
}) {
  const languageDirection = localStorage.getItem("languageDirection");

  const navigate = useNavigate();
  const logout = () => {
    if (localStorage.getItem("userDatas")) {
      localStorage.clear();
      window.location.href = "/";
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="container mob-c-view d-block d-sm-none">
      <div
        className={`offcanvas offcanvas-start  ${
          myAccountStatus ? "show" : ""
        }`}
        tabIndex={-1}
        id="offcanvasAccount"
        aria-labelledby="offcanvasAccountLabel"
      >
        <div className="offcanvas-body mob-account-sidebar ">
          <MobileHeader
            changeMyAccountMenuStatus={changeMyAccountMenuStatus}
            myAccountStatus={myAccountStatus}
            mobileMenuStatus={mobileMenuStatus}
            closeMoibileMenu={closeMoibileMenu}
          />
          <h5 className="text-center my-dash-head mt-5">MY DASHBOARD</h5>
          <ul
            className="nav flex-column nav-pills nav-pills-dark"
            onClick={() => {
              setMyAccountStatus(false);
            }}
          >
            <li className="nav-item">
              <NavLink to={"/personal-info"} className="nav-link">
                <img src={personalInfo} alt="Coral perfumes" />
                MY PERSONAL INFO{" "}
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94922 4.08L15.4692 10.6C16.2392 11.37 16.2392 12.63 15.4692 13.4L8.94922 19.92"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/address-book"} className="nav-link ">
                <img src={addressBook} alt="Coral perfumes" />
                ADDRESS BOOK
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94922 4.08L15.4692 10.6C16.2392 11.37 16.2392 12.63 15.4692 13.4L8.94922 19.92"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/orders"} className="nav-link ">
                <img src={myOrders} alt="Coral perfumes" />
                MY ORDERS
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94922 4.08L15.4692 10.6C16.2392 11.37 16.2392 12.63 15.4692 13.4L8.94922 19.92"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/wishlist"} className="nav-link">
                <img src={myWishlist} alt="Coral perfumes" />
                MY WISHLIST
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94922 4.08L15.4692 10.6C16.2392 11.37 16.2392 12.63 15.4692 13.4L8.94922 19.92"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/returns"} className="nav-link">
                <img src={Returns} alt="Coral perfumes" />
                RETURNS
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94922 4.08L15.4692 10.6C16.2392 11.37 16.2392 12.63 15.4692 13.4L8.94922 19.92"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
            </li>
            <li className="nav-item" onClick={logout}>
              <a className="nav-link " aria-current="page" href="javascript:;">
                <img src={Logout} alt="Coral perfumes" />
                {JSON.parse(localStorage.getItem("userDatas"))
                  ? "LOGOUT"
                  : " LOGIN"}

                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94922 4.08L15.4692 10.6C16.2392 11.37 16.2392 12.63 15.4692 13.4L8.94922 19.92"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                localStorage.setItem(
                  "languageDirection",
                  languageDirection === "ltr" ? "rtl" : "ltr"
                );
                window.location.reload();
              }}
            >
              <a href="javascript:;" className="nav-link">
                Switch Language &nbsp;
                <span className="my-accnt-language-name">
                  {languageDirection === null || languageDirection === "ltr"
                    ? "Arabic"
                    : "English"}
                </span>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.94922 4.08L15.4692 10.6C16.2392 11.37 16.2392 12.63 15.4692 13.4L8.94922 19.92"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <h4 className="text-center app-credits">
            <span>
              <svg
                width={23}
                height={19}
                viewBox="0 0 23 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2070_25093)">
                  <path
                    d="M12.945 4.43421V4.77182C12.945 7.01287 12.9407 9.25393 12.945 11.4943C12.9486 12.6503 13.7703 13.5686 14.9721 13.7725C15.1676 13.7996 15.3652 13.8104 15.5626 13.8049C16.5592 13.8083 17.5566 13.8049 18.5539 13.8049H18.9219C18.8808 14.4612 18.9219 15.1094 18.7822 15.7225C18.6072 16.5051 17.8216 16.9859 16.9265 16.9865C13.8723 16.9892 10.8184 16.9892 7.76465 16.9865C6.16554 16.9865 4.56668 16.9865 2.96806 16.9865C1.73597 16.9865 0.930896 16.2289 0.930176 15.0689C0.930176 12.1628 0.930176 9.25663 0.930176 6.35048C0.930176 5.18978 1.73309 4.43354 2.96734 4.43286C6.20155 4.43286 9.43528 4.43286 12.6685 4.43286L12.945 4.43421Z"
                    fill="#584F4F"
                  />
                  <path
                    d="M22.9901 6.4659C22.9901 8.10061 22.9649 9.73599 23.0002 11.37C23.0196 12.2897 22.2988 12.975 21.3029 12.9568C19.3809 12.9217 17.4576 12.9473 15.5342 12.9467C14.4756 12.9467 13.8643 12.3714 13.8643 11.3774C13.8643 8.10803 13.8643 4.8384 13.8643 1.56853C13.8643 0.581364 14.4857 0 15.5399 0H21.3353C22.3614 0 22.9872 0.578663 22.9915 1.53545C22.9934 3.17938 22.993 4.82287 22.9901 6.4659ZM18.4347 11.526C18.8834 11.526 19.3313 11.526 19.7792 11.526C20.1392 11.526 20.3452 11.3626 20.3387 11.0864C20.3329 10.8224 20.132 10.6658 19.7849 10.6651C18.88 10.6651 17.9748 10.6651 17.0694 10.6651C16.736 10.6651 16.5185 10.8373 16.5164 11.0925C16.5142 11.3477 16.7324 11.5226 17.0637 11.5246C17.5195 11.528 17.9768 11.5253 18.4347 11.526Z"
                    fill="#584F4F"
                  />
                  <path
                    d="M9.90299 18.1365H19.1484C19.6085 18.1365 19.8324 18.2796 19.8274 18.57C19.8224 18.8603 19.5999 18.9987 19.1368 18.9987H0.672744C0.583156 19.0026 0.493387 19.0003 0.404147 18.992C0.286267 18.9805 0.177893 18.9261 0.102343 18.8405C0.0267927 18.7549 -0.00989606 18.6449 0.000170728 18.5342C0.0145727 18.3107 0.183796 18.1574 0.440872 18.1398C0.530164 18.1338 0.620897 18.1398 0.710189 18.1398L9.90299 18.1365Z"
                    fill="#584F4F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2070_25093">
                    <rect width={23} height={19} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>{" "}
            Get our apps
          </h4>
        </div>
      </div>
    </div>
  );
}
export default MobileMyAccount;
