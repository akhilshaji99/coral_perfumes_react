
import { NavLink } from "react-router-dom";
import deviceImageRender from "../../../utils/deviceImageRender";
function RoundImageList({ blog }) {
  return (
    <section className="perfume-store">
      <div className="container-new">
        <div className="storage-rows">
          <div className="storage-care">
            <div className="storage-care-img">
              <img
                src={deviceImageRender(blog.image1)}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="storage-care-txt">
              <h3>{blog.title1}</h3>

              <div
                className="faq"
                dangerouslySetInnerHTML={{
                  __html: blog.content1,
                }}
              ></div>
                  <NavLink to={`/product-details/?slug=${blog?.slug}`}>
              Know more 
            </NavLink>
            </div>
          </div>
          <div className="shelf-life">
            <div className="storage-care-img">
              <img
                src={deviceImageRender(blog.image2)}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="storage-care-txt">
              <h3>{blog.title2}</h3>

              <div
                className="faq"
                dangerouslySetInnerHTML={{
                  __html: blog.content2,
                }}
              ></div>
                 <NavLink to={`/product-details/?slug=${blog?.slug}`}>
              Know more 
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default RoundImageList;
