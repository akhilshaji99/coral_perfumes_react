import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import deviceImageRender from "../../../utils/deviceImageRender";
import { NavLink } from "react-router-dom";
import request from "../../../utils/request";
import { useEffect, useState } from "react";

function BoughtTogether({ FbtDatas }) {
  const fbtAddToCart = async () => {
    try {
      // var bodyFormData = new FormData();
      // bodyFormData.append("stars_count", rating);
      // bodyFormData.append("message", message);
      const response = await request.post("add_to_cart_fbt/", {
        id: FbtDatas?.id,
      });
      // if (response?.data?.status) {
      //   // setBrandReviews(response?.data?.data);
      // }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <>
        <Carousel
          additionalTransfrom={0}
          autoPlay={false}
          arrows
          autoPlaySpeed={3500}
          centerMode={false}
          className=""
          containerClass="container-with-dots fbt-product-plus"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={-10000}
          pauseOnHover={false}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            largescreen: {
              breakpoint: {
                max: 3000,
                min: 1480,
              },
              items: 2,
            },
            desktop: {
              breakpoint: {
                max: 1680,
                min: 1024,
              },
              items: 2,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },

              items: 2,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {FbtDatas?.products?.map((fbtProduct, index) => {
            return (
              <div className="product-grid slick-slider-alignment " key={index}>
                <div className="product-grid carousel-product-margin">
                  <div className="card border-0 card-product">
                    <div className="card-body fbt-product-box">
                      <span class="badge">
                        <input
                          type="radio"
                          checked
                          className="form-check-input"
                        />
                      </span>
                      <div className="text-center position-relative ">
                        <NavLink
                          to={`/product-details/?slug=${fbtProduct?.slug}`}
                        >
                          <div className="product-img">
                            <img
                              src={deviceImageRender(fbtProduct?.listing_image)}
                              alt="Coral Perfumes"
                              className="img-fluid"
                            />
                          </div>
                        </NavLink>
                      </div>
                    </div>
                    <div className="card-footer border-0">
                      <h4 className="fbt-ellipsis-text">{fbtProduct?.name}</h4>
                      <div className="row custom-row1 mb-5 ">
                        <div className="col-md-4 col-6 px-0">
                          <h5 className="fbt-selling-price">
                            {FbtDatas?.currency_code} {fbtProduct?.price_amount}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <button
          className="btn btn-dark w-100 mt-2 fbt-add-to-cart"
          onClick={() => {
            fbtAddToCart();
          }}
        >
          {FbtDatas?.button_title}
        </button>
      </>
    </div>
  );
}
export default BoughtTogether;
