import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OrderProgress from "./OrderProgress";
import OrderHeader from "./OrderHeader";
import ProductInfo from "./ProductInfo";

function OrderDatas({
  setModalData,
  setShowOrderCancelFlag,
  showOrderCancelFlag,
  modalType,
  setModalType,
  ongoingOrder,
  resetOrderProgress,
}) {
  return (
    <>
      <div className="orders-card">
        <OrderProgress
          order_current_status={ongoingOrder?.order_status}
          resetOrderProgress={resetOrderProgress}
        />
        <OrderHeader ongoingOrder={ongoingOrder} />
        <div className="row order-bottom-row">
          <div className="col-md-12 col-12">
            <Carousel
              additionalTransfrom={0}
              arrows={ongoingOrder?.orderline?.length > 1 ? true : false}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={true}
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
              {ongoingOrder?.orderline?.map((orderItem, index) => {
                return (
                  <div key={index}>
                    <ProductInfo
                      setModalData={setModalData}
                      showOrderCancelFlag={showOrderCancelFlag}
                      setShowOrderCancelFlag={setShowOrderCancelFlag}
                      modalType={modalType}
                      setModalType={setModalType}
                      orderItem={orderItem}
                      ongoingOrder={ongoingOrder}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderDatas;
