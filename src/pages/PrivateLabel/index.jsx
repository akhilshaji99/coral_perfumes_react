import { useState } from "react";
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

function Index() {
  const [accordianIndex, setAccordianIndex] = useState("");
  return (
    <>
      <BreadCrumps />
      <div className="private-page">
        <div className="container pb-10">
          <div className="row mian-pg">
            <div className="col-md-6 order-2 ">
              <div className="private-tittle">
                <h1>PRIVATE LABEL PERFUME MANUFACTURING</h1>{" "}
              </div>
              <div className="enquirys-btn sm-none">
                <a href="#" className="btn btn-dark w-50  mt-2 mb-2">
                  Quick Enquiry
                </a>
              </div>
              <p>
                As the premier perfume manufacturer in the UAE, our
                state-of-the-art facility in Dubai enables us to provide
                unparalleled services. Renowned for our exceptional expertise,
                we proudly stand out as the industry’s best. With our
                state-of-the-art facilities in Dubai, equipped with advanced
                equipment, we have positioned ourselves as leading private label
                perfume manufacturers in the region.{" "}
              </p>
              <p>
                With an unwavering dedication to international standards, we
                craft exceptional products for our valued clients. At our
                perfume factory, we combine precision techniques and an
                extensive infrastructure to create bespoke fragrances that cater
                to your specific needs. As the preferred choice for private
                label perfume manufacturing in Dubai, we guarantee exceptional
                quality and craftsmanship. Driven by our passion for excellence,
                we maintain affordability without compromising on quality. We
                strive to build enduring partnerships through industry-leading
                service propositions. Put your trust in us, the best perfume
                manufacturer in the UAE, and witness exceptional results.
                Contact us now to discover our unmatched expertise and elevate
                your brand with our top-notch services
              </p>
              <div className="enquirys-btn lg-none">
                <a href="#" className="btn btn-dark w-50  mt-2 mb-2">
                  Start Exploring
                </a>
              </div>
            </div>
            <div className="col-md-6 txt-end order-1 ">
              <img src={img1} alt="private-img" className="private-imgs" />
            </div>
          </div>
        </div>
        {/*-Faq-*/}
        <div className="it-work">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="develo-scent">
                  <h2>How It Works</h2>
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
                          DEVELOPMENT SCENT
                        </span>
                        <span className="icon" aria-hidden="true" />
                      </button>
                      <div className="accordion-content-scent">
                        <p>
                          As per the requirements and sensibilities of the
                          clients, our manufacturing experts will create scents
                          just the way you would love to have them. In order to
                          help our clients create the best scents, we will also
                          act as a consult on the latest trends.
                        </p>
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
                        <span className="accordion-title">Choose Bottle</span>
                        <span className="icon" aria-hidden="true" />
                      </button>
                      <div className="accordion-content-scent">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Elementum sagittis vitae et leo
                          duis ut. Ut tortor pretium viverra suspendisse
                          potenti.
                        </p>
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
                          Design Packaging
                        </span>
                        <span className="icon" aria-hidden="true" />
                      </button>
                      <div className="accordion-content-scent">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Elementum sagittis vitae et leo
                          duis ut. Ut tortor pretium viverra suspendisse
                          potenti.
                        </p>
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
                        <span className="accordion-title">Promotion</span>
                        <span className="icon" aria-hidden="true" />
                      </button>
                      <div className="accordion-content-scent">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Elementum sagittis vitae et leo
                          duis ut. Ut tortor pretium viverra suspendisse
                          potenti.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 txt-end">
                <img src={img2} alt="it-work" className="work-it-img" />
              </div>
            </div>
          </div>
        </div>
        {/*-vedio--*/}
        <div className="container">
          <div className="video-wrapper">
            <video
              playsInline=""
              autoPlay="true"
              muted="true"
              loop=""
              poster={video_poster}
            >
              <source src={video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/*-Benefits-*/}
        <section className="ben-sect">
          <div className="benefit-tittle">
            <h3>Benefits</h3>
          </div>
          <div className="container-fluid btr">
            <div className="row">
              <div className="col-6 col-md-4 btr-right bdr-sm">
                <div className="quality-text">
                  <img src={img3} alt="best-quality" />
                  <h4>Best Quality</h4>
                  <p>
                    We ceaselessly strive to blend exceptional levels of quality
                    for the fragrances we make. With the keen eyes to select the
                    best raw material and approved process, quality is
                    considered prime.
                  </p>
                </div>
              </div>
              <div className="col-6  col-md-4 btr-right">
                <div className="quality-text">
                  <img src={img4} alt="best-quality" />
                  <h4>INDIVIDUAL SERVICE</h4>
                  <p>
                    Being a client-centric service provider, we are always eager
                    to attend to your personalized, unique and ever-evolving
                    needs of the clients and this makes us one of the best in
                    the business.
                  </p>
                </div>
              </div>
              <div className="col-6  col-md-4 bdr-top bdr-sm">
                <div className="quality-text">
                  <img src={img5} alt="best-quality" />
                  <h4>CUSTOMIZABLE PRODUCTION CAPACITY</h4>
                  <p>
                    We are fortified to customize our production capacity as per
                    the dynamic requirements of the clients. With excellent
                    manufacturing units and processes, no client requirement is
                    too demanding for us.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-4 btr-right lg-nones bdr-top">
                <div className="quality-text">
                  <img src={img6} alt="best-quality" />
                  <h4>CUSTOM MADE SOLUTIONS</h4>
                  <p>
                    All the scents we provide are highly customizable as per the
                    requirements of the clients. As per the demands, objectives
                    and specifications of the client, we are ready to service
                    you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 col-md-4 btr-right sm-none">
                <div className="quality-text">
                  <img src={img7} alt="best-quality" />
                  <h4>CUSTOM MADE SOLUTIONS</h4>
                  <p>
                    All the scents we provide are highly customizable as per the
                    requirements of the clients. As per the demands, objectives
                    and specifications of the client, we are ready to service
                    you.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-4 btr-right bdr-sm">
                <div className="quality-text">
                  <img src={img8} alt="best-quality" />
                  <h4>EXPERIENCED TEAM</h4>
                  <p>
                    Making certain that all our clients get the best products
                    and customized service support, we have the most
                    comprehensively experienced and expert team making scents.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="quality-text">
                  <img src={img9} alt="best-quality" />
                  <h4>BEST PRICING</h4>
                  <p>
                    In order to offer the best value-for-money for the clients
                    and their investments, we strive all the time to offer the
                    best affordable and pricing plans for our clients.
                  </p>
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
                      <h2>Get in touch</h2>
                    </div>
                    <div className="col-12 col-md-6 pro-dot-content">
                      <p>
                        Get in touch with our support team through any means
                        such as contact-form, email or telephone. Further, we
                        will discuss about your requirements, specification and
                        create your personal non-binding offer.
                      </p>
                    </div>
                  </div>
                </li>
                <li id="second">
                  <div className="row">
                    <div className="col-12 col-md-6 pro-dot-title">
                      <h2>Customization </h2>
                    </div>
                    <div className="col-12 col-md-6 pro-dot-content">
                      <p>
                        As per your specifications, our manufacturing experts
                        will create three unique samples for you. You can either
                        select any of these or we will try to offer more
                        samples.
                      </p>
                    </div>
                  </div>
                </li>
                <li id="third">
                  <div className="row">
                    <div className="col-12 col-md-6 pro-dot-title">
                      <h2>selection</h2>
                    </div>
                    <div className="col-12 col-md-6 pro-dot-content">
                      <p>
                        You can select your bottle, the atomizer, the cap and
                        the design and packaging for your scent. If you may
                        choose, we will also design the same as per your needs.
                      </p>
                    </div>
                  </div>
                </li>
                <li id="fourth">
                  <div className="row">
                    <div className="col-12 col-md-6 pro-dot-title">
                      <h2>Final</h2>
                    </div>
                    <div className="col-12 col-md-6 pro-dot-content">
                      <p>
                        After you’ve met the team, we will set you up on our
                        internal communications tool, Workplace by Facebook.
                        This will enable you to quickly and easily communicate
                        with the whole team on any of your projects
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/*-Let’s Connect*/}
      <ContactForm />
    </>
  );
}
export default Index;
