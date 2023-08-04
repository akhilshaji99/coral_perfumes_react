import { NavLink } from "react-router-dom";

function CartDrawer() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header border-bottom">
        <div className="text-start ">
          <h5 id="offcanvasRightLabel" className="mb-0 fs-4 text-white">
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.75191 4.5H10.243C12.836 4.5 13.0953 5.78226 13.2707 7.34677L13.9571 13.3952C14.1783 15.379 13.5987 17 10.9294 17H4.07315C1.39624 17 0.816624 15.379 1.04542 13.3952L1.73181 7.34677C1.89959 5.78226 2.15889 4.5 4.75191 4.5Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.37036 6V3.08333C4.37036 1.83333 5.15277 1 6.32638 1H8.6736C9.84721 1 10.6296 1.83333 10.6296 3.08333V6"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
            2 Items Added
          </h5>
        </div>
        {/* <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              /> */}
      </div>
      <div className="offcanvas-body">
        <div className="">
          <ul className="list-group list-group-flush">
            {/* list group */}
            <li className="list-group-item py-3 ps-0 border-top">
              {/* row */}
              <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-7">
                  <div className="d-flex">
                    <img
                      src="../assets/images/products/product-img-1.jpg"
                      alt="Ecommerce"
                      className="icon-shape icon-xxl"
                    />
                    <div className="ms-3">
                      {/* title */}
                      <a href="shop-single.html" className="text-inherit">
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
          </ul>
          {/* btn */}
          <div className="d-flex justify-content-between mt-4">
            <NavLink className="btn btn-primary" to={"/cart"}>
              Continue Shopping
            </NavLink>
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
