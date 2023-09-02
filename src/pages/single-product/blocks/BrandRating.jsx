import request from "../../../utils/request";
import { useEffect, useState } from "react";

function BrandRating({ currentVariant }) {
    console.log("currentVariant",currentVariant)
    useEffect(() => {
        if(currentVariant?.brand_id ){
        getBrandRatings();
        }
      }, []);
      const getBrandRatings = async () => {
        try {
          const response = await request.get("get-brand-reviews/"+currentVariant.brand_id);
          
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
      <div className="row col-md-6">
        <div className="col-lg-6 col-xxl-6 col-4 mb-6"></div>
        <div className="card">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="card-body">
              <div className="col-md-11 px-0">
                    {/* address */}
                    <div className="row">
                    <p className="mb-6 pl-5">
                     Vishnuprakash
                    </p>
                    </div>
                    <div className="row">
                    <p className="mb-6 pl-5">
                     Vishnuprakash
                    </p>
                    </div>
                    <div className="row">
                    <p className="mb-6 pl-5">
                     Vishnuprakash
                    </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BrandRating;
