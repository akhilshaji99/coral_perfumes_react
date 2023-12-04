import deviceImgeRender from "../../../utils/deviceImageRender";
import BrandRating from "./BrandRating";
import ProductRating from "./ProductRating";
import BoughtTogether from "./BoughtTogether";

function DesktopSpec({
  currentVariant,
  productDatas,
  setRatingType,
  refetch,
  FbtDatas,
}) {
  const midpoint = Math.ceil(productDatas?.descriptive_attributes.length / 2);
  const firstHalf = productDatas?.descriptive_attributes.slice(0, midpoint);
  const secondHalf = productDatas?.descriptive_attributes.slice(midpoint);
  return (
    <>
      <div className="container-fluid d-none d-sm-block">
        <div className="row">
          <div className="col-md-7">
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
                      className="mb-0 p-d-c tab-scrolls"
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
                    className="p-d-c"
                    dangerouslySetInnerHTML={{ __html: productDatas?.faq }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <h2 className="p-d">Product Detail</h2>
            <div className="row p-ul">
              <div className="col-md-6 p">
                <ul>
                  {firstHalf?.map((descriptive_attribute, index) => {
                    return (
                      <li key={index}>
                        {Object.keys(descriptive_attribute)} :{" "}
                        {
                          descriptive_attribute?.[
                            Object.keys(descriptive_attribute)
                          ]
                        }
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-md-6 p">
                <ul>
                  {secondHalf?.map((descriptive_attribute, index) => {
                    return (
                      <li key={index}>
                        {Object.keys(descriptive_attribute)} :{" "}
                        {
                          descriptive_attribute?.[
                            Object.keys(descriptive_attribute)
                          ]
                        }
                      </li>
                    );
                  })}
                  {currentVariant ? <li>SKU: {currentVariant?.sku}</li> : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            borderColor: "#000",
          }}
        />
        <div className="row py-2 ">
          <div className=" col-xl-7 col-12 ">
            <img
              className="img-fluid get-img"
              src={deviceImgeRender(productDatas?.type_banner_image)}
              alt=""
            />
          </div>
          <div className="col-xl-5 col-12 return-policy-div">
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
          <div className="col-md-7">
            <ul
              className="nav nav-pills nav-lb-tab mb-5"
              id="myTab"
              role="tablist"
            >
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
              <ProductRating
                refetch={refetch}
                currentVariant={currentVariant}
                setRatingType={setRatingType}
              />
              {/* tab pane */}
              <BrandRating
                refetch={refetch}
                currentVariant={currentVariant}
                setRatingType={setRatingType}
              />
            </div>
          </div>
          <div className="col-md-5">
            {FbtDatas && FbtDatas?.products?.length > 0 ? (
              <>
                <h2 className="p-d">bought together</h2>
                <BoughtTogether FbtDatas={FbtDatas} />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
export default DesktopSpec;
