import { useEffect, useState, useRef } from "react";
import BreadCrumps from "../common/BreadCrumps";
import CartDetails from "./blocks/CartDetails";
import getCheckOutDetails from "./js/checkOutFetch";
import { useFormik, getIn } from "formik";
import * as yup from "yup";
import UpdateCheckoutDetails from "./js/updateCheckoutDetails";
import AddNewAddressModal from "./blocks/AddNewAddressModal";
import DeliveryTypes from "./blocks/DeliveryTypes";
import PaymentTypes from "./blocks/PaymentTypes";
import GiftWrapping from "./blocks/GiftWrapping";
import getStores from "../stores/js/getStores";
import PromoCodeModal from "./blocks/PromoCodeModal";
import UsePromoCode from "./js/usePromoCode";
import $ from "jquery";
import toast from "react-hot-toast";
import AlerMessage from "../common/AlerMessage";
import RemovePromoCode from "./js/removePromoCode";
import getEmirateName from "./js/getEmirateName";
import Select from "react-select";
import ReactFlagsSelect from "react-flags-select";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: "1px solid red",
    };
  }
}
function Index() {
  const componentToScrollRef = useRef(null);
  const paymentComponentToScrollRef = useRef(null);
  const [checkOutDetails, setCheckOutDetails] = useState([]);
  const [addAddressListFlag, setAddAddressListFlag] = useState(false);
  const [showPrmoCodeFlag, setShowPrmoCodeFlag] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeId, setPromoCodeId] = useState(null);
  const [cartItems, setCartItems] = useState(null);
  const [addressType, setAddressType] = useState(1);
  const [paymentTypes, setPaymentTypes] = useState([]);
  // const [storeDatas, setStoredatas] = useState([]);
  // const [storeEmirates, setStoreEmirates] = useState([]);
  const [avaibleStores, setAvailableStores] = useState([]);
  const [status, setStatus] = useState(false);
  const [checkout_api_status, setCheckout_delivery_type] = useState(false);
  //State for checkout fetch api parameters
  const [checkoutUpdateParams, setCheckoutUpdateParams] = useState({
    shipping_zone_type: null,
    payment_type: null,
    gift_wrap: 0,
    gift_message: null,
    gift_wrap_content: null,
  });
  const [confirmButtonStatus, setConfirmButtonStatus] = useState(false);
  const [storePickupEmirateName, setStorePickupEmirateName] = useState("");
  const [storePickupStoreName, setStorePickupStoreName] = useState("");
  const [cityDefaultValue, setCityDefaultValue] = useState(null);
  const [countryCodes, setContryCodes] = useState([]);

  const scrollToComponent = () => {
    if (componentToScrollRef.current) {
      componentToScrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const scrollToPaymentComponent = () => {
    if (paymentComponentToScrollRef.current) {
      paymentComponentToScrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
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
  const fetchStoreApi = async (emirate_id, store_id, store_name) => {
    try {
      const response = await getStores(emirate_id);
      if (response?.data?.status) {
        setAvailableStores(response?.data?.data);
        addressForm.setFieldValue(
          "store_id",
          store_id || response?.data?.data[0]?.id
        );
        setStorePickupStoreName(
          store_name || response?.data?.data[0]?.store_name
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //#End

  useEffect(() => {
    fetchCheckoutApi();
  }, []);

  const [normalDeliveryEmirateName, setNormalDeliveryEmirateName] =
    useState("");

  const fetchCheckoutApi = () => {
    getCheckOutDetails().then(async (response) => {
      if (response?.data) {
        setCheckOutDetails(response?.data);
        setContryCodes(response?.data?.country_phone_codes);
        if (response?.data?.emirates.length > 0) {
          // if (response?.data?.delivery_type === 1) {
          //Type - Delivery address
          let emirate_id =
            response?.data?.default_address?.account_address?.emirate_id ||
            response?.data?.emirates[0]?.id;
          let emirate_name =
            response?.data?.default_address?.account_address?.emirate ||
            response?.data?.emirates[0]?.name;
          addressForm.setFieldValue("emirate", emirate_id);
          setNormalDeliveryEmirateName(emirate_name);

          //Type - Store Pickup
          let store_emirate_id =
            response?.data?.store_emirate_id || response?.data?.emirates[0]?.id;
          await getSingleEmirateCities(
            emirate_id,
            response?.data?.emirates
          ).then((data) => {
            let cityData =
              response?.data?.default_address?.account_address?.city;
            changeCityDatas(
              data,
              cityData ? { label: cityData, value: cityData } : ""
            );
          });
          //
          let store_emirate_name =
            response?.data?.store_emirate_name ||
            response?.data?.emirates[0]?.name;
          setStorePickupEmirateName(store_emirate_name);
          addressForm.setFieldValue(
            "store_pickup_emirate_id",
            store_emirate_id
          );
          fetchStoreApi(
            store_emirate_id,
            response?.data?.store_id,
            response?.data?.store_name
          ); //Fetch store api
          //End of store pickup type
        }

        setCartItems(response?.data?.cart_items);
        setPaymentTypes(response?.data?.payment_types);
        addressForm.setFieldValue(
          "address_id",
          response?.data?.default_address?.account_address?.id || null
        );
        checkoutUpdateParams.shipping_zone_type = response?.data?.shipping_type;
        checkoutUpdateParams.payment_type = response?.data?.payment_type;
        checkoutUpdateParams.gift_wrap = response?.data?.is_gift_wrap;
        checkoutUpdateParams.gift_message = response?.data?.gift_wrap_message;
        checkoutUpdateParams.gift_wrap_content =
          response?.data?.gift_wrap_content;
        checkoutUpdateParams.payment_type = response?.data?.payment_type;
        setCheckoutUpdateParams(checkoutUpdateParams);
        setPromoCode(response?.data?.cart_items?.voucher_code);
        setPromoCodeId(response?.data?.cart_items?.voucher_id);
        setCheckout_delivery_type(true);
        //#End
      }
    });
  };

  const getSingleEmirateCities = async (emirate_id, emirates) => {
    let emirateCities = "";
    await emirates.forEach((emirate) => {
      if (parseInt(emirate.id) === parseInt(emirate_id)) {
        console.log("emirate", emirate);
        emirateCities = emirate.areas;
        return;
      }
    });
    return emirateCities;
  };

  const handleOnSubmit = () => {
    if (validateDeliveryAddress()) {
      console.log(addressForm.values);
      var combinedPayload = Object.assign(
        {},
        checkoutUpdateParams,
        addressForm.values
      );
      combinedPayload.store_emirate_id =
        combinedPayload?.delivery_type === 2
          ? combinedPayload?.store_pickup_emirate_id
          : null;
      combinedPayload.country_data = selectedCountryCode;
      UpdateCheckoutDetails(combinedPayload).then((response) => {
        if (response?.data?.status) {
          setConfirmButtonStatus(true);
          setCartItems(response?.data?.data?.cart_items);
          setPaymentTypes(response?.data?.data?.payment_types);
          addressForm.setFieldValue(
            "address_id",
            response?.data?.data?.address_id
          );
        } else {
          fetchCheckoutApi();
        }
      });
    }
  };

  const addressForm = useFormik({
    initialValues: {
      postal_code:
        checkOutDetails?.default_address?.account_address?.postal_code,
      phone_number:
        checkOutDetails?.default_address?.account_address?.phone_number ||
        checkOutDetails?.user_data?.phone_number,
      flat_name: checkOutDetails?.default_address?.account_address?.flat_name,
      // emirate: checkOutDetails?.default_address?.account_address?.emirate_id,
      emirate: checkOutDetails?.default_address?.account_address?.emirate_id,
      street_address:
        checkOutDetails?.default_address?.account_address?.street_address,
      building_number:
        checkOutDetails?.default_address?.account_address?.building_number,
      first_name:
        checkOutDetails?.default_address?.account_address?.first_name ||
        checkOutDetails?.user_data?.first_name,
      last_name:
        checkOutDetails?.default_address?.account_address?.last_name ||
        checkOutDetails?.user_data?.last_name,
      email:
        checkOutDetails?.default_address?.account_address?.email ||
        checkOutDetails?.user_data?.email,
      floor_number:
        checkOutDetails?.default_address?.account_address?.floor_number,
      city: checkOutDetails?.default_address?.account_address?.city,
      delivery_type: checkOutDetails?.delivery_type,
      address_id: checkOutDetails?.default_address?.account_address?.id,
      // store_id: checkOutDetails?.store_id,
      store_id: null,
      store_pickup_emirate_id: checkOutDetails?.store_emirate_id,
      delivery_instruction_message:
        checkOutDetails?.delivery_instruction_message,
    },
    enableReinitialize: true,
    // validationSchema: newAddressFormSchema,4
    onSubmit: handleOnSubmit,
  });

  const changeDeliveryType = (type) => {
    addressForm.setFieldValue("delivery_type", type);
  };

  // const setAddressFormInputValue = useCallback(
  //   (key, value) =>
  //     addressForm.setValues({
  //       ...addressForm.values,
  //       [key]: value,
  //     }),
  //   [addressForm]
  // );

  //update shipping_zone_type and refetch api :: Delivery type change
  const checkPaymentTypeSelected = () => {
    if (!checkoutUpdateParams.payment_type) {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={false}
          title={"Error"}
          message={"Please choose a payment method."}
        />
      ));
      scrollToPaymentComponent();
      return false;
    }
    return true;
  };
  const validateDeliveryAddress = () => {
    let validationStatus = true;
    let message = "";
    console.log("addressFormaddressForm", addressForm);
    if (addressForm.values.delivery_type == 1) {
      if (
        addressForm.values.flat_name == undefined ||
        addressForm.values.flat_name == ""
      ) {
        validationStatus = false;
        addressForm.setErrors({ flat_name: "Required" });
        message = "Flat name required.";
      } else if (
        addressForm.values.building_number == undefined ||
        addressForm.values.building_number == ""
      ) {
        validationStatus = false;
        addressForm.setErrors({ building_number: "Required" });
        message = "Building number required.";
      } else if (
        addressForm.values.street_address == undefined ||
        addressForm.values.street_address == ""
      ) {
        validationStatus = false;
        addressForm.setErrors({ street_address: "Required" });
        message = "Street address required.";
      } else if (
        addressForm.values.emirate == undefined ||
        addressForm.values.emirate == ""
      ) {
        validationStatus = false;
        addressForm.setErrors({ emirate: "Required" });
        message = "Emirate required.";
      }
      //  else if (
      //   addressForm.values.floor_number == undefined ||
      //   addressForm.values.floor_number == ""
      // ) {
      //   validationStatus = false;
      //   addressForm.setErrors({ floor_number: "Required" });
      //   message = "Floor number required.";
      // }
      else if (
        addressForm.values.city == undefined ||
        addressForm.values.city == ""
      ) {
        validationStatus = false;
        addressForm.setErrors({ city: "Required" });
        message = "City required.";
      } else if (
        addressForm.values.postal_code == undefined ||
        addressForm.values.postal_code == ""
      ) {
        validationStatus = false;
        addressForm.setErrors({ postal_code: "Required" });
        message = "Postal code required.";
      } else {
        validationStatus = true;
      }
    }
    if (!validationStatus) {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={false}
          title={"Error"}
          message={message}
        />
      ));
    }
    return validationStatus;
  };

  const basicInfoFormValidation = () => {
    var validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let validationStatus = true;
    if (
      addressForm.values.first_name == undefined ||
      addressForm.values.first_name == ""
    ) {
      validationStatus = false;
      addressForm.setErrors({ first_name: "Required" });
    } else if (
      addressForm.values.last_name == undefined ||
      addressForm.values.last_name == ""
    ) {
      validationStatus = false;

      addressForm.setErrors({ last_name: "Required" });
    } else if (
      addressForm.values.phone_number == undefined ||
      addressForm.values.phone_number == ""
    ) {
      validationStatus = false;

      addressForm.setErrors({ phone_number: "Required" });
    } else if (
      addressForm.values.email == undefined ||
      addressForm.values.email == "" ||
      !addressForm.values.email.match(validEmailRegex)
    ) {
      validationStatus = false;

      addressForm.setErrors({ email: "Required" });
    } else {
      validationStatus = true;
    }
    if (!validationStatus) {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={false}
          title={"Error"}
          message={"Please fill basic info."}
        />
      ));
      scrollToComponent();
    }
    return validationStatus;
  };
  const fetchCheckoutDetailsByDeliveryType = (shipping_type) => {
    if (basicInfoFormValidation()) {
      checkoutUpdateParams.shipping_zone_type = shipping_type;
      setCheckoutUpdateParams(checkoutUpdateParams);
      handleOnSubmit(); //Calling Update api
    }
  };
  //#End
  //update payment type and refetch api :: Delivery type change
  const fetchCheckoutDetailsForPaymentType = (payment_type_id) => {
    if (basicInfoFormValidation()) {
      checkoutUpdateParams.payment_type = parseInt(payment_type_id);
      setCheckoutUpdateParams(checkoutUpdateParams);
      handleOnSubmit(); //Calling Update api
    }
  };
  //#End
  //Update gift wrap status and refetch api
  const fetchCheckoutDetailsForGiftStatus = (status) => {
    if (basicInfoFormValidation()) {
      checkoutUpdateParams.gift_wrap = status;
      if (status === 0) {
        checkoutUpdateParams.gift_message = null;
      }
      setCheckoutUpdateParams(checkoutUpdateParams);
      handleOnSubmit(); //Calling Update api
    }
  };
  //#End
  //Update gift wrap message and refetch api
  const fetchCheckoutDetailsForMessage = (message) => {
    if (basicInfoFormValidation()) {
      checkoutUpdateParams.gift_message = message;
      setCheckoutUpdateParams(checkoutUpdateParams);
      handleOnSubmit(); //Calling Update api
    }
  };
  //#End

  const [isDeliveryEmirateDropdownOpen, setDeliveryEmirateDropdownOpen] =
    useState(false);

  const [isStoreEmirateDropdownOpen, setStoreEmirateDropdownOpen] =
    useState(false);

  const toggleDeliveryEmirates = () => {
    setDeliveryEmirateDropdownOpen(!isDeliveryEmirateDropdownOpen);
  };

  const toggleStoreDeliveryEmirates = () => {
    setStoreEmirateDropdownOpen(!isStoreEmirateDropdownOpen);
  };

  const [isStoreStoreDropdownOpen, setStoreStoreDropdownOpen] = useState(false);
  const toggleStoreDeliveryStore = () => {
    setStoreStoreDropdownOpen(!isStoreStoreDropdownOpen);
  };

  const [emirateCityDatas, setEmirateCityDatas] = useState([]);

  const changeCityDatas = async (cities, selected_city = null) => {
    try {
      const datas = await formatCities(cities);
      setEmirateCityDatas(datas); //set emirate cities
      if (datas.length > 0) {
        if (selected_city) {
          setCityDefaultValue(selected_city);
          addressForm.setFieldValue("city", selected_city.value);
        } else {
          setCityDefaultValue(datas[0]); //set default value on refresh & edit
          addressForm.setFieldValue("city", datas[0].value);
        }
      }
      setStatus(!status);
    } catch (error) {
      // Handle any errors that might occur during the asynchronous operation
      console.error("Error while formatting cities:", error);
    }
  };

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
    setStatus(!status);
  };

  //Country code
  const [selectedCountryCode, setSelectedCountryCode] = useState({
    country_code: "AE",
    phone_code: "+971",
  });

  const onCountrySelect = (code) => {
    setSelectedCountryCode({
      country_code: code,
      phone_code: countryCodes[code].primary,
    });
  };
  // const searchable = boolean("Searchable", false);

  //#End
  return (
    <>
      <section className="mb-lg-14 mb-8 mt-8">
        <div className="container-md-fluid">
          <BreadCrumps />
          <div className="row">
            <div className="col-12">
              <div>
                <div className="mb-8 text-center ">
                  <h1 className="sub-heading">CHECK OUT</h1>
                </div>
              </div>
            </div>
          </div>
          <PromoCodeModal
            setShowPrmoCodeFlag={setShowPrmoCodeFlag}
            showPrmoCodeFlag={showPrmoCodeFlag}
            setPromoCode={setPromoCode}
            fetchCheckoutApi={fetchCheckoutApi}
          />
          <AddNewAddressModal
            // componentDatas={addressForm.values}
            setAddAddressListFlag={setAddAddressListFlag}
            addAddressListFlag={addAddressListFlag}
            fetchCheckoutApi={fetchCheckoutApi}
          />

          <div>
            {/* row */}
            <div className="row">
              <div className="col-lg-8 col-md-7">
                {/* accordion */}
                <div
                  className="accordion accordion-flush "
                  id="accordionFlushExample"
                >
                  {/* 
                  <div className="accordion-item checkout-accordion ">
                    <div className="d-flex justify-content-between align-items-center h">

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
                          <span class="accordion-arrow">
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
                      id="flush-collapseOne"
                      className="accordion-collapse collapse show "
                      data-bs-parent="#accordionFlushExample"
                      ref={componentToScrollRef}
                    >
                      <div className="mb-1">
                        <div className="card-body p-3">
                          <div className="d-flex mb-4">
                            <div>
                              <h5 className="mb-1 h6 "> Add Promo Code</h5>
                            </div>
                          </div>
                          <div className="row g-4">
                            <div className="col-md-6 col-6">
                              <div className="mb-3 mb-lg-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Coupon Code"
                                  value={promoCode}
                                  disabled={promoCodeId != null ? true : false}
                                  onChange={(e) => setPromoCode(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 col-6">
                              <div className="mb-3  mb-lg-0 position-relative">
                                <div className="remove-cd">
                                  {" "}
                                  {promoCodeId == null ? (
                                    <button
                                      // type="submit"
                                      class="btn btn-dark px-4 validate w-100"
                                      onClick={applyPrmocode}
                                    >
                                      APPLY
                                    </button>
                                  ) : (
                                    <>
                                      <a
                                        onClick={(e) => {
                                          e.preventDefault();
                                          removePrmocode(promoCodeId);
                                        }}
                                        class=""
                                        style={{
                                          color: "black",
                                          "text-decoration": "underline",
                                        }}
                                      >
                                        Remove
                                      </a>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                            <h5
                              className="mb-1 h6 pt-2 promo-code-label"
                              onClick={(e) => {
                                setShowPrmoCodeFlag(true);
                                $("#promocodeModal").toggle();
                                $("#promocodeModal").toggleClass(
                                  "modal fade modal"
                                );
                              }}
                            >
                              View Available Promo Codes
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                            </div> */}
                  <form onSubmit={addressForm.handleSubmit}>
                    <div className="accordion-item checkout-accordion">
                      <div className="d-flex justify-content-between align-items-center h">
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
                            <span class="accordion-arrow">
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
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse show "
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="mb-1">
                          <div className="card-body p-1">
                            <div className="row g-4 m-2 mts">
                              <div className="col-md-6 col-12">
                                <div className="mb-lg-0">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                    name="first_name"
                                    value={addressForm.values.first_name}
                                    onChange={addressForm.handleChange}
                                    style={getStyles(
                                      addressForm.errors,
                                      "first_name"
                                    )}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 col-12">
                                <div className="mb-lg-0">
                                  <input
                                    type="text"
                                    value={addressForm.values.last_name}
                                    name="last_name"
                                    onChange={addressForm.handleChange}
                                    style={getStyles(
                                      addressForm.errors,
                                      "last_name"
                                    )}
                                    className="form-control"
                                    placeholder="Last Name"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row g-4 m-2 mts">
                              <div className="col-md-6 col-12">
                                <div className="mb-lg-0">
                                  <div className="col-md-12">
                                    <div className="lists-code">
                                      <ReactFlagsSelect
                                        selected={
                                          selectedCountryCode.country_code
                                        }
                                        onSelect={onCountrySelect}
                                        className="country-list"
                                        customLabels={countryCodes}
                                        countries={Object.keys(countryCodes)}
                                        // searchable={true}
                                        placeholder="Country"
                                        // showSecondaryOptionLabel={true}
                                      />
                                      <input
                                        type="text"
                                        value={addressForm.values.phone_number}
                                        name="phone_number"
                                        onChange={addressForm.handleChange}
                                        placeholder="Phone Number (0559239099)"
                                        style={getStyles(
                                          addressForm.errors,
                                          "phone_number"
                                        )}
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-12">
                                <div className="mb-lg-0">
                                  <input
                                    type="text"
                                    value={addressForm.values.email}
                                    name="email"
                                    onChange={addressForm.handleChange}
                                    style={getStyles(
                                      addressForm.errors,
                                      "email"
                                    )}
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
                    <div className="accordion-item checkout-accordion ">
                      <div className="d-flex justify-content-between align-items-center h">
                        <ul
                          className="nav nav-pills nav-tabs nav-lb-tab"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className={
                                parseInt(addressForm.values.delivery_type) === 1
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                              id="rating-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#rating-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="rating-tab-pane"
                              aria-selected="true"
                              onClick={(e) => {
                                e.preventDefault();
                                changeDeliveryType(1);
                              }}
                            >
                              DELIVERY ADDRESS
                            </button>
                          </li>
                          <li
                            className="nav-item mobile-right"
                            role="presentation"
                          >
                            <button
                              className={
                                parseInt(addressForm.values.delivery_type) === 2
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                              id="reviews-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#reviews-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="reviews-tab-pane"
                              aria-selected="false"
                              onClick={(e) => {
                                e.preventDefault();
                                changeDeliveryType(2);
                              }}
                            >
                              STORE PICK UP
                            </button>
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="fs-5 text-inherit collapsed h4"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="true"
                          aria-controls="flush-collapseThree"
                        >
                          <button type="button" class="btn btn-default">
                            <span class="accordion-arrow">
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
                        id="flush-collapseThree"
                        className="accordion-collapse collapse show "
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="tab-content" id="myTabContent">
                          <div
                            className={
                              parseInt(addressForm.values.delivery_type) === 1
                                ? "tab-pane show active"
                                : "tab-pane fade"
                            }
                            id="rating-tab-pane"
                            role="tabpanel"
                            aria-labelledby="rating-tab"
                            tabIndex={0}
                          >
                            <div className="card-body p-1">
                              <div className="row g-4 m-2 mts">
                                <div className="col-md-6 col-12">
                                  <div className="mb-lg-0">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Flat Name"
                                      value={addressForm.values.flat_name}
                                      name="flat_name"
                                      onChange={addressForm.handleChange}
                                      style={getStyles(
                                        addressForm.errors,
                                        "flat_name"
                                      )}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6 col-12">
                                  <div className=" mb-lg-0">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Floor number"
                                      value={addressForm.values.floor_number}
                                      name="floor_number"
                                      onChange={addressForm.handleChange}
                                      style={getStyles(
                                        addressForm.errors,
                                        "floor_number"
                                      )}
                                    />
                                  </div>
                                </div>

                                <div className="col-md-6 col-12">
                                  <div className="mb-lg-0">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Building Address"
                                      value={addressForm.values.building_number}
                                      name="building_number"
                                      onChange={addressForm.handleChange}
                                      style={getStyles(
                                        addressForm.errors,
                                        "building_number"
                                      )}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6 col-12">
                                  <div className="mb-lg-0">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Street Address"
                                      value={addressForm.values.street_address}
                                      name="street_address"
                                      onChange={addressForm.handleChange}
                                      style={getStyles(
                                        addressForm.errors,
                                        "street_address"
                                      )}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row g-4 m-2 mts">
                                <div className="col-md-6 col-12">
                                  <div className="mb-lg-0">
                                    <div
                                      className="dropdown  form-control check-form"
                                      onClick={toggleDeliveryEmirates}
                                    >
                                      <a
                                        className=" dropdown-toggle text-dark btn-filter"
                                        type="button"
                                      >
                                        {normalDeliveryEmirateName}
                                      </a>
                                      <svg
                                        className="regular-sort-icon"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                                          stroke="black"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      {/* Render the dropdown content based on the state */}
                                      {isDeliveryEmirateDropdownOpen && (
                                        <div
                                          className="dropdown-menu"
                                          style={{ display: "block" }}
                                        >
                                          {/* Add your dropdown items here */}
                                          {checkOutDetails?.emirates?.map(
                                            (emirate, index) => {
                                              return (
                                                <label
                                                  key={index}
                                                  className="dropdown-item dropdown-item-custom"
                                                  onClick={() => {
                                                    addressForm.setFieldValue(
                                                      "emirate",
                                                      emirate.id
                                                    );
                                                    setNormalDeliveryEmirateName(
                                                      emirate?.name
                                                    );
                                                    setDeliveryEmirateDropdownOpen(
                                                      !isDeliveryEmirateDropdownOpen
                                                    );
                                                    changeCityDatas(
                                                      emirate?.areas
                                                    );
                                                  }}
                                                >
                                                  {emirate.name}
                                                </label>
                                              );
                                            }
                                          )}
                                        </div>
                                      )}
                                    </div>
                                    {/* <select
                                      className="form-control"
                                      name="emirate"
                                      value={addressForm.values.emirate}
                                      onChange={addressForm.handleChange}
                                    >
                                      {checkOutDetails?.emirates?.map(
                                        (emirate, index) => {
                                          return (
                                            <option value={emirate.id}>
                                              {emirate.name}
                                            </option>
                                          );
                                        }
                                      )}
                                    </select> */}
                                  </div>
                                </div>
                                <div className="col-md-6 col-12">
                                  <div className=" mb-lg-0">
                                    <Select
                                      options={emirateCityDatas}
                                      onChange={emirateCityOnChange}
                                      value={cityDefaultValue}
                                    />
                                    {/* <input
                                      type="text"
                                      className="form-control"
                                      placeholder="City"
                                      value={addressForm.values.city}
                                      name="city"
                                      onChange={addressForm.handleChange}
                                      style={getStyles(
                                        addressForm.errors,
                                        "city"
                                      )}
                                    /> */}
                                    {/* <select
                                      class="form-control city-picker"
                                      id="select-country"
                                      data-live-search="true"
                                      name="city"
                                      onChange={addressForm.handleChange}
                                      style={getStyles(
                                        addressForm.errors,
                                        "city"
                                      )}
                                    >
                                      <option data-tokens="china">China</option>
                                      <option data-tokens="malayasia">
                                        Malayasia
                                      </option>
                                      <option data-tokens="singapore">
                                        Singapore
                                      </option>
                                    </select> */}
                                  </div>
                                </div>
                              </div>
                              <div className="row g-4 m-2 mts">
                                <div className="col-md-6 col-12">
                                  <div className="mb-lg-0">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Postal Code"
                                      value={addressForm.values.postal_code}
                                      name="postal_code"
                                      onChange={addressForm.handleChange}
                                      style={getStyles(
                                        addressForm.errors,
                                        "postal_code"
                                      )}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row g-4 m-2 mts">
                                <div className="col-md-12 col-12">
                                  <div className="mb-lg-0">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter your special delivery instructions here."
                                      value={
                                        addressForm.values
                                          .delivery_instruction_message
                                      }
                                      name="delivery_instruction_message"
                                      onChange={addressForm.handleChange}
                                      // style={getStyles(
                                      //   addressForm.errors,
                                      //   "delivery_instruction_message"
                                      // )}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={
                              parseInt(addressForm.values.delivery_type) === 2
                                ? "tab-pane show active"
                                : "tab-pane fade"
                            }
                            id="reviews-tab-pane"
                            role="tabpanel"
                            aria-labelledby="reviews-tab"
                            tabIndex={0}
                          >
                            <div className="card-body p-1">
                              <div className="row g-4 m-2 mts">
                                <div className="col-md-6 col-12">
                                  <div className="b-lg-0">
                                    <div
                                      className="dropdown  form-control check-form"
                                      onClick={toggleStoreDeliveryEmirates}
                                    >
                                      <a
                                        className=" dropdown-toggle text-dark btn-filter"
                                        type="button"
                                      >
                                        {storePickupEmirateName}
                                      </a>
                                      <svg
                                        className="regular-sort-icon"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                                          stroke="black"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      {/* Render the dropdown content based on the state */}
                                      {isStoreEmirateDropdownOpen && (
                                        <div
                                          className="dropdown-menu"
                                          style={{ display: "block" }}
                                        >
                                          {/* Add your dropdown items here */}
                                          {checkOutDetails?.emirates?.map(
                                            (emirate, index) => {
                                              return (
                                                <label
                                                  key={index}
                                                  className="dropdown-item dropdown-item-custom"
                                                  onClick={() => {
                                                    addressForm.setFieldValue(
                                                      "store_pickup_emirate_id",
                                                      emirate.id
                                                    );
                                                    setStorePickupEmirateName(
                                                      emirate?.name
                                                    );
                                                    setStoreEmirateDropdownOpen(
                                                      !isStoreEmirateDropdownOpen
                                                    );
                                                    fetchStoreApi(emirate.id);
                                                  }}
                                                >
                                                  {emirate.name}
                                                </label>
                                              );
                                            }
                                          )}
                                        </div>
                                      )}
                                    </div>
                                    {/* <select
                                      className="form-control"
                                      name="emirate"
                                      value={addressForm.values.emirate}
                                      onChange={(event) => {
                                        fetchStoreApi(event.target.value);
                                      }}
                                    >
                                      {checkOutDetails?.emirates?.map(
                                        (emirate, index) => {
                                          return (
                                            <option
                                              value={emirate.id}
                                              key={index}
                                            >
                                              {emirate.name}
                                            </option>
                                          );
                                        }
                                      )}
                                    </select> */}
                                  </div>
                                </div>
                                <div className="col-md-6 col-12">
                                  <div className="mb-lg-0">
                                    <div
                                      className="dropdown  form-control check-form"
                                      onClick={toggleStoreDeliveryStore}
                                    >
                                      <a
                                        className=" dropdown-toggle text-dark btn-filter"
                                        type="button"
                                      >
                                        {storePickupStoreName}
                                      </a>
                                      <svg
                                        className="regular-sort-icon"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                                          stroke="black"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      {/* Render the dropdown content based on the state */}
                                      {isStoreStoreDropdownOpen && (
                                        <div
                                          className="dropdown-menu"
                                          style={{ display: "block" }}
                                        >
                                          {/* Add your dropdown items here */}
                                          {avaibleStores?.map(
                                            (store, index) => {
                                              return (
                                                <label
                                                  key={index}
                                                  className="dropdown-item dropdown-item-custom"
                                                  onClick={() => {
                                                    addressForm.setFieldValue(
                                                      "store_id",
                                                      store.id
                                                    );
                                                    setStorePickupStoreName(
                                                      store?.store_name
                                                    );
                                                    setStoreStoreDropdownOpen(
                                                      !isStoreStoreDropdownOpen
                                                    );
                                                  }}
                                                >
                                                  {store.store_name}
                                                </label>
                                              );
                                            }
                                          )}
                                        </div>
                                      )}
                                    </div>
                                    {/* <select
                                      className="form-control"
                                      name="store_id"
                                      value={addressForm.values.store_id}
                                      onChange={addressForm.handleChange}
                                    >
                                      {avaibleStores?.map((store, index) => {
                                        return (
                                          <option value={store.id} key={index}>
                                            {store.store_name}
                                          </option>
                                        );
                                      })}
                                    </select> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row align-items-center mt-5 ml-5">
                              <div className="col-md-6 col-12 mob-change">
                                {" "}
                                <button
                                  type="submit"
                                  class="btn btn-dark validate"
                                  style={{ marginLeft: "14px" }}
                                >
                                  CONFIRM
                                </button>
                              </div>
                              {parseInt(addressForm.values.delivery_type) ===
                                1 && checkOutDetails?.default_address ? (
                                <div className="col-md-6 col-12 text-end mob-change">
                                  <a
                                    onClick={(e) => {
                                      setAddAddressListFlag(true);
                                      $("#addressModal").toggle();
                                      $("#addressModal").toggleClass(
                                        "modal fade modal"
                                      );
                                    }}
                                    style={{
                                      color: "#010101",
                                      textDecoration: "underline",
                                      fontSize: "12px",
                                    }}
                                  >
                                    Change Address
                                  </a>
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <GiftWrapping
                            fetchCheckoutDetailsForGiftStatus={
                              fetchCheckoutDetailsForGiftStatus
                            }
                            fetchCheckoutDetailsForMessage={
                              fetchCheckoutDetailsForMessage
                            }
                            checkoutUpdateParams={checkoutUpdateParams}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* {parseInt(addressForm.values.delivery_type) === 1 ? (
                    <DeliveryTypes
                      fetchCheckoutDetailsByDeliveryType={
                        fetchCheckoutDetailsByDeliveryType
                      }
                      checkedValue={checkoutUpdateParams?.shipping_zone_type}
                      checkout_api_status={checkout_api_status}
                      confirmButtonStatus={confirmButtonStatus}
                    />
                  ) : null} */}

                  <PaymentTypes
                    paymentTypes={paymentTypes}
                    paymentComponentToScrollRef={paymentComponentToScrollRef}
                    activePaymentType={checkoutUpdateParams?.payment_type}
                    fetchCheckoutDetailsForPaymentType={
                      fetchCheckoutDetailsForPaymentType
                    }
                    confirmButtonStatus={confirmButtonStatus}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <CartDetails
                  cartDatas={cartItems}
                  scrollToPaymentComponent={scrollToPaymentComponent}
                  basicInfoFormValidation={basicInfoFormValidation}
                  checkPaymentTypeSelected={checkPaymentTypeSelected}
                  validateDeliveryAddress={validateDeliveryAddress}
                  confirmButtonStatus={confirmButtonStatus}
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
          </div>
        </div>
      </section>
    </>
  );
}
export default Index;
