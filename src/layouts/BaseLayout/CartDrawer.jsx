function CartDrawer() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header border-bottom">
        <div className="text-start">
          <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
            Shop Cart
          </h5>
          <small>Location in 382480</small>
        </div>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <div className="">
          {/* alert */}
          <div className="alert alert-danger p-2" role="alert">
            You’ve got FREE delivery. Start{" "}
            <a href="#!" className="alert-link">
              checkout now!
            </a>
          </div>
          <ul className="list-group list-group-flush">
            {/* list group */}
            <li className="list-group-item py-3 ps-0 border-top">
              {/* row */}
              <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-7">
                  <div className="d-flex">
                    <img
                      src="assets/images/products/product-img-1.jpg"
                      alt="Ecommerce"
                      className="icon-shape icon-xxl"
                    />
                    <div className="ms-3">
                      {/* title */}
                      <a href="pages/shop-single.html" className="text-inherit">
                        <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                      </a>
                      <span>
                        <small className="text-muted">.98 / lb</small>
                      </span>
                      {/* text */}
                      <div className="mt-2 small lh-1">
                        {" "}
                        <a
                          href="#!"
                          className="text-decoration-none text-inherit"
                        >
                          {" "}
                          <span className="me-1 align-text-bottom">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2 text-success"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          <span className="text-muted">Remove</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* input group */}
                <div className="col-4 col-md-3 col-lg-3">
                  {/* input */}
                  {/* input */}
                  <div className="input-group input-spinner  ">
                    <input
                      type="button"
                      defaultValue="-"
                      className="button-minus  btn  btn-sm "
                      data-field="quantity"
                    />
                    <input
                      type="number"
                      step={1}
                      max={10}
                      defaultValue={1}
                      name="quantity"
                      className="quantity-field form-control-sm form-input   "
                    />
                    <input
                      type="button"
                      defaultValue="+"
                      className="button-plus btn btn-sm "
                      data-field="quantity"
                    />
                  </div>
                </div>
                {/* price */}
                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                  <span className="fw-bold">$5.00</span>
                </div>
              </div>
            </li>
            {/* list group */}
            <li className="list-group-item py-3 ps-0">
              {/* row */}
              <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-7">
                  <div className="d-flex">
                    <img
                      src="assets/images/products/product-img-2.jpg"
                      alt="Ecommerce"
                      className="icon-shape icon-xxl"
                    />
                    <div className="ms-3">
                      <a href="pages/shop-single.html" className="text-inherit">
                        <h6 className="mb-0">NutriChoice Digestive </h6>
                      </a>
                      <span>
                        <small className="text-muted">250g</small>
                      </span>
                      {/* text */}
                      <div className="mt-2 small lh-1">
                        {" "}
                        <a
                          href="#!"
                          className="text-decoration-none text-inherit"
                        >
                          {" "}
                          <span className="me-1 align-text-bottom">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2 text-success"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          <span className="text-muted">Remove</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* input group */}
                <div className="col-4 col-md-3 col-lg-3">
                  {/* input */}
                  {/* input */}
                  <div className="input-group input-spinner  ">
                    <input
                      type="button"
                      defaultValue="-"
                      className="button-minus  btn  btn-sm "
                      data-field="quantity"
                    />
                    <input
                      type="number"
                      step={1}
                      max={10}
                      defaultValue={1}
                      name="quantity"
                      className="quantity-field form-control-sm form-input   "
                    />
                    <input
                      type="button"
                      defaultValue="+"
                      className="button-plus btn btn-sm "
                      data-field="quantity"
                    />
                  </div>
                </div>
                {/* price */}
                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                  <span className="fw-bold text-danger">$20.00</span>
                  <div className="text-decoration-line-through text-muted small">
                    $26.00
                  </div>
                </div>
              </div>
            </li>
            {/* list group */}
            <li className="list-group-item py-3 ps-0">
              {/* row */}
              <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-7">
                  <div className="d-flex">
                    <img
                      src="assets/images/products/product-img-3.jpg"
                      alt="Ecommerce"
                      className="icon-shape icon-xxl"
                    />
                    <div className="ms-3">
                      {/* title */}
                      <a href="pages/shop-single.html" className="text-inherit">
                        <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                      </a>
                      <span>
                        <small className="text-muted">1 kg</small>
                      </span>
                      {/* text */}
                      <div className="mt-2 small lh-1">
                        {" "}
                        <a
                          href="#!"
                          className="text-decoration-none text-inherit"
                        >
                          {" "}
                          <span className="me-1 align-text-bottom">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2 text-success"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          <span className="text-muted">Remove</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* input group */}
                <div className="col-4 col-md-3 col-lg-3">
                  {/* input */}
                  {/* input */}
                  <div className="input-group input-spinner  ">
                    <input
                      type="button"
                      defaultValue="-"
                      className="button-minus  btn  btn-sm "
                      data-field="quantity"
                    />
                    <input
                      type="number"
                      step={1}
                      max={10}
                      defaultValue={1}
                      name="quantity"
                      className="quantity-field form-control-sm form-input   "
                    />
                    <input
                      type="button"
                      defaultValue="+"
                      className="button-plus btn btn-sm "
                      data-field="quantity"
                    />
                  </div>
                </div>
                {/* price */}
                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                  <span className="fw-bold">$15.00</span>
                  <div className="text-decoration-line-through text-muted small">
                    $20.00
                  </div>
                </div>
              </div>
            </li>
            {/* list group */}
            <li className="list-group-item py-3 ps-0">
              {/* row */}
              <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-7">
                  <div className="d-flex">
                    <img
                      src="assets/images/products/product-img-4.jpg"
                      alt="Ecommerce"
                      className="icon-shape icon-xxl"
                    />
                    <div className="ms-3">
                      {/* title */}
                      {/* title */}
                      <a href="pages/shop-single.html" className="text-inherit">
                        <h6 className="mb-0">Onion Flavour Potato</h6>
                      </a>
                      <span>
                        <small className="text-muted">250g</small>
                      </span>
                      {/* text */}
                      <div className="mt-2 small lh-1">
                        {" "}
                        <a
                          href="#!"
                          className="text-decoration-none text-inherit"
                        >
                          {" "}
                          <span className="me-1 align-text-bottom">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2 text-success"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          <span className="text-muted">Remove</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* input group */}
                <div className="col-4 col-md-3 col-lg-3">
                  {/* input */}
                  {/* input */}
                  <div className="input-group input-spinner  ">
                    <input
                      type="button"
                      defaultValue="-"
                      className="button-minus  btn  btn-sm "
                      data-field="quantity"
                    />
                    <input
                      type="number"
                      step={1}
                      max={10}
                      defaultValue={1}
                      name="quantity"
                      className="quantity-field form-control-sm form-input   "
                    />
                    <input
                      type="button"
                      defaultValue="+"
                      className="button-plus btn btn-sm "
                      data-field="quantity"
                    />
                  </div>
                </div>
                {/* price */}
                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                  <span className="fw-bold">$15.00</span>
                  <div className="text-decoration-line-through text-muted small">
                    $20.00
                  </div>
                </div>
              </div>
            </li>
            {/* list group */}
            <li className="list-group-item py-3 ps-0 border-bottom">
              {/* row */}
              <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-7">
                  <div className="d-flex">
                    <img
                      src="assets/images/products/product-img-5.jpg"
                      alt="Ecommerce"
                      className="icon-shape icon-xxl"
                    />
                    <div className="ms-3">
                      {/* title */}
                      <a href="pages/shop-single.html" className="text-inherit">
                        <h6 className="mb-0">Salted Instant Popcorn </h6>
                      </a>
                      <span>
                        <small className="text-muted">100g</small>
                      </span>
                      {/* text */}
                      <div className="mt-2 small lh-1">
                        {" "}
                        <a
                          href="#!"
                          className="text-decoration-none text-inherit"
                        >
                          {" "}
                          <span className="me-1 align-text-bottom">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2 text-success"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                          </span>
                          <span className="text-muted">Remove</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* input group */}
                <div className="col-4 col-md-3 col-lg-3">
                  {/* input */}
                  {/* input */}
                  <div className="input-group input-spinner  ">
                    <input
                      type="button"
                      defaultValue="-"
                      className="button-minus  btn  btn-sm "
                      data-field="quantity"
                    />
                    <input
                      type="number"
                      step={1}
                      max={10}
                      defaultValue={1}
                      name="quantity"
                      className="quantity-field form-control-sm form-input   "
                    />
                    <input
                      type="button"
                      defaultValue="+"
                      className="button-plus btn btn-sm "
                      data-field="quantity"
                    />
                  </div>
                </div>
                {/* price */}
                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                  <span className="fw-bold">$15.00</span>
                  <div className="text-decoration-line-through text-muted small">
                    $25.00
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/* btn */}
          <div className="d-flex justify-content-between mt-4">
            <a href="#!" className="btn btn-primary">
              Continue Shopping
            </a>
            <a href="#!" className="btn btn-dark">
              Update Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartDrawer;
