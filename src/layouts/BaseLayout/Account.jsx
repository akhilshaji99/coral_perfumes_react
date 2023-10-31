import { Link, NavLink } from "react-router-dom";
import ArabLang from "../../assets/img/icons/lang/arab.png";
import EngLang from "../../assets/img/icons/lang/english.png";
import { useEffect, useState, useRef } from "react";
import OutsideAlerter from "../../pages/common/js/OutsideAlerter";
import CartDrawer from "../../layouts/BaseLayout/CartDrawer";
import { useNavigate } from "react-router-dom";
import Logo from "../../pages/common/Logo";
import { useDispatch } from "react-redux";
import { changeCartDrawerFlag } from "../../redux/cart/cartSlice";
import SearchResult from "./SearchResult";
import request from "../../utils/request";
import Profile from "../../assets/icons/Profile.svg";
import Bag from "../../assets/icons/Bag.svg";
import Store from "../../assets/icons/Store.svg";
import Whishlist from "../../assets/icons/Whishlist.svg";
import TextBoxClose from "../../assets/icons/textbox_close.svg";
import MobileHeader from "./MobileHeader";

function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    const screensWidth = window.innerWidth;
    //Code for device identification
    let screen_type = "Desktop";
    if (screensWidth <= 760) {
      screen_type = "Mobile";
    } else {
      screen_type = "Desktop";
    }
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      screen_type !== "Mobile"
    ) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    // document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      // document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

