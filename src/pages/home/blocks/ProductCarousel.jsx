import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import ProductSliderDatas from "../sliderDatas/ProductSliderDatas";
import { useNavigate } from "react-router-dom";

function ProductCarousel({ componentDatas }) {
  console.log("product carousel:", componentDatas?.comp_id);
  const navigate = useNavigate();
  const dynamicBackground = {
    background: componentDatas?.bg_color,
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    initialSlide: 0.5,
    swipeToSlide: true, // Allow swipe to slide
    swipe: true, // Enable touch swipe
    touchThreshold: 10, // Adjust touch threshold for smoother scrolling
    responsive: [
      {
        breakpoint: 768, // Tablet and mobile view
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-lg-fluid cc-margin">
        <div className="card flash-sale-container " style={dynamicBackground}>
          <div className="row d-end">
            <div className="col-md-8 ">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="mb-5 flash-sale">{componentDatas?.title}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="desktop_slider">
            <Carousel
              additionalTransfrom={0}
              autoPlay={false}
              arrows
              autoPlaySpeed={3500}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={true}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={-10000}
              pauseOnHover={false}
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                // largescreen: {
                //   breakpoint: {
                //     max: 3000,
                //     min: 1480,
                //   },
                //   items: 5,
                //   partialVisibilityGutter: 40,
                // },
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 4,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },

                  items: 2.5,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {componentDatas?.datas?.[0]?.products?.map((product, index) => {
                return <ProductSliderDatas product={product} index={index} />;
              })}
            </Carousel>
            <div
              className="col-md-4 text-end"
              style={{ width: "auto", paddingRight: "12px" }}
            >
              <button
                type="button"
                className="btn btn-dark small-btn"
                onClick={() => navigate("products/" + componentDatas?.comp_id)}
              >
                View all
              </button>
            </div>
          </div>
          <div className="mob_tab_slider">
            <a
              href={"products/" + componentDatas?.comp_id}
              style={{
                color: "black",
                marginLeft: "22rem"
              }}
            >
              View all
            </a>
            <Slider {...settings} className="prod-carosal-mob-padding">
              {componentDatas?.datas?.[0]?.products?.map((product, index) => {
                return <ProductSliderDatas product={product} index={index} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCarousel;
