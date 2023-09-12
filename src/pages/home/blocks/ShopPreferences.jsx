import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import deviceImageRender from "../../../utils/deviceImageRender";
import { NavLink } from "react-router-dom";

function ShopPreferences({ componentDatas }) {
  const preferences = componentDatas?.datas;
  const dynamicBackground = {
    backgroundColor: componentDatas?.bg_color,
  };
  return (
    <>
      <div className="container-lg-fluid cc-margin">
        <div className="card shop-preferences" style={dynamicBackground}>
          <h1 className="mb-5">{componentDatas?.title}</h1>
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
            infinite
            itemClass=""
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
                items: 5,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 4,
                partialVisibilityGutter: 10,
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
            {preferences.map((preference, index) => {
              return (
                <div key={index}>
                  <NavLink to={preference?.link}>
                    <div className="thumbnails">
                      <img
                        src={deviceImageRender(
                          preference.desktop_image,
                          preference.mobile_image
                        )}
                        alt={preference.image_alt}
                      />
                      <div className="black"></div>
                      <div className="title">
                        <h3 className="text-white shop-p-head">
                          {preference.title}
                        </h3>
                      </div>
                    </div>
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
export default ShopPreferences;
