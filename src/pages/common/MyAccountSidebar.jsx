import { NavLink } from "react-router-dom";
function MyAccountSidebar() {
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
      <div className="col-lg-3 col-md-3 col-12 border-end  d-none d-md-block">
        <div className="pt-10 pe-lg-10">
          <ul className="nav flex-column nav-pills nav-pills-dark">
            <li className="nav-item">
              <NavLink to={"/personal-info"} lassName="nav-link active">
                <i className="feather-icon icon-shopping-bag me-2" />
                MY PERSONAL INFO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/address-book"} lassName="nav-link ">
                <i className="feather-icon icon-shopping-bag me-2" />
                ADDRESS BOOK
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/orders"} lassName="nav-link ">
                <i className="feather-icon icon-shopping-bag me-2" />
                MY ORDERS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/wishlist"} lassName="nav-link">
                <i className="feather-icon icon-shopping-bag me-2" />
                MY WISHLIST
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/returns"} lassName="nav-link">
                <i className="feather-icon icon-shopping-bag me-2" />
                RETURNS
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="javascript:;">
                <i className="feather-icon icon-shopping-bag me-2" />
                LOGOUT
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
              <a
                className="nav-link active"
                aria-current="page"
                href="account-orders.html"
              >
                <i className="feather-icon icon-shopping-bag me-2" />
                MY PERSONAL INFO
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="account-orders.html"
              >
                <i className="feather-icon icon-shopping-bag me-2" />
                ADDRESS BOOK
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                aria-current="page"
                href="account-orders.html"
              >
                <i className="feather-icon icon-shopping-bag me-2" />
                MY ORDERS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                aria-current="page"
                href="account-orders.html"
              >
                <i className="feather-icon icon-shopping-bag me-2" />
                MY WISHLIST
              </a>
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
                href="account-orders.html"
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
