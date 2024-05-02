import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import ShopMoreSliderDatas from "../sliderDatas/ShopMoreSliderDatas";

function ShopMore({ componentDatas }) {
  const shopMoreItems = componentDatas?.datas;
  const dynamicBackground = {
    background: componentDatas?.bg_color,
  };

  var settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    autoplay: false, // Enable auto-play
    autoplaySpeed: 3500,
    swipeToSlide: true, // Allow swipe to slide
    swipe: true, // Enable touch swipe
    touchThreshold: 10, // Adjust touch threshold for smoother scrolling
    responsive: [
      {
        breakpoint: 768, // Tablet and mobile view
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-lg-fluid cc-margin">
        <div className="card shop-more" style={dynamicBackground}>
          <h1 className="mb-5">{componentDatas?.title}</h1>
          <div className="desktop_slider">
            <Carousel
              additionalTransfrom={0}
              autoPlay
              arrows={false}
              autoPlaySpeed={3500}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={true}
              itemClass=""
              partialVisbile
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 4,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 3,
                  partialVisibilityGutter: 15,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 4,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={2}
              swipeable
            >
              {shopMoreItems.map((item, index) => {
                return <ShopMoreSliderDatas item={item} index={index} />;
              })}
            </Carousel>
          </div>
          <div className="mob_tab_slider">
            <Slider {...settings} className="mob-slick-slider-padding">
              {shopMoreItems.map((item, index) => {
                return <ShopMoreSliderDatas item={item} index={index} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
export default ShopMore;
