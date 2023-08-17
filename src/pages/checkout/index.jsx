import { useEffect, useState, useCallback } from "react";
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
import $ from "jquery";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const newAddressFormSchema = yup.object().shape({
  pin: yup.string().required(),
  phone_number: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  flat_name: yup.string().required(),
  building_address: yup.string().required(),
  street_address: yup.string().required(),
  emirate: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  phone_number: yup.string().required(),
  email: yup.string().required(),
});
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
  const [cartItems, setCartItems] = useState(null);
  const [paymentTypes, setPaymentTypes] = useState([]);
  const [defaultPaymentTypeFlag, setDefaultPaymentTypeFlag] = useState(false);
  //State for checkout fetch api parameters
  const [checkoutFetchParams, setCheckoutFetchParams] = useState({
    delivery_type: "1",
    shipping_zone_type: null,
    payment_type: null,
    gift_wrap: 0,
    gift_message: null,
  });
  //#End

  useEffect(() => {
    fetchCheckoutApi();
  }, []);

  const fetchCheckoutApi = () => {
    getCheckOutDetails().then((response) => {
      if (response?.data) {
        setCheckOutDetails(response?.data);
        setCartItems(response?.data?.cart_items);
        setPaymentTypes(response?.data?.payment_types);
        //Updating payment type in fetch payload :: Based on flag - Update only on first page load
        if (!defaultPaymentTypeFlag) {
          checkoutFetchParams.payment_type =
            response?.data?.payment_types.length > 0
              ? response?.data?.payment_types?.[0]?.id
              : null;
          setCheckoutFetchParams(checkoutFetchParams);
          setDefaultPaymentTypeFlag(true);
        }
        //#End
      }
    });
  };
  const handleOnSubmit = (values) => {
    UpdateCheckoutDetails(values).then((response) => {
      if (response?.data) {
      }
    });
  };
  const addressForm = useFormik({
    initialValues: {
      pin: checkOutDetails?.default_address?.pin,
      phone_number: checkOutDetails?.default_address?.phone_number,
      flat_name: checkOutDetails?.default_address?.flat_name,
      emirate: checkOutDetails?.default_address?.emirate,
      street_address: checkOutDetails?.default_address?.street_address,
      building_address: checkOutDetails?.default_address?.building_address,
      delivery_type: "1",
      first_name: checkOutDetails?.user_data?.first_name,
      last_name: checkOutDetails?.user_data?.last_name,
      phone_number: checkOutDetails?.user_data?.phone_number,
      email: checkOutDetails?.user_data?.email,
    },
    enableReinitialize: true,
    validationSchema: newAddressFormSchema,
    onSubmit: handleOnSubmit,
  });
  console.log(addressForm.errors);

  const setAddressFormInputValue = useCallback(
    (key, value) =>
      addressForm.setValues({
        ...addressForm.values,
        [key]: value,
      }),
    [addressForm]
  );

  //update shipping_zone_type and refetch api :: Delivery type change
  const fetchCheckoutDetailsByDeliveryType = (delivery_type_id) => {
    checkoutFetchParams.shipping_zone_type = delivery_type_id;
    setCheckoutFetchParams(checkoutFetchParams);
    console.log(addressForm);
    // fetchCheckoutApi(); //Api refetch
  };
  //#End
  //update payment type and refetch api :: Delivery type change
  const fetchCheckoutDetailsForPaymentType = (payment_type_id) => {
    checkoutFetchParams.payment_type = parseInt(payment_type_id);
    setCheckoutFetchParams(checkoutFetchParams);
    // fetchCheckoutApi();
  };
  //#End
  //Update gift wrap status and refetch api
  const fetchCheckoutDetailsForGiftStatus = (status) => {
    checkoutFetchParams.gift_wrap = status;
    if (status === 0) {
      checkoutFetchParams.gift_message = null;
    }
    setCheckoutFetchParams(checkoutFetchParams);
    // fetchCheckoutApi();
  };
  //#End
  //Update gift wrap message and refetch api
  const fetchCheckoutDetailsForMessage = (message) => {
    checkoutFetchParams.gift_message = message;
    setCheckoutFetchParams(checkoutFetchParams);
    // fetchCheckoutApi();
  };
  //#End
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
          <AddNewAddressModal
            componentDatas={addressForm.values}
            setAddAddressListFlag={setAddAddressListFlag}
            addAddressListFlag={addAddressListFlag}
          />

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
                  <form onSubmit={addressForm.handleSubmit}>
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
                                    value={addressForm.values.first_name}
                                    onChange={(e) =>
                                      setAddressFormInputValue(
                                        "first_name",
                                        e.target.value
                                      )
                                    }
                                    style={getStyles(
                                      addressForm.errors,
                                      "first_name"
                                    )}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 col-12">
                                {/* input */}
                                <div className="mb-3 mb-lg-0">
                                  <input
                                    type="text"
                                    value={addressForm.values.last_name}
                                    onChange={(e) =>
                                      setAddressFormInputValue(
                                        "last_name",
                                        e.target.value
                                      )
                                    }
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
                                {/* input */}
                                <div className="mb-3 mb-lg-0">
                                  <input
                                    type="text"
                                    value={addressForm.values.phone_number}
                                    onChange={(e) =>
                                      setAddressFormInputValue(
                                        "phone_number",
                                        e.target.value
                                      )
                                    }
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
                                {/* input */}
                                <div className="mb-3 mb-lg-0">
                                  <input
                                    type="text"
                                    value={addressForm.values.email}
                                    onChange={(e) =>
                                      setAddressFormInputValue(
                                        "email",
                                        e.target.value
                                      )
                                    }
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
                    <div className="accordion-item card card-bordered shadow mb-2 ">
                      <div className="d-flex justify-content-between align-items-center h">
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
                      </div>
                      <div
                        id="flush-collapseThree"
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
                                    placeholder="Flat Name"
                                    value={addressForm.values.flat_name}
                                    onChange={(e) =>
                                      setAddressFormInputValue(
                                        "flat_name",
                                        e.target.value
                                      )
                                    }
                                    style={getStyles(
                                      addressForm.errors,
                                      "flat_name"
                                    )}
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
                                    value={addressForm.values.building_address}
                                    onChange={(e) => {
                                      e.preventDefault();
                                      setAddressFormInputValue(
                                        "building_address",
                                        e.target.value
                                      );
                                    }}
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
                                {/* input */}
                                <div className="mb-3 mb-lg-0">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Street Address"
                                    value={addressForm.values.street_address}
                                    onChange={(e) =>
                                      setAddressFormInputValue(
                                        "street_address",
                                        e.target.value
                                      )
                                    }
                                    style={getStyles(
                                      addressForm.errors,
                                      "street_address"
                                    )}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 col-12">
                                {/* input */}
                                <div className="mb-3 b-lg-0">
                                  {/* <input
                                    type="text"
                                    
                                    className="form-control"
                                    placeholder="Duabi"
                                    value={addressForm.values.emirate}
                                    onChange={(e) =>
                                      setAddressFormInputValue(
                                        "emirate",
                                        e.target.value
                                      )
                                    }
                                    style={getStyles(addressForm.errors, 'emirate')}

                                  /> */}
                                  <select
                                    className="form-control"
                                    onChange={(e) => {
                                      setAddressFormInputValue(
                                        "emirate",
                                        e.target.value
                                      );
                                    }}
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
                                {/* input */}
                                <div className="mb-3 mb-lg-0">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Pin"
                                    value={addressForm.values.pin}
                                    onChange={(e) =>
                                      setAddressFormInputValue(
                                        "pin",
                                        e.target.value
                                      )
                                    }
                                    style={getStyles(addressForm.errors, "pin")}
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="row g-2 m-2">
                                <div className="col-md-6 col-12">
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

                                <div className="col-md-6 col-12">
                                  <a
                                    onClick={(e) => {
                                      setAddAddressListFlag(true);
                                      $("#addressModal").toggle();
                                      $("#addressModal").toggleClass(
                                        "modal fade modal"
                                      );
                                    }}
                                  >
                                    Change Address
                                  </a>
                                </div>
                              </div>
                            </div>
                            <GiftWrapping
                              fetchCheckoutDetailsForGiftStatus={
                                fetchCheckoutDetailsForGiftStatus
                              }
                              fetchCheckoutDetailsForMessage={
                                fetchCheckoutDetailsForMessage
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <DeliveryTypes
                    fetchCheckoutDetailsByDeliveryType={
                      fetchCheckoutDetailsByDeliveryType
                    }
                  />
                  <PaymentTypes
                    paymentTypes={paymentTypes}
                    activePaymentType={checkoutFetchParams?.payment_type}
                    fetchCheckoutDetailsForPaymentType={
                      fetchCheckoutDetailsForPaymentType
                    }
                  />
                </div>
              </div>
              <CartDetails cartDatas={cartItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Index;
