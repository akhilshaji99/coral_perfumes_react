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
        <section className="ads-banner" style={backgroundImage}>
          <div className="container my-5">
            <div className="row align-items-center d-end">
              <div className="col-md-5">
                {/* <h1>grab it</h1> */}
                {/* <h4>now</h4> */}
                {/* <button className="btn btn-light mt-5">Apply Coupon</button> */}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  export default AdsBanner;
  