import Sample from "../../../assets/img/sample-product.png";
import TestBanner from "../../../assets/img/test-banner.png"


function ShopMain() {
  return (
    <>
      <section className="col-lg-9 col-md-12">
        <div className="card mb-4 bg-light border-0">
          {/* card body */}
          <img src={TestBanner} className="img-fluid" alt="Coral Perfumes" />
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="product-grid">
              <div className="card card-product product-box">
                <div className="card-body">
                  <span className="badge custom-badge">
                    <svg
                      width="29"
                      height="25"
                      viewBox="0 0 29 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.35118 15.597L11.6544 12.9424V22.8972C11.6544 25.22 13.2179 25.6901 15.1251 23.948L28.1316 12.0576C29.7295 10.6058 29.0595 9.40295 26.6368 9.40295L17.3336 12.0576V2.10278C17.3336 -0.220009 15.7701 -0.690096 13.8629 1.05199L0.856373 12.9424C-0.724342 14.408 -0.0542555 15.597 2.35118 15.597Z"
                        fill="white"
                      />
                    </svg>{" "}
                    20%
                  </span>
                  <span className="wishlist-button">
                    <svg
                      width="29"
                      height="25"
                      viewBox="0 0 29 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.5399 7.98659C27.5399 17.032 18.9036 22.3664 15.0342 23.642C14.5754 23.7967 13.8375 23.7967 13.3787 23.642C11.7233 23.1009 9.19022 21.8059 6.85662 19.8151C3.70527 17.1286 0.873047 13.1664 0.873047 7.98659C0.873047 3.98576 4.18396 0.75803 8.27274 0.75803C10.7061 0.75803 12.8601 1.89836 14.2164 3.63786C15.2167 2.3415 16.6397 1.41078 18.2545 0.996773C19.8693 0.582766 21.5811 0.709778 23.112 1.35719C25.7248 2.4782 27.5399 5.01012 27.5399 7.98659Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="text-center position-relative ">
                    <a href="#!">
                      {" "}
                      <img
                        src={Sample}
                        alt="Coral Perfumes"
                        className="mb-3 img-fluid product-img"
                      />
                    </a>
                  </div>
                  <button className="btn btn-dark w-100 mt-2">
                    add to bag
                  </button>
                </div>
              </div>
              <h4>Coral Escape Pour Femme...</h4>
              <div className="row custom-row1">
                <div className="col-md-4 px-0">
                  <h5 className="selling-price">AED 200</h5>
                </div>
                <div className="col-md-4 px-0">
                  <h5 className="discounted-price">AED 400</h5>
                </div>
                <div className="col-md-4 px-0">
                  <h5 className="discount-percentage">20% off</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-grid">
              <div className="card card-product product-box">
                <div className="card-body">
                  <span className="badge custom-badge">
                    <svg
                      width="29"
                      height="25"
                      viewBox="0 0 29 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.35118 15.597L11.6544 12.9424V22.8972C11.6544 25.22 13.2179 25.6901 15.1251 23.948L28.1316 12.0576C29.7295 10.6058 29.0595 9.40295 26.6368 9.40295L17.3336 12.0576V2.10278C17.3336 -0.220009 15.7701 -0.690096 13.8629 1.05199L0.856373 12.9424C-0.724342 14.408 -0.0542555 15.597 2.35118 15.597Z"
                        fill="white"
                      />
                    </svg>{" "}
                    20%
                  </span>
                  <span className="wishlist-button">
                    <svg
                      width="29"
                      height="25"
                      viewBox="0 0 29 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.5399 7.98659C27.5399 17.032 18.9036 22.3664 15.0342 23.642C14.5754 23.7967 13.8375 23.7967 13.3787 23.642C11.7233 23.1009 9.19022 21.8059 6.85662 19.8151C3.70527 17.1286 0.873047 13.1664 0.873047 7.98659C0.873047 3.98576 4.18396 0.75803 8.27274 0.75803C10.7061 0.75803 12.8601 1.89836 14.2164 3.63786C15.2167 2.3415 16.6397 1.41078 18.2545 0.996773C19.8693 0.582766 21.5811 0.709778 23.112 1.35719C25.7248 2.4782 27.5399 5.01012 27.5399 7.98659Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="text-center position-relative ">
                    <a href="#!">
                      {" "}
                      <img
                        src={Sample}
                        alt="Coral Perfumes"
                        className="mb-3 img-fluid product-img"
                      />
                    </a>
                  </div>
                  <button className="btn btn-dark w-100 mt-2">
                    add to bag
                  </button>
                </div>
              </div>
              <h4>Coral Escape Pour Femme...</h4>
              <div className="row custom-row1">
                <div className="col-md-4 px-0">
                  <h5 className="selling-price">AED 200</h5>
                </div>
                <div className="col-md-4 px-0">
                  <h5 className="discounted-price">AED 400</h5>
                </div>
                <div className="col-md-4 px-0">
                  <h5 className="discount-percentage">20% off</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-grid">
              <div className="card card-product product-box">
                <div className="card-body">
                  <span className="badge custom-badge">
                    <svg
                      width="29"
                      height="25"
                      viewBox="0 0 29 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.35118 15.597L11.6544 12.9424V22.8972C11.6544 25.22 13.2179 25.6901 15.1251 23.948L28.1316 12.0576C29.7295 10.6058 29.0595 9.40295 26.6368 9.40295L17.3336 12.0576V2.10278C17.3336 -0.220009 15.7701 -0.690096 13.8629 1.05199L0.856373 12.9424C-0.724342 14.408 -0.0542555 15.597 2.35118 15.597Z"
                        fill="white"
                      />
                    </svg>{" "}
                    20%
                  </span>
                  <span className="wishlist-button">
                    <svg
                      width="29"
                      height="25"
                      viewBox="0 0 29 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.5399 7.98659C27.5399 17.032 18.9036 22.3664 15.0342 23.642C14.5754 23.7967 13.8375 23.7967 13.3787 23.642C11.7233 23.1009 9.19022 21.8059 6.85662 19.8151C3.70527 17.1286 0.873047 13.1664 0.873047 7.98659C0.873047 3.98576 4.18396 0.75803 8.27274 0.75803C10.7061 0.75803 12.8601 1.89836 14.2164 3.63786C15.2167 2.3415 16.6397 1.41078 18.2545 0.996773C19.8693 0.582766 21.5811 0.709778 23.112 1.35719C25.7248 2.4782 27.5399 5.01012 27.5399 7.98659Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="text-center position-relative ">
                    <a href="#!">
                      {" "}
                      <img
                        src={Sample}
                        alt="Coral Perfumes"
                        className="mb-3 img-fluid product-img"
                      />
                    </a>
                  </div>
                  <button className="btn btn-dark w-100 mt-2">
                    add to bag
                  </button>
                </div>
              </div>
              <h4>Coral Escape Pour Femme...</h4>
              <div className="row custom-row1">
                <div className="col-md-4 px-0">
                  <h5 className="selling-price">AED 200</h5>
                </div>
                <div className="col-md-4 px-0">
                  <h5 className="discounted-price">AED 400</h5>
                </div>
                <div className="col-md-4 px-0">
                  <h5 className="discount-percentage">20% off</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-grid">
              <div className="card card-product product-box">
                <div className="card-body">
                  <span className="badge custom-badge">
                    <svg
                      width="29"
                      height="25"
                      viewBox="0 0 29 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.35118 15.597L11.6544 12.9424V22.8972C11.6544 25.22 13.2179 25.6901 15.1251 23.948L28.1316 12.0576C29.7295 10.6058 29.0595 9.40295 26.6368 9.40295L17.3336 12.0576V2.10278C17.3336 -0.220009 15.7701 -0.690096 13.8629 1.05199L0.856373 12.9424C-0.724342 14.408 -0.0542555 15.597 2.35118 15.597Z"
                        fill="white"
                      />
                    </svg>{" "}
                    20%
                  </span>
                  <span className="wishlist-button">
                    <svg
                      width="29"
                      height="25"
                      viewBox="0 0 29 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.5399 7.98659C27.5399 17.032 18.9036 22.3664 15.0342 23.642C14.5754 23.7967 13.8375 23.7967 13.3787 23.642C11.7233 23.1009 9.19022 21.8059 6.85662 19.8151C3.70527 17.1286 0.873047 13.1664 0.873047 7.98659C0.873047 3.98576 4.18396 0.75803 8.27274 0.75803C10.7061 0.75803 12.8601 1.89836 14.2164 3.63786C15.2167 2.3415 16.6397 1.41078 18.2545 0.996773C19.8693 0.582766 21.5811 0.709778 23.112 1.35719C25.7248 2.4782 27.5399 5.01012 27.5399 7.98659Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="text-center position-relative ">
                    <a href="#!">
                      {" "}
                      <img
                        src={Sample}
                        alt="Coral Perfumes"
                        className="mb-3 img-fluid product-img"
                      />
                    </a>
                  </div>
                  <button className="btn btn-dark w-100 mt-2">
                    add to bag
                  </button>
                </div>
              </div>
              <h4>Coral Escape Pour Femme...</h4>
              <div className="row custom-row1">
                <div className="col-md-4 px-0">
                  <h5 className="selling-price">AED 200</h5>
                </div>
                <div className="col-md-4 px-0">
                  <h5 className="discounted-price">AED 400</h5>
                </div>
                <div className="col-md-4 px-0">
                  <h5 className="discount-percentage">20% off</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ShopMain;
