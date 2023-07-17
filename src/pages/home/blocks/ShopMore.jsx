import Cosmetics from "../../../assets/img/shop-more/cosmetics.svg";
import SunGlass from "../../../assets/img/shop-more/sunglass.svg";
import Luggages from "../../../assets/img/shop-more/luggage.svg";
import Bagpacks from "../../../assets/img/shop-more/bagpacks.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ShopMore() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="card shop-more mb-5">
          <h1 className="mb-5">Shop more</h1>
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
                items: 4,
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
            <div className="">
              {" "}
              <div className="thumbnails">
                <img src={Luggages} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Luggages</h3>
                </div>
              </div>
            </div>
            <div className="">
              <div className="thumbnails">
                <img src={SunGlass} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Sunglass</h3>
                </div>
              </div>
            </div>
            <div className="">
              <div className="thumbnails">
                <img src={Cosmetics} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Cosmetics</h3>
                </div>
              </div>
            </div>
            <div className="">
              {" "}
              <div className="thumbnails">
                <img src={Bagpacks} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Bagpacks</h3>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default ShopMore;
