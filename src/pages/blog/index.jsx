import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
import BreadCrumps from "../common/BreadCrumps";
import { useEffect, useState } from "react";
import request from "../../utils/request";

import RightSideImageContent from "./blocks/RightSideImageContent";
import LeftSideImageContent from "./blocks/LeftSideImageContent";
import RoundImageList from "./blocks/RoundImageList";

function Index() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogList();
  }, []);
  const getBlogList = async () => {
    try {
      //   var bodyFormData = new FormData();
      //   bodyFormData.append("token", getUserToken());
      //   dispatch(changeApiCallStatus(false)); // Change api call status
      const response = await request.get("api/blogs/");
      if (response.data) {
        setBlogs(response.data.data);
        console.log("blogs", response.data.data);
        // setBanners(response.data.banners);
        // setFooterbanner(response.data.footer_banner);
        // setJobcategories(response.data.job_categories);
        // console.log("banners", jobcategories);
        // setHomeContent(response.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="page-new">
        <section className="sm-none">
          <BreadCrumps />
          <div className="container-new">
            <div className="title-page">
              <h1>Insights </h1>
            </div>
            <div className="bg-blog-banner">
              <div className="blog-content">
                <img src="" alt="" />
                {/* <h2>
                  Lorem ipsum dolor <span>sit amet, </span>
                </h2> */}
                {/* <a href="#">read story</a> */}
              </div>
            </div>
          </div>
        </section>

        {blogs?.map((blog, index) => {
         return  index % 2 === 0 ? (
          <><RightSideImageContent key={index} blog={blog}/></>
        ) : (
          <><LeftSideImageContent key={index} blog={blog} /></>
        );
        })}
      </div>
    </>
  );
}
export default Index;
