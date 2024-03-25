import { useEffect, useState } from "react";
import img1 from "../../assets/img/prvt/private-manufacturing.png";
import img2 from "../../assets/img/prvt/it-work.png";
import img3 from "../../assets/img/prvt/best-quality-img.png";
import img4 from "../../assets/img/prvt/benefits-img2.png";
import img5 from "../../assets/img/prvt/benefits-img3.png";
import img6 from "../../assets/img/prvt/best-quality-img4.png";
import img7 from "../../assets/img/prvt/best-quality-img4.png";
import img8 from "../../assets/img/prvt/best-quality-img5.png";
import img9 from "../../assets/img/prvt/best-quality-img5.png";
import video_url from "../../assets/img/prvt/Perfume_video.mp4";
import video_poster from "../../assets/img/prvt/cake.png";
import "../../assets/css/prvt_label.css";
import BreadCrumps from "../common/BreadCrumps";
import ContactForm from "../contact/ContactForm";
import deviceImageRender from "../../utils/deviceImageRender";
import request from "../../utils/request";

function Index() {
  const [accordianIndex, setAccordianIndex] = useState("");
  const [responseDatas, setResponseDatas] = useState(null);
  const [breadCrumbDatas, setBreadCrumbDatas] = useState([]);

  useEffect(() => {
    getPrivateLabelDetails();
  }, []);

  const getPrivateLabelDetails = async () => {
    try {
      const response = await request.get("api/get-private-label/");
      if (response.data) {
        setBreadCrumbDatas(response?.data?.data?.bread_crumb_data);
        setResponseDatas(response.data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <BreadCrumps breadCrumbDatas={breadCrumbDatas} />
      <div className="private-page">
        <div className="container-new pb-10">
          <div className="row mian-pg">
            <div className="col-md-6 order-2 ">
              <div className="private-tittle">
                <h1>{responseDatas?.private_label?.page_title}</h1>{" "}
              </div>
              <div className="enquirys-btn sm-none">
                <a href="#quick_enq" className="btn btn-dark w-50  mt-2 mb-2">
                  Quick Enquiry
                </a>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: responseDatas?.private_label?.content1,
                }}
              ></div>
              <div className="enquirys-btn lg-none">
                <a href="#" className="btn btn-dark w-50  mt-2 mb-2">
                  Start Exploring
                </a>
              </div>
            </div>
            <div className="col-md-6 txt-end order-1 ">
              <img
                src={deviceImageRender(responseDatas?.private_label?.image1)}
                alt="private-img"
                className="private-imgs"
              />
            </div>
          </div>
        </div>
        {/*-Faq-*/}
        <div className="it-work">
          <div className="container-new">
            <div className="row">
              <div className="col-md-6">
                <div className="develo-scent">
                  <h2>{responseDatas?.private_label?.heading2}</h2>
                  <div className="pt-5 txt-end lg-none">
                    <img
                      src={deviceImageRender(
                        responseDatas?.private_label?.image2
                      )}
                      alt="it-work"
                      className="work-it-img"
                    />
                  </div>
                  <div className="accordion-scent">
                    <div className="accordion-item-scent">
                      <button
                        id="accordion-scent-1"
                        onClick={() => {
                          setAccordianIndex(accordianIndex === 1 ? "" : 1);
                        }}
                        aria-expanded={accordianIndex === 1 ? true : false}
                      >
                        <span className="accordion-title">
                          {responseDatas?.private_label?.title1}
                        </span>
                        <span className="icon" aria-hidden="true" />
                      </button>
                      <div className="accordion-content-scent">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: responseDatas?.private_label?.content2,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="accordion-item-scent">
                      <button
                        id="accordion-scent-2"
                        onClick={() => {
                          setAccordianIndex(accordianIndex === 2 ? "" : 2);
                        }}
                        aria-expanded={accordianIndex === 2 ? true : false}
                      >
                        <span className="accordion-title">
                          {responseDatas?.private_label?.title2}
                        </span>
                        <span className="icon" aria-hidden="true" />
                      </button>
                      <div className="accordion-content-scent">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: responseDatas?.private_label?.content3,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="accordion-item-scent">
                      <button
                        id="accordion-scent-3"
                        onClick={() => {
                          setAccordianIndex(accordianIndex === 3 ? "" : 3);
                        }}
                        aria-expanded={accordianIndex === 3 ? true : false}
                      >
                        <span className="accordion-title">
                          {responseDatas?.private_label?.title3}
                        </span>
                        <span className="icon" aria-hidden="true" />
                      </button>
                      <div className="accordion-content-scent">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: responseDatas?.private_label?.content4,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="accordion-item-scent">
                      <button
                        id="accordion-scent-4"
                        onClick={() => {
                          setAccordianIndex(accordianIndex === 4 ? "" : 4);
                        }}
                        aria-expanded={accordianIndex === 4 ? true : false}
                      >
                        <span className="accordion-title">
                          {responseDatas?.private_label?.title4}
                        </span>
                        <span className="icon" aria-hidden="true" />
                      </button>
                      <div className="accordion-content-scent">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: responseDatas?.private_label?.content5,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 txt-end sm-none">
                <img
                  src={deviceImageRender(responseDatas?.private_label?.image2)}
                  alt="it-work"
                  className="work-it-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/*-vedio--*/}
        <div className="container-new">
          <div className="video-wrapper">
            <video
              playsInline=""
              autoPlay="true"
              muted="true"
              loop=""
              poster={responseDatas?.private_label?.image3}
            >
              <source src={video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/*-Benefits-*/}
        <section className="ben-sect">
          <div className="benefit-tittle">
            <h3>{responseDatas?.private_label?.heading3}</h3>
          </div>
          <div className="container-fluid btr">
            <div className="row">
              <div className="col-12 col-md-4 btr-right bdr-sm">
                <div className="quality-text">
                  <div className="quality-imgs">
                    <img src={img3} alt="best-quality" />
                  </div>
                  <div>
                    {" "}
                    <h4>{responseDatas?.private_label?.card_title1}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: responseDatas?.private_label?.card_content1,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-12  col-md-4 btr-right">
                <div className="quality-text">
                  <div className="quality-imgs">
                    <img src={img4} alt="best-quality" />
                  </div>
                  <div>
                    <h4>{responseDatas?.private_label?.card_title2}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: responseDatas?.private_label?.card_content2,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-12  col-md-4 bdr-top bdr-sm">
                <div className="quality-text">
                  <div className="quality-imgs">
                    {" "}
                    <img src={img5} alt="best-quality" />
                  </div>
                  <div>
                    <h4>{responseDatas?.private_label?.card_title3}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: responseDatas?.private_label?.card_content3,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* <div className="col-6 col-md-4 btr-right lg-nones bdr-top">
                <div className="quality-text">
                  <img src={img6} alt="best-quality" />
                  <h4>{responseDatas?.private_label?.card_title4}00</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: responseDatas?.private_label?.card_content4,
                    }}
                  ></div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-4 btr-right bdr-sm">
                <div className="quality-text">
                  <div className="quality-imgs">
                    {" "}
                    <img src={img7} alt="best-quality" />
                  </div>
                  <div>
                    <h4>{responseDatas?.private_label?.card_title4}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: responseDatas?.private_label?.card_content4,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-12  col-md-4 btr-right bdr-sm">
                <div className="quality-text">
                  <div className="quality-imgs">
                    <img src={img8} alt="best-quality" />
                  </div>
                  <div>
                    <h4>{responseDatas?.private_label?.card_title5}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: responseDatas?.private_label?.card_content5,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 ">
                <div className="quality-text">
                  <div className="quality-imgs">
                    {" "}
                    <img src={img9} alt="best-quality" />
                  </div>
                  <div>
                    <h4>{responseDatas?.private_label?.card_title6}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: responseDatas?.private_label?.card_content6,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pro-dot">
          <div className="container pt-10 ">
            <div className="row ">
              <ul>
                <li id="first" className="active">
                  <div className="row">
                    <div className="col-12 col-md-6 pro-dot-title">
                      <h2>{responseDatas?.private_label?.workflow_heading1}</h2>
                    </div>
                    <div className="col-12 col-md-6 pro-dot-content">
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            responseDatas?.private_label?.workflow_content1,
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
                <li id="second">
                  <div className="row">
                    <div className="col-12 col-md-6 pro-dot-title">
                      <h2>
                        {responseDatas?.private_label?.workflow_heading2}{" "}
                      </h2>
                    </div>
                    <div className="col-12 col-md-6 pro-dot-content">
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            responseDatas?.private_label?.workflow_content2,
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
                <li id="third">
                  <div className="row">
                    <div className="col-12 col-md-6 pro-dot-title">
                      <h2>
                        {responseDatas?.private_label?.workflow_heading3}{" "}
                      </h2>
                    </div>
                    <div className="col-12 col-md-6 pro-dot-content">
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            responseDatas?.private_label?.workflow_content3,
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
                <li id="fourth">
                  <div className="row">
                    <div className="col-12 col-md-6 pro-dot-title">
                      <h2>
                        {responseDatas?.private_label?.workflow_heading4}{" "}
                      </h2>
                    </div>
                    <div className="col-12 col-md-6 pro-dot-content">
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            responseDatas?.private_label?.workflow_content4,
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/*-Let’s Connect*/}
      <ContactForm section_status={"hide"} />
    </>
  );
}
export default Index;
