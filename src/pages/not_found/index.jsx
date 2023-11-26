import "../../assets/css/404.css";
import error_img1 from "../../assets/img/404/404-img.png";
import error_img2 from "../../assets/img/404/404-img1.png";
import error_img3 from "../../assets/img/404/error_img1.png";
import error_img4 from "../../assets/img/404/error_img2.png";
import error_img5 from "../../assets/img/404/error_img3.png";
import error_img6 from "../../assets/img/404/error_img4.png";
import error_img7 from "../../assets/img/404/error_img1.png";
import error_img8 from "../../assets/img/404/error_img2.png";
import Arrows_left1 from "../../assets/img/404/Arrows_left1.png";
import Arrows_left2 from "../../assets/img/404/Arrows_left2.png";
import BreadCrumps from "../common/BreadCrumps";
import Carousel from "react-multi-carousel";

function NotFound() {
  return (
    <div className="page-new">
      <BreadCrumps />
      <div className="container">
        <div className="row-40">
          <img src={error_img1} alt="erroe img" />
          <img src={error_img2} alt="erroe img" />
          <h1>
            Oops<span>! </span>{" "}
          </h1>
          <p>Looks like the product you are looking doesn’t exist.</p>
          <div className="strt-btns">
            <a href="#">Start Exploring</a>
          </div>
          <div className="error-text">
            {" "}
            <h2>Recommended categories</h2>
          </div>
          <div className="error-carousel owl-carousel owl-theme">
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
                  items: 1,
                  partialVisibilityGutter: 20,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 3,
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
              <div className="item not-found-slide">
                <img src={error_img3} alt="img" />
                <p>cosmetics</p>
              </div>
              <div className="item not-found-slide">
                {" "}
                <img src={error_img4} alt="img" />
                <p>Watches</p>
              </div>
              <div className="item not-found-slide">
                {" "}
                <img src={error_img5} alt="img" />
                <p>Bags</p>
              </div>
              <div className="item not-found-slide">
                {" "}
                <img src={error_img6} alt="img" />
                <p>Perfumes</p>
              </div>
              <div className="item not-found-slide">
                <img src={error_img7} alt="img" />
                <p>cosmetics</p>
              </div>
              <div className="item not-found-slide">
                {" "}
                <img src={error_img8} alt="img" />
                <p>Watches</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
