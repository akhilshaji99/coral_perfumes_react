import { Link } from "react-router-dom";
import deviceImageRender from "../../../utils/deviceImageRender";

function AdsBanner({ componentDatas }) {
  const backgroundImage = {
    backgroundImage:
      `url("` +
      deviceImageRender(
        componentDatas?.datas?.[0].desktop_image,
        componentDatas?.datas?.[0].mobile_image
      ) +
      `")`,
  };
  return (
    <>
      <div className="conatiner-lg-fluid cc-margin">
        <Link to={componentDatas?.datas?.[0].link}>
          <div className="ads-banner" style={backgroundImage} />
        </Link>
      </div>
    </>
  );
}
export default AdsBanner;
