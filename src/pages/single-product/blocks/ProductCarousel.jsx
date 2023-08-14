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
        <div className="product-showcase">
          {activeImage ? (
            <InnerImageZoom src={deviceImgeRender(activeImage)} />
          ) : null}
          {/* <img src={Sample} alt="Coral Perfumes" /> */}
        </div>
      </div>
    </>
  );
}
export default ProductCarousel;
