// App.js
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import flashGif from "../../assets/img/flash/gif-menu.gif";
import deviceImageRender from "../../utils/deviceImageRender";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BackButton from "../../assets/icons/back_button.svg";

function MobileMenu({ mobileMenuStatus, setMobileMenuStatus, menuItems }) {
  const [showSubMenus, setShowSubMenus] = useState(false);
  const [subMenuDatas, setSubMenuDatas] = useState(null);
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  useEffect(() => {
    if (!mobileMenuStatus) {
      setShowSubMenus(false);
    }
  }, [mobileMenuStatus]);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  navbar-dark navbar-default py-0"
        aria-label="Offcanvas navbar large"
        id="mobile-menu"
      >
        <div className="container-lg-fluid  mob-c-view">
          <div
            className={`offcanvas offcanvas-start  ${
              mobileMenuStatus ? "show" : ""
            }`}
            tabIndex={-1}
            id="navbar-default"
            aria-labelledby="navbar-defaultLabel"
          >
            <div className="offcanvas-body">
              <div className="custom-mega-menu">
                <ul className="navbar-nav align-items-center ">
                  {Array.isArray(menuItems)
                    ? menuItems.map((item, index) => (
                        <li
                          className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth "
                          // key={index}
                          // onMouseEnter={() => handleMouseEnter(index)}
                          // onMouseLeave={handleMouseLeave}
                          // onClick={() => handleSubmenuToggle(index)}
                          onClick={() => {
                            setShowSubMenus(true);
                            setSubMenuDatas(item);
                          }}
                        >
                          <NavLink
                            // onClick={() => {
                            //   setShowSubMenus(true);
                            // }}
                            className={`nav-link dropdown-toggle`}
                            // role="button"
                            // data-bs-toggle="dropdown"
                            // aria-expanded="false"
                            // to="/"
                          >
                            {index === 0 ? (
                              <span className="flash-icon">
                                <img
                                  src={flashGif}
                                  className="flash-gif-menu"
                                  alt="Coral Perfumes"
                                />
                              </span>
                            ) : null}
                            {item.name}
                            <span className="mob-arrow d-inline-block d-sm-none d-flex justify-content-end">
                              <svg
                                width={5}
                                height={10}
                                viewBox="0 0 5 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.977539 1L3.77482 4.29293C4.10517 4.68182 4.10517 5.31818 3.77482 5.70707L0.977539 9"
                                  stroke="black"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </NavLink>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mob-c-view d-block d-sm-none">
        <div
          className={`offcanvas offcanvas-start menu-zindex   ${
            showSubMenus ? "show" : "hide"
          }`}
          tabIndex={-1}
          id="offcanvasAccount"
          aria-labelledby="offcanvasAccountLabel"
        >
          <div className="offcanvas-body mob-account-sidebar">
            <div
              className="p-4 mt-2"
              onClick={() => {
                setShowSubMenus(false);
              }}
            >
              {/* <h5 className="text-left ml-2 my-dash-head">Back</h5> */}
              <img
                src={BackButton}
                alt="coral-menu-back"
                className="mob-menu-back-button"
              />
            </div>
            <ul className="nav flex-column nav-pills nav-pills-dark">
              <li
                className="nav-item"
                onClick={() => {
                  setShowSubMenus(false);
                  setMobileMenuStatus(false);
                }}
              >
                <div>
                  <div className="row p-2 p-lg-4">
                    <div className="col-lg-3 col-md-4 col-12 mb-4 mb-lg-0">
                      <h6 className=" ps-3">SHOP BY PRODUCTS</h6>
                      {subMenuDatas?.shop_by_category !== undefined &&
                      Array.isArray(subMenuDatas?.shop_by_category)
                        ? subMenuDatas?.shop_by_category?.map((item, index) => (
                            <>
                              <a
                                key={index}
                                className="dropdown-item"
                                onClick={() => {
                                  handleClick(item.categ_link);
                                }}
                              >
                                {item.name}{" "}
                              </a>
                            </>
                          ))
                        : null}
                    </div>
                    <div className="col-lg-2 col-md-4  col-12 mb-4 mb-lg-0">
                      <h6 className=" ps-3">SHOP BY BRAND</h6>
                      {subMenuDatas?.shop_by_brand !== undefined &&
                      Array.isArray(subMenuDatas?.shop_by_brand)
                        ? subMenuDatas?.shop_by_brand?.map((item, index) => (
                            <>
                              <Link
                                key={index}
                                className="dropdown-item"
                                to={item?.brand_link}
                              >
                                {item.name}{" "}
                              </Link>
                            </>
                          ))
                        : null}
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 mb-4 mb-lg-0">
                      <h6 className=" ps-3">TRENDING NOW</h6>
                      {/* Mob View */}
                      <div className=" d-block d-sm-none">
                        <div className="row  ads-block">
                          {subMenuDatas?.trending !== undefined &&
                          Array.isArray(subMenuDatas?.trending)
                            ? subMenuDatas?.trending?.map((item, index) => (
                                <>
                                  <Link to={item?.trending_link}>
                                    <div
                                      className="row align-items-center img-nav-link"
                                      key={index}
                                    >
                                      <div className="col-3">
                                        <div className="menu-thumbnails">
                                          <img
                                            src={deviceImageRender(
                                              item.trending_image
                                            )}
                                            alt=""
                                            className="img-fluid"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-7">
                                        <h5
                                          className="menu-thumbnails-link"
                                          href="#"
                                        >
                                          {item.trending_title}
                                        </h5>
                                      </div>
                                      <div className="col-1">
                                        <span className="mob-img-arrow d-inline-block d-sm-none d-flex justify-content-end">
                                          <svg
                                            width={5}
                                            height={10}
                                            viewBox="0 0 5 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M0.977539 1L3.77482 4.29293C4.10517 4.68182 4.10517 5.31818 3.77482 5.70707L0.977539 9"
                                              stroke="black"
                                              strokeMiterlimit={10}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                  </Link>
                                </>
                              ))
                            : null}
                        </div>
                      </div>
                      <div className="my-5 d-none d-lg-block">
                        <div className="row g-5 ads-block">
                          {subMenuDatas?.trending !== undefined &&
                          Array.isArray(subMenuDatas?.trending)
                            ? subMenuDatas?.trending?.map((item, index) => (
                                <>
                                  <div
                                    className="col-md-5 col-12  inline-thumb "
                                    key={index}
                                  >
                                    <Link to={item?.trending_link}>
                                      <div className="menu-thumbnails">
                                        <img
                                          src={deviceImageRender(
                                            item.trending_image
                                          )}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                      <h5
                                        className="menu-thumbnails-link"
                                        href="#"
                                      >
                                        {item.trending_title}
                                      </h5>
                                    </Link>
                                  </div>
                                </>
                              ))
                            : null}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                      {subMenuDatas?.flashimages !== undefined &&
                      Array.isArray(subMenuDatas?.flashimages)
                        ? subMenuDatas?.flashimages?.map((item, index) => (
                            <>
                              <div className="card border-0" key={index}>
                                <Link to={item?.image_link}>
                                  <img
                                    src={deviceImageRender(item.image)}
                                    alt={item.image_alt}
                                    className=" megamenu-ads"
                                  />
                                </Link>
                              </div>
                            </>
                          ))
                        : null}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
