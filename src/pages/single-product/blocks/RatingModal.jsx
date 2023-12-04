import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import $ from "jquery";
import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";
function RatingModal({ setRefetch, currentVariant, ratingType, refetch }) {
  const [rating, setRating] = useState(1);
  const [message, setMessage] = useState("");

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  const onTodoChange = (value) => {
    setMessage(value);
  };
  const onPointerEnter = () => console.log("Enter");

  const handleModalClose = () => {
    $("#ratingModal").toggle();
    $("#ratingModal").toggleClass("modal modal fade");
    $("#ratingModal").hide();
  };

  const handleOnSubmit = async () => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("stars_count", rating);
      bodyFormData.append("message", message);
      let endPoint = "";
      if (ratingType == "brand") {
        endPoint = "submit-brand-review";
        bodyFormData.append("brand_id", currentVariant?.brand_id);
      } else {
        endPoint = "submit-product-review";
        bodyFormData.append("product_id", currentVariant?.product_id);
        bodyFormData.append("variant_id", currentVariant?.id);
      }
      const response = await request.post(`/` + endPoint + `/`, bodyFormData);
      setRating(1);
      setMessage("");
      setRefetch(!refetch);
      if (response.data.status) {
        toast((t) => (
          <AlerMessage
            t={t}
            toast={toast}
            status={response.data.status}
            title={"Success"}
            message={response.data.message_1}
          />
        ));
      } else {
        toast((t) => (
          <AlerMessage
            t={t}
            toast={toast}
            status={response.data.status}
            title={"Error"}
            message={
              response?.data?.message_1 ||
              "Something went wrong.Please try again."
            }
          />
        ));
      }
      handleModalClose();
      
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div
      className="modal "
      id="ratingModal"
      tabIndex={-1}
      aria-labelledby="ratingModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content otp-modal ">
          <h5 className="modal-title text-center " id="ratingModalLabel">
            REVIEW AND RATING
          </h5>
          <button
            type="button"
            className="btn-close"
            // data-bs-dismiss="modal"
            // aria-label="Close"
            onClick={handleModalClose}
          />
          <div className="modal-body ">
            <div className="text-center mb-5">
              <Rating
                onClick={handleRating}
                initialValue={rating}
                fillColor="#0f0f0f"
                emptyColor="#ffffff"
                SVGstrokeColor="#0f0f0f"
                SVGstorkeWidth={1}
                allowHover={false}
              />
            </div>
            <div className="form-outline">
              <textarea
                className="form-control"
                value={message}
                onChange={(e) => onTodoChange(e.target.value)}
                placeholder="write a review"
                id="textAreaExample3"
                rows="4"
              ></textarea>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="form-outline mt-5">
                  <button
                    // type="submit"
                    className="btn btn-dark px-4 validate w-100"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOnSubmit();
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RatingModal;
