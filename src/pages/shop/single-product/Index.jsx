import Sample from "../../../assets/img/sample-product1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Arrow from "../../../assets/img/icons/arrow.svg.svg";

import "slick-carousel/slick/slick-theme.css";
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

function Index() {
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
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "mob-thumbs",
  };
  return (
    <>
      <div className="conatiner px-5">
        <div className="row mb-5 ">
          <div className="col-md-2">
            <div className="mob-thumbs">
              <Slider {...settings2}>
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
              <img src={Sample} alt="Coral Perfumes" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="product-desc-section">
              <h1>Bvlgari Jasmin Noir Splendida Eau De Parfum 100 Ml</h1>
              <h2>nspired by Christian Dior Lavender</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
