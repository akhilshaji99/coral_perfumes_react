import Banner1 from "../../../assets/img/slider/benner2.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MainBanner() {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-fluid"
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
          src={Banner1}
          alt=""
          style={{
            display: "block",
            height: "100%",
            width: "100%",
          }}
        />
      </Carousel>
    </>
  );
}
export default MainBanner;
