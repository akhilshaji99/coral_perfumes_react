import { useState, useEffect } from "react";

function CountDownTimer({ timeEnd, handleCountdownEnd }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date(timeEnd);
    const currentDate = new Date();

    const difference = targetDate - currentDate;

    let timeLeft = {};

    if (difference > 0) {
      const totalHours = Math.floor(difference / (1000 * 60 * 60));
      timeLeft = {
        hours: totalHours,
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    if (Object.keys(timeLeft).length === 0) {
      handleCountdownEnd();
    }
    if (
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0
    ) {
      // Call your function here
      handleCountdownEnd();
    }
  }, [timeLeft]);

  return (
    <div className="root-react-component-countdown-timer digital-text" id="">
      <div className="displayedTime">
        <div className="inline left  responsive" style={{ fontSize: "25px" }}>
          <span
            className="count"
            style={{
              color: "rgb(0, 0, 0)",
              backgroundColor: "rgb(255, 255, 255)",
            }}
          >
            {timeLeft?.hours}
          </span>
          <span className="split">:</span>
          <span
            className="count"
            style={{
              color: "rgb(0, 0, 0)",
              backgroundColor: "rgb(255, 255, 255)",
            }}
          >
            {timeLeft?.minutes}
          </span>
          <span className="split">:</span>
          <span
            className="count"
            style={{
              color: "rgb(0, 0, 0)",
              backgroundColor: "rgb(255, 255, 255)",
            }}
          >
            {timeLeft?.seconds}
          </span>
        </div>
      </div>
    </div>
  );
}
export default CountDownTimer;
