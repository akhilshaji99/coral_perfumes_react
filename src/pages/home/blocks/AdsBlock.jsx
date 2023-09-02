import { Link } from "react-router-dom";
import deviceImageRender from "../../../utils/deviceImageRender";
function AdsBlock({ componentDatas }) {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row ads-block justify-content-center">
          {componentDatas?.datas?.map((adBlock, index) => {
            return (
              <div className="col-md-6 col-12" key={index}>
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
