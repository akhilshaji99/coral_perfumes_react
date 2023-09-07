import $ from "jquery";
import request from "../../../utils/request";
import { useEffect, useState } from "react";

function ProductRating({ refetch, setRefetch, currentVariant,setRatingType }) {
  console.log("currentVariant", currentVariant);

  const [productReviews, setProductReviews] = useState([]);

  useEffect(() => {
    if (currentVariant?.id) {
      getProductRatings();
    }
  }, [currentVariant?.id]);
  useEffect(() => {
    if (refetch) {
      getProductRatings();
    }
  }, [refetch]);
  const getProductRatings = async () => {
    try {
      const response = await request.get(
        "get-product-reviews/" +
          currentVariant?.product_id +
          "/" +
          currentVariant?.id +
          "/"
      );
      if (response?.data?.status) {
        setProductReviews(response?.data?.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div
      className="tab-pane fade show active"
      id="rating-tab-pane"
      role="tabpanel"
      aria-labelledby="rating-tab"
      tabIndex={0}
    >
      {/* <RatingModal setRefetch={setRefetch} currentVariant={currentVariant} type={"product"}/> */}
      <div className="container-lg-fluid">
        <div className="row product-rating px-5">
          <div className="col-10">
            <div className="row align-items-center">
              <div className="col-md-2 col-4">
                <h1>{productReviews?.average_star_rating} </h1>
              </div>
              <div className="col-md-3 col-8">
                <span>
                  {" "}
                  <p>{productReviews?.review_message}</p>
                </span>
              </div>
            </div>
            <span>
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.48047 18.8514L10.5805 21.2514C10.9805 21.6514 11.8805 21.8514 12.4805 21.8514H16.2805C17.4805 21.8514 18.7805 20.9514 19.0805 19.7514L21.4805 12.4514C21.9805 11.0514 21.0805 9.85143 19.5805 9.85143H15.5805C14.9805 9.85143 14.4805 9.35143 14.5805 8.65143L15.0805 5.45143C15.2805 4.55143 14.6805 3.55143 13.7805 3.25143C12.9805 2.95143 11.9805 3.35143 11.5805 3.95143L7.48047 10.0514"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                />
                <path
                  d="M2.38086 18.8515V9.05149C2.38086 7.65149 2.98086 7.15149 4.38086 7.15149H5.38086C6.78086 7.15149 7.38086 7.65149 7.38086 9.05149V18.8515C7.38086 20.2515 6.78086 20.7515 5.38086 20.7515H4.38086C2.98086 20.7515 2.38086 20.2515 2.38086 18.8515Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {"  "}
              97% of customers recommend this product
            </span>
            {productReviews?.stars_array?.map((component, index) => {
              return (
                <div key={index}>
                  <div className="row align-items-center">
                    <div className="col-md-1 col-3 star-rating">
                      {4 - index + 1} ★
                    </div>

                    <div className="progress col-md-9 col-7">
                      <div
                        className="progress-bar"
                        style={{ width: component }}
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {/* 25% */}
                      </div>
                    </div>
                    <div className="col-md-1 col-1 star-rating">{component}</div>
                  </div>

                  <br />
                </div>
              );
            })}
          </div>

          <div className="row col-md-2 mt-3">
            <div className="ml-10">
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={(e) => {
                  e.preventDefault();
                  setRefetch(false);
                setRatingType("product")

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
    </div>
  );
}
export default ProductRating;
