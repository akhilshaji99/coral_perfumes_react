import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AddToBag from "../../common/AddToBag";
import CountdownTimer from "react-component-countdown-timer";
import deviceImageRender from "../../../utils/deviceImageRender";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import WishlistIcon from "../../wishlist/blocks/WishlistIcon";
import flashSale from "../../../assets/img/flash/flash-sale.gif";

function FlashSale({ componentDatas }) {
  const dynamicBackground = {
    backgroundColor: componentDatas?.bg_color,
  };
  //Code for timer
  const [falseSaleEnd, setFlashSaleEnd] = useState(false);
  const [status, setStatus] = useState(false);

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
  //#End
  return (
    <>
      {!falseSaleEnd ? (
        <div className="container-lg-fluid my-5">
          <div
            className="card flash-sale-container mb-5"
            style={dynamicBackground}
          >
            <div className="d-none">
              <div className="row align-items-center mb-5 ">
                <div className="col-7">
                  <h1 className=" flash-sale">
                    {" "}
                    <span>
                      <img
                        src={flashSale}
                        width={25}
                        height={25}
                        alt="Coral Perfumes"
                        className="flash-sale-gif"
                      />
                    </span>
                    {componentDatas.title}{" "}
                    <span>
                      <img
                        src={flashSale}
                        width={25}
                        height={25}
                        alt="Coral Perfumes"
                        className="flash-sale-gif"
                      />
                    </span>
                  </h1>
                </div>
                <div className="col-5 px-0">
                  <div className="row align-items-center">
                    <div className="col-5 text-end">
                      <span className="timer-text">Ends In</span>{" "}
                    </div>
                    <div className="col-6 px-0">
                      <CountdownTimer
                        className="digital-text"
                        responsive={true}
                        hideDay={true}
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
            <div className="d-none d-xl-block">
              <div className="row d-end">
                <div className="col-md-8 col-12">
                  <div className="row align-items-center mb-4">
                    <div className="col-md-6 col-6">
                      <h1 className=" flash-sale">
                        {" "}
                        <span>
                          <img
                            src={flashSale}
                            width={25}
                            height={25}
                            alt="Coral Perfumes"
                          />
                        </span>
                        {componentDatas.title}{" "}
                        <span>
                          <img
                            src={flashSale}
                            width={25}
                            height={25}
                            alt="Coral Perfumes"
                          />
                        </span>
                      </h1>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="row align-items-center d-end">
                        <div className="col-md-5  pr-0 text-end">
                          <span className="timer-text">Ends In</span>{" "}
                        </div>
                        <div className="col-md-5">
                          <CountdownTimer
                            className="digital-text"
                            responsive={true}
                            hideDay={true}
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
                  items: 2.5,
                  partialVisibilityGutter: 20,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 3,
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
                    <div className="card card-product product-box carousel-product-margin">
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
                        <WishlistIcon
                          product_slug={product?.slug}
                          is_in_wishlist={product?.is_in_wishlist}
                          changeWishlistStatus={() => {
                            product.is_in_wishlist = !product?.is_in_wishlist;
                            setStatus(!status);
                          }}
                        />
                        <div className="text-center position-relative ">
                          <a href="#!">
                            {" "}
                            <div className="product-img">
                              <NavLink
                                to={`/product-details/?slug=${product?.slug}`}
                              >
                                <img
                                  src={deviceImageRender(
                                    product?.product_listing_image
                                  )}
                                  alt="Coral Perfumes"
                                  className="mb-3 img-fluid "
                                />
                              </NavLink>
                            </div>
                          </a>
                        </div>
                        <AddToBag variant_id={product?.id} />
                      </div>
                    </div>
                    <h4 className="ellipsis-text">{product.name}</h4>
                    <div className="row custom-row1">
                      <div className="col-md-4 col-6 px-0">
                        <h5 className="selling-price">
                          AED {product.price_amount}
                        </h5>
                      </div>
                      {product.original_amount ? (
                        <div className="col-md-4 col-6 px-0">
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
