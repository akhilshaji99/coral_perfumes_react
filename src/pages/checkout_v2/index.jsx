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
import getCheckOutDetails from "../checkout/js/checkOutFetch";
import { useFormik } from "formik";
import deviceImageRender from "../../utils/deviceImageRender";
import Select from "react-select";
import UpdateCheckoutDetails from "../checkout/js/updateCheckoutDetails";
import * as yup from "yup";

function Index() {
  const [deliveryType, setDeliveryType] = useState(1);
  const [countryCodes, setCountryCodes] = useState([]);
  const [checkoutDatas, setCheckoutDatas] = useState();
  const [cartDetails, setCartDetails] = useState();
  const [emirates, setEmirates] = useState();
  const [emirateCityDatas, setEmirateCityDatas] = useState([]);
  const [cityDefaultValue, setCityDefaultValue] = useState(null);

  const changeDeliveryType = (del_type) => {
    setDeliveryType(del_type);
  };

  //Country code
  useEffect(() => {
    getCountryCodes().then((data) => {
      setCountryCodes(data?.data);
    });
  }, []);

  const onCountrySelect = (code) => {
    addressForm.setFieldValue("country_code", {
      country_code: code,
      phone_code: countryCodes[code].primary,
    });
  };
  //#End of Country code

  //Checkout fetch
  useEffect(() => {
    fetchCheckoutApi();
  }, []);

  const fetchCheckoutApi = () => {
    getCheckOutDetails().then(async (response) => {
      setCheckoutDatas(response?.data);
      setCartDetails(response?.data?.cart_items);
      setEmirates(response?.data?.emirates);
      //Setting initial states
      addressForm.setFieldValue(
        "mobile_number",
        response?.data?.user_data?.phone_number
      );
      addressForm.setFieldValue("email", response?.data?.user_data?.email);
      addressForm.setFieldValue("emirate_id", response?.data?.emirates[0].id);
      //#End
      formatCities(response?.data?.emirates[0]?.areas).then((data) => {
        setCityDefaultValue(data[0]); //Setting default city
        setEmirateCityDatas(data);
        addressForm.setFieldValue("city", data[0].value);
      }); //getting emirate cities
      //Set Values
      // setEmirateCityDatas()
      //#End of set values
    });
  };
  //#End of checkout fetch

  //Checkout Update
  const checkoutValidation = yup.object().shape({
    fullname: yup.string().required("Name is required"),
    mobile_number: yup
      .string()
      .required("Mobile number is required")
      .matches(/^[0-9]{10}$/, "Invalid mobile number"),
    email: yup
      .string()
      .email("Enter valid email")
      .required("Email is required"),
    address: yup.string().required("Address is required"),
    street_name: yup.string().required("Street Name is required"),
  });

  const handleOnSubmit = () => {
    // addressForm.setFieldValue("delivery_type", deliveryType);
    // console.log(addressForm.values);
    UpdateCheckoutDetails(addressForm.values).then((response) => {
      // if (response?.data?.status) {
      //   setConfirmButtonStatus(true);
      //   setCartItems(response?.data?.data?.cart_items);
      //   setPaymentTypes(response?.data?.data?.payment_types);
      //   addressForm.setFieldValue(
      //     "address_id",
      //     response?.data?.data?.address_id
      //   );
      // } else {
      //   fetchCheckoutApi(false);
      // }
    });
  };

  const addressForm = useFormik({
    initialValues: {
      fullname: "",
      country_code: {
        country_code: "AE",
        phone_code: "+971",
      },
      mobile_number: "",
      email: "",
      address: "",
      street_name: "",
      emirate_id: "",
      city: "",
      instructions: "",
      address_label: "1",
      gift_wrapping: "",
      payment_type: "",
      store_emirate_id: "",
      store_store_id: "",
      delivery_type: "1",
    },
    validationSchema: checkoutValidation,
    onSubmit: handleOnSubmit,
  });

  //#End of checkout update

  //Emirate City

  // const changeCityDatas = async (cities, selected_city = null) => {
  //   try {
  //     const datas = await formatCities(cities);
  //     setEmirateCityDatas(datas); //set emirate cities
  //     if (datas.length > 0) {
  //       if (selected_city) {
  //         setCityDefaultValue(selected_city);
  //         addressForm.setFieldValue("city", selected_city.value);
  //       } else {
  //         setCityDefaultValue(datas[0]); //set default value on refresh & edit
  //         addressForm.setFieldValue("city", datas[0].value);
  //       }
  //     }
  //     setStatus(!status);
  //   } catch (error) {
  //     // Handle any errors that might occur during the asynchronous operation
  //     console.error("Error while formatting cities:", error);
  //   }
  // };

  const formatCities = async (cities) => {
    try {
      const emirateCityDatas =
        cities?.map((element) => ({
          label: element?.area_name || "",
          value: element?.area_name || null,
        })) || [];

      return emirateCityDatas;
    } catch (error) {
      // Handle any errors that might occur during the formatting process
      console.error("Error while formatting cities:", error);
      throw error; // Propagate the error for the caller to handle
    }
  };

  const emirateCityOnChange = (value) => {
    addressForm.setFieldValue("city", value.value);
    setCityDefaultValue(value);
  };
  //#End of emirate city

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
                  <form onSubmit={addressForm.handleSubmit}>
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
                                    className={`form-control ${
                                      addressForm?.errors?.fullname
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    placeholder="Full  Name "
                                    name="fullname"
                                    value={addressForm.values.fullname}
                                    onChange={addressForm.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 col-12">
                                <div className="mb-lg-0">
                                  <div className="adrs-ph">
                                    <ReactFlagsSelect
                                      selected={
                                        addressForm.values.country_code
                                          .country_code
                                      }
                                      onSelect={onCountrySelect}
                                      className="country-list"
                                      customLabels={countryCodes}
                                      countries={Object.keys(countryCodes)}
                                      searchable={true}
                                      placeholder="Country"
                                      showSecondaryOptionLabel={true}
                                    />
                                    <input
                                      type="text"
                                      placeholder="Mob Number"
                                      name="mobile_number"
                                      className={`form-control ${
                                        addressForm?.errors?.mobile_number
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      value={addressForm.values.mobile_number}
                                      onChange={addressForm.handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-12">
                                <div className="mb-lg-0">
                                  <input
                                    type="text"
                                    name="email"
                                    className={`form-control ${
                                      addressForm?.errors?.email
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                    placeholder="Email*"
                                    value={addressForm.values.email}
                                    onChange={addressForm.handleChange}
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
                                  placeholder="Address (Room, Flat, Building)"
                                  name="address"
                                  className={`form-control ${
                                    addressForm?.errors?.address
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  value={addressForm.values.address}
                                  onChange={addressForm.handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className=" mb-lg-0">
                                <input
                                  type="text"
                                  placeholder="Street Name"
                                  name="street_name"
                                  className={`form-control ${
                                    addressForm?.errors?.street_name
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  value={addressForm.values.street_name}
                                  onChange={addressForm.handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className=" mb-lg-0">
                                <select
                                  className="form-select"
                                  aria-label="Default select"
                                  name="emirate_id"
                                  onChange={(event) => {
                                    let emirateDatas = JSON.parse(
                                      event.target.value
                                    );

                                    addressForm.setFieldValue(
                                      "emirate_id",
                                      emirateDatas?.id
                                    );
                                    formatCities(emirateDatas?.areas).then(
                                      (data) => {
                                        setEmirateCityDatas(data);
                                        setCityDefaultValue(data[0]);
                                        addressForm.setFieldValue(
                                          "city",
                                          data[0].value
                                        );
                                      }
                                    );
                                  }}
                                >
                                  {emirates?.map((emirate) => {
                                    return (
                                      <option
                                        value={JSON.stringify(emirate)}
                                        // selected={
                                        //   parseInt(addressForm.emirate_id) ===
                                        //   parseInt(emirate?.id)
                                        // }
                                      >
                                        {emirate?.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className=" mb-lg-0">
                                <Select
                                  className="emirate-city-select"
                                  options={emirateCityDatas}
                                  onChange={emirateCityOnChange}
                                  value={cityDefaultValue}
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className=" mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Your Special delivery Instructions here"
                                  name="instructions"
                                  value={addressForm.values.instructions}
                                  onChange={addressForm.handleChange}
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
                            {/* <div className="col-12 sm-none">
                              <div className=" mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Your Special delivery Instructions here"
                                  name="floor_number"
                                  defaultValue=""
                                />
                              </div>
                            </div> */}
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
                              {checkoutDatas?.address_home_office.map(
                                (addressData, index) => {
                                  return (
                                    <div
                                      className={`form-check ${
                                        index === 0 ? "me-5" : "ms-5"
                                      }`}
                                      key={index}
                                    >
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="addrs_label"
                                        value={addressData?.value}
                                        onChange={() => {
                                          addressForm.setFieldValue(
                                            "address_label",
                                            addressData?.value
                                          );
                                        }}
                                        checked={
                                          addressForm.values.address_label ===
                                          addressData?.value
                                            ? true
                                            : false
                                        }
                                      />
                                      <label className="option-lb ps-5">
                                        {addressData?.title}
                                      </label>
                                    </div>
                                  );
                                }
                              )}

                              {/* <div className="form-check ms-5">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="addrs_label"
                                />
                                <label className="option-lb ps-5">Work</label>
                              </div> */}
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
                      <div className="card-body p-6">
                        <div className="d-flex row align-items-center">
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
                                  {checkoutDatas?.gift_wrap_content}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
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
                    <div id="payment_type_accordian" className="checkout-adrs">
                      <div className="mb-1">
                        <div className="card-body p-1">
                          {checkoutDatas?.payment_types?.map(
                            (paymentType, index) => {
                              return (
                                <div className="row" key={index}>
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
                                              {paymentType?.name}
                                              {paymentType?.display_title ? (
                                                <span>
                                                  : {paymentType?.display_title}
                                                </span>
                                              ) : (
                                                ""
                                              )}
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {paymentType?.image ? (
                                    <div className="col-md-4 col-3">
                                      <div className="card-body pt-3">
                                        <img
                                          src={deviceImageRender(
                                            paymentType?.image
                                          )}
                                          alt="card-image"
                                          className="payment-card-img"
                                        />
                                      </div>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              );
                            }
                          )}
                          {/* <div className="row">
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
                          </div> */}
                          <div className="row">
                            <div className="col-12">
                              <div className="d-grid mt-5">
                                <button
                                  type="button"
                                  className="btn btn-bgc mb-1"
                                  disabled={true}
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
                </div>
              </div>
              <CartDetails cartDetails={cartDetails} />
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
export default Index;
