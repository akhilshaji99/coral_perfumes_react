import { useState } from "react";

function GiftWrapping() {
  const [giftWrappingStatus, setGiftWrappingStatus] = useState(false);
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
            />
          </div>
          <div>
            <h5 className=" pt-1 ps-5 h6">
              {" "}
              Add Gift Wrapping (AED 5 Charge Apply)
            </h5>
            <span>Remove</span>
          </div>
        </div>
      </div>
      {giftWrappingStatus ? (
        <div className="ps-3">
          <div className="col-md-8 col-12">
            <div className="mb-3 mb-lg-0">
              <input
                type="text"
                className="form-control"
                placeholder="Your Message"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default GiftWrapping;
