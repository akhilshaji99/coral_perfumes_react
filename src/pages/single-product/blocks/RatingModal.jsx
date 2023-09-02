import React, { useState } from 'react'
import { Rating } from "react-simple-star-rating";
import $ from "jquery";

function RatingModal({ brand_id }) {
  const [rating, setRating] = useState(1)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }
  const onPointerEnter = () => console.log('Enter')
  const handleModalClose = () => {
    $("#ratingModal").toggle();
    $("#ratingModal").toggleClass("modal modal fade");
    $("#ratingModal").hide();
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="modal fade"
      id="ratingModal"
      tabIndex={-1}
      aria-labelledby="ratingModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content otp-modal ">
          <h5 className="modal-title text-center " id="ratingModalLabel">
            REVIEW AND RATING {rating}
          </h5>
          <button
            type="button"
            className="btn-close"
            // data-bs-dismiss="modal"
            // aria-label="Close"
            onClick={handleModalClose}
          />
          <div className="modal-body ">
            <div className='text-center'>
            <Rating onClick={handleRating} initialValue={rating} fillColor="#0f0f0f"/>
            </div>
            <div class="form-outline">
  <textarea class="form-control" placeholder='write a review' id="textAreaExample3" rows="2"></textarea>

</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RatingModal;
