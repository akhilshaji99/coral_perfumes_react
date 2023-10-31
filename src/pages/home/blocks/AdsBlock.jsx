import { Link } from "react-router-dom";
import deviceImageRender from "../../../utils/deviceImageRender";
import "../../../assets/css/adsblock.css";
function AdsBlock({ componentDatas }) {
  return (
    <>
      <section className="collect-banner">
        {/*--lg-view*/}
        <div className="container-fluid sm-none">
          <div className="row collection-img">
            <div className="col-md-6">
              <a href="#">
                {" "}
                <img
                  src="https://coralecom.cloud6.ae/media/components/Offer_tiles_Banner_Exclusive_WEBP.webp"
                  alt="perfume-bottle"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="#">
                {" "}
                <img
                  src="https://coralecom.cloud6.ae/media/components/Offer_tiles_Banner_Exclusive_WEBP.webp"
                  alt="perfume-bottle-pink"
                />
              </a>
            </div>
            <div className="col-md-6 pt-7">
              <a href="#">
                {" "}
                <img
                  src="https://coralecom.cloud6.ae/media/components/Offer_tiles_Banner_Exclusive_WEBP.webp"
                  alt="perfume-bottle"
                />
              </a>
            </div>
            <div className="col-md-6 pt-7">
              <a href="#">
                {" "}
                <img src="https://coralecom.cloud6.ae/media/components/Offer_tiles_Banner_Exclusive_WEBP.webp" alt="perfume-bottle-pink" />
              </a>
            </div>
          </div>
        </div>
        {/*--sm-view*/}
        <div className="lg-none">
          <div className="mob-inspired">
            <a href="#">
              <img
                src="https://coralecom.cloud6.ae/media/components/Offer_tiles_Banner_Exclusive_WEBP.webp"
                alt="perfume-bottle"
              />
            </a>
          </div>
          <div className="mob-collect-banner">
            <a href="#">
              {" "}
              <img src="https://coralecom.cloud6.ae/media/components/Offer_tiles_Banner_Exclusive_WEBP.webp" alt="perfume-bottle-pink" />
            </a>
          </div>
          <div className="mob-inspired">
            <a href="#">
              {" "}
              <img src="https://coralecom.cloud6.ae/media/components/Offer_tiles_Banner_Exclusive_WEBP.webp" alt="perfume-bottle" />
            </a>
          </div>
          <div className="mob-collect-banner">
            <a href="#">
              {" "}
              <img src="https://coralecom.cloud6.ae/media/components/Offer_tiles_Banner_Exclusive_WEBP.webp" alt="Oil Collections" />
            </a>
          </div>
        </div>
      </section>

      {/* <div className="container-fluid full-width cc-margin">
        <div className="row g-8 ads-block justify-content-center">
          {componentDatas?.datas?.map((adBlock, index) => {
            return (
              <div
                className={`col-md-6 col-12 ${
                  index % 2 === 0 ? `side-padding` : ""
                }`}
                key={index}
              >
                <Link to={adBlock?.link}>
                  <img
                    src={deviceImageRender(
                      adBlock?.desktop_image,
                      adBlock?.mobile_image
                    )}
                    className="img-fluid"
                    alt={adBlock?.image_alt}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div> */}
    </>
  );
}
export default AdsBlock;
