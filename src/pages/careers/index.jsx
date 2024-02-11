import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
import { useEffect, useState } from "react";
import request from "../../utils/request";
import deviceImageRender from "../../utils/deviceImageRender";
import { Link } from "react-router-dom";
import BreadCrumps from "../common/BreadCrumps";

function Index() {
  const [banners, setBanners] = useState({});
  const [jobcategories, setJobcategories] = useState([]);
  const [footerbanner, setFooterbanner] = useState({});
  const [breadCrumbDatas, setBreadCrumbDatas] = useState([]);

  useEffect(() => {
    getCareerList();
  }, []);
  const getCareerList = async () => {
    try {
      //   var bodyFormData = new FormData();
      //   bodyFormData.append("token", getUserToken());
      //   dispatch(changeApiCallStatus(false)); // Change api call status
      const response = await request.get("api/career-home-page/");
      if (response.data) {
        setBreadCrumbDatas(response?.data?.bread_crumb_data)
        setBanners(response.data.banners);
        setFooterbanner(response.data.footer_banner);
        setJobcategories(response.data.job_categories);
        console.log("banners", jobcategories);
        // setHomeContent(response.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="page-new">
        <BreadCrumps breadCrumbDatas={breadCrumbDatas}/>
        <div className="container-new">
          <div className="title-page">
            <h1>Careers</h1>
          </div>
          <div className="banner-careers">
            {banners?.banner_image ? (
              <img
                src={deviceImageRender(banners?.banner_image)}
                alt="img-banner"
              />
            ) : null}
          </div>
        </div>
        <section className="carrer-sect">
          <div className="container-new">
            <div className="carrer-listing">
              {jobcategories.map((categories, index) => {
                return (
                  <>
                    <div className="sales-list">
                      <h3>{categories.job_category} </h3>
                      <ul>
                        {categories?.job_titles?.map((jobTitle, index) => {
                          return (
                            <li>
                              {/* <a href="#"></a> */}
                              <Link
                                to={"/career-detail/" + jobTitle?.id}
                                className="career-vac-text-color"
                              >
                                {jobTitle?.job_title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                );
              })}

              {/* <div className="sales-list">
                            <h3>Marketing</h3>
                            <ul>
                                <li><a href="#">Retail Sales Associate</a></li>
                                <li><a href="#">Account Executive/Manager</a></li>
                                <li><a href="#">Inside Sales Representative</a></li>
                                <li><a href="#">Sales Manager</a></li>
                            </ul>
                        </div>
                        <div className="finance-list">
                            <h3>Finance</h3>
                            <ul>
                                <li><a href="#">Retail Sales Associate</a></li>
                                <li><a href="#">Account Executive/Manager</a></li>
                                <li><a href="#">Sales Manager</a></li>
                            </ul>
                            
                        </div>
                        <div className="corporate-list">
                            <h3>Corporate & Purchase </h3>
                            <ul>
                                <li><a href="#">Sourcing Analyst</a></li>
                                <li><a href="#">Logistics Coordinator</a></li>
                                
                            </ul>
                        </div>
                        <div className="corporate-list">
                            <h3>Corporate & Purchase </h3>
                            <ul>
                                <li><a href="#">Quality Control Manager</a></li>
                                <li><a href="#">Inventory Manager:</a></li>
                            </ul>
                        </div>
                        <div className="corporate-list">
                            <h3>Corporate & Purchase </h3>
                            <ul>
                                <li><a href="#">Purchasing Manager</a></li>
                                <li><a href="#">Logistics Coordinator</a></li>
                                
                            </ul>
                        </div> */}
            </div>
          </div>
        </section>
        <section className="career-detail-sect">
          <div className="container-new">
            <div className="career-review">
              <div className="career-review-img">
                {banners?.footer_banner ? (
                  <img
                    src={deviceImageRender(footerbanner?.footer_banner)}
                    alt="img"
                  />
                ) : null}
              </div>
              <div className="career-review-text lg-none">
                <h3>
                  {" "}
                  it's a journey into the world of <span>sensory delight</span>
                </h3>
                <p>
                  “Explore our diverse range of collections, from the ethereal
                  Floral Symphony . Each collection is a symphony of notes,
                  carefully composed to awaken your senses and tell a unique
                  story on your skin”
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Index;
