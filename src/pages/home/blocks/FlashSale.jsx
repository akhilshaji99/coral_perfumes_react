import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CountdownTimer from "react-component-countdown-timer";
import deviceImageRender from "../../../utils/deviceImageRender";
import { useState } from "react";

function FlashSale({ componentDatas }) {
  const dynamicBackground = {
    backgroundColor: componentDatas?.bg_color,
  };
  const [falseSaleEnd, setFlashSaleEnd] = useState(false);
  const products = componentDatas?.datas?.[0]?.products;
  const timeEnd = componentDatas?.datas?.[0]?.end_time;
  let counterValue = 0;
  const inputDate = new Date(timeEnd);
  const customTimeZoneOffset = -5.5; // -5 hours and -30 minutes
  const customTimeZoneOffsetMilliseconds =
    customTimeZoneOffset * 60 * 60 * 1000;
  const adjustedDate = new Date(
    inputDate.getTime() + customTimeZoneOffsetMilliseconds
  );

  const formattedDateTime = adjustedDate.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  });

  var msDiff = new Date(formattedDateTime) - new Date(); //Future date - current date
  counterValue = Math.floor(msDiff / 1000);

  return (
    <>
      {!falseSaleEnd ? (
        <div className="container-fluid my-5">
          <div
            className="card flash-sale-container mb-5"
            style={dynamicBackground}
          >
            <div className="row d-end">
              <div className="col-md-8 ">
                <div className="row">
                  <div className="col-md-6">
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
                              <stop stopColor="#FAFF00" />
                              <stop offset="1" stopColor="#FF9900" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      {componentDatas.title}{" "}
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
                              <stop stopColor="#FAFF00" />
                              <stop offset="1" stopColor="#FF9900" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </h1>
                  </div>
                  <div className="col-md-6 ">
                    <div className="row align-items-center d-end">
                      <div className="col-md-5 pr-0 text-end">
                        <span className="timer-text">Ends In</span>{" "}
                      </div>
                      <div className="col-md-5">
                        <CountdownTimer
                          className="digital-text"
                          responsive={true}
                          size={25}
                          count={counterValue}
                          onEnd={() => {
                            setFlashSaleEnd(true);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Carousel
              additionalTransfrom={0}
              autoPlay={false}
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
                  items: 1,
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
              {products.map((product, index) => {
                return (
                  <div className="product-grid" key={index}>
                    <div className="card card-product product-box">
                      <div className="card-body">
                        {product.discount_percentage ? (
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
                            {product.discount_percentage}%
                          </span>
                        ) : null}
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
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <div className="text-center position-relative ">
                          <a href="#!">
                            {" "}
                            <img
                              src={deviceImageRender(
                                product?.product_listing_image
                              )}
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
                    <h4>{product.name}</h4>
                    <div className="row custom-row1">
                      <div className="col-md-4 px-0">
                        <h5 className="selling-price">
                          AED {product.price_amount}
                        </h5>
                      </div>
                      {product.original_amount ? (
                        <div className="col-md-4 px-0">
                          <h5 className="discounted-price">
                            AED {product.original_amount}
                          </h5>
                        </div>
                      ) : null}
                      {product.discount_percentage ? (
                        <div className="col-md-4 px-0">
                          <h5 className="discount-percentage">
                            {product.discount_percentage}% off
                          </h5>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default FlashSale;
