import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import deviceImageRender from "../../../utils/deviceImageRender";
import { Link } from "react-router-dom";

function Brands({ componentDatas }) {
  const brands = componentDatas?.datas;
  const dynamicBackground = {
    backgroundColor: componentDatas?.bg_color,
  };
  return (
    <>
      <div className="container-lg-fluid my-5">
        <div className="card brands-card mb-5" style={dynamicBackground}>
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
            // partialVisbile
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
            {brands.map((brand, index) => {
              return (
                <div className="brand-img" key={index}>
                  <Link to={brand?.link}>
                    <img
                      src={deviceImageRender(
                        brand.desktop_image,
                        brand.mobile_image
                      )}
                      className="img-fluid"
                      alt={brand.image_alt}
                    />
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default Brands;
