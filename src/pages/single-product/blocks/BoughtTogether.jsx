import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import deviceImageRender from "../../../utils/deviceImageRender";
import { NavLink } from "react-router-dom";
import request from "../../../utils/request";
import { useState } from "react";
import AlerMessage from "../../common/AlerMessage";
import toast from "react-hot-toast";
// import { useEffect, useState } from "react";

function BoughtTogether({ FbtDatas }) {
  const [unCheckedFbt, setUncheckedFbt] = useState([]);
  const [status, setStatus] = useState(false);
  const [buttonText, setButtonText] = useState(FbtDatas?.button_title);
  const [fbtResponse, setFbtResponse] = useState(null);

  const fbtAddToCart = async () => {
    try {
      const response = await request.post("add_to_cart_fbt/", {
        id: FbtDatas?.id,
        unCheckedFbt: unCheckedFbt,
      });
      if (!response?.data?.status) {
        toast((t) => (
          <AlerMessage
            t={t}
            toast={toast}
            status={false}
            title={"Error"}
            message={response?.data?.message}
          />
        ));
      } else {
        toast((t) => (
          <AlerMessage
            t={t}
            toast={toast}
            status={true}
            title={"Success"}
            message={response?.data?.message}
          />
        ));
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const changeFbtStatus = async (product_id) => {
    try {
      if (unCheckedFbt.includes(product_id)) {
        const index = unCheckedFbt.indexOf(product_id);
        unCheckedFbt.splice(index, 1);
      } else {
        unCheckedFbt.push(product_id);
      }
      setUncheckedFbt(unCheckedFbt);
      // console.log("unCheckedFbt", unCheckedFbt);
      setStatus(!status);
      const response = await request.post("fbt_uncheck/", {
        unchecked_products: unCheckedFbt,
        fbt_id: FbtDatas?.id,
      });
      // if (response?.data?.status) {
      //   console.log(response?.data);
      setButtonText(response?.data?.fbt_data?.button_title);
      setFbtResponse(response?.data?.fbt_data);
      FbtDatas.products = response?.data?.fbt_data?.products;
      console.log(response?.data?.fbt_data?.products);
      // }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div>
        <div className="fbt-slide-wrapper">
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
                items: 2.5,
              },
              desktop: {
                breakpoint: {
                  max: 1680,
                  min: 1024,
                },
                items: 2.5,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },

                items: 2.5,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2.5,
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
                <div
                  className="product-grid slick-slider-alignment"
                  key={index}
                >
                  <div className="product-grid carousel-product-margin">
                    <div className="card border-0 card-product">
                      <div className="card-body fbt-product-box">
                        <span class="badge">
                          <input
                            type="checkbox"
                            checked={!unCheckedFbt.includes(fbtProduct?.id)}
                            className="form-check-input"
                            onChange={() => {
                              changeFbtStatus(fbtProduct?.id);
                            }}
                          />
                        </span>
                        <div className="text-center position-relative ">
                          <NavLink
                            to={`/product-details/?slug=${fbtProduct?.slug}`}
                          >
                            <div className="product-img">
                              <img
                                src={deviceImageRender(
                                  fbtProduct?.listing_image
                                )}
                                alt="Coral Perfumes"
                                className="img-fluid"
                              />
                            </div>
                          </NavLink>
                        </div>
                      </div>
                      <div className="card-footer border-0">
                        <h4 className="fbt-ellipsis-text">
                          {fbtProduct?.name}
                        </h4>
                        <div className="row custom-row1 mb-2 ">
                          <div className="col-md-6 col-12 px-0">
                            <h5 className="fbt-selling-price">
                              {FbtDatas?.currency_code}{" "}
                              {fbtProduct?.price_amount}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="plus-button">+</div> */}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="btn btn-dark w-100 mt-2 fbt-add-to-cart"
          disabled={fbtResponse?.total_amount <= 0}
          onClick={() => {
            fbtAddToCart();
          }}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
export default BoughtTogether;
