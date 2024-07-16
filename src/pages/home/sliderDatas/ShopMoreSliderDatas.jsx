import deviceImageRender from "../../../utils/deviceImageRender";
import { NavLink } from "react-router-dom";

function ShopMoreSliderDatas({ item, index }) {
  return (
    <div className="" key={index}>
      <NavLink to={'/'+item?.link}>
        <div className="thumbnails">
          <img
            src={deviceImageRender(item.desktop_image, item.mobile_image)}
            alt={item.image_alt}
          />
          <div className="black"></div>
          <div className="title">
            <h3 className="text-white">{item.title}</h3>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
export default ShopMoreSliderDatas;
