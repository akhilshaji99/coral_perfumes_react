import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import deviceImageRender from "../../../utils/deviceImageRender";

function OrderbottomRow({ orderDetails }) {
  return (
    <div className="row order-bottom-row">
      <div className="col-md-8">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
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
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
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
              items: 1,
              partialVisibilityGutter: 30,
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
          {orderDetails?.orderline?.map((orderItem, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-md-4">
                  <div className="order-img">
                    <img
                      src={deviceImageRender(orderItem?.listing_image)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <h4>{orderItem?.product_name}</h4>
                  <h2>{orderItem?.amount}</h2>
                  <p className="return-reason">
                    <span>Reason:</span> Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="col-md-4 text-lg-end" >
        <h3 style={{ textDecoration: "none" }}>{orderDetails?.order_cancellation_text}</h3>
      </div>
    </div>
  );
}

export default OrderbottomRow;
