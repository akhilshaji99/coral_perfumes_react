
import { NavLink } from "react-router-dom";

import deviceImageRender from "../../../utils/deviceImageRender";

function RightSideImageContent({ blog }) {
  return (
    <section>
      <div className="container-new">
        <div className="blog-sub-text">
          {/* <h2>
                Lorem ipsum dolor <span>sit amet </span>
              </h2> */}
        </div>
        <div className="blog-rows">
          <div className="blog-col-1">
            {/* <img src={img01} alt="img" /> */}
            <img
              src={deviceImageRender(blog.banner_image)}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="blog-col-2">
            <div className="blog-content-sub">
              <h3>{blog.title}</h3>
               <div
                className="faq"
                dangerouslySetInnerHTML={{
                  __html: blog.content,
                }}
              ></div>
              {/* <a href="#"></a> */}
              <NavLink to={`/product-details/?slug=${blog?.slug}`}>
              Know more 
            </NavLink>
              <span className="blog-date">{blog.blog_date}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default RightSideImageContent;
