import Slider from "react-slick";

function MainBanner() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: true,
  };

  return (
    <>
      <section className="mt-8">
        <div className="container">
          <div className="hero-slider ">
            <Slider {...settings}>
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
                <h3>
                  {" "}
                  <div
                    className=" "
                    style={{
                      background:
                        "url(assets/images/slider/slider-2.jpg)no-repeat",
                      backgroundSize: "cover",
                      borderRadius: ".5rem",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                      <span className="badge text-bg-warning">
                        Free Shipping - orders over $100
                      </span>
                      <h2 className="text-dark display-5 fw-bold mt-4">
                        Free Shipping on <br /> orders over{" "}
                        <span className="text-primary">$100</span>
                      </h2>
                      <p className="lead">
                        Free Shipping to First-Time Customers Only, After
                        promotions and discounts are applied.
                      </p>
                      <a href="#!" className="btn btn-dark mt-3">
                        Shop Now{" "}
                        <i className="feather-icon icon-arrow-right ms-1" />
                      </a>
                    </div>
                  </div>
                </h3>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainBanner;
