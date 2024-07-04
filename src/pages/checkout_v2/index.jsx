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
import AddNewAddressModal from "../checkout/blocks/AddNewAddressModal";
import $ from "jquery";
import { Link } from "react-router-dom";

function Index() {
  const [countryCodes, setCountryCodes] = useState([]);
  const [checkoutDatas, setCheckoutDatas] = useState();
  const [cartDetails, setCartDetails] = useState();
  const [emirates, setEmirates] = useState();
  const [emirateCityDatas, setEmirateCityDatas] = useState([]);
  const [cityDefaultValue, setCityDefaultValue] = useState(null);
  const [giftWrappingStatus, setGiftWrappingStatus] = useState(false);
  const [payemntAccordianStatus, setpaymentAccordianStatus] = useState("hide");
  const [checkoutUpdateLoading, setCheckoutUpdateLoading] = useState(false);
  const [finalLoading, setFinalLoading] = useState(false);
  const [availableStores, setAvailableStores] = useState([]);
  const [showPrmoCodeFlag, setShowPrmoCodeFlag] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeId, setPromoCodeId] = useState(null);
  const [addAddressListFlag, setAddAddressListFlag] = useState(false);
  const [status, setStatus] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const [gitWrapLoader, setGiftWrapLoader] = useState(false);
  const [saveAddressStatus, setSaveAddressStatus] = useState(false);
  const [fetchLoader, setFetchLoader] = useState(true);

  const changeDeliveryType = (del_type) => {
    addressForm.setFieldValue("delivery_type", del_type);
  };

  const hardCodedCoutries = { AE: { primary: "+971" } };

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
  const onWhatsapCountrySelect = (code) => {
    addressForm.setFieldValue("wtsap_country_code", {
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
    setFetchLoader(true);
    getCheckOutDetails().then(async (response) => {
      console.log('checkout :', response.data);
      setCheckoutDatas(response?.data);
      setCartDetails(response?.data?.cart_items);
      setEmirates(response?.data?.emirates);
      // if (response?.data?.address_id === null) {
      //   setSaveAddressStatus(true);
      // }
      // if (response?.data?.delivery_type === 1) {
      //   setSaveAddressStatus(false);
      // }
      //Setting initial states
      addressForm.setFieldValue(
        "fullname",
        response?.data?.default_address?.account_address?.full_name ||
          response?.data?.user_data?.full_name
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
      addressForm.setFieldValue(
        "gift_message",
        response?.data?.gift_wrap_message
      );
      addressForm.setFieldValue(
        "whatsap_no_flag",
        response?.data?.user_data?.is_whatsapp_number // Use event.target.checked to get the checked state
      );
      addressForm.setFieldValue(
        "wtsap_mobile_number",
        response?.data?.user_data?.whatsapp_number // Use event.target.checked to get the checked state
      );
      addressForm.setFieldValue(
        "wtsap_country_code",
        response?.data?.user_data?.wtsp_country_data // Use event.target.checked to get the checked state
      );

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
          : data[0]?.value;
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
      setApiLoading(true);
      setFetchLoader(false);
      //Set Values
    });
  };
  //#End of checkout fetch

  //Checkout Update
  const checkoutValidation = yup.object().shape({
    fullname: yup.string().required("Name is required"),
    mobile_number: yup.string().required("Mobile number is required"),
    email: yup
      .string()
      .email("Enter valid email")
      .required("Email is required"),
    // address: yup.string().required("Address is required"),
    address: yup.string().when("delivery_type", ([delivery_type]) => {
      if (delivery_type === 1)
        return yup.string().required("Address is required");
    }),
    street_name: yup.string().when("delivery_type", ([delivery_type]) => {
      if (delivery_type === 1)
        return yup.string().required("Street Name is required");
    }),
    // street_name: yup.string().required("Street Name is required"),
  });

  const handleOnSubmit = (type = null) => {
    setCheckoutUpdateLoading(true);
    if (type === "final_submit") {
      setFinalLoading(true);
    }
    // addressForm.setFieldValue("gift_wrapping", giftWrappingStatus);
    addressForm.values.gift_wrapping = giftWrappingStatus;
    UpdateCheckoutDetails(addressForm.values, giftWrappingStatus).then(
      (response) => {
        if (response?.data?.status) {
          setpaymentAccordianStatus("show");
          if (type === "final_submit") {
            confirmCheckout().then((data) => {
              console.log("pay",data);
              setFinalLoading(false);
            });
          } else {
            fetchCheckoutApi();
          }
        }
        // setFinalLoading(false);
        setCheckoutUpdateLoading(false);
        setGiftWrapLoader(false);
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
      wtsap_country_code: {
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
      gift_message: "",
      payment_type: "",
      store_emirate_id: "",
      store_store_id: "",
      delivery_type: "",
      address_id: "",
      whatsap_no_flag: "",
      wtsap_mobile_number: "",
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

  // const changeGiftWrappingStatus = async (status) => {
  //   setGiftWrappingStatus(status);
  //   return status;
  // };
  useEffect(() => {
    if (apiLoading) {
      handleOnSubmit();
    }
  }, [giftWrappingStatus]);

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
                  <Link
                    to={"/cart"}
                    className="btn btn-dark"
                    style={{ marginLeft: 14 }}
                  >
                    {checkoutDatas?.back_btn_label}
                  </Link>
                </div>
                <div className="col-4 col-md-4  d-md-none">
                  <Link to={"/cart"}>
                    <img src={backButton} />
                  </Link>
                </div>
                <div className="col-4 col-md-4  logo-checkout">
                  <Link to={"/"}>
                    <img src={Logo} alt="logo-img" />
                  </Link>
                </div>
                <div className="col-4 col-md-4  secu-check sm-none">
                  <ul>
                    <li>
                      <img className="secure-img" src={SecCheck} alt="img" />
                      <label className="chk_secure">
                        {checkoutDatas?.header_lable_1}
                      </label>
                    </li>
                    <li>
                      <img className="safe-img" src={SafeCheck} alt="img" />
                      <label className="chk_secure">
                        {checkoutDatas?.header_lable_2}
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="col-4 col-md-4  secu-check d-md-none">
                  <div className="seimg-checkout">
                    <img className="safe-img" src={SafeCheck} alt="img" />
                    <a href="#">{checkoutDatas?.header_lable_2}</a>
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
        <AddNewAddressModal
          // componentDatas={addressForm.values}
          setAddAddressListFlag={setAddAddressListFlag}
          addAddressListFlag={addAddressListFlag}
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
                          aria-expanded="true"
                          aria-controls="flush-collapseTwo-1"
                        >
                          {/* <button type="button" className="btn btn-default">
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
                          </button> */}
                        </a>
                      </div>
                      <div className="accordion-collapse collapse show ">
                        <div className="mb-1">
                          <div className="card-body p-1">
                            <div className="row g-5 m-2 mts">
                              <div className="col-md-12 col-12 mt-0">
                                <div className="mb-lg-0">
                                  <input
                                    type="text"
                                    className={`form-control ${
                                      addressForm?.errors?.fullname &&
                                      addressForm.submitCount > 0
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
                                  <div
                                    className={`adrs-ph form-control ${
                                      addressForm?.errors?.mobile_number &&
                                      addressForm.submitCount > 0
                                        ? "is-invalid"
                                        : ""
                                    }`}
                                  >
                                    <ReactFlagsSelect
                                      selected={
                                        addressForm.values.country_code
                                          ?.country_code
                                      }
                                      onSelect={onCountrySelect}
                                      className="country-list"
                                      customLabels={hardCodedCoutries}
                                      countries={Object.keys(hardCodedCoutries)}
                                      searchable={true}
                                      placeholder="Country"
                                      showSecondaryOptionLabel={true}
                                    />
                                    <input
                                      type="text"
                                      placeholder="Mob Number"
                                      name="mobile_number"
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
                              {checkoutDatas?.user_data?.wtsp_label_title ? (
                                <div className="col-md-12 col-12">
                                  <div className="mb-lg-0 point-app">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="whatsap_no_flag"
                                      checked={
                                        addressForm.values.whatsap_no_flag
                                      }
                                      value={addressForm.values.whatsap_no_flag}
                                      onClick={(event) => {
                                        addressForm.setFieldValue(
                                          "whatsap_no_flag",
                                          !addressForm.values.whatsap_no_flag // Use event.target.checked to get the checked state
                                        );
                                        setStatus(!status);
                                      }}
                                    />
                                    <label className="option-lb ps-5">
                                      {
                                        checkoutDatas?.user_data
                                          ?.wtsp_label_title
                                      }
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.3rem"
                                        height="1.3rem"
                                        viewBox="0 0 1219.547 1225.016"
                                        id="whatsapp"
                                        style={{ marginLeft: "10px" }}
                                      >
                                        <path
                                          fill="#E0E0E0"
                                          d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"
                                        ></path>
                                        <linearGradient
                                          id="a"
                                          x1="609.77"
                                          x2="609.77"
                                          y1="1190.114"
                                          y2="21.084"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop
                                            offset="0"
                                            stop-color="#20b038"
                                          ></stop>
                                          <stop
                                            offset="1"
                                            stop-color="#60d66a"
                                          ></stop>
                                        </linearGradient>
                                        <path
                                          fill="url(#a)"
                                          d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"
                                        ></path>
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"
                                          clip-rule="evenodd"
                                        ></path>
                                        <path
                                          fill="#FFF"
                                          d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"
                                        ></path>
                                      </svg>
                                    </label>
                                    {!addressForm.values.whatsap_no_flag ? (
                                      <div className={`adrs-ph form-control`}>
                                        <ReactFlagsSelect
                                          selected={
                                            addressForm.values
                                              .wtsap_country_code?.country_code
                                          }
                                          onSelect={onWhatsapCountrySelect}
                                          className="country-list"
                                          customLabels={countryCodes}
                                          countries={Object.keys(countryCodes)}
                                          searchable={true}
                                          placeholder="Country"
                                          showSecondaryOptionLabel={true}
                                        />
                                        <input
                                          type="text"
                                          placeholder="WhatsApp Number"
                                          name="wtsap_mobile_number"
                                          value={
                                            addressForm.values
                                              .wtsap_mobile_number
                                          }
                                          onChange={addressForm.handleChange}
                                        />
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              ) : null}
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
                            setSaveAddressStatus(true);
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
                          {/* <button type="button" className="btn btn-default">
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
                          </button> */}
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
                                        addressForm?.errors?.address &&
                                        addressForm.submitCount > 0
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
                                        addressForm?.errors?.street_name &&
                                        addressForm.submitCount > 0
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
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-12">
                                  <div className="display-add">
                                    <a
                                      href="javascript:;"
                                      onClick={(e) => {
                                        setAddAddressListFlag(true);
                                        $("#addressModal").toggle();
                                        $("#addressModal").toggleClass(
                                          "modal fade modal"
                                        );
                                      }}
                                    >
                                      + Add New Address
                                    </a>
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
                                    return emirate?.store_availability_status ? (
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
                                    ) : null;
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
                      {/* {checkoutDatas?.address_id === null ||
                      parseInt(addressForm.values.delivery_type) === 2 ? ( */}
                      {checkoutDatas?.address_id === null ||
                      saveAddressStatus ||
                      addressForm.values.delivery_type === 2 ? (
                        <div className="row align-items-center mt-5 ml-5 pb-5">
                          <div className="col-md-6 col-12 mob-change">
                            <button
                              type="submit"
                              className="btn btn-dark validate"
                              style={{ marginLeft: 14 }}
                              disabled={checkoutUpdateLoading && !gitWrapLoader}
                            >
                              {addressForm.values.delivery_type === 1
                                ? addressForm.values.address_id === null
                                  ? "SAVE ADDRESS"
                                  : "Choose Address"
                                : "PICK FROM STORE"}
                              {checkoutUpdateLoading && !gitWrapLoader ? (
                                <>
                                  &nbsp;
                                  <div
                                    class="spinner-border spinner-border-sm"
                                    role="status"
                                  >
                                    <span class="visually-hidden">
                                      Loading...
                                    </span>
                                  </div>
                                </>
                              ) : null}
                            </button>
                          </div>
                        </div>
                      ) : null}
                      {/* ) : null}  */}
                      <div className="card-body p-6 pt-1">
                        <div className="d-flex row align-items-center">
                          <div className="col-md-10">
                            <div className="row align-items-center">
                              {checkoutDatas?.gift_wrap_content ? (
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
                                        setGiftWrapLoader(true);
                                      }}
                                    />
                                  </div>
                                </div>
                              ) : null}
                              <div className="col-10 col-md-9 p-0">
                                <h5 className="h6 pt-2">
                                  {checkoutDatas?.gift_wrap_content}{" "}
                                  &nbsp;&nbsp;
                                  {gitWrapLoader ? (
                                    <div
                                      class="spinner-border spinner-border-sm"
                                      role="status"
                                    >
                                      <span class="visually-hidden">
                                        Loading...
                                      </span>
                                    </div>
                                  ) : null}
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
                                      setGiftWrappingStatus(false);
                                      setGiftWrapLoader(true);
                                      addressForm.setFieldValue(
                                        "gift_message",
                                        ""
                                      );
                                    }}
                                  >
                                    Remove
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          {giftWrappingStatus ? (
                            <div className="col-md-10">
                              <input
                                type="text"
                                maxLength={200}
                                className="form-control"
                                name="gift_message"
                                onChange={addressForm.handleChange}
                                value={addressForm.values.gift_message}
                                placeholder="Your Message"
                                style={{ width: "99.25%" }}
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="accordion-item checkout-adrs">
                    <div className="d-flex justify-content-between align-items-center adrs-info">
                      <h4 className="pt-3 ps-3 "> CHOOSE PAYMENT METHOD</h4>
                      <a
                        href="javascript:;"
                        className="fs-5 text-inherit collapsed"
                        onClick={() => {
                          if (payemntAccordianStatus === "hide") {
                            toast((t) => (
                              <AlerMessage
                                t={t}
                                toast={toast}
                                status={false}
                                title={"Error"}
                                message={"Please save your address."}
                              />
                            ));
                          }
                        }}
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
                          <div className="row sm-none">
                            <div className="col-12">
                              <div
                                className="d-grid mt-5 fix-checkout"
                                onClick={() => {
                                  if (
                                    payemntAccordianStatus === "hide" ||
                                    addressForm.values.payment_type == null ||
                                    finalLoading
                                  ) {
                                    toast((t) => (
                                      <AlerMessage
                                        t={t}
                                        toast={toast}
                                        status={false}
                                        title={"Error"}
                                        message={
                                          payemntAccordianStatus === "hide"
                                            ? "Please save your address."
                                            : "Please choose a payment method."
                                        }
                                      />
                                    ));
                                  }
                                }}
                              >
                                <button
                                  type="button"
                                  className={`btn btn-bgc mb-1 ${
                                    payemntAccordianStatus === "hide" ||
                                    addressForm.values.payment_type == null ||
                                    finalLoading
                                      ? ""
                                      : "secure-checkout-button"
                                  }`}
                                  disabled={
                                    payemntAccordianStatus === "hide" ||
                                    addressForm.values.payment_type == null ||
                                    finalLoading
                                      ? true
                                      : false
                                  }
                                  onClick={() => {
                                    handleOnSubmit("final_submit");
                                  }}
                                >
                                  SECURE CHECKOUT
                                  {finalLoading ? (
                                    <>
                                      &nbsp;
                                      <div
                                        class="spinner-border spinner-border-sm"
                                        role="status"
                                      >
                                        <span class="visually-hidden">
                                          Loading...
                                        </span>
                                      </div>
                                    </>
                                  ) : null}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row lg-none">
                    <div className="col-12">
                      <div
                        className="d-grid mt-5 fix-checkout"
                        onClick={() => {
                          if (
                            payemntAccordianStatus === "hide" ||
                            addressForm.values.payment_type == null ||
                            finalLoading
                          ) {
                            toast((t) => (
                              <AlerMessage
                                t={t}
                                toast={toast}
                                status={false}
                                title={"Error"}
                                message={
                                  payemntAccordianStatus === "hide"
                                    ? "Please save your address."
                                    : "Please choose a payment method."
                                }
                              />
                            ));
                          }
                        }}
                      >
                        <button
                          type="button"
                          className={`btn btn-bgc mb-1 ${
                            payemntAccordianStatus === "hide" ||
                            addressForm.values.payment_type == null ||
                            finalLoading
                              ? ""
                              : "secure-checkout-button"
                          }`}
                          disabled={
                            payemntAccordianStatus === "hide" ||
                            addressForm.values.payment_type == null ||
                            finalLoading
                              ? true
                              : false
                          }
                          onClick={() => {
                            handleOnSubmit("final_submit");
                          }}
                        >
                          SECURE CHECKOUT
                          {finalLoading ? (
                            <>
                              &nbsp;
                              <div
                                class="spinner-border spinner-border-sm"
                                role="status"
                              >
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            </>
                          ) : null}
                        </button>
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
