import "../../assets/checkout/deliveryaddress.css";
import backButton from "../../assets/checkout/back-btn.svg";
import Bag from "../../assets/checkout/bag-2.svg";
import Edit from "../../assets/checkout/edit_2.svg";
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
import getStores from "../stores/js/getStores";
import confirmCheckout from "../checkout/js/confirmCheckout";
import PromoCodeModal from "../checkout/blocks/PromoCodeModal";
import UsePromoCode from "../checkout/js/usePromoCode";
import RemovePromoCode from "../checkout/js/removePromoCode";
import toast from "react-hot-toast";
import AlerMessage from "../common/AlerMessage";

function Index() {
  const [countryCodes, setCountryCodes] = useState([]);
  const [checkoutDatas, setCheckoutDatas] = useState();
  const [cartDetails, setCartDetails] = useState();
  const [emirates, setEmirates] = useState();
  const [emirateCityDatas, setEmirateCityDatas] = useState([]);
  const [cityDefaultValue, setCityDefaultValue] = useState(null);
  const [giftWrappingStatus, setGiftWrappingStatus] = useState(false);
  const [payemntAccordianStatus, setpaymentAccordianStatus] = useState("hide");
  const [apiLoading, setApiLoading] = useState(false);
  const [availableStores, setAvailableStores] = useState([]);
  const [showPrmoCodeFlag, setShowPrmoCodeFlag] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeId, setPromoCodeId] = useState(null);
  const [status, setStatus] = useState(false);

  const changeDeliveryType = (del_type) => {
    addressForm.setFieldValue("delivery_type", del_type);
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
    setApiLoading(false);
    getCheckOutDetails().then(async (response) => {
      setCheckoutDatas(response?.data);
      setCartDetails(response?.data?.cart_items);
      setEmirates(response?.data?.emirates);
      //Setting initial states
      addressForm.setFieldValue(
        "fullname",
        response?.data?.default_address?.account_address?.full_name
      );
      addressForm.setFieldValue(
        "address",
        response?.data?.default_address?.account_address?.address
      );
      addressForm.setFieldValue(
        "street_name",
        response?.data?.default_address?.account_address?.street_address
      );
      addressForm.setFieldValue(
        "instructions",
        response?.data?.delivery_instruction_message
      );
      addressForm.setFieldValue(
        "mobile_number",
        response?.data?.user_data?.phone_number
      );
      let sel_addrs_label = response?.data?.default_address?.account_address
        ?.address_label
        ? response?.data?.default_address?.account_address?.address_label
        : 1;
      addressForm.setFieldValue("address_label", sel_addrs_label);
      addressForm.setFieldValue("address_id", response?.data?.address_id);
      addressForm.setFieldValue("payment_type", response?.data?.payment_type);

      if (response?.data?.address_id || response?.data?.store_id) {
        setpaymentAccordianStatus("show");
      }
      addressForm.setFieldValue("delivery_type", response?.data?.delivery_type);
      setGiftWrappingStatus(Boolean(response?.data?.is_gift_wrap));
      addressForm.setFieldValue("email", response?.data?.user_data?.email);
      const sel_emirate_id = response?.data?.default_address?.account_address
        ?.emirate_id
        ? response?.data?.default_address?.account_address?.emirate_id
        : response?.data?.emirates[0].id;
      addressForm.setFieldValue("emirate_id", sel_emirate_id);
      if (response?.data?.country_data) {
        addressForm.setFieldValue("country_code", response?.data?.country_data);
      }
      //#End
      formatCities(response?.data?.emirates[0]?.areas).then((data) => {
        // setCityDefaultValue(data[0]); //Setting default city
        setEmirateCityDatas(data);
        //Setting city data
        let sel_city = response?.data?.default_address?.account_address?.city
          ? response?.data?.default_address?.account_address?.city
          : data[0].value;
        setCityDefaultValue({ label: sel_city, value: sel_city });
        addressForm.setFieldValue("city", sel_city);
        //#End
      }); //getting emirate cities
      //Get emirate stores
      let chk_store_emirate_id = response?.data?.store_emirate_id
        ? response?.data?.store_emirate_id
        : response?.data?.emirates[0].id;
      addressForm.setFieldValue("store_emirate_id", chk_store_emirate_id);
      getStoresByEmirate(chk_store_emirate_id);
      //#End
      setPromoCode(response?.data?.cart_items?.voucher_code);
      setPromoCodeId(response?.data?.cart_items?.voucher_id);

      //Set Values

      setApiLoading(true);
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

  const handleOnSubmit = (type = null) => {
    // addressForm.setFieldValue("gift_wrapping", giftWrappingStatus);
    addressForm.values.gift_wrapping = giftWrappingStatus;
    UpdateCheckoutDetails(addressForm.values, giftWrappingStatus).then(
      (response) => {
        if (response?.data?.status) {
          if (type === "final_submit") {
            confirmCheckout();
          } else {
            fetchCheckoutApi();
          }
        }
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
      }
    );
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
      address_label: "",
      gift_wrapping: "",
      payment_type: "",
      store_emirate_id: "",
      store_store_id: "",
      delivery_type: "",
      address_id: "",
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

  const changeGiftWrappingStatus = async (status) => {
    setGiftWrappingStatus(status);
    return status;
  };

  // useEffect(() => {
  //   if (apiLoading === true) {
  //     handleOnSubmit();
  //   }
  // }, [addressForm.values.payment_type]);

  const getStoresByEmirate = async (emirate_id, store_id = null) => {
    try {
      const response = await getStores(emirate_id);
      if (response?.data?.status) {
        setAvailableStores(response?.data?.data);
        let sel_store_store_id = store_id
          ? store_id
          : response?.data?.data[0]?.id;
        // if(checkoutDatas?.store_id){
        console.log("sel_store_store_id", sel_store_store_id);
        addressForm.setFieldValue("store_store_id", sel_store_store_id);
        // }

        // setStorePickupStoreName(
        //   store_name || response?.data?.data[0]?.store_name
        // );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const applyPrmocode = () => {
    if (promoCode == "") {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={false}
          title={"Error"}
          message={"Please enter a valid promo code."}
        />
      ));
    } else {
      UsePromoCode(null, promoCode).then((response) => {
        fetchCheckoutApi();
      });
    }
  };

  const removePrmocode = (id) => {
    RemovePromoCode(id, null).then((response) => {
      fetchCheckoutApi();
    });
  };

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
        <PromoCodeModal
          setShowPrmoCodeFlag={setShowPrmoCodeFlag}
          showPrmoCodeFlag={showPrmoCodeFlag}
          setPromoCode={setPromoCode}
          fetchCheckoutApi={fetchCheckoutApi}
        />
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
                                          ?.country_code
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
                          // defaultChecked="true"
                        />
                        <label
                          className={`checkout-tab-label ${
                            addressForm.values.delivery_type === 1
                              ? "check_active"
                              : ""
                          }`}
                          htmlFor="tab1"
                          role="tab"
                          // aria-selected="true"
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
                          // defaultChecked="false"
                        />
                        <label
                          className={`checkout-tab-label l-2  ${
                            addressForm.values.delivery_type === 2
                              ? "check_active"
                              : ""
                          } `}
                          htmlFor="tab2"
                          role="tab"
                          // aria-selected="false"
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
                        {/* <div
                          id="tab-content1"
                          className="checkout-tab-content"
                          role="tabpanel"
                          aria-labelledby="tab1"
                          aria-hidden="false"
                        > */}
                        {addressForm.values.delivery_type == 1 ? (
                          <div className="row g-5 m-2 mts">
                            {checkoutDatas?.address_id === null ? (
                              <>
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
                                            selected={
                                              parseInt(
                                                addressForm.values.emirate_id
                                              ) === parseInt(emirate?.id)
                                            }
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
                              </>
                            ) : (
                              <>
                                <div className="col-md-6 col-12">
                                  <div className="display-sub">
                                    <div className="display-img">
                                      <img src={SafeCheck} alt="img-tick" />
                                    </div>
                                    <div className="display-text">
                                      <p>
                                        {
                                          checkoutDatas?.default_address
                                            ?.account_address?.full_name
                                        }
                                      </p>
                                      <p>
                                        {
                                          checkoutDatas?.default_address
                                            ?.account_address?.address
                                        }
                                      </p>
                                      <div className="edit-txt">
                                        <p>
                                          {
                                            checkoutDatas?.default_address
                                              ?.account_address?.emirate
                                          }{" "}
                                          -{" "}
                                          {
                                            checkoutDatas?.default_address
                                              ?.account_address?.city
                                          }{" "}
                                          -(
                                          {
                                            checkoutDatas?.country_data
                                              ?.country_code
                                          }
                                          )
                                        </p>
                                        <img
                                          src={Edit}
                                          alt="edit"
                                          className="check_addr_edit"
                                        />
                                      </div>
                                      <div className="edit-txt">
                                        <p>
                                          {
                                            checkoutDatas?.default_address
                                              ?.account_address?.phone_number
                                          }
                                        </p>
                                        <p>
                                          {parseInt(
                                            checkoutDatas?.default_address
                                              ?.account_address?.address_label
                                          ) === 1
                                            ? "Home"
                                            : "Work"}
                                        </p>
                                        <img
                                          src={Bag}
                                          alt="edit"
                                          className="check_addr_del"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-12">
                                  <div className="display-add">
                                    <a href="#">+ Add New Address</a>
                                  </div>
                                </div>
                              </>
                            )}
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
                        ) : null}
                        {/* </div>
                        <div
                          id="tab-content2"
                          className="checkout-tab-content"
                          role="tabpanel"
                          aria-labelledby="tab2"
                          aria-hidden="true"
                        > */}
                        {addressForm.values.delivery_type == 2 ? (
                          <div className="row g-5 m-2 mts col-md-12">
                            <div className="col-md-6 col-12">
                              <div className=" mb-lg-0">
                                <select
                                  className="form-select"
                                  aria-label="Default select"
                                  onChange={(event) => {
                                    getStoresByEmirate(event.target.value);
                                    addressForm.setFieldValue(
                                      "store_emirate_id",
                                      event.target.value
                                    );
                                  }}
                                  // name="store_emirate_id"
                                >
                                  {emirates?.map((emirate) => {
                                    return (
                                      <option
                                        value={emirate?.id}
                                        selected={
                                          parseInt(
                                            addressForm.values.store_emirate_id
                                          ) === parseInt(emirate?.id)
                                        }
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
                                <select
                                  className="form-select"
                                  aria-label="Default select "
                                  name="store_store_id"
                                  onChange={addressForm.handleChange}
                                >
                                  {availableStores?.map((store) => {
                                    return (
                                      <option
                                        value={store?.id}
                                        selected={
                                          parseInt(
                                            addressForm.values.store_store_id
                                          ) === store?.id
                                        }
                                      >
                                        {store?.store_name}
                                      </option>
                                    );
                                  })}
                                </select>
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
                        ) : null}
                        {/* </div> */}
                        {/* <div
                          id="tab-content1"
                          className="checkout-tab-content"
                          role="tabpanel"
                          aria-labelledby="tab2"
                          aria-hidden="true"
                        >
                          <div className="row g-5 m-2 mts">
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
                        </div> */}
                      </div>
                      {addressForm.values.delivery_type === 1 &&
                      checkoutDatas?.address_id === null ? (
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
                                            parseInt(
                                              addressForm.values.address_label
                                            ) === parseInt(addressData?.value)
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
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {checkoutDatas?.address_id === null ||
                      parseInt(addressForm.values.delivery_type) === 2 ? (
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
                      ) : null}
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
                                    checked={giftWrappingStatus}
                                    // value={addressForm.values.gift_wrapping}
                                    onClick={() => {
                                      setGiftWrappingStatus(true);
                                      handleOnSubmit();
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-10 col-md-9 p-0">
                                <h5 className="h6 pt-2">
                                  {checkoutDatas?.gift_wrap_content}
                                </h5>
                              </div>
                              <div
                                className="col-md-2 text-end p-0"
                                style={{
                                  textDecoration: "underline",
                                  color: "#010101",
                                  fontSize: "12px",
                                }}
                              >
                                {giftWrappingStatus ? (
                                  <span
                                    onClick={() => {
                                      changeGiftWrappingStatus(false).then(
                                        (response) => {
                                          console.log(response);
                                          handleOnSubmit();
                                        }
                                      );
                                      // console.log(!giftWrappingStatus)
                                      // setGiftWrappingStatus(!giftWrappingStatus);
                                      // handleOnSubmit();
                                      // setGiftWrappingStatus((prevStatus) => {
                                      //   // Toggle the previous state
                                      //   const newStatus = !prevStatus;
                                      //   // Call handleOnSubmit with the updated status

                                      //   // Return the new status to update the state
                                      //   return newStatus;
                                      // });
                                    }}
                                  >
                                    Remove
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="text"
                              maxLength={200}
                              className="form-control"
                              // onChange={(event) => {
                              //   setMessage(event.target.value);
                              //   setMessageLength(event.target.value.length);
                              // }}
                              // onBlur={(event) => {
                              //   fetchCheckoutDetailsForMessage(
                              //     event.target.value
                              //   );
                              // }}
                              // value={message}
                              placeholder="Your Message"
                              style={{ width: "99.25%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="accordion-item checkout-adrs">
                    <div className="d-flex justify-content-between align-items-center adrs-info">
                      <h4 className="pt-3 ps-3 "> PAYMENT TYPE</h4>
                      <a
                        href="javascript:;"
                        className="fs-5 text-inherit collapsed"
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
                      id="payment_type_accordian"
                      className={`checkout-adrs checkout-adrs accordion-collapse collapse ${payemntAccordianStatus}`}
                    >
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
                                              value={paymentType?.id}
                                              checked={
                                                parseInt(
                                                  addressForm.values
                                                    .payment_type
                                                ) === parseInt(paymentType?.id)
                                              }
                                              onClick={() => {
                                                addressForm.setFieldValue(
                                                  "payment_type",
                                                  paymentType?.id
                                                );
                                              }}
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
                              <div className="d-grid mt-5 fix-checkout">
                                <button
                                  type="button"
                                  className="btn btn-bgc mb-1"
                                  disabled={
                                    payemntAccordianStatus === "hide" ||
                                    addressForm.values.payment_type == ""
                                      ? true
                                      : false
                                  }
                                  onClick={() => {
                                    handleOnSubmit("final_submit");
                                  }}
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
              <CartDetails
                cartDetails={cartDetails}
                //Promocode
                promoCodeId={promoCodeId}
                setPromoCode={setPromoCode}
                promoCode={promoCode}
                applyPrmocode={applyPrmocode}
                removePrmocode={removePrmocode}
                setShowPrmoCodeFlag={setShowPrmoCodeFlag}
                //#End of promo code
              />
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
export default Index;
