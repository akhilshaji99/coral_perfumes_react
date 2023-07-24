import "react-multi-carousel/lib/styles.css";
import deviceImageRender from "../../../utils/deviceImageRender";
import { useEffect, useState } from "react";

function BannerFlashSale({ componentDatas }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hideBanner, setHideBanner] = useState(false);

  const backgroundImage = {
    backgroundImage:
      `url("` +
      deviceImageRender(
        componentDatas?.datas?.[0].desktop_image,
        componentDatas?.datas?.[0].mobile_image
      ) +
      `")`,
  };
  const timeEnd = componentDatas?.datas?.[0]?.end_time;
  const inputDate = new Date(timeEnd);
  const customTimeZoneOffset = -5.5; // -5 hours and -30 minutes
  const customTimeZoneOffsetMilliseconds =
    customTimeZoneOffset * 60 * 60 * 1000;
  const adjustedDate = new Date(
    inputDate.getTime() + customTimeZoneOffsetMilliseconds
  );
  const formattedDateTime = adjustedDate.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  });
  const endDate = new Date(formattedDateTime);

  const timer = async () => {
    const currentDate = new Date();
    const timeDifferenceInMilliseconds =
      endDate.getTime() - currentDate.getTime();
    const hour = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifferenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
      (timeDifferenceInMilliseconds % (1000 * 60)) / 1000
    );
    if (hour <= 0 && minutes <= 0 && seconds <= 0) {
      setHideBanner(true);
    }
    setHours(hour);
    setMinutes(minutes);
    setSeconds(seconds);
  };
  useEffect(() => {
    setInterval(timer, 1000);
  });
  return (
    <>
      {!hideBanner ? (
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
                  <div className="col-md-2">
                    <div className="timer-card" style={{ height: 93 }}>
                      <h1>{seconds}</h1>
                    </div>
                  </div>
                  <h5 className="text-center">*valid on selected Items</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
export default BannerFlashSale;
