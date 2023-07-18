import Test from "../../../assets/img/test.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CategoryTop() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="card category-top mb-5">
          <h1 className="mb-5">Shop by Category</h1>
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
            <div className="category-top-img">
              {" "}
                <img src={Test} />
                  <h3 className="text-dark py-3">Niche Perfumes</h3>
            </div>
            <div className="category-top-img">
              {" "}
                <img src={Test} />
                  <h3 className="text-dark py-3">Niche Perfumes</h3>
            </div>
            <div className="category-top-img">
              {" "}
                <img src={Test} />
                  <h3 className="text-dark py-3">Niche Perfumes</h3>
            </div>
            <div className="category-top-img">
              {" "}
                <img src={Test} />
                  <h3 className="text-dark py-3">Niche Perfumes</h3>
            </div>
            <div className="category-top-img">
              {" "}
                <img src={Test} />
                  <h3 className="text-dark py-3">Niche Perfumes</h3>
            </div>
            <div className="category-top-img">
              {" "}
                <img src={Test} />
                  <h3 className="text-dark py-3">Niche Perfumes</h3>
            </div>
            <div className="category-top-img">
              {" "}
                <img src={Test} />
                  <h3 className="text-dark py-3">Niche Perfumes</h3>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default CategoryTop;
