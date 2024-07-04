import { Link } from "react-router-dom";
import deviceImageRender from "../../../utils/deviceImageRender";
function Deals({ componentDatas }) {
  console.log('data:', componentDatas);
  const image = deviceImageRender(
    componentDatas?.datas?.[0].desktop_image,
    componentDatas?.datas?.[0].mobile_image
  );

  return (
    <>
      <Link to={componentDatas?.datas?.[0].link}>
        <div className="container-fluid cc-margin w-deals">
          <img
            className="deals-banner"
            src={image}
            alt={componentDatas?.datas?.[0].image_alt}
          />
          {/* </div> */}
        </div>
      </Link>
    </>
  );
}
export default Deals;
