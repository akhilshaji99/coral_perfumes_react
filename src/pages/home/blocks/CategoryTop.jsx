import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import CategoryTopSliderDatas from "../sliderDatas/CategoryTopSliderDatas";

function CategoryTop({ componentDatas }) {
  const dynamicBackground = {
    backgroundColor: componentDatas?.bg_color,
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    initialSlide: 0.5,
    responsive: [
      {
        breakpoint: 768, // Tablet and mobile view
        settings: {
          slidesToShow: 3.5,
          // slidesToScroll: 3.5,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-lg-fluid cd-margin">
        <div className="category-top" style={dynamicBackground}>
          <h1 className="mb-5">{componentDatas?.title}</h1>
          <div className="desktop_slider">
            <Carousel
              removeClippedSubviews={true}
              additionalTransfrom={0}
              autoPlay={true}
              arrows={false}
              autoPlaySpeed={3500}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable={true}
              focusOnSelect={false}
              infinite={true}
              itemClass=""
              partialVisible
              keyBoardControl
              // minimumTouchDrag={-10000}
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
                  items: 6,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 3,
                  partialVisibilityGutter: 20,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 4,
                  partialVisibilityGutter: 10,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={6}
              swipeable={true}
            >
              {componentDatas.datas?.map((category, index) => {
                return (
                  <CategoryTopSliderDatas category={category} index={index} />
                );
              })}
            </Carousel>
          </div>
          <div className="mob_tab_slider">
            <Slider {...settings}>
              {componentDatas.datas?.map((category, index) => {
                return (
                  <CategoryTopSliderDatas category={category} index={index} />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoryTop;
