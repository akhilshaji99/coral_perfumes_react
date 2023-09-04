import $ from "jquery";
import request from "../../../utils/request";
import { useEffect, useState } from "react";


function ProductRating({ refetch,setRefetch, currentVariant }) {
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

      <div className="row col-md-12">
        <div className="col-6">
          <div className="row col-12">
            <div className="col-1">
              <p style={{ width: "10px" }}>
                {productReviews?.average_star_rating}
              </p>
            </div>
            <div className="col-7">
              <p>{productReviews?.review_message}</p>
            </div>
          </div>
          {productReviews?.stars_array?.map((component, index) => {
            return (
              <div  key={index}>
                <div className="">
                  {4 - index + 1} ★
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: component }}
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25%
                    </div>
                  </div>
                </div>

                <br />
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
                setRefetch(false);
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
export default ProductRating;
