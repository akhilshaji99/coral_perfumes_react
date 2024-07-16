import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import GiveawayProductSliderDatas from "./GiveawayProductSlider";

function GiveawayProductCarousel({ products, handleCloseBogoModal, setShowPrmoCodeFlag }) {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    initialSlide: 0.5,
    swipeToSlide: true, // Allow swipe to slide
    swipe: true, // Enable touch swipe
    touchThreshold: 10, // Adjust touch threshold for smoother scrolling
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768, // Tablet and mobile view
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-lg-fluid cc-margin">
        <div className="card flash-sale-container">
          <div className="desktop_slider">
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
              infinite={true}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={-10000}
              pauseOnHover={false}
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                // largescreen: {
                //   breakpoint: {
                //     max: 3000,
                //     min: 1480,
                //   },
                //   items: 5,
                //   partialVisibilityGutter: 40,
                // },
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 2,
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
              {products?.map((product) => {
                return <GiveawayProductSliderDatas product={product} handleCloseBogoModal={handleCloseBogoModal} setShowPrmoCodeFlag={setShowPrmoCodeFlag} />;
              })}
            </Carousel>
          </div>
          <div className="mob_tab_slider">
            <Slider {...settings} className="prod-carosal-mob-padding">
              {products?.map((product) => {
                return <GiveawayProductSliderDatas product={product} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
export default GiveawayProductCarousel;
