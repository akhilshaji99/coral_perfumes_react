
function DesktopSpec({ productDatas }) {
  return (
    <>
      <div className="row align-items-center d-none d-sm-block">
        <div className="col-md-8">
          <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
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
                <div dangerouslySetInnerHTML={{ __html: productDatas?.faq }} />
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
    </>
  );
}
export default DesktopSpec;
