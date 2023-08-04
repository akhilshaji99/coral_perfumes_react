import BreadCrumps from "../common/BreadCrumps";
import { useEffect } from "react";
import request from "../../utils/request";
import { useState } from "react";

function Index() {
  const [cartDatas, setcartDatas] = useState([]);
  useEffect(() => {
    getCartDatas();
  }, []);

  const getCartDatas = async () => {
    const guestToken = localStorage.getItem("guestToken");
    try {
      const response = await request.post("api/cart/items/", {
        token: guestToken,
      });

      if (response?.data?.status) {
        setcartDatas(response?.data?.data?.shopping_cart_items);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <BreadCrumps />
      <section className="mb-lg-14 mb-8 mt-8">
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-12">
              {/* card */}
              <div className="card py-1 border-0 mb-8">
                <div>
                  <h1 className="fw-bold">Shop Cart</h1>
                </div>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="py-3">
                <ul className="list-group list-group-flush">
                  {/* list group */}

                  {/* list group */}
                  {cartDatas?.map((cartData, index) => {
                    return (
                      <li
                        className="list-group-item py-3 py-lg-0 px-0"
                        key={index}
                      >
                        {/* row */}
                        <div className="row align-items-center">
                          <div className="col-3 col-md-2">
                            {/* img */}{" "}
                            <img
                              src="../assets/images/products/product-img-3.jpg"
                              alt="Ecommerce"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-4 col-md-5">
                            {/* title */}
                            <a href="shop-single.html" className="text-inherit">
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
                          {/* input group */}
                          <div className="col-3 col-md-3 col-lg-2">
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
                    );
                  })}
                  {/* list group */}
                </ul>
              </div>
            </div>
            {/* sidebar */}
            <div className="col-12 col-lg-4 col-md-5">
              {/* card */}
              <div className="mb-5 card mt-6">
                <div className="card-body p-6">
                  {/* heading */}
                  <h2 className="h5 mb-4">Summary</h2>
                  <div className="card mb-2">
                    {/* list group */}
                    <ul className="list-group list-group-flush">
                      {/* list group item */}
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="me-auto">
                          <div>Item Subtotal</div>
                        </div>
                        <span>$70.00</span>
                      </li>
                      {/* list group item */}
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="me-auto">
                          <div>Service Fee</div>
                        </div>
                        <span>$3.00</span>
                      </li>
                      {/* list group item */}
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="me-auto">
                          <div className="fw-bold">Subtotal</div>
                        </div>
                        <span className="fw-bold">$67.00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-grid mb-1 mt-4">
                    {/* btn */}
                    <button
                      className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                      type="submit"
                    >
                      Go to Checkout <span className="fw-bold">$67.00</span>
                    </button>
                  </div>
                  {/* text */}
                  <p>
                    <small>
                      By placing your order, you agree to be bound by the
                      Freshcart <a href="#!">Terms of Service</a>
                      and <a href="#!">Privacy Policy.</a>{" "}
                    </small>
                  </p>
                  {/* heading */}
                  <div className="mt-8">
                    <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
                    <form>
                      <div className="mb-2">
                        {/* input */}
                        <label
                          htmlFor="giftcard"
                          className="form-label sr-only"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="giftcard"
                          placeholder="Promo or Gift Card"
                        />
                      </div>
                      {/* btn */}
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-outline-dark mb-1"
                        >
                          Redeem
                        </button>
                      </div>
                      <p className="text-muted mb-0">
                        {" "}
                        <small>Terms &amp; Conditions apply</small>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Index;
