import Sample from "../../../assets/img/sample-product.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function FlashSale() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="card flash-sale-container mb-5">
          <h1 className="mb-5 flash-sale">
            {" "}
            <span>
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.09707 10.606L8.19229 8.80086V15.5701C8.19229 17.1496 9.21667 17.4693 10.4662 16.2846L18.9877 8.19915C20.0346 7.21196 19.5956 6.39401 18.0084 6.39401L11.9131 8.19915V1.42989C11.9131 -0.149606 10.8888 -0.469266 9.63924 0.715354L1.11771 8.80086C0.0820718 9.79744 0.521094 10.606 2.09707 10.606Z"
                  fill="url(#paint0_linear_763_22017)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_763_22017"
                    x1="6.70033"
                    y1="5.36581"
                    x2="17.1655"
                    y2="16.6485"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FAFF00" />
                    <stop offset="1" stop-color="#FF9900" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            Flash Sale{" "}
            <span>
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.09707 10.606L8.19229 8.80086V15.5701C8.19229 17.1496 9.21667 17.4693 10.4662 16.2846L18.9877 8.19915C20.0346 7.21196 19.5956 6.39401 18.0084 6.39401L11.9131 8.19915V1.42989C11.9131 -0.149606 10.8888 -0.469266 9.63924 0.715354L1.11771 8.80086C0.0820718 9.79744 0.521094 10.606 2.09707 10.606Z"
                  fill="url(#paint0_linear_763_22017)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_763_22017"
                    x1="6.70033"
                    y1="5.36581"
                    x2="17.1655"
                    y2="16.6485"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FAFF00" />
                    <stop offset="1" stop-color="#FF9900" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <Carousel
            additionalTransfrom={0}
            autoPlay={true}
            arrows
            autoPlaySpeed={3500}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover={false}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 4,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            swipeable
          >
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
              <div className="row text-center">
                <div className="col-md-4">
                  <h5 className="selling-price">AED 200</h5>
                </div>
                <div className="col-md-4">
                  <h5 className="discounted-price">AED 400</h5>
                </div>
                <div className="col-md-4">
                  <h5 className="discount-percentage">20% off</h5>
                </div>
              </div>
            </div>
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
              <div className="row text-center">
                <div className="col-md-4">
                  <h5 className="selling-price">AED 200</h5>
                </div>
                <div className="col-md-4">
                  <h5 className="discounted-price">AED 400</h5>
                </div>
                <div className="col-md-4">
                  <h5 className="discount-percentage">20% off</h5>
                </div>
              </div>
            </div>
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
              <div className="row text-center">
                <div className="col-md-4">
                  <h5 className="selling-price">AED 200</h5>
                </div>
                <div className="col-md-4">
                  <h5 className="discounted-price">AED 400</h5>
                </div>
                <div className="col-md-4">
                  <h5 className="discount-percentage">20% off</h5>
                </div>
              </div>
            </div>
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
              <div className="row text-center">
                <div className="col-md-4">
                  <h5 className="selling-price">AED 200</h5>
                </div>
                <div className="col-md-4">
                  <h5 className="discounted-price">AED 400</h5>
                </div>
                <div className="col-md-4">
                  <h5 className="discount-percentage">20% off</h5>
                </div>
              </div>
            </div>
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
              <div className="row text-center">
                <div className="col-md-4">
                  <h5 className="selling-price">AED 200</h5>
                </div>
                <div className="col-md-4">
                  <h5 className="discounted-price">AED 400</h5>
                </div>
                <div className="col-md-4">
                  <h5 className="discount-percentage">20% off</h5>
                </div>
              </div>
            </div>

            
           
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default FlashSale;
