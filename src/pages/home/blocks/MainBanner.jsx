import Banner1 from "../../../assets/img/slider/banner1.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MainBanner() {
  return (
    <>
      <section className="home-banner">
        <Carousel
          additionalTransfrom={0}
          arrows
          dots={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-fluid"
          dotListClass=""
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
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <img
            src={Banner1}
            style={{
              display: "block",
              height: "100%",
              width: "100%",
            }}
          />
          <img
            src={Banner1}
            style={{
              display: "block",
              height: "100%",
              width: "100%",
            }}
          />
        </Carousel>
      </section>
    </>
  );
}
export default MainBanner;
