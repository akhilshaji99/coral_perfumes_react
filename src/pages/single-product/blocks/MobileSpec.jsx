import BrandRating from "./BrandRating";
import ProductRating from "./ProductRating";
import deviceImgeRender from "../../../utils/deviceImageRender";

function MobileSpec({ currentVariant, productDatas, setRatingType, refetch }) {
  return (
    <>
      <div className="mob-specs">
        <div className="accordion d-block d-sm-none" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Product Detail
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="row p-ul">
                  {productDatas?.descriptive_attributes?.map(
                    (descriptive_attribute, index) => {
                      return (
                        <div className="col-md-6" key={index}>
                          <ul>
                            <li>
                              {Object.keys(descriptive_attribute)} :{" "}
                              {
                                descriptive_attribute?.[
                                  Object.keys(descriptive_attribute)
                                ]
                              }
                            </li>
                          </ul>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Product Description
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p
                  className="mb-0 p-d-c"
                  dangerouslySetInnerHTML={{
                    __html: productDatas?.description,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                FAQS
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div dangerouslySetInnerHTML={{ __html: productDatas?.faq }} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Return policy
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="col-md-4 return-policy-div">
                  <h1>{productDatas?.return_title}</h1>
                  <p>{productDatas?.return_text_1}</p>
                  <h6>{productDatas?.return_text_2}</h6>
                  <a href={productDatas?.return_button_link}>
                    {" "}
                    {productDatas?.return_button_text}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                product rating
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <ProductRating
                refetch={refetch}
                currentVariant={currentVariant}
                setRatingType={setRatingType}
              />
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Brand Review
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <BrandRating
                refetch={refetch}
                currentVariant={currentVariant}
                setRatingType={setRatingType}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mb-2" id="mobile-menu">
        <img
          className="img-fluid"
          src={deviceImgeRender(productDatas?.type_banner_image)}
          alt=""
        />
      </div>
    </>
  );
}
export default MobileSpec;
