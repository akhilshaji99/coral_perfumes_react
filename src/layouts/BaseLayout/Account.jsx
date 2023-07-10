function Account() {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row w-100 align-items-center gx-lg-2 gx-0">
            <div className="col-xxl-2 col-lg-3">
              <a className="navbar-brand d-none d-lg-block" href="index-2.html">
                <img
                  src="assets/images/logo/freshcart-logo.svg"
                  alt="eCommerce HTML Template"
                />
              </a>
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
            <div className="col-md-2 col-xxl-3 d-none d-lg-block">
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn  btn-outline-gray-400 text-muted"
                data-bs-toggle="modal"
                data-bs-target="#locationModal"
              >
                <i className="feather-icon icon-map-pin me-2" />
                Location
              </button>
            </div>
            <div className="col-md-2 col-xxl-2 text-end d-none d-lg-block">
              <div className="list-inline">
                <div className="list-inline-item me-5">
                  <a
                    href="pages/shop-wishlist.html"
                    className="text-muted position-relative"
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
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      5<span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                <div className="list-inline-item me-5">
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
                      1<span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Account;