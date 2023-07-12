import Logo from "../../assets/img/logo_coral.png";

function Account() {
  return (
    <>
      <div className="py-5">
        <div className="container-fluid">
          <div className="row w-100 align-items-center gx-lg-2 gx-0">
            <div className="col-xxl-2 col-lg-2">
              <a className="navbar-brand d-none d-lg-block">
                <img src={Logo} alt="Coral Perfumes" />
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

            <div className="col-xxl-6 col-lg-6 d-none d-lg-block">
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
            <div className="col-md-4 col-xxl-4 text-end d-none d-lg-block">
              <div className="list-inline custom-dropdown">
                <div className="list-inline-item me-5">
                  <div class="dropdown ">
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="dropdown-text">Sign In</span>
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
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
                      width="32"
                      height="28"
                      viewBox="0 0 32 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.7 8.98574C30.7 19.6042 20.9842 25.8664 16.6311 27.3639C16.1151 27.5454 15.2848 27.5454 14.7688 27.3639C12.9064 26.7286 10.0567 25.2084 7.43144 22.8714C3.88619 19.7177 0.699951 15.0664 0.699951 8.98574C0.699951 4.28911 4.42471 0.50004 9.02456 0.50004C11.762 0.50004 14.1854 1.83869 15.7112 3.88071C16.8364 2.3589 18.4373 1.26631 20.2539 0.780304C22.0706 0.294296 23.9964 0.443396 25.7187 1.2034C28.6581 2.51937 30.7 5.49163 30.7 8.98574Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="dropdown-text">Wishlist</span>
                  </a>
                </div>
                <div className="list-inline-item">
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
                      <path
                        d="M21.4127 11.5579L21.4127 11.5586L22.627 22.5203C22.627 22.5205 22.6271 22.5207 22.6271 22.5209C22.8182 24.2778 22.6474 25.7653 21.9488 26.8021C21.2732 27.8048 20.0226 28.5 17.7673 28.5H5.63706C3.37435 28.5 2.1208 27.8043 1.44551 26.8021C0.747304 25.7659 0.579399 24.279 0.777172 22.5222L0.77727 22.5213L1.99165 11.5586L1.99166 11.5586L1.99197 11.5556C2.14255 10.1171 2.32749 8.97269 2.95242 8.16661C3.54442 7.403 4.62244 6.84375 6.83794 6.84375H16.553C18.7682 6.84375 19.8467 7.4029 20.4405 8.16705C21.0675 8.97387 21.2552 10.1188 21.4127 11.5579Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                      stroke-linecap="round"
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
                    <span className="dropdown-text">My Bag</span>
                  </a>
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
                    <span className="">My Bag</span>
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
