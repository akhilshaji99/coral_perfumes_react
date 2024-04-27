import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
import BreadCrumps from "../common/BreadCrumps";
import { useEffect, useState } from "react";
import request from "../../utils/request";

import deviceImageRender from "../../utils/deviceImageRender";

function Index() {
  const blog_slug = window.location.pathname.split("/")[2];

  const [breadCrumbDatas, setBreadCrumbDatas] = useState([]);

  const [blog, setBlog] = useState({});

  useEffect(() => {
    getBlogDetals();
  }, [window.location.href]);

  const getBlogDetals = async () => {
    try {
      //   var bodyFormData = new FormData();
      //   bodyFormData.append("token", getUserToken());
      //   dispatch(changeApiCallStatus(false)); // Change api call status
      const response = await request.get("api/blog/" + blog_slug + "/");
      if (response.data) {
        setBreadCrumbDatas(response?.data?.bread_crumb_data);
        setBlog(response.data.data);
        console.log("blogs", response.data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="page-new">
        <section className="sm-none">
          <BreadCrumps breadCrumbDatas={breadCrumbDatas} />

          <div className="container-new">
            <div className="blog-detail-page">
              <img
                src={deviceImageRender(blog.banner_image)}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </section>

        <section className="lg-none">
          <div className="blog-detail-page">
            <img
              src={deviceImageRender(blog.banner_image)}
              alt=""
              className="img-fluid"
            />
          </div>
        </section>

        <section>
          <div className="container-new">
            <div className="deatil-blog-content">
              <h1>{blog.title}</h1>
              <div
                className="faq"
                dangerouslySetInnerHTML={{
                  __html: blog.content,
                }}
              ></div>
            </div>
          </div>

          <div className="container-new">
            <div className="details-full-img">
              <img
                src={deviceImageRender(blog.image1)}
                alt=""
                className="img-fluid"
              />
              <div className="date-text">
                <p>{blog.blog_date}</p>
                <p>{blog.title1}</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-new">
            <div className="deatil-blog-content">
              <h2>{blog.title1}</h2>
              <div
                className="faq"
                dangerouslySetInnerHTML={{
                  __html: blog.content1,
                }}
              ></div>
            </div>
          </div>
          <div className="container-new">
            <div className="details-full-img">
              <img
                src={deviceImageRender(blog.image2)}
                alt=""
                className="img-fluid"
              />
              <div className="date-text">
                <p>{blog.blog_date}</p>
                <p>{blog.title2}</p>
              </div>
            </div>
            <div className="deatil-blog-contents">
              <h3>{blog.title2}</h3>
              <div
                className="faq"
                dangerouslySetInnerHTML={{
                  __html: blog.content2,
                }}
              ></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Index;
