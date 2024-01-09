import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import deviceImageRender from "../../utils/deviceImageRender";

import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
// Import your images
import img01 from "../../assets/custom/images/about-img01.webp";
import img02 from "../../assets/custom/images/about-img02.webp";
import img03 from "../../assets/custom/images/about-img03.webp";
import img04 from "../../assets/custom/images/about-img04.webp";
import img05 from "../../assets/custom/images/about-img05.webp";
import img06 from "../../assets/custom/images/about-img06.webp";
import img08 from "../../assets/custom/images/about-img08.webp";
import img09 from "../../assets/custom/images/about-img09.webp";
import BreadCrumps from "../common/BreadCrumps";
import request from "../../utils/request";

function Index() {
  const [aboutDatas, setAboutDatas] = useState(null);

  useEffect(() => {
    getAboutDetails();
  }, []);

  const getAboutDetails = async () => {
    try {
      const response = await request.get("about");
      if (response.data) {
        setAboutDatas(response?.data?.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="page-new">
        <BreadCrumps />
        <section>
          <div className="container-new">
            <div className="title-page">
              <h1>{aboutDatas?.title1}</h1>
            </div>
            <div className="info-text">
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutDatas?.content1,
                }}
              ></p>
            </div>
            <div className="image-list-one">
              {aboutDatas?.image1 ? (
                <img src={deviceImageRender(aboutDatas?.image1)} alt="img" />
              ) : null}
            </div>
          </div>
        </section>
        <section className="abut-section">
          <div className="container-new">
            <div className="sub-abt">
              <h2>{aboutDatas?.title2}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutDatas?.content2,
                }}
              ></p>
            </div>

            <div className="gallery">
              <div className="left-gallery-one">
                {aboutDatas?.image2 ? (
                  <img src={deviceImageRender(aboutDatas?.image2)} alt="img" />
                ) : null}
              </div>
              <div className="right-gallery-one">
                {aboutDatas?.image3 ? (
                  <img src={deviceImageRender(aboutDatas?.image3)} alt="img" />
                ) : null}
                {aboutDatas?.image4 ? (
                  <img src={deviceImageRender(aboutDatas?.image4)} alt="img" />
                ) : null}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-new">
            <div className="sub-abt">
              <h2>{aboutDatas?.title3}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutDatas?.content3,
                }}
              ></p>
            </div>
            <div className="gallery-flex">
              <ul>
                <li>
                  {aboutDatas?.image5 ? (
                    <img
                      src={deviceImageRender(aboutDatas?.image5)}
                      alt="img"
                    />
                  ) : null}
                </li>
                <li>
                  {aboutDatas?.image6 ? (
                    <img
                      src={deviceImageRender(aboutDatas?.image6)}
                      alt="img"
                    />
                  ) : null}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="container-new">
            <div className="sub-abt pg-top">
              <h2>{aboutDatas?.title4}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutDatas?.content4,
                }}
              ></p>
            </div>
            <div className="gallery-flex">
              <ul>
                <li>
                  {aboutDatas?.image7 ? (
                    <img
                      src={deviceImageRender(aboutDatas?.image7)}
                      alt="img"
                    />
                  ) : null}
                </li>
                <li>
                  {aboutDatas?.image8 ? (
                    <img
                      src={deviceImageRender(aboutDatas?.image8)}
                      alt="img"
                    />
                  ) : null}
                </li>
              </ul>
            </div>
            <div className="start-explor">
              {/* <a href="#">start exploring</a> */}
              <NavLink to="/">
                <a>{aboutDatas?.button_text}</a>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Index;
