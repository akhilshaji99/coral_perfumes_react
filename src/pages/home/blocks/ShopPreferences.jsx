import Women from "../../../assets/img/shop-pref/women.jpg";
import Men from "../../../assets/img/shop-pref/men.jpg";
import Unisex from "../../../assets/img/shop-pref/unisex.jpg";
import Edp from "../../../assets/img/shop-pref/edp.jpg";
import Edt from "../../../assets/img/shop-pref/edt.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ShopPreferences() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="card shop-preferences mb-5">
          <h1 className="mb-5">Shop preferences</h1>
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
                items: 2,
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
            slidesToSlide={2}
            swipeable
          >
            <div>
              <div className="thumbnails">
                <img src={Women} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Women</h3>
                </div>
              </div>
            </div>
            <div>
            <div className="thumbnails">
                <img src={Men} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Men</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="thumbnails">
                <img src={Unisex} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Unisex</h3>
                </div>
              </div>
            </div>

            <div>
              <div className="thumbnails">
                <img src={Edp} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">edp</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="thumbnails">
                <img src={Edt} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">edt</h3>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default ShopPreferences;
