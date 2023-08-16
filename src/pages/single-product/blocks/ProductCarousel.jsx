import Slider from "react-slick";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import Arrow from "../../../../src/assets/img/icons/arrow.svg.svg";
import "slick-carousel/slick/slick-theme.css";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import deviceImgeRender from "../../../utils/deviceImageRender";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, }}
      onClick={onClick}
    >
      <img className="topArrow" src={Arrow} alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img className="bottomArrow" src={Arrow} alt="" />
    </div>
  );
}

function ProductCarousel({ sliderImages }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: sliderImages?.length || 0,
    slidesToScroll: 1,
    vertical: true,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "desktop-thumbs",
  };

  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    setActiveImage(sliderImages?.[0]);
  }, [sliderImages?.length || 0]);
  return (
    <>
      <div className="col-md-2">
        <div className="desktop-thumbs">
          <Slider {...settings}>
            {sliderImages?.map((sliderImage, index) => {
              return (
                <div className="thumbnail-slide" key={index}>
                  <img
                    style={{ cursor: "pointer" }}
                    src={deviceImgeRender(sliderImage)}
                    alt="Coral Perfumes"
                    onClick={() => {
                      setActiveImage(sliderImage);
                    }}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="col-md-5">
        <div className="product-showcase d-none d-sm-block">
          {activeImage ? (
            <InnerImageZoom src={deviceImgeRender(activeImage)} />
          ) : null}
          {/* <img src={Sample} alt="Coral Perfumes" /> */}
        </div>
        <div className="d-block d-sm-none">
          <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className="product-showcase"
            containerClass="container"
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
            <div className="">
              {/* {activeImage ? (
                <img
                  src={deviceImgeRender(activeImage)}
                  alt="Coral Perfumes"
                  style={{
                    display: "block",
                    height: "100%",
                    margin: "auto",
                    width: "100%",
                  }}
                />
              ) : null} */}
              {sliderImages?.map((sliderImage, index) => {
                return (
                  <div key={index}>
                    <img
                      src={deviceImgeRender(sliderImage)}
                      alt="Coral Perfumes"
                      style={{
                        display: "block",
                        height: "100%",
                        margin: "auto",
                        width: "100%",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default ProductCarousel;
