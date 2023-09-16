import { useEffect, useState } from "react";
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
  const [checkOutDetails, setCheckOutDetails] = useState([]);
  const [addAddressListFlag, setAddAddressListFlag] = useState(false);
  const [showPrmoCodeFlag, setShowPrmoCodeFlag] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeId, setPromoCodeId] = useState(null);
  const [cartItems, setCartItems] = useState(null);
  const [addressType, setAddressType] = useState(1);
  const [paymentTypes, setPaymentTypes] = useState([]);
  const [storeDatas, setStoredatas] = useState([]);
  const [storeEmirates, setStoreEmirates] = useState([]);
  const [avaibleStores, setAvailableStores] = useState([]);
  const [status, setStatus] = useState(false);
  //State for checkout fetch api parameters
  const [checkoutUpdateParams, setCheckoutUpdateParams] = useState({
    shipping_zone_type: null,
    payment_type: null,
    gift_wrap: 0,
    gift_message: null,
  });

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
  const fetchStoreApi = async (checkoutResponseData) => {
    try {
      const response = await getStores();
      if (response?.data?.status) {
        setStoredatas(response?.data?.data);

        const uniqueStores = [
          ...new Map(response?.data?.data?.map((m) => [m.emirate, m])).values(),
        ];
        setStoreEmirates(uniqueStores);
        await filterStoresByEmirates(
          checkoutResponseData?.store_emirate_id || uniqueStores[0]?.emirate,
          checkoutResponseData?.store_id,
          response?.data?.data
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterStoresByEmirates = async (
    emirate_id,
    store_id = null,
    availableStores = []
  ) => {
    let emirateStores = [];
    let stores = [];
    if (availableStores.length === 0) {
      stores = storeDatas;
    } else {
      stores = availableStores;
    }
    await stores.forEach((store) => {
      if (parseInt(store.emirate) === parseInt(emirate_id)) {
        emirateStores.push(store);
      }
    });
    setAvailableStores(emirateStores);
    addressForm.setFieldValue("emirate", emirate_id);
    setStatus(!status);
    addressForm.setFieldValue("store_id", store_id || emirateStores?.[0]?.id);
  };
  //#End

  useEffect(() => {
    fetchCheckoutApi();
  }, []);
  // useEffect(() => {
  //   if(!showPrmoCodeFlag && checkOutDetails.length > 0){
  //   fetchCheckoutApi();
  //   }
  // }, [showPrmoCodeFlag]);

  const fetchCheckoutApi = () => {
    getCheckOutDetails().then(async (response) => {
      if (response?.data) {
        setCheckOutDetails(response?.data);
        await fetchStoreApi(response?.data); //Fetch store api
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
        checkoutUpdateParams.payment_type = response?.data?.payment_type;
        setCheckoutUpdateParams(checkoutUpdateParams);
        setPromoCode(response?.data?.cart_items?.voucher_code);
        setPromoCodeId(response?.data?.cart_items?.voucher_id);
        //#End
      }
    });
  };

  const handleOnSubmit = () => {
    console.log(addressForm.values);
    var combinedPayload = Object.assign(
      {},
      checkoutUpdateParams,
      addressForm.values
    );
    console.log(combinedPayload);
    UpdateCheckoutDetails(combinedPayload).then((response) => {
      if (response?.data?.status) {
        setCartItems(response?.data?.data?.cart_items);
        addressForm.setFieldValue(
          "address_id",
          response?.data?.data?.address_id
        );
      }
    });
  };

  const addressForm = useFormik({
    initialValues: {
      postal_code:
        checkOutDetails?.default_address?.account_address?.postal_code,
      phone_number:
        checkOutDetails?.default_address?.account_address?.phone_number,
      flat_name: checkOutDetails?.default_address?.account_address?.flat_name,
      // emirate: checkOutDetails?.default_address?.account_address?.emirate_id,
      emirate: null,
      street_address:
        checkOutDetails?.default_address?.account_address?.street_address,
      building_number:
        checkOutDetails?.default_address?.account_address?.building_number,
      first_name: checkOutDetails?.default_address?.account_address?.first_name,
      last_name: checkOutDetails?.default_address?.account_address?.last_name,
      email: checkOutDetails?.default_address?.account_address?.email,
      floor_number:
        checkOutDetails?.default_address?.account_address?.floor_number,
      city: checkOutDetails?.default_address?.account_address?.city,
      delivery_type: checkOutDetails?.delivery_type,
      address_id: checkOutDetails?.default_address?.account_address?.id,
      // store_id: checkOutDetails?.store_id,
      store_id: null,
    },
    enableReinitialize: true,
    // validationSchema: newAddressFormSchema,4
    onSubmit: handleOnSubmit,
  });

  const changeDeliveryType = (type) => {
    addressForm.setFieldValue("delivery_type", type);
    // setAddressType(type);
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
              <div className="col-lg-8 col-md-8">
                {/* accordion */}
                <div
                  className="accordion accordion-flush "
                  id="accordionFlushExample"
                >
                  {/* accordion item */}
                  <div className="accordion-item checkout-accordion ">
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
                              <h5 className="mb-1 h6 "> Add Promo Code</h5>
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
                                  value={promoCode}
                                  disabled={promoCodeId != null ? true : false}
                                  onChange={(e) => setPromoCode(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-md-3 col-12">
                              {/* input */}
                              <div className="mb-3  mb-lg-0 position-relative">
                                <div class="">
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
                  </div>
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
                            <div className="row g-2 m-2">
                              <div className="col-md-6 col-12">
                                <div className="mb-3 mb-lg-0">
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
                                <div className="mb-3 mb-lg-0">
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
                            <div className="row g-2 m-2">
                              <div className="col-md-6 col-12">
                                <div className="mb-3 mb-lg-0">
                                  <input
                                    type="text"
                                    value={addressForm.values.phone_number}
                                    name="phone_number"
                                    onChange={addressForm.handleChange}
                                    style={getStyles(
                                      addressForm.errors,
                                      "phone_number"
                                    )}
                                    className="form-control"
                                    placeholder="055 922 8088"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 col-12">
                                <div className="mb-3 mb-lg-0">
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
                          className="nav nav-pills nav-lb-tab"
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
                          <li className="nav-item" role="presentation">
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
                              <div className="row g-2 m-2">
                                <div className="col-md-6 col-12">
                                  <div className="mb-3 mb-lg-0">
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
                                  <div className="mb-3 mb-lg-0">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Building Address"
                                      value={addressForm.values.building_number}
                                      name="building_number"
                                      onChange={addressForm.handleChange}
                                      style={getStyles(
                                        addressForm.errors,
                                        "building_address"
                                      )}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row g-2 m-2">
                                <div className="col-md-6 col-12">
                                  <div className="mb-3 mb-lg-0">
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
                                <div className="col-md-6 col-12">
                                  <div className="mb-3 b-lg-0">
                                    <select
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
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="row g-2 m-2">
                                <div className="col-md-6 col-12">
                                  <div className="mb-3 mb-lg-0">
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
                                  <div className="mb-3 mb-lg-0">
                                    <input
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
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row g-2 m-2">
                                <div className="col-md-6 col-12">
                                  <div className="mb-3 mb-lg-0">
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
                              <div className="row g-2 m-2">
                                <div className="col-md-6 col-12">
                                  <div className="mb-3 b-lg-0">
                                    <select
                                      className="form-control"
                                      name="emirate"
                                      value={addressForm.values.emirate}
                                      onChange={(event) => {
                                        filterStoresByEmirates(
                                          event.target.value
                                        );
                                      }}
                                    >
                                      {storeEmirates?.map((emirate, index) => {
                                        return (
                                          <option
                                            value={emirate.emirate}
                                            key={index}
                                          >
                                            {emirate.emirate_name}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-6 col-12">
                                  <div className="mb-3 mb-lg-0">
                                    <select
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
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row align-items-center mt-5 ml-5">
                              <div className="col-md-6 col-12">
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
                              1 ? (
                                <div className="col-md-6 col-12 text-end">
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
                  {parseInt(addressForm.values.delivery_type) === 1 ? (
                    <DeliveryTypes
                      fetchCheckoutDetailsByDeliveryType={
                        fetchCheckoutDetailsByDeliveryType
                      }
                      checkedValue={checkoutUpdateParams?.shipping_zone_type}
                    />
                  ) : null}

                  <PaymentTypes
                    paymentTypes={paymentTypes}
                    activePaymentType={checkoutUpdateParams?.payment_type}
                    fetchCheckoutDetailsForPaymentType={
                      fetchCheckoutDetailsForPaymentType
                    }
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-8">
                <CartDetails cartDatas={cartItems} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Index;
