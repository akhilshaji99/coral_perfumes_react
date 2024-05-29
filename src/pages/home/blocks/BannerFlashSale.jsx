
import deviceImageRender from "../../../utils/deviceImageRender";
import { useEffect, useState } from "react";
import CountdownTimer from "react-component-countdown-timer";
import { Link } from "react-router-dom";

function BannerFlashSale({ componentDatas }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hideBanner, setHideBanner] = useState(true);
  const [isStarting, setIsStarting] = useState(false);

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

  const startDate = new Date(timeStart);
  const endDate = new Date(timeEnd);

  const customTimeZoneOffset = -5.5; // -5 hours and -30 minutes
  const customTimeZoneOffsetMilliseconds =
    customTimeZoneOffset * 60 * 60 * 1000;

  const adjustedStartDate = new Date(
    startDate.getTime() + customTimeZoneOffsetMilliseconds
  );
  const adjustedEndDate = new Date(
    endDate.getTime() + customTimeZoneOffsetMilliseconds
  );

  const timer = async () => {
    const currentDate = new Date();
    let timeDifferenceInMilliseconds = adjustedEndDate.getTime() - currentDate.getTime();
    let isStarting = false;

    if (currentDate < adjustedStartDate) {
      timeDifferenceInMilliseconds = adjustedStartDate.getTime() - currentDate.getTime();
      isStarting = true;
    }

    const days = Math.floor(
      timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (timeDifferenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifferenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
      (timeDifferenceInMilliseconds % (1000 * 60)) / 1000
    );

    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      setHideBanner(true);
      return;
    }
    setHideBanner(false);
    setIsStarting(isStarting);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    const interval = setInterval(timer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!hideBanner ? (
        <Link to={componentDatas?.datas?.[0]?.link}>
          <section
            className="banner-flashsale container-lg-fluid"
            style={backgroundImage}
          >
            <div className="container d-block d-sm-none mob-count ">
              <div className="row align-items-center d-end px-5 timer-row">
                <div className="col-3 px-0 text-end">
                  <span className="mob-time-break">{isStarting ? "starts in" : "ends in"}</span>
                </div>
                <div className="col-4">
                  <CountdownTimer
                    className="digital-text"
                    responsive={true}
                    size={25}
                    count={(days * 86400) + (hours * 3600) + (minutes * 60) + seconds}
                  />
                </div>
                <div className="col-1"></div>
              </div>
            </div>
            <div className="container my-5 d-none d-lg-block">
              <div className="row align-items-center d-end">
                <div className="ends-in-lg">
                  <p>{isStarting ? "starts in" : "ends in"}</p>
                </div>
                <div className="col-md-1 col-4">
                  <div className="timer-card">
                    <h1>{days}</h1>
                  </div>
                  <p className="mt-2 timer-text-color">Days</p>
                </div>
                <div className="col-md-1 cc-col-1 d-none d-sm-block">
                  {" "}
                  <span className="time-seperator blink-hard">:</span>
                </div>
                <div className="col-md-1 col-4">
                  <div className="timer-card">
                    <h1>{hours}</h1>
                  </div>
                  <p className="mt-2 timer-text-color">Hours</p>
                </div>
                <div className="col-md-1 cc-col-1 d-none d-sm-block">
                  {" "}
                  <span className="time-seperator blink-hard">:</span>
                </div>
                <div className="col-md-1 col-4 ">
                  <div className="timer-card">
                    <h1>{minutes}</h1>
                  </div>
                  <p className="mt-2 timer-text-color">Minutes</p>
                </div>
                <div className="col-md-1 cc-col-1 d-none d-sm-block">
                  {" "}
                  <span className="time-seperator blink-hard">:</span>
                </div>
                <div className="col-md-1 col-4">
                  <div className="timer-card">
                    <h1>{seconds}</h1>
                  </div>
                  <p className="mt-2 timer-text-color">Seconds</p>
                </div>
              </div>
            </div>
          </section>
        </Link>
      ) : null}
    </>
  );
}

export default BannerFlashSale;
