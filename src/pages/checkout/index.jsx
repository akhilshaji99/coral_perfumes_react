import BreadCrumps from "../common/BreadCrumps";
import { useEffect } from "react";
import request from "../../utils/request";
import { useState } from "react";
import TamaraIcon from "../../assets/img/icons/payment/tamara.png";
import MastercardIcon from "../../assets/img/icons/payment/mastercard.svg";
import TabbyIcon from "../../assets/img/icons/payment/tabby.svg";
function Index() {
  const [cartDatas, setcartDatas] = useState([]);
  useEffect(() => {
    //   getCartDatas();
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
            {/* col */}
            <div className="col-12">
              <div>
                <div className="mb-8 text-center">
                  {/* text */}
                  <h1
                    className="fw-bold mb-0"
                    style={{
                      font: "Brandon Text",
                      fontWeight: "450",
                      fontSize: "21px",
                    }}
                  >
                    CHECK OUT
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* row */}
            <div className="row">
              <div className="col-lg-7 col-md-12">
                {/* accordion */}
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {/* accordion item */}
                  <div className="accordion-item card card-bordered shadow mb-2 ">
                    <div className="d-flex justify-content-between align-items-center h">
                      {/* heading one */}

                      <h4 className="pt-3 ps-3 "> PROMO CODE</h4>

                      <a
                        href="#"
                        className="fs-5 text-inherit collapsed h4"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="true"
                        aria-controls="flush-collapseOne"
                      >
                        <button type="button" class="btn btn-default">
                          <span class="glyphicon glyphicon-menu-down">^</span>
                        </button>
                      </a>
                      {/* btn */}

                      {/* collapse */}
                    </div>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse show "
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="mb-1">
                        {/* card body */}
                        <div className="card-body p-3">
                          <div className="d-flex mb-4">
                            <div>
                              {/* <h5 className="mb-1 h6"> PROMO CODE</h5> */}
                              <h4 className="mb-1 h6 "> Add Promo Code</h4>
                            </div>
                          </div>
                          <div className="row g-2">
                            <div className="col-md-6 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Coupon Code"
                                />
                              </div>
                            </div>
                            <div className="col-md-3 col-12">
                              {/* input */}
                              <div className="mb-3  mb-lg-0 position-relative">
                                <div class="">
                                  {" "}
                                  <button
                                    type="submit"
                                    class="btn btn-dark px-4 validate"
                                  >
                                    APPLY
                                  </button>
                                </div>
                              </div>
                            </div>
                            <h5 className="mb-1 h6 pt-2">
                              View Available Promo Codes
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card card-bordered shadow mb-2 ">
                    <div className="d-flex justify-content-between align-items-center h">
                      {/* heading one */}

                      <h4 className="pt-3 ps-3 "> BASIC INFO</h4>

                      <a
                        href="#"
                        className="fs-5 text-inherit collapsed h4"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="true"
                        aria-controls="flush-collapseTwo"
                      >
                        <button type="button" class="btn btn-default">
                          <span class="glyphicon glyphicon-menu-down">^</span>
                        </button>
                      </a>
                      {/* btn */}

                      {/* collapse */}
                    </div>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse show "
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="mb-1">
                        {/* card body */}
                        <div className="card-body p-1">
                          <div className="row g-2 m-2">
                            <div className="col-md-6 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="First Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Last Name"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row g-2 m-2">
                            <div className="col-md-6 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="055 922 8088"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item card card-bordered shadow mb-2 ">
                    <div className="d-flex justify-content-between align-items-center h">
                      {/* heading one */}

                      <h4 className="pt-3 ps-3 "> DELIVERY ADDRESS</h4>

                      <a
                        href="#"
                        className="fs-5 text-inherit collapsed h4"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="true"
                        aria-controls="flush-collapseThree"
                      >
                        <button type="button" class="btn btn-default">
                          <span class="glyphicon glyphicon-menu-down">^</span>
                        </button>
                      </a>
                      {/* btn */}

                      {/* collapse */}
                    </div>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse show "
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="mb-1">
                        {/* card body */}
                        <div className="card-body p-1">
                          <div className="row g-2 m-2">
                            <div className="col-md-6 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Flat Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Building Address"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row g-2 m-2">
                            <div className="col-md-6 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Street Address"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <input
                                  type="text"
                                  disabled
                                  className="form-control"
                                  placeholder="Duabi"
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="pt-2 m-2">
                              {" "}
                              <button
                                type="submit"
                                class="btn btn-dark p-32px validate"
                              >
                                CONFIRM
                              </button>
                            </div>
                          </div>
                          <div className="card-body p-6">
                            {/* check input */}
                            <div className="d-flex">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  checked
                                  name="flexRadioDefault"
                                  id="payoneer"
                                />
                              </div>
                              <div>
                                {/* title */}
                                <h5 className=" pt-1 ps-5 h6">
                                  {" "}
                                  Add Gift Wrapping (AED 5 Charge Apply)
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className="ps-3">
                            <div className="col-md-8 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Your Message"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item card card-bordered shadow mb-2 ">
                    <div className="d-flex justify-content-between align-items-center h">
                      {/* heading one */}

                      <h4 className="pt-3 ps-3 "> DELIVERY TYPE</h4>

                      <a
                        href="#"
                        className="fs-5 text-inherit collapsed h4"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="true"
                        aria-controls="flush-collapseFour"
                      >
                        <button type="button" class="btn btn-default">
                          <span class="glyphicon glyphicon-menu-down">^</span>
                        </button>
                      </a>
                      {/* btn */}

                      {/* collapse */}
                    </div>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse show "
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="mb-1">
                        {/* card body */}
                        <div className="card-body p-1">
                          <div className="row">
                            <div className="col-md-4 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <div className="card-body p-3">
                                  {/* check input */}
                                  <div className="d-flex">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        checked
                                        name="flexRadioDefault"
                                        id="payoneer"
                                      />
                                    </div>
                                    <div>
                                      {/* title */}
                                      <h5 className=" pt-1 ps-5 h6">
                                        {" "}
                                        Standard Delivery
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-12">
                              {/* input */}
                              <div className="card-body pt-3">
                                <h5 className=" pt-1  h6"> AED 0</h5>
                              </div>
                            </div>
                            <h5 className=" ps-12  h6">
                              Delivered on or before Thursday, 20 july, 2023
                            </h5>
                          </div>
                          <div className="row">
                            <div className="col-md-4 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <div className="card-body ps-3">
                                  {/* check input */}
                                  <div className="d-flex">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="payoneer"
                                      />
                                    </div>
                                    <div>
                                      {/* title */}
                                      <h5 className=" pt-1 ps-6 h6">
                                        {" "}
                                        Express Delivery
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-12">
                              {/* input */}
                              <div className="card-body pt-3">
                                <h5 className=" pt-1  h6"> AED 15</h5>
                              </div>
                            </div>
                            <h5 className=" ps-12  h6">
                              Order before 5Pm and get Same day delivery (Dubai
                              & Sharjah)
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item card card-bordered shadow mb-2 ">
                    <div className="d-flex justify-content-between align-items-center h">
                      {/* heading one */}

                      <h4 className="pt-3 ps-3 "> PAYMENT TYPE</h4>

                      <a
                        href="#"
                        className="fs-5 text-inherit collapsed h4"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="true"
                        aria-controls="flush-collapseFive"
                      >
                        <button type="button" class="btn btn-default">
                          <span class="glyphicon glyphicon-menu-down">^</span>
                        </button>
                      </a>
                      {/* btn */}

                      {/* collapse */}
                    </div>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse show "
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="mb-1">
                        {/* card body */}
                        <div className="card-body p-1">
                          <div className="row">
                            <div className="col-md-4 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <div className="card-body p-3">
                                  {/* check input */}
                                  <div className="d-flex">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        checked
                                        name="typeRadioDefault"
                                        id="debCredCard"
                                      />
                                    </div>
                                    <div>
                                      {/* title */}
                                      <h5 className=" pt-1 ps-5 h6">
                                        {" "}
                                        Debit/Credit Card
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-12">
                              {/* input */}
                              <div className="card-body pt-3">
                                <img src={MastercardIcon} alt="Mastercard" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <div className="card-body ps-3">
                                  {/* check input */}
                                  <div className="d-flex">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="typeRadioDefault"
                                        id="tabby"
                                      />
                                    </div>
                                    <div>
                                      {/* title */}
                                      <h5 className=" pt-1 ps-6 h6">
                                        {" "}
                                        Tabby:Split into 4,Intrest free
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-12">
                              {/* input */}
                              <div className="card-body pt-3">
                                <img src={TabbyIcon} alt="Mastercard" />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <div className="card-body ps-3">
                                  {/* check input */}
                                  <div className="d-flex">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="typeRadioDefault"
                                        id="tamara"
                                      />
                                    </div>
                                    <div>
                                      {/* title */}
                                      <h5 className=" pt-1 ps-6 h6">
                                        {" "}
                                        Tamara : Split into 3,Intrest free
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-12">
                              {/* input */}
                              <div className="card-body pt-3">
                                <img src={TamaraIcon} alt="Mastercard" />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 col-12">
                              {/* input */}
                              <div className="mb-3 mb-lg-0">
                                <div className="card-body ps-3">
                                  {/* check input */}
                                  <div className="d-flex">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="typeRadioDefault"
                                        id="cod"
                                      />
                                    </div>
                                    <div>
                                      {/* title */}
                                      <h5 className=" pt-1 ps-6 h6">
                                        {" "}
                                        Cash On Delivery (AED 10 Extra for COD)
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card col-12 col-md-12 offset-lg-1 col-lg-4">
                <div className="mb-5 mt-6">
                  <div className="">
                    <h5 className="px-6 py-4 bg-transparent mb-0">2 ITEMS</h5>
                    <ul className="list-group list-group-flush">
                      {/* list group item */}
                      <li className="list-group-item py-3 ps-0 border-top">
                        <div className="row align-items-center">
                          <div className="col-2 col-md-3">
                            <img
                              src="https://coral-ecom.cloud6.co.in/media/product_listing/Rectangle_54.jpg"
                              alt="Ecommerce"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-5 col-md-5">
                            <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                            <span>
                              <small className="text-muted">.98 / lb</small>
                            </span>
                            <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                          </div>
                        </div>
                      </li>

                      <li className="list-group-item py-3 ps-0 border-top">
                        <div className="row align-items-center">
                          <div className="col-2 col-md-3">
                            <img
                              src="https://coral-ecom.cloud6.co.in/media/product_listing/Rectangle_54.jpg"
                              alt="Ecommerce"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-5 col-md-5">
                            <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                            <span>
                              <small className="text-muted">.98 / lb</small>
                            </span>
                            <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                          </div>
                        </div>
                      </li>

                      {/* list group item */}
                    </ul>
                    <div className="mb-5 card mt-6">
                      <div className="card-body p-6">
                        {/* heading */}
                        <h2 className="h5 mb-4">Summary</h2>
                        <div className="mb-2">
                          {/* list group */}
                          <ul className="list-group list-group-flush">
                            {/* list group item */}
                            <li className="list-group-item py-3 ps-0  d-flex justify-content-between align-items-start">
                              <div className="me-auto">
                                <div>Subtotal</div>
                              </div>
                              <span>$70.00</span>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item py-3 ps-0  d-flex justify-content-between align-items-start">
                              <div className="me-auto">
                                <div>Shipping</div>
                              </div>
                              <span>$3.00</span>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item py-3 ps-0  d-flex justify-content-between align-items-start">
                              <div className="me-auto">
                                <div className="fw-bold">Discount</div>
                              </div>
                              <span className="fw-bold">$67.00</span>
                            </li>
                            <li className="list-group-item py-3 ps-0  d-flex justify-content-between align-items-start">
                              <div className="me-auto">
                                <div className="fw-bold">
                                  <p className="text mb-0">
                                    Total <small> VAT Included</small>
                                  </p>{" "}
                                </div>
                              </div>
                              <span className="fw-bold">$67.00</span>
                            </li>
                          </ul>
                        </div>

                        {/* heading */}
                        <div className="mt-8">
                          <form>
                            {/* btn */}
                            <div className="d-grid">
                              <button
                                type="submit"
                                className="btn btn-dark mb-1"
                              >
                                SECURE CHECKOUT
                              </button>
                            </div>
                            <p className="text-muted mb-0">
                              {" "}
                              <small>
                                {" "}
                                Congragulations your are elgible for a free
                                delievry
                              </small>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
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
