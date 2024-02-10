import "../../assets/css/404.css";
import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import request from "../../utils/request";
import deviceImageRender from "../../utils/deviceImageRender";
import BreadCrumps from "../common/BreadCrumps";
import Carousel from "react-multi-carousel";

function Index() {
  const [gallery_images, setGallery_images] = useState([]);
  const [storeDetails, setStoreDetails] = useState();
  const [breadCrumbDatas, setBreadCrumbDatas] = useState([]);

  const urlParams = useParams([]);
  console.log("urlParams", urlParams?.id);
  useEffect(() => {
    getStoreDetails();
  }, []);

  const getStoreDetails = async () => {
    try {
      const response = await request.get(
        "store-details-by-id/" + urlParams?.id + "/"
      );
      if (response?.data) {
        setBreadCrumbDatas(response?.data?.bread_crumb_data)
        setGallery_images(response?.data?.data?.gallery_images);
        setStoreDetails(response?.data);
        // console.log(response?.data?.data?.gallery_images)
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
            <h1> {storeDetails?.data?.store_name}</h1>
          </div>
          <section className="slider-owl-sect">
            <div className="container-new">
              <div className="owl-carousel owl-theme owl-slider store-details-slider">
                {gallery_images.length > 0 ? (
                  <Carousel
                    autoPlay={false}
                    arrows
                    autoPlaySpeed={3500}
                    className=""
                    draggable
                    focusOnSelect={false}
                    infinite={true}
                    keyBoardControl
                    pauseOnHover={false}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                      desktop: {
                        breakpoint: {
                          max: 3000,
                          min: 1024,
                        },
                        items: 1,
                      },
                      mobile: {
                        breakpoint: {
                          max: 464,
                          min: 0,
                        },
                        items: 1,
                      },
                      tablet: {
                        breakpoint: {
                          max: 1024,
                          min: 464,
                        },
                        items: 1,
                      },
                    }}
                    swipeable
                  >
                    {gallery_images?.map((image, index) => (
                      <div key={index}>
                        <img
                          className="store-single-img-width"
                          src={deviceImageRender(image?.image)}
                          alt={`img_${index}`}
                        />
                      </div>
                    ))}
                  </Carousel>
                ) : null}
              </div>
            </div>
            {/* <div class="container-new  lg-none">
              {gallery_images?.map((image, index) => (
                <div class="slid-mobview">
                  <img
                    className="store-single-img-width"
                    src={deviceImageRender(image?.image)}
                    alt={`img_${index}`}
                  />
                </div>
              ))}
            </div> */}
          </section>
          <div
            className="info-text"
            dangerouslySetInnerHTML={{
              __html: storeDetails?.data?.description,
            }}
          ></div>
        </div>
        <section>
          <div className="container-new">
            <div className="row-details">
              <div className="store-address">
                <h2>{storeDetails?.data?.address_title}</h2>
                {/* {storeDetails.data.store_address} */}

                <div
                  dangerouslySetInnerHTML={{
                    __html: storeDetails?.data?.store_address,
                  }}
                ></div>
              </div>
              <div className="store-hours">
                <h2>{storeDetails?.data?.timing_title} </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: storeDetails?.data?.working_hours,
                  }}
                ></div>
              </div>
              <div className="store-contact">
                <h2>{storeDetails?.data?.location_title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: storeDetails?.data?.store_contact,
                  }}
                ></div>
                <div className="direction-btn">
                  {" "}
                  <iframe
                    className="store-iframe"
                    src={storeDetails?.data?.map_link}
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* <a href={storeDetails?.data?.map_link} target="_blank">
                    Directions
                  </a> */}
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
