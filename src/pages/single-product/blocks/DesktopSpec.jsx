// import Sample from "../../../assets/img/sample-banner.png";
import deviceImgeRender from "../../../utils/deviceImageRender";
import BrandRating from "./BrandRating";
import ProductRating from "./ProductRating";
import RatingModal from "./RatingModal";
import { useState } from "react";


function DesktopSpec({currentVariant, productDatas }) {
  const [refetch, setRefetch] = useState(false);

  return (
    <>
      <div className="container-fluid d-none d-sm-block">
        <div className="row">
          <div className="col-md-8">
            <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
              {/* nav item */}
              <li className="nav-item" role="presentation">
                {/* btn */}{" "}
                <button
                  className="nav-link active"
                  id="product-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#product-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="product-tab-pane"
                  aria-selected="true"
                >
                  Description
                </button>
              </li>
              {/* nav item */}
              <li className="nav-item" role="presentation">
                {/* btn */}{" "}
                <button
                  className="nav-link"
                  id="details-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#details-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="details-tab-pane"
                  aria-selected="false"
                >
                  FAQs
                </button>
              </li>
            </ul>
            {/* tab content */}
            <div className="tab-content" id="myTabContent">
              {/* tab pane */}
              <div
                className="tab-pane fade show active"
                id="product-tab-pane"
                role="tabpanel"
                aria-labelledby="product-tab"
                tabIndex={0}
              >
                <div className="my-8">
                  <div className="mb-5">
                    {/* text */}
                    <p
                      className="mb-0 p-d-c"
                      dangerouslySetInnerHTML={{
                        __html: productDatas?.description,
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* tab pane */}
              <div
                className="tab-pane fade"
                id="details-tab-pane"
                role="tabpanel"
                aria-labelledby="details-tab"
                tabIndex={0}
              >
                <div className="my-8">
                  <div
                    dangerouslySetInnerHTML={{ __html: productDatas?.faq }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h2 className="p-d">Product Detail</h2>
            <div className="row p-ul">
              {productDatas?.descriptive_attributes?.map(
                (descriptive_attribute, index) => {
                  return (
                    <div className="col-md-6" key={index}>
                      <li>
                        {Object.keys(descriptive_attribute)} :{" "}
                        {
                          descriptive_attribute?.[
                            Object.keys(descriptive_attribute)
                          ]
                        }
                      </li>
                    </div>
                  );
                }
              )}
              {/* <div className="col-md-6">
                <li>Colour:Black</li>
              </div>
              <div className="col-md-6">
                <li>Made in Italy</li>
              </div> */}
            </div>
          </div>
        </div>
        <hr
          style={{
            borderColor: "#000",
          }}
        />
        <div className="row py-2 ">
          <div className=" col-xl-8 col-12 ">
            <img
              className="img-fluid"
              src={deviceImgeRender( productDatas?.type_banner_image)}
              alt=""
            />
          </div>
          <div className="col-xl-4 col-12 return-policy-div">
            <h1>{productDatas?.return_title}</h1>
            <p>{productDatas?.return_text_1}</p>
            <h6>{productDatas?.return_text_2}</h6>
            <a href={productDatas?.return_button_link}>
              {productDatas?.return_button_text}
            </a>
          </div>
        </div>
        <hr
          style={{
            borderColor: "#000",
          }}
        />
        <div className="row">
          <div className="col-md-8">
            <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
              {/* nav item */}
              <li className="nav-item" role="presentation">
                {/* btn */}{" "}
                <button
                  className="nav-link active"
                  id="rating-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#rating-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="rating-tab-pane"
                  aria-selected="true"
                >
                  Product Rating
                </button>
              </li>
              {/* nav item */}
              <li className="nav-item" role="presentation">
                {/* btn */}{" "}
                <button
                  className="nav-link"
                  id="reviews-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#reviews-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="reviews-tab-pane"
                  aria-selected="false"
                >
                  BRAND REVIEWS
                </button>
              </li>
            </ul>
            {/* tab content */}
            <div className="tab-content" id="myTabContent">
              {/* tab pane */}
              <RatingModal setRefetch={setRefetch} currentVariant={currentVariant} type={"product"}/>

              <ProductRating refetch ={ refetch} setRefetch={setRefetch}  currentVariant={currentVariant}/>
              {/* tab pane */}
              <BrandRating refetch ={ refetch}  setRefetch={setRefetch}  currentVariant={currentVariant}/>
             
            </div>
          </div>
          <div className="col-md-4">
            <h2 className="p-d">bought together</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default DesktopSpec;
