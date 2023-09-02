import request from "../../../utils/request";
import { useEffect, useState } from "react";
import RatingModal from "./RatingModal";
import $ from "jquery";

function BrandRating({ currentVariant }) {
  console.log("currentVariant", currentVariant);
  useEffect(() => {
    if (currentVariant?.brand_id) {
      getBrandRatings();
    }
  }, [currentVariant?.brand_id]);
  const getBrandRatings = async () => {
    try {
      const response = await request.get(
        "get-brand-reviews/" + currentVariant?.brand_id + "/"
      );
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div
      className="tab-pane fade"
      id="reviews-tab-pane"
      role="tabpanel"
      aria-labelledby="reviews-tab"
      tabIndex={0}
    >
    <RatingModal/>
      <div className="row col-md-12">
        <div className="row col-md-6">
          <div className="card">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="card-body">
                  <div className="col-md-11 px-0">
                    {/* address */}
                    <div className="row">
                      <p className="mb-6 pl-5">Vishnuprakash</p>
                    </div>
                    <div className="row">
                      <p className="mb-6 pl-5">Vishnuprakash</p>
                    </div>
                    <div className="row">
                      <p className="mb-6 pl-5">Vishnuprakash</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row col-md-6">
          <div className="ml-10">
           
            <button type="button" class="btn btn-outline-dark"
             onClick={(e) => {
               e.preventDefault();
               $("#ratingModal").toggle();
               $("#ratingModal").toggleClass("modal fade modal");
             }}
            >Rate</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BrandRating;
