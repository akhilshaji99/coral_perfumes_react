import img1 from "../../assets/img/prvt/private-manufacturing.png";
import img2 from "../../assets/img/prvt/it-work.png";
import img3 from "../../assets/img/prvt/best-quality-img.png";
import img4 from "../../assets/img/prvt/benefits-img2.png";
import img5 from "../../assets/img/prvt/benefits-img3.png";
import img6 from "../../assets/img/prvt/best-quality-img4.png";
import img7 from "../../assets/img/prvt/best-quality-img4.png";
import img8 from "../../assets/img/prvt/best-quality-img5.png";
import img9 from "../../assets/img/prvt/best-quality-img5.png";
import img10 from "../../assets/img/prvt/lets-connect.png";


function index() {
  return (
    <>
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
              <img
                src={img1}
                alt="private-img"
                className="private-imgs"
              />
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
                      <button id="accordion-scent-1" aria-expanded="false">
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
                      <button id="accordion-scent-2" aria-expanded="false">
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
                      <button id="accordion-scent-3" aria-expanded="false">
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
                      <button id="accordion-scent-4" aria-expanded="false">
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
                <img
                  src={img2}
                  alt="it-work"
                  className="work-it-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/*-vedio--*/}
        <div className="container">
          <div className="video-wrapper">
            <video
              playsInline=""
              autoPlay=""
              muted=""
              loop=""
              poster="cake.jpg"
            >
              <source src="images/Perfume video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/*-Benefits-*/}
        <section>
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
                  <div className="col-md-12">
                    <div className="col-md-6 pro-dot-title">
                      <h2>Get in touch</h2>
                    </div>
                    <div className="col-md-6 pro-dot-content">
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
                  <div className="col-md-12">
                    <div className="col-md-6 pro-dot-title">
                      <h2>Customization </h2>
                    </div>
                    <div className="col-md-6 pro-dot-content">
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
                  <div className="col-md-12">
                    <div className="col-md-6 pro-dot-title">
                      <h2>selection</h2>
                    </div>
                    <div className="col-md-6 pro-dot-content">
                      <p>
                        You can select your bottle, the atomizer, the cap and
                        the design and packaging for your scent. If you may
                        choose, we will also design the same as per your needs.
                      </p>
                    </div>
                  </div>
                </li>
                <li id="fourth">
                  <div className="col-md-12">
                    <div className="col-md-6 pro-dot-title">
                      <h2>Final</h2>
                    </div>
                    <div className="col-md-6 pro-dot-content">
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
      <div className="container pt-10">
        <div className="row ">
          <div className="col-md-12">
            <div className="lets-tittle">
              <h3>Let’s Connect!</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="lets-form">
              <form>
                <div className="form-group  mb-8">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-8">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="E-mail"
                  />
                </div>
                <div className="form-group mb-8">
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="055 923 8088"
                  />
                </div>
                <div className="form-group mb-8">
                  <textarea
                    className="form-control"
                    id="address"
                    rows={3}
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                </div>
                <button
                  className="btn btn-dark col-md-6 col-12 address-button"
                  type="submit"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6 lest-img">
            <img src={img10} alt="lets-connect" />
          </div>
        </div>
      </div>
      {/*-address Connect*/}
      <section className="cont-ad">
        <div className="container">
          <div className="row">
            <div className="col-md-6 private-cs  d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.62 8.45C19.57 3.83 15.54 1.75 12 1.75C12 1.75 12 1.75 11.99 1.75C8.45997 1.75 4.41997 3.82 3.36997 8.44C2.19997 13.6 5.35997 17.97 8.21997 20.72C9.27997 21.74 10.64 22.25 12 22.25C13.36 22.25 14.72 21.74 15.77 20.72C18.63 17.97 21.79 13.61 20.62 8.45ZM12 13.46C10.26 13.46 8.84997 12.05 8.84997 10.31C8.84997 8.57 10.26 7.16 12 7.16C13.74 7.16 15.15 8.57 15.15 10.31C15.15 12.05 13.74 13.46 12 13.46Z"
                  fill="black"
                />
              </svg>
              <p>
                {" "}
                Coral Perfumes Industry LLCOffice No.9, Ware House No. 13,
                Industrial Area-4, Al Quoz, Dubai. UAE – 186887Land Mark: Near
                Al Ahli Driving School
              </p>
            </div>
            <div className="col-md-3 private_ph">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                  fill="black"
                />
              </svg>
              <div>
                <a href="tel:+971563298222"> +971563298222</a>
                <a href="tel:+971 4 3217 112">+971 4 3217 112</a>
              </div>
            </div>
            <div className="col-md-3 private_mails">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
                  fill="#292D32"
                />
              </svg>
              <div>
                <a href="mailto:info@coralperfumes.com">
                  info@coralperfumes.com
                </a>
                <a href="mailto:operations@coralperfumes.com">
                  operations@coralperfumes.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default index;
