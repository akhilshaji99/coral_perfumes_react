import deviceImageRender from "../../../utils/deviceImageRender";
import { NavLink } from "react-router-dom";
function ShopPreferenceSliderDatas({ preference, index }) {
  return (
    <div key={index}>
      <NavLink to={preference?.link}>
        <div className="thumbnails">
          <img
            src={deviceImageRender(
              preference.desktop_image,
              preference.mobile_image
            )}
            alt={preference.image_alt}
          />
          <div className="black"></div>
          <div className="title">
            <h3 className="text-white shop-p-head">{preference.title}</h3>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
export default ShopPreferenceSliderDatas;
