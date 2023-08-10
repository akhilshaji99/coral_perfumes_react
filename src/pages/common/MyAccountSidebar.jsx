import { NavLink } from "react-router-dom";
import personalInfo from "../../assets/img/icons/my-account/personal-info.svg";
import addressBook from "../../assets/img/icons/my-account/address-book.svg";
import myOrders from "../../assets/img/icons/my-account/my-orders.svg";
import myWishlist from "../../assets/img/icons/my-account/my-wishlist.svg";
import Returns from "../../assets/img/icons/my-account/returns.svg";
import Logout from "../../assets/img/icons/my-account/logout.svg";

function MyAccountSidebar() {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <>
      <div className="col-12">
        <div className="d-flex justify-content-between align-items-center d-md-none py-4">
          {/* heading */}
          <h3 className="fs-5 mb-0">Account Setting</h3>
          {/* button */}
          <button
            className="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3 "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasAccount"
            aria-controls="offcanvasAccount"
          >
            <i className="bi bi-text-indent-left fs-3" />
          </button>
        </div>
      </div>
      {/* Desktop View */}
      <div className="col-lg-3 col-md-3 col-12   d-none d-md-block">
        <div className=" ">
          <ul className="nav flex-column nav-pills nav-pills-dark">
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
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="javascript:;">
                <img src={Logout} alt="Coral perfumes" />
                LOGOUT
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
        </div>
      </div>
      {/* Mobile View */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasAccount"
        aria-labelledby="offcanvasAccountLabel"
      >
        {/* offcanvas header */}
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasAccountLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        {/* offcanvas body */}
        <div className="offcanvas-body">
          <ul className="nav flex-column nav-pills nav-pills-dark">
            <li className="nav-item">
            <NavLink to="/personal-info">

              <a
                className="nav-link active"
                aria-current="page"
              
              >
                <i className="feather-icon icon-shopping-bag me-2" />
                MY PERSONAL INFO
              </a>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/address-book">

              <a
                className="nav-link"
                aria-current="page"
              
              >
                <i className="feather-icon icon-shopping-bag me-2" />
                ADDRESS BOOK
              </a>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/">
              <a
                className="nav-link "
                aria-current="page"
              >
                <i className="feather-icon icon-shopping-bag me-2" />
                MY ORDERS
              </a>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/wishlist">
              <a
                className="nav-link "
                aria-current="page"
              >
                <i className="feather-icon icon-shopping-bag me-2" />
                MY WISHLIST
              </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                aria-current="page"
                href="account-orders.html"
              >
                <i className="feather-icon icon-shopping-bag me-2" />
                RETURNS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                aria-current="page"
                onClick={logout}
              >
                <i className="feather-icon icon-shopping-bag me-2" />
                LOGOUT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default MyAccountSidebar;
