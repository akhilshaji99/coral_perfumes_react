import { NavLink } from "react-router-dom";
import deviceImageRender from "../../../utils/deviceImageRender";

function CategoryTopSliderDatas({ category, index }) {
  return (
    <div className="category-top-img" key={index}>
      <NavLink to={category?.link}>
        <img
          src={deviceImageRender(
            category?.desktop_image,
            category?.mobile_image
          )}
          alt={category?.image_alt}
        />
        <h3 className="text-dark py-3">{category?.title}</h3>
      </NavLink>
    </div>
  );
}
export default CategoryTopSliderDatas;
