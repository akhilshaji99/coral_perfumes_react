import "../../assets/checkout/deliveryaddress.css";
import backButton from "../../assets/checkout/back-btn.svg";
import Bag from "../../assets/checkout/bag-2.svg";
import Edit from "../../assets/checkout/edit-2.svg";
import Ficon from "../../assets/checkout/f_icon.svg";
import Logo from "../../assets/checkout/logo_coral.svg";
import SafeCheck from "../../assets/checkout/safe-check.svg";
import SecCheck from "../../assets/checkout/secu-check.svg";
import { useEffect, useState } from "react";
import CartDetails from "./blocks/CartDetails";
import getCountryCodes from "../common/js/countryCodes";
import ReactFlagsSelect from "react-flags-select";

function Index() {
  const [deliveryType, setDeliveryType] = useState(1);
  const [countryCodes, setCountryCodes] = useState([]);

  const changeDeliveryType = (del_type) => {
    setDeliveryType(del_type);
  };

  useEffect(() => {
    getCountryCodes().then((data) => {
      setCountryCodes(data?.data);
      // console.log("data", data?.data);
    });
  }, []);

  return (
    <>
      <body className="deliv-address">
        <section className="new-header">
          <header>
            <div className="container-md-fluid">
              <div className="row align-items-center">
                <div className="col-2 col-md-4   sm-none">
                  <a
                    href="#"
                    className="btn btn-dark"
                    style={{ marginLeft: 14 }}
                  >
                    Back to Shopping{" "}
                  </a>
                </div>
                <div className="col-4 col-md-4  d-md-none">
                  <a href="#">
                    <img src={backButton} />
                  </a>
                </div>
                <div className="col-4 col-md-4  logo-checkout">
                  <img src={Logo} alt="logo-img" />
                </div>
                <div className="col-4 col-md-4  secu-check sm-none">
                  <ul>
                    <li>
                      <img className="secure-img" src={SecCheck} alt="img" />
                      <a href="#">Secure Checkout</a>
                    </li>
                    <li>
                      <img className="safe-img" src={SafeCheck} alt="img" />
                      <a href="#">100% safe</a>
                    </li>
                  </ul>
                </div>
                <div className="col-4 col-md-4  secu-check d-md-none">
                  <div className="seimg-checkout">
                    <img className="safe-img" src={SafeCheck} alt="img" />
                    <a href="#">100% safe</a>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </section>
        <section className="delivery-adrs-top">
          <div className="container-md-fluid">
            <div className="row">
              <div className="col-12 d-md-none">
                <div className="mb-8 text-center ">
                  <h1 className="sub-heading">CHECK OUT</h1>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div
                  className="accordion accordion-flush "
                  id="accordionFlushExample"
                >
                  <form>
                    <div className="accordion-item checkout-adrs">
                      <div className="d-flex justify-content-between align-items-center adrs-info">
                        <h4 className="pt-3 ps-3 "> BASIC INFO</h4>
                        <a
                          href="#"
                          className="fs-5 text-inherit collapsed h4"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo-1"
                          aria-expanded="true"
                          aria-controls="flush-collapseTwo-1"
                        >
                          <button type="button" className="btn btn-default">
                            <span className="accordion-arrow">
                              <svg
                                width={18}
                                height={9}
                                viewBox="0 0 18 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.07992 8.04999L7.59992 1.52999C8.36992 0.759988 9.62992 0.759988 10.3999 1.52999L16.9199 8.04999"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </button>
                        </a>
                      </div>
                      <div
                        id="flush-collapseTwo-1"
                        className="accordion-collapse collapse show "
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="mb-1">
                          <div className="card-body p-1">
                            <div className="row g-5 m-2 mts">
                              <div className="col-md-12 col-12">
                                <div className="mb-lg-0">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Full  Name "
                                    name="full_name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 col-12">
                                <div className="mb-lg-0">
                                  <div className="adrs-ph">
                                    <ReactFlagsSelect
                                      // selected={
                                      //   selectedCountryCode.country_code
                                      // }
                                      // onSelect={onCountrySelect}
                                      className="country-list"
                                      customLabels={countryCodes}
                                      countries={Object.keys(countryCodes)}
                                      searchable={true}
                                      placeholder="Country"
                                      showSecondaryOptionLabel={true}
                                    />
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Mob Number"
                                      name="mob-num"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-12">
                                <div className="mb-lg-0">
                                  <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email*"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item checkout-adrs ">
                      <div className="checkout-tab" role="tablist">
                        <input
                          type="radio"
                          className="tabs-ckeck"
                          name="tabs"
                          id="tab1"
                          defaultChecked="true"
                        />
                        <label
                          className={`checkout-tab-label ${
                            deliveryType === 1 ? "check_active" : ""
                          }`}
                          htmlFor="tab1"
                          role="tab"
                          aria-selected="true"
                          aria-controls="tab-content1"
                          tabIndex={0}
                          onClick={() => {
                            changeDeliveryType(1);
                          }}
                        >
                          Delivery Address
                        </label>
                        <input
                          type="radio"
                          className="tabs-ckeck"
                          name="tabs"
                          id="tab2"
                        />
                        <label
                          className={`checkout-tab-label l-2  ${
                            deliveryType === 2 ? "check_active" : ""
                          } `}
                          htmlFor="tab2"
                          role="tab"
                          aria-selected="false"
                          aria-controls="tab-content2"
                          tabIndex={0}
                          onClick={() => {
                            changeDeliveryType(2);
                          }}
                        >
                          Store Pick up
                        </label>
                        <a
                          href="#"
                          className="fs-5 text-inherit collapsed h4"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="true"
                          aria-controls="flush-collapseTwo"
                        >
                          <button type="button" className="btn btn-default">
                            <span className="accordion-arrow">
                              <svg
                                width={18}
                                height={9}
                                viewBox="0 0 18 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.07992 8.04999L7.59992 1.52999C8.36992 0.759988 9.62992 0.759988 10.3999 1.52999L16.9199 8.04999"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </button>
                        </a>
                        <div
                          id="tab-content1"
                          className="checkout-tab-content"
                          role="tabpanel"
                          aria-labelledby="tab1"
                          aria-hidden="false"
                        >
                          <div className="row g-5 m-2 mts">
                            <div className="col-md-6 col-12">
                              <div className="mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Address (Room, Flat, Building)"
                                  name="flat_building"
                                  defaultValue=""
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className=" mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Street Name"
                                  name="Street_Name"
                                  defaultValue=""
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className=" mb-lg-0">
                                <select
                                  className="form-select"
                                  aria-label="Default select "
                                >
                                  <option selected="">Dubai</option>
                                  <option value={1}>Abu Dhabi</option>
                                  <option value={2}>Sharjah</option>
                                  <option value={3}>Ras Al Khaima</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className=" mb-lg-0">
                                <select
                                  className="form-select"
                                  aria-label="Default select"
                                >
                                  <option selected="">AL TAWR</option>
                                  <option value={1}>AL TAWR 1</option>
                                  <option value={2}>AL TAWR 2</option>
                                  <option value={3}>AL TAWR 3</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className=" mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Your Special delivery Instructions here"
                                  name="floor_number"
                                  defaultValue=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="tab-content2"
                          className="checkout-tab-content"
                          role="tabpanel"
                          aria-labelledby="tab2"
                          aria-hidden="true"
                        >
                          <div className="row g-5 m-2 mts">
                            <div className="col-md-6 col-12">
                              <div className=" mb-lg-0">
                                <select
                                  className="form-select"
                                  aria-label="Default select"
                                >
                                  <option selected="">AL TAWR</option>
                                  <option value={1}>AL TAWR 1</option>
                                  <option value={2}>AL TAWR 2</option>
                                  <option value={3}>AL TAWR 3</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className=" mb-lg-0">
                                <select
                                  className="form-select"
                                  aria-label="Default select "
                                >
                                  <option selected="">Dubai</option>
                                  <option value={1}>Abu Dhabi</option>
                                  <option value={2}>Sharjah</option>
                                  <option value={3}>Ras Al Khaima</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className=" mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Your Special delivery Instructions here"
                                  name="floor_number"
                                  defaultValue=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="tab-content1"
                          className="checkout-tab-content"
                          role="tabpanel"
                          aria-labelledby="tab2"
                          aria-hidden="true"
                        >
                          <div className="row g-5 m-2 mts">
                            {/* <div className="col-md-6 col-12">
                              <div className="display-sub">
                                <div className="display-img">
                                  <img
                                    src={SafeCheck}
                                    alt="img-tick"
                                  />
                                </div>
                                <div className="display-text">
                                  <p>JEES JOHN</p>
                                  <p>Arjan</p>
                                  <div className="edit-txt">
                                    <p>Al Aflaj - Al Ain -(AE)</p>
                                    <a href="#">
                                      <img src={Edit} alt="edit" />
                                    </a>
                                  </div>
                                  <div className="edit-txt">
                                    <p>+971 559238088</p>
                                    <a href="#">
                                      <img src={Bag} alt="edit" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className="display-add">
                                <a href="#">+ Add New Address</a>
                              </div>
                            </div> */}
                            <div className="col-12 sm-none">
                              <div className=" mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Your Special delivery Instructions here"
                                  name="floor_number"
                                  defaultValue=""
                                />
                              </div>
                            </div>
                            <div className="col-12  d-md-none">
                              <a
                                href="#"
                                className="btn btn-dark d-block"
                                style={{ marginLeft: 14 }}
                              >
                                Back to Shopping{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-6 pb-0">
                        <div className="d-flex row align-items-center">
                          <div className="col-12 pb-2">
                            <h5 className="h6 pt-2">
                              Address Label (Optional)
                            </h5>
                            <div className="d-flex pt-2">
                              <div className="form-check me-5">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="addrs_label"
                                />
                                <label className="option-lb ps-5">Home</label>
                              </div>
                              <div className="form-check ms-5">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="addrs_label"
                                />
                                <label className="option-lb ps-5">Work</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="row align-items-center">
                              <div className="col-2 col-md-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gift_wrapping"
                                  />
                                </div>
                              </div>
                              <div className="col-10 col-md-9 p-0">
                                <h5 className="h6 pt-2">
                                  Add Gift Wrapping (AED 5 Charge Apply)
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center mt-5 ml-5 pb-5">
                        <div className="col-md-6 col-12 mob-change">
                          <button
                            type="submit"
                            className="btn btn-dark validate"
                            style={{ marginLeft: 14 }}
                          >
                            SAVE ADDRESS
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item checkout-adrs">
                      <div className="d-flex justify-content-between align-items-center adrs-info">
                        <h4 className="pt-3 ps-3 "> PAYMENT TYPE</h4>
                        <a href="#" className="fs-5 text-inherit collapsed">
                          <button type="button" className="btn btn-default">
                            <span className="accordion-arrow">
                              <svg
                                width={18}
                                height={9}
                                viewBox="0 0 18 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.07992 8.04999L7.59992 1.52999C8.36992 0.759988 9.62992 0.759988 10.3999 1.52999L16.9199 8.04999"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </button>
                        </a>
                      </div>
                      <div
                        id="payment_type_accordian"
                        className="checkout-adrs"
                      >
                        <div className="mb-1">
                          <div className="card-body p-1">
                            <div className="row">
                              <div className="col-md-5 col-9 payment-method">
                                <div className="mb-3 mb-lg-0">
                                  <div className="card-body p-3">
                                    <div className="d-flex">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="payment_type"
                                          defaultValue={4}
                                        />
                                      </div>
                                      <div>
                                        <h5 className="h6 pt-1 ps-5">
                                          Tabby{" "}
                                          <span>
                                            : Split into 4, Interest Free
                                          </span>
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-3">
                                <div className="card-body pt-3">
                                  <img
                                    src="https://coralperfumes.cloud6.ae//media/payment/image.webp"
                                    alt="card-image"
                                    className="payment-card-img"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-4 col-8 payment-method">
                                <div className="mb-3 mb-lg-0">
                                  <div className="card-body p-3">
                                    <div className="d-flex">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="payment_type"
                                        />
                                      </div>
                                      <div>
                                        <h5 className="h6 pt-1 ps-5">
                                          Debit/ Credit Card
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-4">
                                <div className="card-body pt-3">
                                  <img
                                    src="https://coralperfumes.cloud6.ae//media/payment/image_7.png"
                                    alt="card-image"
                                    className="payment-card-img"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className="d-grid mt-5">
                                  <button
                                    type="button"
                                    className="btn btn-bgc mb-1"
                                  >
                                    SECURE CHECKOUT
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <CartDetails />
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
export default Index;
