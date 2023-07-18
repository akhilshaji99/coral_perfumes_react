import Chloe from "../../../assets/img/brands/chloe.png";
import Davidoff from "../../../assets/img/brands/davidoff.png";
import Ferrari from "../../../assets/img/brands/ferrari.png";
import Chanel from "../../../assets/img/brands/chanel.png";
import Casio from "../../../assets/img/brands/casio.png";
import Ck from "../../../assets/img/brands/ck.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Brands() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="card brands-card mb-5">
          <h1 className="mb-5">Shop by brands</h1>
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
                items: 6,
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
            <div className="brand-img">
              <img src={Chloe} className="img-fluid" alt="" />
            </div>
            <div className="brand-img">
              <img src={Davidoff} className="img-fluid" alt="" />
            </div>
            <div className="brand-img">
              <img src={Ferrari} className="img-fluid" alt="" />
            </div>
            <div className="brand-img">
              <img src={Chanel} className="img-fluid" alt="" />
            </div>
            <div className="brand-img">
              <img src={Casio} className="img-fluid" alt="" />
            </div>
            <div className="brand-img">
              <img src={Ck} className="img-fluid" alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default Brands;
