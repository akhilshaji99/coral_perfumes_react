import Cosmetics from "../../../assets/img/shop-more/cosmetics.svg";
import SunGlass from "../../../assets/img/shop-more/sunglass.svg";
import Luggages from "../../../assets/img/shop-more/luggage.svg";
import Bagpacks from "../../../assets/img/shop-more/bagpacks.svg";

function ShopMore() {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="card shop-more mb-5">
          <h1 className="mb-5">Shop Categories</h1>
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="thumbnails">
                <img src={Luggages} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Luggages</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="thumbnails">
                <img src={SunGlass} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Sunglass</h3>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-3 col-6">
              <div className="thumbnails">
                <img src={Cosmetics} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Cosmetics</h3>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-3 col-6">
              <div className="thumbnails">
                <img src={Bagpacks} />
                <div className="black"></div>
                <div className="title">
                  <h3 className="text-white">Bagpacks</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ShopMore;
