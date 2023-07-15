import Women from "../../../assets/img/shop-pref/women.jpg";
import Men from "../../../assets/img/shop-pref/men.jpg";
import Unisex from "../../../assets/img/shop-pref/unisex.jpg";
import Edp from "../../../assets/img/shop-pref/edp.jpg";
import Edt from "../../../assets/img/shop-pref/edt.jpg";


function ShopPreferences() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="card shop-preferences mb-5">
          <h1 className="mb-5">Shop Categories</h1>
          <div className="row ">
            <div className="col-md-2 col-6">
              <div className="thumbnails">
                <img src={Women} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Women</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="thumbnails">
                <img src={Men} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Men</h3>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-2 col-6">
              <div className="thumbnails">
                <img src={Unisex} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Unisex</h3>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-2 col-6">
              <div className="thumbnails">
                <img src={Edp} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">edp</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="thumbnails">
                <img src={Edt} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">edt</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ShopPreferences;
