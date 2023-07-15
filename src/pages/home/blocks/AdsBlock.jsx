import Banner1 from "../../../assets/img/banners/banner-1.png";
import Banner2 from "../../../assets/img/banners/banner-2.png";
import Banner3 from "../../../assets/img/banners/banner-3.png";
import Banner4 from "../../../assets/img/banners/banner-4.png";

function AdsBlock() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row g-5 ads-block justify-content-center">
          <div className="col-md-5 col-6">
            <img src={Banner1} className="img-fluid" alt="" />
          </div>
          <div className="col-md-5 col-6">
            {" "}
            <img src={Banner2} className="img-fluid" alt="" />
          </div>
          <div className="col-md-5 col-6">
            {" "}
            <img src={Banner3} className="img-fluid" alt="" />
          </div>
          <div className="col-md-5 col-6">
            {" "}
            <img src={Banner4} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default AdsBlock;
