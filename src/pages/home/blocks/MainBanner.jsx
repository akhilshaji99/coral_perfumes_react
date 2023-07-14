import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainBanner() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: false,
  };

  return (
    <>
      <section className="mt-8">
        <div className="container">
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
                <img src="https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045_1280.png" />
              </div>
              <div>
                <img src="https://cdn.wpbeginner.com/wp-content/uploads/2019/04/bestwordpressslider.png" />
              </div>
              <div>
                <img src="https://smartslider3.com/wp-content/uploads/2019/05/sliderimages-780x410.png" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainBanner;
