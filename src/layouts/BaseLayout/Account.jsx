import Logo from "../../assets/img/logo_coral.png";
import { NavLink } from "react-router-dom";
import ArabLang from "../../assets/img/icons/lang/arab.png";
import EngLang from "../../assets/img/icons/lang/english.png";
import { useEffect, useState } from "react";
import OutsideAlerter from "../../pages/common/js/OutsideAlerter";
import CartDrawer from "../../layouts/BaseLayout/CartDrawer";
import $ from "jquery";

function Account() {
  const [username, setUsername] = useState(() => {
    const userDatas = JSON.parse(localStorage.getItem("userDatas"));
    const userInfo = userDatas?.userInfo;
    return userInfo?.username || "";
  });
  const [cartDrawerFlag, setCartDrawerFlag] = useState(false);

  useEffect(() => {
    const userDatas = JSON.parse(localStorage.getItem("userDatas"));
    const userInfo = userDatas?.userInfo;
    setUsername(userInfo?.username || "");
  }, [window.location.href]);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  // const changeCartDrawervalue = () => {
  //   console.log("hii");
  // };

  const handleCartVisibility = () => {
    // setCartVisible(visible);
    setCartDrawerFlag(false);
    // console.log(visible);
  };
  return (
    <>
      <div className="py-5">
        <div className="container-fluid">
          <div className="row w-100 align-items-center justify-content-center gx-lg-2 gx-0">
            <div className="col-xxl-2 col-lg-2 d-flex justify-content-center">
              <NavLink className="navbar-brand d-none d-lg-block" to="/">
                <img src={Logo} alt="Coral Perfumes" />
              </NavLink>

              <div className="d-flex justify-content-between w-100 d-lg-none">
                <a className="navbar-brand" href="index-2.html">
                  <img
                    src="assets/images/logo/freshcart-logo.svg"
                    alt="eCommerce HTML Template"
                  />
                </a>
                <div className="d-flex align-items-center lh-1">
                  <div className="list-inline me-4">
                    <div className="list-inline-item">
                      <a
                        href="#!"
                        className="text-muted"
                        data-bs-toggle="modal"
                        data-bs-target="#userModal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </a>
                    </div>
                    <div className="list-inline-item">
                      <a
                        className="text-muted position-relative "
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        href="#offcanvasExample"
                        role="button"
                        aria-controls="offcanvasRight"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-shopping-bag"
                        >
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1={3} y1={6} x2={21} y2={6} />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                          1
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  {/* Button */}
                  <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbar-default"
                    aria-controls="navbar-default"
                    aria-label="Toggle navigation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      fill="currentColor"
                      className="bi bi-text-indent-left text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xxl-5 col-lg-5 d-none d-lg-block">
              <form action="#">
                <div className="input-group ">
                  <input
                    className="form-control rounded"
                    type="search"
                    placeholder="Search for products"
                  />
                  <span className="input-group-append">
                    <button
                      className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-search"
                      >
                        <circle cx={11} cy={11} r={8} />
                        <line x1={21} y1={21} x2="16.65" y2="16.65" />
                      </svg>
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="col-md-5 col-xxl-5 text-end d-none d-lg-block">
              <div className="list-inline custom-dropdown text-center">
                <div className="list-inline-item me-5">
                  <div className="dropdown ">
                    <a
                      href="#"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="text-center"
                    >
                      <svg
                        width="25"
                        height="29"
                        viewBox="0 0 25 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.9047 12.1297C12.7687 12.1119 12.6312 12.1119 12.4952 12.1297C11.0482 12.079 9.67685 11.445 8.67077 10.3616C7.66468 9.27823 7.10269 7.8303 7.10351 6.32372C7.10351 3.11002 9.59461 0.500009 12.7 0.500009C14.1664 0.49736 15.575 1.09447 16.6223 2.16261C17.6695 3.23075 18.2715 4.68436 18.2983 6.21006C18.3252 7.73576 17.7748 9.21134 16.7659 10.3187C15.7569 11.426 14.3702 12.0764 12.9047 12.1297ZM24.2 23.8481C21.0644 26.8471 16.9588 28.5078 12.7 28.5C8.26375 28.5 4.23704 26.7422 1.19995 23.8481C1.37057 22.1791 2.39431 20.5456 4.21998 19.2673C8.89506 16.0358 16.539 16.0358 21.1799 19.2673C23.0056 20.5456 24.0293 22.1791 24.2 23.8481Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="dropdown-text">
                        {username !== "" ? username : "Sign In"}
                      </span>
                    </a>

                    <ul
                      className="dropdown-menu dropdown-menu-custom"
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
                        <a className="dropdown-item menu-drop-link">
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
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item menu-drop-link">
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
                        </a>
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
                    <svg
                      width="32"
                      height="28"
                      viewBox="0 0 32 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.7 8.98574C30.7 19.6042 20.9842 25.8664 16.6311 27.3639C16.1151 27.5454 15.2848 27.5454 14.7688 27.3639C12.9064 26.7286 10.0567 25.2084 7.43144 22.8714C3.88619 19.7177 0.699951 15.0664 0.699951 8.98574C0.699951 4.28911 4.42471 0.50004 9.02456 0.50004C11.762 0.50004 14.1854 1.83869 15.7112 3.88071C16.8364 2.3589 18.4373 1.26631 20.2539 0.780304C22.0706 0.294296 23.9964 0.443396 25.7187 1.2034C28.6581 2.51937 30.7 5.49163 30.7 8.98574Z"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="dropdown-text">Wishlist</span>
                  </NavLink>
                </div>
                <div className="list-inline-item">
                  <a
                    onClick={() => {
                      setCartDrawerFlag(true);
                      $("#cartDrawer").toggleClass("show");
                    }}
                    className="text-center"
                  >
                    <svg
                      width="24"
                      height="29"
                      viewBox="0 0 24 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.4127 11.5579L21.4127 11.5586L22.627 22.5203C22.627 22.5205 22.6271 22.5207 22.6271 22.5209C22.8182 24.2778 22.6474 25.7653 21.9488 26.8021C21.2732 27.8048 20.0226 28.5 17.7673 28.5H5.63706C3.37435 28.5 2.1208 27.8043 1.44551 26.8021C0.747304 25.7659 0.579399 24.279 0.777172 22.5222L0.77727 22.5213L1.99165 11.5586L1.99166 11.5586L1.99197 11.5556C2.14255 10.1171 2.32749 8.97269 2.95242 8.16661C3.54442 7.403 4.62244 6.84375 6.83794 6.84375H16.553C18.7682 6.84375 19.8467 7.4029 20.4405 8.16705C21.0675 8.97387 21.2552 10.1188 21.4127 11.5579Z"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <mask id="path-2-inside-1_629_12618" fill="white">
                        <path d="M6.16296 9.0625V3.77604C6.16296 1.51042 7.54722 0 9.62361 0H13.7764C15.8528 0 17.237 1.51042 17.237 3.77604V9.0625" />
                      </mask>
                      <path
                        d="M5.16296 9.0625C5.16296 9.61478 5.61068 10.0625 6.16296 10.0625C6.71525 10.0625 7.16296 9.61478 7.16296 9.0625H5.16296ZM16.237 9.0625C16.237 9.61478 16.6848 10.0625 17.237 10.0625C17.7893 10.0625 18.237 9.61478 18.237 9.0625H16.237ZM7.16296 9.0625V3.77604H5.16296V9.0625H7.16296ZM7.16296 3.77604C7.16296 2.84568 7.44495 2.15806 7.85187 1.71406C8.25154 1.27797 8.84032 1 9.62361 1V-1C8.33051 -1 7.18897 -0.522757 6.37742 0.362764C5.57311 1.24038 5.16296 2.44078 5.16296 3.77604H7.16296ZM9.62361 1H13.7764V-1H9.62361V1ZM13.7764 1C14.5597 1 15.1485 1.27797 15.5481 1.71406C15.9551 2.15806 16.237 2.84568 16.237 3.77604H18.237C18.237 2.44078 17.8269 1.24038 17.0226 0.362764C16.211 -0.522757 15.0695 -1 13.7764 -1V1ZM16.237 3.77604V9.0625H18.237V3.77604H16.237Z"
                        fill="black"
                        mask="url(#path-2-inside-1_629_12618)"
                      />
                    </svg>
                    <span className="dropdown-text">My Bag</span>
                  </a>
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
                  <a
                    href="#"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="text-center"
                  >
                    <svg
                      width="24"
                      height="29"
                      viewBox="0 0 24 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.699951"
                        y="1"
                        width="22"
                        height="27"
                        rx="3.5"
                        stroke="black"
                      />
                      <line
                        x1="23.2"
                        y1="9"
                        x2="1.19995"
                        y2="9"
                        stroke="black"
                      />
                      <rect
                        x="9.69995"
                        y="21"
                        width="4"
                        height="7"
                        stroke="black"
                      />
                    </svg>
                    <span className="dropdown-text">Find Store</span>
                  </a>
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
                              src={ArabLang}
                              alt="Coral perfumes"
                            />
                          </div>
                          <div className="col-md-2 langName">UAE</div>
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
                      <a className="dropdown-item" href="#">
                        <img src={ArabLang} alt="Coral Perfumes" />
                        <span>UAE</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <img src={EngLang} alt="Coral Perfumes" />{" "}
                        <span>eng</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Drawer */}
          <OutsideAlerter changeDrawerValue={handleCartVisibility}>
            <CartDrawer cartDrawerFlag={cartDrawerFlag} />
          </OutsideAlerter>
          {/* Drawer */}
        </div>
      </div>
    </>
  );
}
export default Account;
