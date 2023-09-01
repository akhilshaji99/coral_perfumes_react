import deviceImageRender from "../../../utils/deviceImageRender";
function Deals({ componentDatas }) {
  const image = deviceImageRender(
    componentDatas?.datas?.[0].desktop_image,
    componentDatas?.datas?.[0].mobile_image
  );

  return (
    <>
      <div className="container-lg-fluid cc-margin">
        <img
        className="deals-banner"
          src={image}
          alt={componentDatas?.datas?.[0].image_alt}
        />
        {/* </div> */}
      </div>
    </>
  );
}
export default Deals;
