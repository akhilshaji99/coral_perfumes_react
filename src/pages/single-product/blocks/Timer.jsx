import { useEffect, useState } from "react";
function Timer({ flash_sale }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hideBanner, setHideBanner] = useState(false);
  const timeEnd = flash_sale?.end_time;
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

  // var msDiff = new Date(formattedDateTime) - new Date(); //Future date - current date
  // counterValue = Math.floor(msDiff / 1000);

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
        <div className="row py-1 align-items-center">
          <div className="col-xl-11 col-sm-12">
            <div className="flash-sale-box">
              <div className="row align-items-center">
                <div className="col-xl-6 col-sm-4 col-4">
                  <h2>
                    flash sale &nbsp;&nbsp;
                    <span>
                      <svg
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.21613 8.73435L6.02814 7.24776V12.8224C6.02814 14.1232 6.83687 14.3865 7.82333 13.4109L14.5509 6.75224C15.3774 5.93926 15.0308 5.26565 13.7777 5.26565L8.96566 6.75224V1.17755C8.96566 -0.123205 8.15694 -0.386454 7.17047 0.589115L0.442952 7.24776C-0.37466 8.06848 -0.0280632 8.73435 1.21613 8.73435Z"
                          fill="url(#paint0_linear_868_24069)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_868_24069"
                            x1="4.85028"
                            y1="4.4189"
                            x2="13.4883"
                            y2="13.3467"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FAFF00" />
                            <stop offset={1} stopColor="#FF9900" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </h2>
                  <p>limited time offer</p>
                  <p className="ends-in mb-0 pb-0">ends in</p>
                </div>
                <div className="col-xl-6 col-sm-8 col-7 timer-field col-7">
                  <div className="row">
                    <div className="col-md-4 col-4 text-center">
                      <div className="timer-box">{hours || 0}</div>
                      <span className="">Hours</span>
                    </div>
                    <div className="col-md-4 col-4 text-center">
                      <div className="timer-box">{minutes || 0}</div>
                      <span>Minutes</span>
                    </div>
                    <div className="col-md-4 col-4 text-center">
                      <div className="timer-box">{seconds || 0}</div>
                      <span>Seconds</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default Timer;
