import Slider from "react-slick";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import Arrow from "../../../../src/assets/img/icons/arrow.svg.svg";
import "slick-carousel/slick/slick-theme.css";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import deviceImgeRender from "../../../utils/deviceImageRender";
import { useState } from "react";

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
  const settings1 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    className: "product-showcase-mobile",
  };

  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    setActiveImage(sliderImages?.[0]);
  }, [sliderImages?.length || 0]);
  useEffect(() => {
    setActiveImage(sliderImages?.[0]);
  }, [sliderImages]);
  return (
    <>
      <div className="col-md-2 single-product-row">
        <div className="desktop-thumbs">
          <Slider {...settings} className="slick-product-carosal">
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
      <div className="col-md-5 ">
        <div className="product-showcase d-none d-sm-block">
          {activeImage ? (
            <InnerImageZoom src={deviceImgeRender(activeImage)} />
          ) : null}
        </div>
        <div className="d-block d-sm-none">
          <Slider {...settings1} >
            {sliderImages?.map((sliderImage, index) => {
              return (
                <img
                  key={index}
                  src={deviceImgeRender(sliderImage)}
                  alt="Coral Perfumes"
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default ProductCarousel;
