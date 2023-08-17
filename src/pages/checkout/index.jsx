import { useEffect, useState, useCallback } from "react";
import BreadCrumps from "../common/BreadCrumps";
import TamaraIcon from "../../assets/img/icons/payment/tamara.png";
import MastercardIcon from "../../assets/img/icons/payment/mastercard.svg";
import TabbyIcon from "../../assets/img/icons/payment/tabby.svg";
import CartDetails from "./blocks/CartDetails";
import getCheckOutDetails from "./js/checkOutFetch";
import { useFormik, getIn } from "formik";
import * as yup from "yup";
import UpdateCheckoutDetails from "./js/updateCheckoutDetails";
import AddNewAddressModal from "./blocks/AddNewAddressModal";
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
  useEffect(() => {
    getCheckOutDetails().then((response) => {
      if (response?.data) {
        setCheckOutDetails(response?.data);
      }
    });
  }, []);
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
      first_name : checkOutDetails?.user_data?.first_name,
      last_name : checkOutDetails?.user_data?.last_name,
      phone_number : checkOutDetails?.user_data?.phone_number,
      email : checkOutDetails?.user_data?.email,

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
          <AddNewAddressModal componentDatas={addressForm.values} />

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
                          {/* <form onSubmit={addressForm.handleSubmit}> */}
                            <div className="row g-2 m-2">
                              <div className="col-md-6 col-12">
                                {/* input */}
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
                                  <a onClick={(e) => {
                                   $("#addressModal").toggle()
                                   $("#addressModal").toggleClass("modal fade modal")
                                  }
                                  }>
                                    Change Address
                                  </a>
                                </div>
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
                  </form>


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
              <CartDetails />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Index;
