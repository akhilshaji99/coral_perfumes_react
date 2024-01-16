import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import WalletSliderDatas from "../sliderDatas/WalletSliderDatas";

function WalletBanner({ componentDatas }) {
  const dynamicBackground = {
    backgroundColor: componentDatas?.bg_color,
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    className: "slider variable-width",
    initialSlide: 0.5,
    responsive: [
      {
        breakpoint: 768, // Tablet and mobile view
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-lg-fluid cc-margin ">
        <div className="card wallet-banner" style={dynamicBackground}>
          <div className="row align-items-center p-3">
            <div className="col-md-3 d-none d-md-block">
              <h1>{componentDatas?.title}</h1>
              <h5>{componentDatas?.sub_title}</h5>
              <svg
                width="172"
                height="5"
                viewBox="0 0 172 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2.69653H170"
                  stroke="#F9F9F9"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="col-md-3 d-block d-sm-none">
              <h1>
                {componentDatas?.title} {componentDatas?.sub_title}
              </h1>
              <h5></h5>
            </div>
            <div className="col-md-9 px-0">
              <div className="desktop_slider">
                <Carousel
                  additionalTransfrom={0}
                  autoPlay={false}
                  arrows={true}
                  autoPlaySpeed={1000}
                  centerMode={false}
                  className=""
                  containerClass="container-with-dots"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite={true}
                  itemClass=""
                  partialVisbile
                  keyBoardControl
                  minimumTouchDrag={10}
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
                      items: 4,
                      partialVisibilityGutter: 0,
                    },
                    mobile: {
                      breakpoint: {
                        max: 464,
                        min: 0,
                      },
                      items: 3,
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
                  rewindWithAnimation={true}
                  rtl={false}
                  shouldResetAutoplay
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable={true}
                >
                  {componentDatas?.datas?.[0]?.collection?.map(
                    (walletData, index) => {
                      return (
                        <WalletSliderDatas
                          walletData={walletData}
                          index={index}
                        />
                      );
                    }
                  )}
                </Carousel>
              </div>
              <div className="mob_tab_slider">
                <Slider
                  {...settings}
                  className="wallet-friendly-mob-slider-padding"
                >
                  {componentDatas?.datas?.[0]?.collection?.map(
                    (walletData, index) => {
                      return (
                        <WalletSliderDatas
                          walletData={walletData}
                          index={index}
                        />
                      );
                    }
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WalletBanner;
