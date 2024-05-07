import "../../assets/css/404.css";
import error_img1 from "../../assets/img/404/404-img.png";
import error_img2 from "../../assets/img/404/404-img1.png";

import { Link } from "react-router-dom";
import BreadCrumps from "../common/BreadCrumps";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import request from "../../utils/request";
import deviceImageRender from "../../utils/deviceImageRender";

function NotFound() {
  const [pageData, setPageData] = useState({});
  const [text, setText] = useState("");
  const [categories , setCategories]  = useState([])
  const [breadCrumbDatas, setBreadCrumbDatas] = useState([]);

  useEffect(() => {
    get404PageContent();
  }, []);
  const get404PageContent = async () => {
    try {
      const response = await request.get("empty_page_categories");
      if (response.data) {
        console.log('res:', response);
        setPageData(response.data.data);
        setText(pageData["404_text"]);
        setCategories(response.data.data.categories)
        setBreadCrumbDatas(response.data.bread_crumb_data)
        console.log('categories',categories)
        console.log("setPageData", response.data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="page-new">
      <BreadCrumps breadCrumbDatas={breadCrumbDatas} />
      <div className="container">
        <div className="row-40">
          <img src={error_img1} alt="erroe img" />
          <img src={error_img2} alt="erroe img" />
          <h1>
            Oops<span>! </span>{" "}
          </h1>
          <p>{pageData?.text_data}</p>
          <div className="strt-btns">
            <Link to={"/"}>{pageData?.button_title}</Link>
          </div>
          <div className="error-text">
            {" "}
            <h2>{pageData?.category_title}</h2>
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
              {categories?.map((category, index) => {
                return (
                  <Link to={category?.link}>
                    <div className="item not-found-slide">
                      <img
                        src={deviceImageRender(category?.category_image)}
                        alt="img"
                      />

                      <p>{category?.name}</p>
                    </div>
                  </Link>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
