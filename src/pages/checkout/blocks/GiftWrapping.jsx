import { useState, useCallback, useEffect } from "react";
import UpdateCheckoutDetails from "../js/updateCheckoutDetails";

function GiftWrapping({
  fetchCheckoutDetailsForGiftStatus,
  fetchCheckoutDetailsForMessage,
  checkoutUpdateParams,
}) {
  const [giftWrappingStatus, setGiftWrappingStatus] = useState(0);
  const [messageLength, setMessageLength] = useState(0);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setGiftWrappingStatus(checkoutUpdateParams?.gift_wrap);
    setMessage(checkoutUpdateParams?.gift_message);
    setMessageLength(checkoutUpdateParams?.gift_message?.length || 0);
  }, [checkoutUpdateParams?.gift_wrap]);

  const delaySaveToDb = useCallback(
    debounce((val) => {
      fetchCheckoutDetailsForMessage(val);
    }, 1000),
    []
  );

  const handleChange = (e) => {
    setMessageLength(e.target.value.length);
    setMessage(e.target.value);
    delaySaveToDb(e.target.value);
  };

  function debounce(fn, delay) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }

  return (
    <>
      <div className="card-body p-6">
        {/* check input */}
        <div className="d-flex">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              checked={giftWrappingStatus}
              name="gift_wrapping"
              onClick={() => {
                setGiftWrappingStatus(1);
                fetchCheckoutDetailsForGiftStatus(1);
              }}
            />
          </div>
          <div>
            <h5 className=" pt-1 ps-5 h6">
              {" "}
              Add Gift Wrapping (AED 5 Charge Apply)
            </h5>
            {giftWrappingStatus ? (
              <span
                onClick={() => {
                  setGiftWrappingStatus(0);
                  fetchCheckoutDetailsForGiftStatus(0);
                }}
              >
                Remove
              </span>
            ) : null}
          </div>
        </div>
      </div>
      {giftWrappingStatus ? (
        <div className="ps-3">
          <div className="col-md-8 col-12">
            <div className="mb-3 mb-lg-0">
              <input
                type="text"
                maxLength={200}
                className="form-control"
                onChange={(event) => {
                  setMessage(event.target.value);
                  setMessageLength(event.target.value.length);
                }}
                onBlur={(event) => {
                  fetchCheckoutDetailsForMessage(event.target.value);
                }}
                value={message}
                placeholder="Your Message"
              />
              <span>{messageLength}/200</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default GiftWrapping;
