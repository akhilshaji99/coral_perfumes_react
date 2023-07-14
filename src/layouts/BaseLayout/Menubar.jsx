
import request from '../../utils/request';
import { useEffect, useState } from 'react';
function Menubar() {
  useEffect(() => {
    getMenuList();
  }, []);
  const getMenuList = async () => {
    try {
      const response = await request.get('/get_menus');
      console.log('response',response);

    } catch (error) {
      console.log('error',error);
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark navbar-default py-0"
      aria-label="Offcanvas navbar large"
    >
      <div className="container">
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="navbar-default"
          aria-labelledby="navbar-defaultLabel"
        >
          <div className="offcanvas-header pb-1">
            <a href="index-2.html">
              <img
                src="assets/images/logo/freshcart-logo.svg"
                alt="eCommerce HTML Template"
              />
            </a>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div className="d-block d-lg-none mb-4">
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
            <div className="">
              <ul className="navbar-nav align-items-center ">
                <li className="nav-item dropdown w-100 w-lg-auto">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu justify-content-space-between">
                    <li>
                      <a className="dropdown-item" >
                        Home 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/index-2.html">
                        Home 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/index-3.html">
                        Home 3
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/index-4.html">
                        Home 4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/index-5.html">
                        Home 5{" "}
                        <span className="badge bg-light-info text-dark-info ms-1">
                          New
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown w-100 w-lg-auto">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="pages/shop-grid.html">
                        Shop Grid - Filter
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/shop-grid-3-column.html"
                      >
                        Shop Grid - 3 column
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/shop-list.html">
                        Shop List - Filter
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/shop-filter.html"
                      >
                        Shop - Filter
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/shop-fullwidth.html"
                      >
                        Shop Wide
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/shop-single.html"
                      >
                        Shop Single
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/shop-single-2.html"
                      >
                        Shop Single v2
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/shop-wishlist.html"
                      >
                        Shop Wishlist
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/shop-cart.html">
                        Shop Cart
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/shop-checkout.html"
                      >
                        Shop Checkout
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown w-100 w-lg-auto">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Stores
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="pages/store-list.html">
                        Store List
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/store-grid.html">
                        Store Grid
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/store-single.html"
                      >
                        Store Single
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mega menu
                  </a>
                  <div className=" dropdown-menu pb-0">
                    <div className="row p-2 p-lg-4">
                      <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                        <h6 className="text-primary ps-3">
                          Dairy, Bread &amp; Eggs
                        </h6>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Butter
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Milk Drinks
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Curd &amp; Yogurt
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Eggs
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Buns &amp; Bakery
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Cheese
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Condensed Milk
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Dairy Products
                        </a>
                      </div>
                      <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                        <h6 className="text-primary ps-3">
                          Breakfast &amp; Instant Food
                        </h6>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Breakfast Cereal
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          {" "}
                          Noodles, Pasta &amp; Soup
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Frozen Veg Snacks
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          {" "}
                          Frozen Non-Veg Snacks
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          {" "}
                          Vermicelli
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          {" "}
                          Instant Mixes
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          {" "}
                          Batter
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          {" "}
                          Fruit and Juices
                        </a>
                      </div>
                      <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                        <h6 className="text-primary ps-3">
                          Cold Drinks &amp; Juices
                        </h6>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Soft Drinks
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Fruit Juices
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Coldpress
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Water &amp; Ice Cubes
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Soda &amp; Mixers
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Health Drinks
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Herbal Drinks
                        </a>
                        <a
                          className="dropdown-item"
                          href="pages/shop-grid.html"
                        >
                          Milk Drinks
                        </a>
                      </div>
                      <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                        <div className="card border-0">
                          <img
                            src="assets/images/banner/menu-banner.jpg"
                            alt="eCommerce HTML Template"
                            className="img-fluid"
                          />
                          <div className="position-absolute ps-6 mt-8">
                            <h5 className=" mb-0 ">
                              Dont miss this <br />
                              offer today.
                            </h5>
                            <a href="#" className="btn btn-primary btn-sm mt-3">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown w-100 w-lg-auto">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="pages/blog.html">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/blog-single.html"
                      >
                        Blog Single
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/blog-category.html"
                      >
                        Blog Category
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/about.html">
                        About us
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/404error.html">
                        404 Error
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown w-100 w-lg-auto">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="pages/signin.html">
                        Sign in
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pages/signup.html">
                        Signup
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pages/forgot-password.html"
                      >
                        Forgot Password
                      </a>
                    </li>
                    <li className="dropdown-submenu dropend">
                      <a
                        className="dropdown-item dropdown-list-group-item dropdown-toggle"
                        href="#"
                      >
                        My Account
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages/account-orders.html"
                          >
                            Orders
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages/account-settings.html"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages/account-address.html"
                          >
                            Address
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages/account-payment-method.html"
                          >
                            Payment Method
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages/account-notification.html"
                          >
                            Notification
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item w-100 w-lg-auto">
                  <a className="nav-link" href="dashboard/index.html">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item dropdown w-100 w-lg-auto dropdown-flyout">
                  <a
                    className="nav-link"
                    href="#"
                    id="navbarDropdownDocs"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Docs
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-lg"
                    aria-labelledby="navbarDropdownDocs"
                  >
                    <a
                      className="dropdown-item align-items-start"
                      href="docs/index.html"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          className="bi bi-file-text text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                        </svg>
                      </div>
                      <div className="ms-3 lh-1">
                        <h6 className="mb-1">Documentations</h6>
                        <p className="mb-0 small">
                          Browse the all documentation
                        </p>
                      </div>
                    </a>
                    <a
                      className="dropdown-item align-items-start"
                      href="docs/changelog.html"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          className="bi bi-layers text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                        </svg>
                      </div>
                      <div className="ms-3 lh-1">
                        <h6 className="mb-1">
                          Changelog{" "}
                          <span className="text-primary ms-1">v1.2.0</span>
                        </h6>
                        <p className="mb-0 small">See what's new</p>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Menubar;
