import ThreeCol from "../../../assets/img/icons/3-item.svg";
import ThreeColActive from "../../../assets/img/icons/3-item-active.svg";
import FourCol from "../../../assets/img/icons/4-item.svg";
import FourColActive from "../../../assets/img/icons/4-item-active.svg";
import CustomDropdown from "./CustomDropdown";

function SortHeader() {
  return (
    <>
      <div className="mt-4">
        <div className="container-fluid">
          <div className="row sortHeader">
            <div className="col-md-6">
              <h5>Brands</h5>
            </div>
            <div className="col-md-6 text-end">
              <div className="row align-items-center d-space-around" >
                <div className="col-md-1">
                  {/* <img src={ThreeCol} alt="Coral" /> */}
                  <img src={ThreeColActive} alt="Coral" />
                </div>
                <div className="col-md-1">
                  <img src={FourCol} alt="Coral" />
                  {/* <img src={FourColActive} alt="Coral" /> */}
                </div>
                <div className="col-md-3">
                 <CustomDropdown />
                </div>
                <div className="col-md-3">
                    <h6>121 Items</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SortHeader;
