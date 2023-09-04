import request from "../../../utils/request";
import { useEffect, useState } from "react";
import RatingModal from "./RatingModal";
import $ from "jquery";
import { Rating } from "react-simple-star-rating";

function BrandRating({ refetch,setRefetch, currentVariant }) {
  console.log("currentVariant", currentVariant);
  const [brandReviews, setBrandReviews] = useState([]);
  // const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    if (currentVariant?.brand_id) {
      getBrandRatings();
    }
  }, [currentVariant?.brand_id]);
  useEffect(() => {
    if (refetch) {
      getBrandRatings();
    }
  }, [refetch]);
  const getBrandRatings = async () => {
    try {
      const response = await request.get(
        "get-brand-reviews/" + currentVariant?.brand_id + "/"
      );
      if (response?.data?.status) {
        setBrandReviews(response?.data?.data);
      }
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
      {/* <RatingModal setRefetch={setRefetch} currentVariant={currentVariant} type={"brand"}/> */}
      <div className="row col-md-12">
        <div className="row col-md-6">
          {brandReviews?.map((component, index) => {
            return (
              <div className="card"  key={index}>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="col-md-11 px-0">
                        {/* address */}
                        <div className="row">
                          <p className="mb-6 pl-2">
                            {component.submitted_by_name}
                          </p>
                        </div>
                        <div className="row">
                          <Rating
                            initialValue={component.stars_count}
                            fillColor="#0f0f0f"
                            readonly={true}
                            size={20}
                          />{" "}
                          <p className="mb-6 pl-2">
                            {component.submitted_date}
                          </p>
                        </div>
                        <div className="row">
                        <p className="mb-6 pl-2">
                            {component.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row col-md-6">
          <div className="ml-10">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={(e) => {
                e.preventDefault();
                setRefetch(false)
               
                $("#ratingModal").toggle();
                $("#ratingModal").toggleClass("modal fade modal");
              }}
            >
              Rate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BrandRating;
