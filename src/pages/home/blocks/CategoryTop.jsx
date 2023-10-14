import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import deviceImageRender from "../../../utils/deviceImageRender";
import { NavLink } from "react-router-dom";

function CategoryTop({ componentDatas }) {
  const dynamicBackground = {
    backgroundColor: componentDatas?.bg_color,
  };
  return (
    <>
      <div className="container-lg-fluid cd-margin">
        <div className="category-top" style={dynamicBackground}>
          <h1 className="mb-5">{componentDatas?.title}</h1>
          <Carousel
            removeClippedSubviews={true}
            additionalTransfrom={0}
            autoPlay
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
            minimumTouchDrag={-10000}
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
            slidesToSlide={3}
            swipeable={true}
          >
            {componentDatas.datas?.map((category, index) => {
              return (
                <div className="category-top-img" key={index}>
                  <NavLink to={category?.link}>
                    <img
                      src={deviceImageRender(
                        category?.desktop_image,
                        category?.mobile_image
                      )}
                      alt={category?.image_alt}
                    />
                    <h3 className="text-dark py-3">{category?.title}</h3>
                  </NavLink>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default CategoryTop;
