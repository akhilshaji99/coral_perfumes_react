import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
// Import your images
import img01 from "../../assets/custom/images/blog-img1.webp";
import img02 from "../../assets/custom/images/blog-img2.webp";
import img03 from "../../assets/custom/images/blog-img3.png";
import img04 from "../../assets/custom/images/blog-img4.png";
import img05 from "../../assets/custom/images/blog-img5.png";
import img06 from "../../assets/custom/images/blog-img6.png";
import img07 from "../../assets/custom/images/blog-img7.png";
import img08 from "../../assets/custom/images/blog-img8.png";
import img09 from "../../assets/custom/images/blog-img9.png";
import BreadCrumps from "../common/BreadCrumps";

function Index() {
  return (
    <>
      <div className="page-new">
        <section classNameName="sm-none">
          <BreadCrumps />
          <div className="container-new">
            <div className="title-page">
              <h1>Insights </h1>
            </div>
            <div className="bg-blog-banner">
              <div className="blog-content">
                <h2>
                  Lorem ipsum dolor <span>sit amet, </span>
                </h2>
                <a href="#">read story</a>
              </div>
            </div>
          </div>
        </section>

        <section className="lg-none">
          <div className="container-new">
            <div className="title-page">
              <h1>Insights </h1>
            </div>
          </div>
          <div className="bg-blog-banner">
            <div className="blog-content">
              <h2>
                Lorem ipsum dolor <span>sit amet, </span>
              </h2>
              <a href="#">read story</a>
            </div>
          </div>
        </section>
        <section>
          <div className="container-new">
            <div className="blog-sub-text">
              <h2>
                Lorem ipsum dolor <span>sit amet </span>
              </h2>
            </div>
            <div className="blog-rows">
              <div className="blog-col-1">
                <img src={img01} alt="img" />
              </div>
              <div className="blog-col-2">
                <div className="blog-content-sub">
                  <h3>Lorem ipsum dolor sit amet, </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem
                  </p>
                  <a href="#">Know more </a>
                  <span className="blog-date">August 2, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="perfume-store">
          <div className="container-new">
            <div className="storage-rows">
              <div className="storage-care">
                <div className="storage-care-img">
                  <img src={img03} alt="img" />
                </div>
                <div className="storage-care-txt">
                  <h3>Perfume Storage and Care</h3>
                  <p>
                    Proper perfume storage and care are essential to ensure your
                    fragrances maintain their quality, scent, and longevity.
                    Perfumes are sensitive to factors like light, temperature,
                    and air exposure
                  </p>
                  <a href="#">Know more </a>
                </div>
              </div>
              <div className="shelf-life">
                <div className="storage-care-img">
                  <img src={img04} alt="img" />
                </div>
                <div className="storage-care-txt">
                  <h3>Know the Shelf Life</h3>
                  <p>
                    Perfumes have a shelf life, typically several years. Check
                    the label or packaging for information on when the perfume
                    is expected to expire.
                  </p>
                  <a href="#">Know more </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-new">
            <div className="blog-rows">
              <div className="blog-col-2 order-2">
                <div className="blog-text-personality">
                  <h3>Lorem ipsum dolor sit amet, </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem
                  </p>
                  <a href="#">Know more </a>
                  <span className="blog-date">August 2, 2023</span>
                </div>
              </div>
              <div className="blog-col-1 order-1">
                <div className="blog-img-personality">
                  <img src={img02} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="perfume-store">
          <div className="container-new">
            <div className="storage-rows">
              <div className="storage-care">
                <div className="storage-care-img">
                  <img src={img05} alt="img" />
                </div>
                <div className="storage-care-txt">
                  <h3>Gourmand Fragrances</h3>
                  <p>
                    Gourmand fragrances are a delightful and aromatic category
                    of perfumes that evoke the enticing scents of sweet and
                    edible treats. These fragrances often incorporate notes
                    inspired by delectable desserts, confections..etc
                  </p>
                  <a href="#">Know more </a>
                </div>
              </div>
              <div className="shelf-life">
                <div className="storage-care-img">
                  <img src={img06} alt="img" />
                </div>
                <div className="storage-care-txt">
                  <h3>Floral Fragrance </h3>
                  <p>
                    Floral fragrances are a classNameic and popular category of
                    perfumes known for their fresh, elegant, and feminine
                    qualities. These scents are inspired by the delicate and
                    alluring aroma of various flowers.
                  </p>
                  <a href="#">Know more </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="perfume-row">
          <div className="container-new">
            <div className="blog-rows">
              <div className="blog-col-2 order-2">
                <div className="blog-text-personality">
                  <h3>Lorem ipsum dolor sit amet, </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem
                  </p>
                  <a href="#">Know more </a>
                  <span className="blog-date">August 2, 2023</span>
                </div>
              </div>
              <div className="blog-col-1 order-1">
                <div className="blog-img-personality">
                  <img src={img07} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-new">
            <div className="blog-rows">
              <div className="blog-col-1">
                <img src={img08} alt="img" width="100%" />
              </div>
              <div className="blog-col-2">
                <div className="blog-content-sub">
                  <h3>Lorem ipsum dolor sit amet, </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem
                  </p>
                  <a href="#">Know more </a>
                  <span className="blog-date">August 2, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="perfume-row-3">
          <div className="container-new">
            <div className="blog-rows">
              <div className="blog-col-2 order-2">
                <div className="blog-text-personality">
                  <h3>Lorem ipsum dolor sit amet, </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem
                  </p>
                  <a href="#">Know more </a>
                  <span className="blog-date">August 2, 2023</span>
                </div>
              </div>
              <div className="blog-col-1 order-1">
                <div className="blog-img-personality">
                  {/* <img src="images/blog-img9.png" alt="img" width="100%" alt="img"> */}
                  <img src={img09} alt="img" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Index;
