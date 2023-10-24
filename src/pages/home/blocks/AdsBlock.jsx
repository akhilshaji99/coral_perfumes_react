import { Link } from "react-router-dom";
import deviceImageRender from "../../../utils/deviceImageRender";
function AdsBlock({ componentDatas }) {
  return (
    <>
    <br/><br/><br/><br/><br/>
      <div className="container-fluid full-width cc-margin">
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
      </div>
    </>
  );
}
export default AdsBlock;
