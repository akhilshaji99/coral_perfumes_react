import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../../assets/img/banner/banner1.png";

function MainBanner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: false,
    autoplaySpeed: 3000,
    rtl: false,
    arrows: true,
    
  };

  return (
    <>
      <section className="">
        <div className="container-fluid px-0">
          <div className="hero-slider ">
            {/* <Slider {...settings}>
              <div>
                <div
                  style={{
                    background:
                      "url(https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045_1280.png)no-repeat",
                    backgroundSize: "cover",
                    borderRadius: ".5rem",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                    <span className="badge text-bg-warning">
                      Opening Sale Discount 50%
                    </span>
                    <h2 className="text-dark display-5 fw-bold mt-4">
                      SuperMarket For Fresh Grocery{" "}
                    </h2>
                    <p className="lead">
                      Introduced a new model for online grocery shopping and
                      convenient home delivery.
                    </p>
                    <a href="#!" className="btn btn-dark mt-3">
                      Shop Now{" "}
                      <i className="feather-icon icon-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    background:
                      "url(https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045_1280.png)no-repeat",
                    backgroundSize: "cover",
                    borderRadius: ".5rem",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                    <span className="badge text-bg-warning">
                      Opening Sale Discount 50%
                    </span>
                    <h2 className="text-dark display-5 fw-bold mt-4">
                      SuperMarket For Fresh Grocery{" "}
                    </h2>
                    <p className="lead">
                      Introduced a new model for online grocery shopping and
                      convenient home delivery.
                    </p>
                    <a href="#!" className="btn btn-dark mt-3">
                      Shop Now{" "}
                      <i className="feather-icon icon-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
              </div>
            </Slider> */}
            <Slider {...settings}>
              <div>
                <img src={Banner1} />
              </div>
              <div>
                <img src={Banner1} />
              </div>
              <div>
                <img src={Banner1} />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainBanner;
