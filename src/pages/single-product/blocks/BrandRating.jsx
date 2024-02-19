import request from "../../../utils/request";
import { useEffect, useState } from "react";
import $ from "jquery";
import { Rating } from "react-simple-star-rating";

function BrandRating({ refetch, currentVariant, setRatingType }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (currentVariant?.id) {
      getReviews();
    }
  }, [currentVariant?.id]);

  useEffect(() => {
    getReviews();
  }, [refetch]);

  const getReviews = async () => {
    if (currentVariant?.id === undefined) {
      return;
    }
    try {
      const response = await request.get(
        "get-product-reviews/" +
          currentVariant?.product_id +
          "/" +
          currentVariant?.id +
          "/"
      );
      if (response?.data?.status) {
        setReviews(response?.data?.data);
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
      <div className="container-lg-fluid px-0">
        <div className="row brand-rating">
          <div className="col-md-9 col-12">
            {reviews?.review_data?.map((component, index) => {
              return (
                <div className="mb-5" key={index}>
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <div className="col-md-12">
                        {/* address */}
                        <div className="row">
                          <div className="col-md-6">
                            <p className="brand-author">
                              {component.submitted_by_name}
                            </p>
                          </div>
                          <div className="col-md-6 pr-0">
                            <p className="brand-rating-date">
                              {component.submitted_date}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row">
                              <p className=" brand-rating-message">
                                {component.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-md-3 mt-3 col-12">
            <div className="ml-10">
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={(e) => {
                  e.preventDefault();
                  setRatingType("product");
                  $("#ratingModal").toggle();
                  $("#ratingModal").toggleClass("modal fade modal");
                }}
              >
                Write A Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BrandRating;
