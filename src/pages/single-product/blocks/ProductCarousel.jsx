import Sample from "../../../../src/assets/img/sample-product1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Arrow from "../../../../src/assets/img/icons/arrow.svg.svg";
import "slick-carousel/slick/slick-theme.css";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
  autoplay: false,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  className: "desktop-thumbs",
};

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

function ProductCarousel() {
  return (
    <>
      <div className="col-md-2">
        <div className="desktop-thumbs">
          <Slider {...settings}>
            <div className="thumbnail-slide">
              <img src={Sample} alt="Coral Perfumes" />
            </div>
            <div className="thumbnail-slide">
              <img src={Sample} alt="Coral Perfumes" />
            </div>{" "}
            <div className="thumbnail-slide">
              <img src={Sample} alt="Coral Perfumes" />
            </div>{" "}
            <div className="thumbnail-slide">
              <img src={Sample} alt="Coral Perfumes" />
            </div>{" "}
            <div className="thumbnail-slide">
              <img src={Sample} alt="Coral Perfumes" />
            </div>{" "}
            <div className="thumbnail-slide">
              <img src={Sample} alt="Coral Perfumes" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="col-md-6">
        <div className="product-showcase">
          <InnerImageZoom src={Sample} />

          {/* <img src={Sample} alt="Coral Perfumes" /> */}
        </div>
      </div>
    </>
  );
}
export default ProductCarousel;
