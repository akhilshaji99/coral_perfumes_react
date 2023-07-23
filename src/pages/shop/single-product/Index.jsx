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
  };
  return (
    <>
      <div className="conatiner px-5
      
      
      ">
        <div className="row mb-5 ">
          <div className="col-md-2">
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
          <div className="col-md-6">
            <div className="product-showcase">
              <img src={Sample} alt="Coral Perfumes" />
            </div>
          </div>
          <div className="col-md-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            sapiente pariatur necessitatibus doloribus. Consectetur ipsum est
            aspernatur reprehenderit natus, eligendi labore? Esse sequi nemo,
            maxime quam itaque obcaecati voluptas sint!
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