function Account({
  changeMyAccountMenuStatus,
  mobileMenuStatus,
  myAccountStatus,
  closeMoibileMenu,
}) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(false);

  const performSearch = async (query) => {
    try {
      const response = await request.get("homesearch/" + query.toLowerCase());
      setIsComponentVisible(true);
      if (response?.data) {
        setResult(response?.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    performSearch(inputValue);
    setStatus(!status);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState(() => {
    const userDatas = JSON.parse(localStorage.getItem("userDatas"));
    const userInfo = userDatas?.userInfo;
    return userInfo?.username || "";
  });

  useEffect(() => {
    const userDatas = JSON.parse(localStorage.getItem("userDatas"));
    const userInfo = userDatas?.userInfo;
    setUsername(userInfo?.username || "");
  }, [window.location.href]);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const handleCartVisibility = () => {
    dispatch(changeCartDrawerFlag(false));
  };

  const languageDirection = localStorage.getItem("languageDirection");

  const [openAccountMenus, setOpenAccountMenus] = useState(false);

  const handleSubmenuToggle = () => {
    // navigate("/dashboard");
    setOpenAccountMenus(!openAccountMenus);
  };

  const handleMouseEnter = () => {
    setOpenAccountMenus(true);
  };

  const handleMouseLeave = () => {
    setOpenAccountMenus(false);
  };

  useEffect(() => {
    if (!window.location.href.includes("product")) {
      setQuery("");
    }
  }, [window.location.href]);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);
  return (
    <>
      {/* <div className="container mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />

        {results.length > 0 && (
          <div className="list-group" style={{ display: "block" }}>
            {results.map((result, index) => (
              <a
                key={index}
                className="list-group-item list-group-item-action"
                onClick={() => {
                  setQuery(result);
                  setResults([]);
                }}
              >
                {result}
              </a>
            ))}
          </div>
        )}
      </div> */}
      <div className="py-lg-3">
        <div className="container-fluid">
          {!mobileMenuStatus && !myAccountStatus ? (
            <MobileHeader
              changeMyAccountMenuStatus={changeMyAccountMenuStatus}
              myAccountStatus={myAccountStatus}
              mobileMenuStatus={mobileMenuStatus}
              closeMoibileMenu={closeMoibileMenu}
            />
          ) : (
            ""
          )}
          {!mobileMenuStatus && !myAccountStatus ? (
            <div className="row mob-view ">
              <div className="d-block d-lg-none my-2">
                <div className="input-group ">
                  <input
                    className="form-control rounded mob-search-box"
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={handleInputChange}
                  />
                  {query.length === 0 ? (
                    <svg
                      className="icon-input__icon"
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4834 17.9577L18.1643 17.4877L17.7386 17.8638C15.8025 19.5746 13.2751 20.4657 10.6919 20.3479C8.10874 20.2301 5.67322 19.1127 3.90148 17.2329C2.12976 15.3531 1.16104 12.8585 1.20037 10.2781C1.23971 7.69757 2.28401 5.23361 4.11222 3.40847C5.94045 1.5833 8.40891 0.54043 10.9945 0.501151C13.58 0.461872 16.0791 1.42928 17.9622 3.19808C19.8452 4.96686 20.9641 7.39797 21.0821 9.97607C21.2 12.5542 20.3078 15.0769 18.5942 17.0097L18.2816 17.3623L18.6151 17.6952L18.8678 17.9476L23.9226 22.9939L23.9362 23.0075L23.9508 23.02L24.1474 23.1882L24.1483 23.189C24.1643 23.2026 24.1772 23.2195 24.1859 23.2385L24.6398 23.0287L24.1859 23.2385C24.1947 23.2575 24.1992 23.2781 24.1992 23.2989C24.1992 23.3197 24.1947 23.3403 24.1859 23.3593L24.6398 23.5691L24.1859 23.3593C24.1772 23.3782 24.1644 23.3952 24.1483 23.4088L24.1244 23.4292L24.1032 23.4524C24.0895 23.4673 24.0729 23.4793 24.0543 23.4875C24.0356 23.4957 24.0155 23.5 23.9951 23.5C23.9746 23.5 23.9545 23.4957 23.9358 23.4875C23.9172 23.4793 23.9006 23.4673 23.8869 23.4524L23.8809 23.4458L23.8747 23.4394L18.6514 18.1127L18.6162 18.0769L18.5746 18.0487C18.5386 18.0244 18.5077 17.9935 18.4834 17.9577Z"
                        stroke="black"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M10.6484 3.14178C12.4935 3.30632 14.2321 4.09401 15.5895 5.38027C16.7766 6.54131 17.5898 8.04342 17.9212 9.68724"
                        stroke="black"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <img
                      src={TextBoxClose}
                      className="input-icon-close"
                      onClick={() => {
                        setQuery("");
                        setIsComponentVisible(false);
                      }}
                    />
                  )}

                  <div ref={ref}>
                    {isComponentVisible && (
                      <SearchResult
                        setResult={setResult}
                        result={result}
                        setQuery={setQuery}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <div className="row w-100 align-items-center justify-content-center gx-lg-2 gx-0">
            <div className="col-xxl-2 col-lg-2 d-flex justify-content-center">
              <NavLink className="navbar-brand d-none d-lg-block" to="/">
                <Logo />
              </NavLink>
            </div>

            <div className="col-xxl-5 col-lg-5 d-none d-lg-block">
              <div className="icon-input">
                <input
                  className="icon-input__text-field"
                  placeholder="Search for product or brand"
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                />
                {query.length === 0 ? (
                  <svg
                    className="icon-input__icon"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4834 17.9577L18.1643 17.4877L17.7386 17.8638C15.8025 19.5746 13.2751 20.4657 10.6919 20.3479C8.10874 20.2301 5.67322 19.1127 3.90148 17.2329C2.12976 15.3531 1.16104 12.8585 1.20037 10.2781C1.23971 7.69757 2.28401 5.23361 4.11222 3.40847C5.94045 1.5833 8.40891 0.54043 10.9945 0.501151C13.58 0.461872 16.0791 1.42928 17.9622 3.19808C19.8452 4.96686 20.9641 7.39797 21.0821 9.97607C21.2 12.5542 20.3078 15.0769 18.5942 17.0097L18.2816 17.3623L18.6151 17.6952L18.8678 17.9476L23.9226 22.9939L23.9362 23.0075L23.9508 23.02L24.1474 23.1882L24.1483 23.189C24.1643 23.2026 24.1772 23.2195 24.1859 23.2385L24.6398 23.0287L24.1859 23.2385C24.1947 23.2575 24.1992 23.2781 24.1992 23.2989C24.1992 23.3197 24.1947 23.3403 24.1859 23.3593L24.6398 23.5691L24.1859 23.3593C24.1772 23.3782 24.1644 23.3952 24.1483 23.4088L24.1244 23.4292L24.1032 23.4524C24.0895 23.4673 24.0729 23.4793 24.0543 23.4875C24.0356 23.4957 24.0155 23.5 23.9951 23.5C23.9746 23.5 23.9545 23.4957 23.9358 23.4875C23.9172 23.4793 23.9006 23.4673 23.8869 23.4524L23.8809 23.4458L23.8747 23.4394L18.6514 18.1127L18.6162 18.0769L18.5746 18.0487C18.5386 18.0244 18.5077 17.9935 18.4834 17.9577Z"
                      stroke="black"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M10.6484 3.14178C12.4935 3.30632 14.2321 4.09401 15.5895 5.38027C16.7766 6.54131 17.5898 8.04342 17.9212 9.68724"
                      stroke="black"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="icon-input__icon"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setQuery("")}
                  >
                    <path
                      d="M4.80709 13.2279L13.2924 4.74264M13.2924 13.2279L4.80709 4.74264"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                <div ref={ref}>
                  {isComponentVisible && (
                    <SearchResult
                      setResult={setResult}
                      result={result}
                      setQuery={setQuery}
                      query={query}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-5 col-xxl-5 text-end d-none d-lg-block">
              <div className="list-inline custom-dropdown text-center">
                <div className="list-inline-item me-5">
                  <div
                    className="dropdown"
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleSubmenuToggle()}
                  >
                    <a
                      href="#"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="text-center"
                      onClick={(e) => {
                        e.preventDefault();
                        if (username) {
                          navigate("/dashboard");
                        } else {
                          navigate("/login");
                        }
                      }}
                    >
                      <img
                        src={Profile}
                        className="img-fluid"
                        alt="Coral Perfumes"
                      />
                      <span className="dropdown-text">
                        {username !== "" ? "Profile" : "Sign In"}
                      </span>
                    </a>

                    <ul
                      className={`dropdown-menu ${
                        openAccountMenus
                          ? "show dropdown-menu-custom"
                          : " hide dropdown-menu-custom"
                      }`}
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        {username === "" ? (
                          <NavLink to="/login">
                            <a className="btn btn-dark btn-custom">
                              Sign In / Create Account
                            </a>
                          </NavLink>
                        ) : (
                          <a
                            onClick={logout}
                            className="btn btn-dark btn-custom"
                          >
                            Sign Out
                          </a>
                        )}
                      </li>
                      <li>
                        {" "}
                        <NavLink to="/dashboard">
                          <h3 className="my-account-drop-h3">Your Account</h3>
                        </NavLink>
                        <li></li>
                        <NavLink
                          to="/orders"
                          className="dropdown-item menu-drop-link"
                        >
                          <span>
                            <svg
                              width="21"
                              height="22"
                              viewBox="0 0 21 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.03809 6.44L10.5002 11.55L18.9048 6.47M10.5002 20.61V11.54"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.51685 1.48L3.39935 4.45C2.23977 5.12 1.29102 6.8 1.29102 8.18V13.83C1.29102 15.21 2.23977 16.89 3.39935 17.56L8.51685 20.53C9.60935 21.16 11.4014 21.16 12.4939 20.53L17.6114 17.56C18.771 16.89 19.7198 15.21 19.7198 13.83V8.18C19.7198 6.8 18.771 5.12 17.6114 4.45L12.4939 1.48C11.3918 0.84 9.60935 0.84 8.51685 1.48Z"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.2918 12.24V8.57998L6.19727 3.09998"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>{" "}
                          Orders
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/returns"
                          className="dropdown-item menu-drop-link"
                        >
                          <span>
                            <svg
                              width="21"
                              height="24"
                              viewBox="0 0 21 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.33333 4.38969C8.28662 4.10355 9.33852 3.91646 10.5 3.91646C15.7486 3.91646 20 8.18659 20 13.4582C20 18.7299 15.7486 23 10.5 23C5.25144 23 1 18.7299 1 13.4582C1 11.4992 1.5917 9.67234 2.59977 8.15358M9.14129 1L5.97463 4.65383L9.66724 7.36118"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>{" "}
                          Returns
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item menu-drop-link"
                          to="/wishlist"
                        >
                          <span>
                            <svg
                              width="19"
                              height="17"
                              viewBox="0 0 19 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18 5.7143C18 11.6135 12.4944 15.0924 10.0277 15.9244C9.73523 16.0252 9.26477 16.0252 8.97233 15.9244C7.91698 15.5714 6.30217 14.7269 4.81451 13.4286C2.80553 11.6765 1 9.09245 1 5.7143C1 3.10506 3.1107 1.00002 5.71728 1.00002C7.26851 1.00002 8.64173 1.74372 9.50636 2.87817C10.144 2.03272 11.0512 1.42573 12.0806 1.15572C13.11 0.88572 14.2013 0.968554 15.1773 1.39078C16.8429 2.12187 18 3.77313 18 5.7143Z"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>{" "}
                          Wishlist
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item menu-drop-link"
                          to="/address-book"
                        >
                          <span>
                            <svg
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.3753 0.916626V10.5C13.3753 11.5541 12.5128 12.4166 11.4587 12.4166H0.916992V4.74996C0.916992 2.63204 2.63241 0.916626 4.75033 0.916626H13.3753Z"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M20.0837 12.4166V15.2916C20.0837 16.8825 18.7995 18.1666 17.2087 18.1666H16.2503C16.2503 17.1125 15.3878 16.25 14.3337 16.25C13.2795 16.25 12.417 17.1125 12.417 18.1666H8.58366C8.58366 17.1125 7.72116 16.25 6.66699 16.25C5.61283 16.25 4.75033 17.1125 4.75033 18.1666H3.79199C2.20116 18.1666 0.916992 16.8825 0.916992 15.2916V12.4166H11.4587C12.5128 12.4166 13.3753 11.5541 13.3753 10.5V3.79163H15.1387C15.8287 3.79163 16.4612 4.16538 16.8062 4.75954L18.4449 7.62496H17.2087C16.6816 7.62496 16.2503 8.05621 16.2503 8.58329V11.4583C16.2503 11.9854 16.6816 12.4166 17.2087 12.4166H20.0837Z"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6.66667 20.0833C7.175 20.0833 7.66251 19.8814 8.02195 19.522C8.3814 19.1625 8.58333 18.675 8.58333 18.1667C8.58333 17.6583 8.3814 17.1708 8.02195 16.8114C7.66251 16.4519 7.175 16.25 6.66667 16.25C6.15834 16.25 5.67082 16.4519 5.31138 16.8114C4.95193 17.1708 4.75 17.6583 4.75 18.1667C4.75 18.675 4.95193 19.1625 5.31138 19.522C5.67082 19.8814 6.15834 20.0833 6.66667 20.0833ZM14.3333 20.0833C14.8417 20.0833 15.3292 19.8814 15.6886 19.522C16.0481 19.1625 16.25 18.675 16.25 18.1667C16.25 17.6583 16.0481 17.1708 15.6886 16.8114C15.3292 16.4519 14.8417 16.25 14.3333 16.25C13.825 16.25 13.3375 16.4519 12.978 16.8114C12.6186 17.1708 12.4167 17.6583 12.4167 18.1667C12.4167 18.675 12.6186 19.1625 12.978 19.522C13.3375 19.8814 13.825 20.0833 14.3333 20.0833ZM20.0833 10.5V12.4167H17.2083C16.6812 12.4167 16.25 11.9854 16.25 11.4583V8.58333C16.25 8.05625 16.6812 7.625 17.2083 7.625H18.4446L20.0833 10.5Z"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>{" "}
                          Shipping Address
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item menu-drop-link"
                          to="/personal-info"
                        >
                          <span>
                            <svg
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.75 8.58329V6.66663C4.75 3.49454 5.70833 0.916626 10.5 0.916626C15.2917 0.916626 16.25 3.49454 16.25 6.66663V8.58329M10.5 16.7291C11.1354 16.7291 11.7448 16.4767 12.1941 16.0274C12.6434 15.5781 12.8958 14.9687 12.8958 14.3333C12.8958 13.6979 12.6434 13.0885 12.1941 12.6392C11.7448 12.1899 11.1354 11.9375 10.5 11.9375C9.86459 11.9375 9.2552 12.1899 8.80589 12.6392C8.35658 13.0885 8.10417 13.6979 8.10417 14.3333C8.10417 14.9687 8.35658 15.5781 8.80589 16.0274C9.2552 16.4767 9.86459 16.7291 10.5 16.7291Z"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.292 20.0833H5.70866C1.87533 20.0833 0.916992 19.125 0.916992 15.2916V13.375C0.916992 9.54165 1.87533 8.58331 5.70866 8.58331H15.292C19.1253 8.58331 20.0837 9.54165 20.0837 13.375V15.2916C20.0837 19.125 19.1253 20.0833 15.292 20.0833Z"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>{" "}
                          Password & Personal Info
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="list-inline-item me-5">
                  <NavLink className="text-center" to="/wishlist">
                    <img
                      src={Whishlist}
                      className="img-fluid"
                      alt="Coral Perfumes"
                    />
                    <span className="dropdown-text">Wishlist</span>
                  </NavLink>
                </div>
                <div className="list-inline-item">
                  <Link to={"/cart"} className="text-center cursor">
                    <img src={Bag} className="img-fluid" alt="Coral Perfumes" />
                    <span className="dropdown-text">My Bag</span>
                  </Link>
                </div>
                <div className="list-inline-item">
                  <svg
                    width="2"
                    height="28"
                    viewBox="0 0 2 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.699951 0.5L0.699949 27.5"
                      stroke="black"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="list-inline-item me-5">
                  <NavLink className="text-center" to="/stores">
                    <img
                      src={Store}
                      className="img-fluid"
                      alt="Coral Perfumes"
                    />
                    <span className="dropdown-text">Find Store</span>
                  </NavLink>
                </div>
                <div className="list-inline-item me-5">
                  <div className="dropdown">
                    <a
                      className=" dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="langRow">
                        <div className="row align-items-center ">
                          <div className="col-md-3">
                            <img
                              className="langIcon"
                              src={
                                languageDirection === null ||
                                languageDirection === "ltr"
                                  ? EngLang
                                  : ArabLang
                              }
                              alt="Coral perfumes"
                            />
                          </div>
                          <div className="col-md-2 langName">
                            {languageDirection === null ||
                            languageDirection === "ltr"
                              ? "ENG"
                              : "UAE"}
                          </div>
                          <div className="col-md-1">
                            <svg
                              width={8}
                              height={4}
                              viewBox="0 0 8 4"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.3002 0.521362L4.58353 3.23803C4.2627 3.55886 3.7377 3.55886 3.41686 3.23803L0.700195 0.521362"
                                stroke="black"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div
                      className="dropdown-menu lang-dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <span
                        className="dropdown-item"
                        onClick={() => {
                          localStorage.setItem("languageDirection", "rtl");
                          window.location.reload();
                        }}
                      >
                        <img src={ArabLang} alt="Coral Perfumes" />
                        <span>UAE</span>
                      </span>
                      <span
                        className="dropdown-item"
                        onClick={() => {
                          localStorage.setItem("languageDirection", "ltr");
                          window.location.reload();
                        }}
                      >
                        <img src={EngLang} alt="Coral Perfumes" />
                        <span>ENG</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Drawer */}
          {!window.location.href.includes("/login") ? (
            <OutsideAlerter changeDrawerValue={handleCartVisibility}>
              <CartDrawer />
            </OutsideAlerter>
          ) : null}
          {/* Drawer */}
        </div>
      </div>
    </>
  );
}
export default Account;
