import "react-multi-carousel/lib/styles.css";
import deviceImageRender from "../../../utils/deviceImageRender";
import { useEffect, useState } from "react";

function BannerFlashSale({ componentDatas }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  const backgroundImage = {
    backgroundImage:
      `url("` +
      deviceImageRender(
        componentDatas?.datas?.[0].desktop_image,
        componentDatas?.datas?.[0].mobile_image
      ) +
      `")`,
  };
  const timeStart = componentDatas?.datas?.[0]?.start_time;
  const timeEnd = componentDatas?.datas?.[0]?.end_time;
  // const timeEnd = '2023-07-23T23:59:00Z';
  const startDate = new Date(timeStart);
  startDate.setDate(startDate.getDate() - 1);
  const endDate = new Date(timeEnd);
  endDate.setDate(endDate.getDate() - 1);
  console.log('timeEnd',endDate)
  const timer = async () => {
    var msDiff = endDate - new Date();
    console.log('msDiff',msDiff)
    const seconds = Math.floor((msDiff / 1000) % 60);

    const minutes = Math.floor((msDiff / 1000 / 60) % 60);

    const hour = Math.floor((msDiff / 1000 / 60 / 60) % 24);
    setHours(hour);
    setMinutes(minutes);
    setSeconds(seconds)
  };
  useEffect(() => {
    var myVar = setInterval(timer, 1000);
   
  }, []);
  return (
    <>
      <section className="banner-flashsale" style={backgroundImage}>
        <div className="container my-5">
          <div className="row align-items-center d-end">
            <div className="col-md-8">
              <div className="row align-items-center ">
                <div className="col-md-4 text-center">
                  {/* <h2>flash</h2>
                  <p>
                    <svg
                      width="38"
                      height="2"
                      viewBox="0 0 38 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 1H37.5" stroke="white" />
                    </svg>
                    sale
                    <svg
                      width="38"
                      height="2"
                      viewBox="0 0 38 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 1H37.5" stroke="white" />
                    </svg>
                  </p>
                  <button className="btn  btn-outline-light">Shop Now</button> */}
                </div>
                <div className="col-md-2">
                  <div className="timer-card">
                    <h1>{hours}</h1>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="timer-card">
                    <h1>{minutes}</h1>
                  </div>
                </div>
                <div className="col-md-2" >
                  <div className="timer-card" style={{height:93}}>
                    <h1>{seconds}</h1>
                  </div>
                </div>
                <h5 className="text-center">*valid on selected Items</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default BannerFlashSale;
