function ProductSpec() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
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
                    <p className="mb-0 p-d-c">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate velit esse
                      molestie consequat, vel illum dolore eu feugiat nulla
                      facilisis at vero eros et accumsan et iusto odio dignissim
                      qui blandit praesent luptatum zzril delenit augue duis
                      dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                      amet, cons ectetuer adipiscing elit,
                    </p>
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
                  <ul className="p-ul">
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh ?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh ?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh ?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh ?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh ?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h2 className="p-d">Product Detail</h2>
            <div className="row p-ul">
              <div className="col-md-6 ">
                <li>SKU:1L019Z100MC2151-B101</li>
              </div>
              <div className="col-md-6">
                <li>Colour:Black</li>
              </div>
              <div className="col-md-6">
                <li>Made in Italy</li>
              </div>
              <div className="col-md-6">
                <li>Designer:Casadei</li>
              </div>
              <div className="col-md-6">
                <li>Fragrance Type</li>
              </div>
              <div className="col-md-6">
                <li>Bottle Size: 11cm</li>
              </div>
              <div className="col-md-6">
                <li>Quantity 100ml-200ml</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductSpec;
