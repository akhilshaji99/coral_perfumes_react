import deviceImageRender from "../../../utils/deviceImageRender";
import { Link } from "react-router-dom";

function BrandsSliderDatas({ brand, index }) {
  return (
    <div className="brand-img" key={index}>
      <Link to={brand?.link}>
        <img
          src={deviceImageRender(brand.desktop_image, brand.mobile_image)}
          className="img-fluid"
          alt={brand.image_alt}
        />
      </Link>
    </div>
  );
}
export default BrandsSliderDatas;
