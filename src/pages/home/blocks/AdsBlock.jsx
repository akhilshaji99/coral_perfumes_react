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
            {componentDatas?.datas?.map((adBlock, index) => {
              return (
                <div
                  className={`col-md-6 ${
                    index === 2 || index === 3 ? `pt-7` : ""
                  }`}
                  key={index}
                >
                  <Link to={'/'+adBlock?.link}>
                    <img
                      src={deviceImageRender(
                        adBlock?.desktop_image,
                        adBlock?.mobile_image
                      )}
                      alt={adBlock?.image_alt}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/*--sm-view*/}
        <div className="lg-none">
          {componentDatas?.datas?.map((adBlock, index) => {
            return (
              <div
                className={`${
                  index % 2 === 0 ? `mob-inspired` : "mob-collect-banner"
                }`}
              >
                <a href={'/'+adBlock?.link}>
                  <img
                    src={deviceImageRender(
                      adBlock?.desktop_image,
                      adBlock?.mobile_image
                    )}
                    alt={adBlock?.image_alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default AdsBlock;
