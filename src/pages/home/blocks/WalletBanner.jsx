import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function WalletBanner() {
  return (
    <>
      <div className="container-fluid cc-margin ">
        <div className="card wallet-banner mb-5">
          <div className="row align-items-center px-5">
            <div className="col-md-3">
              <h1>wallet</h1>
              <h5>friendly purchase</h5>
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
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="col-md-9">
              <Carousel
                additionalTransfrom={0}
                autoPlay={true}
                arrows={true}
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
                <div className="wallet-card">
                  <div className="">
                    <h3>under</h3>
                    <h2>100</h2>
                    <h3>aed</h3>
                  </div>
                </div>
                <div className="wallet-card">
                  <div className="">
                    <h3>under</h3>
                    <h2>90</h2>
                    <h3>aed</h3>
                  </div>
                </div>
                <div className="wallet-card">
                  <div className="">
                    <h3>under</h3>
                    <h2>80</h2>
                    <h3>aed</h3>
                  </div>
                </div>

                <div className="wallet-card">
                  <div className="">
                    <h3>under</h3>
                    <h2>70</h2>
                    <h3>aed</h3>
                  </div>
                </div>
                <div className="wallet-card">
                  <div className="">
                    <h3>under</h3>
                    <h2>60</h2>
                    <h3>aed</h3>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WalletBanner;
