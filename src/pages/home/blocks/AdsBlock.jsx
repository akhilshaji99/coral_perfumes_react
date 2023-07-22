import Banner1 from "../../../assets/img/banners/banner-1.png";
import Banner2 from "../../../assets/img/banners/banner-2.png";
import Banner3 from "../../../assets/img/banners/banner-3.png";
import Banner4 from "../../../assets/img/banners/banner-4.png";
import deviceImageRender from "../../../utils/deviceImageRender";
function AdsBlock({ componentDatas }) {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row g-5 ads-block justify-content-center">
          {componentDatas?.datas?.map((adBlock, index) => {
            return (
              <div className="col-md-5 col-6" key={index}>
                <img
                  src={deviceImageRender(
                    adBlock?.desktop_image,
                    adBlock?.mobile_image
                  )}
                  className="img-fluid"
                  alt={adBlock?.image_alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default AdsBlock;
