import { NavLink } from "react-router-dom";

import deviceImageRender from "../../../utils/deviceImageRender";

function LeftSideImageContent({blog}) {
    return(
        <section>
          <div className="container-new">
            <div className="blog-rows">
              <div className="blog-col-2">
                <div className="blog-text-personality">
                <h3>{blog.title}</h3>

                <div
                className="faq"
                dangerouslySetInnerHTML={{
                  __html: blog.content,
                }}
              ></div>
                   <NavLink to={`/blog-details/?slug=${blog?.slug}`}>
              Know more 
            </NavLink>
              <span className="blog-date">{blog.blog_date}</span>
                </div>
              </div>
              <div className="blog-col-1">
                <div className="blog-img-personality">
                <img
              src={deviceImageRender(blog.banner_image)}
              alt=""
              className="img-fluid"
            />
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
export default LeftSideImageContent;
