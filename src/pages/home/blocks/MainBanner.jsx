import Banner1 from "../../../assets/img/slider/banner1.png";
import Banner2 from "../../../assets/img/slider/banner2.png";
import MobBanner from "../../../assets/img/slider/mob-banner.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalBtn from "../../../assets/img/pop-up-btn.svg";

function MainBanner() {
  return (
    <>
      <div className="container-fluid px-0 main-carousel d-xl-none ipad">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          draggable
          focusOnSelect={false}
          infinite
          partialVisible={false}
          itemClass=""
          pauseOnHover={false}
          keyBoardControl
          minimumTouchDrag={80}
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
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <img
            src={MobBanner}
            alt=""
            style={{
              display: "block",
              height: "100%",
              width: "100%",
            }}
          />
          <img
            src={MobBanner}
            alt=""
            style={{
              display: "block",
              height: "100%",
              width: "100%",
            }}
          />
        </Carousel>
      </div>
      <div className="container-fluid px-0 main-carousel d-none d-xl-block">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          draggable
          focusOnSelect={false}
          infinite
          partialVisible={false}
          itemClass=""
          pauseOnHover={false}
          keyBoardControl
          minimumTouchDrag={80}
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
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <img
            src={Banner1}
            alt=""
            style={{
              display: "block",
              height: "100%",
              width: "100%",
            }}
          />
          <img
            src={Banner2}
            alt=""
            style={{
              display: "block",
              height: "100%",
              width: "100%",
            }}
          />
        </Carousel>
      </div>

      <a
        href="#!"
        className="text-muted"
        data-bs-toggle="modal"
        data-bs-target="#userModal1"
      >
        <img className="ModalBtn" src={ModalBtn} alt="Coral Perfumes" />
      </a>
      {/* Modal */}
      <div
        className="modal fade"
        id="userModal1"
        tabIndex={-1}
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content discount-modal p-4">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <h4>
                upto{" "}
                <svg
                  width={65}
                  height={58}
                  viewBox="0 0 65 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.26989 36.1851L26.122 30.0264V53.1216C26.122 58.5104 29.6264 59.601 33.9011 55.5594L63.0537 27.9736C66.6352 24.6055 65.1333 21.8149 59.7033 21.8149L38.8512 27.9736V4.87844C38.8512 -0.510421 35.3467 -1.60102 31.072 2.44062L1.91946 30.0264C-1.62352 33.4266 -0.121607 36.1851 5.26989 36.1851Z"
                    fill="url(#paint0_linear_1319_12491)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1319_12491"
                      x1="21.0179"
                      y1="18.3069"
                      x2="56.7152"
                      y2="56.8976"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FAFF00" />
                      <stop offset={1} stopColor="#FF9900" />
                    </linearGradient>
                  </defs>
                </svg>
              </h4>
              <h1>
                10% <span>off</span>
              </h1>
              <h3 className="order-now">order now</h3>
              <div className="text-center">
                <button type="submit" className="btn btn-dark my-5 w-100">
                  Use code : UI1258GH
                </button>
              </div>
              <div className="modal-footer border-0 justify-content-center t-c">
                <a href="#">t & c Apply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainBanner;
