
import deviceImageRender from "../../../utils/deviceImageRender";
function Deals({ componentDatas }) {
  const image = deviceImageRender(
        componentDatas?.datas?.[0].desktop_image,
        componentDatas?.datas?.[0].mobile_image
      );

  return (
    <>
      <div className="container-fluid cc-margin">
          <div className="card deals-card" style={{height:150}}>
            <div className="row align-items-center">
              
              {/* <div className="col-md-2"> */}
                <img className="sticker" src={image} alt={componentDatas?.datas?.[0].image_alt} />
              {/* </div> */}
              
            </div>
          </div>

        </div>
    </>
  );
}
export default Deals;
