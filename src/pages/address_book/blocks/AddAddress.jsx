import $ from "jquery";
import React, { useCallback, useEffect, useState } from "react";
import { useFormik, getIn } from "formik";
import * as yup from "yup";
import addNewAddress from "../../checkout/js/addUserAddress";
import getEmirates from "../../checkout/js/getEmiratesList";
import  "../css/style.css"
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const newAddressFormSchema = yup.object().shape({
  postal_code: yup.string().required(),
  phone_number: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  flat_name: yup.string().required(),
  building_number: yup.string().required(),
  street_address: yup.string().required(),
  emirate: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required(),
});

function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: "1px solid red",
    };
  }
}
function AddAddress({
  addAddressFlag,
  setAddAddressFlag,
  setAddAddressListFlag,
  editAddressInfo,
  editAddressFlag,
  setEditAddressFlag,
  setEditAddressInfo,
}) {
  const [emirates, setEmirates] = useState([]);
  const handleOnSubmit = (values) => {
    addNewAddress(values).then((response) => {
      if (response?.data.status) {
        $("#AddAddress").toggle();
        $("#AddAddress").toggleClass("modal fade modal");
        setAddAddressFlag(false);
        setAddAddressListFlag(true);
        setEditAddressFlag(false);
        $("#addressModal").toggle();
        $("#addressModal").toggleClass("modal fade modal");
        $("#AddAddress").removeClass("modal-open");
        resetForm();
      }
    });
  };
  const addressForm = useFormik({
    initialValues: {
      postal_code: "",
      phone_number: "",
      flat_name: "",
      emirate: "",
      street_address: "",
      building_number: "",
      first_name: "",
      last_name: "",
      email: "",
      address_id: "",
      city: "",
      floor_number: "",
    },
  
    validationSchema: newAddressFormSchema,
    onSubmit: handleOnSubmit,
    validateOnBlur: true, // Enable validation on blur
    validateOnChange: false,
  });
  useEffect(() => {
    if (addAddressFlag) {
      getEmirates().then((response) => {
        if (response?.data) {
          setEmirates(response?.data);
          addressForm.setValues({
            emirate: response?.data ? [0]?.id : "",
          });
        }
      });
    }
  }, [addAddressFlag]);
  useEffect(() => {
    if (!editAddressFlag) {
      // addressForm.initialValues.emirate = emirates?.[0]?.id;
      addressForm.setValues({
        emirate: emirates?.[0]?.id,
      });
    }
  }, [emirates]);

  useEffect(() => {
    if (editAddressFlag) {
      addressForm.setValues({
        postal_code: editAddressFlag ? editAddressInfo?.postal_code : "",
        phone_number: editAddressFlag ? editAddressInfo?.phone_number : "",
        flat_name: editAddressFlag ? editAddressInfo?.first_name : "",
        emirate: editAddressFlag ? editAddressInfo?.emirate_id : "",
        street_address: editAddressFlag ? editAddressInfo?.street_address : "",
        building_number: editAddressFlag
          ? editAddressInfo?.building_number
          : "",
        first_name: editAddressFlag ? editAddressInfo?.first_name : "",
        last_name: editAddressFlag ? editAddressInfo?.last_name : "",
        email: editAddressFlag ? editAddressInfo?.email : "",
        address_id: editAddressFlag ? editAddressInfo?.id : "",
        city: editAddressFlag ? editAddressInfo?.city : "",
        floor_number: editAddressFlag ? editAddressInfo?.floor_number : "",
      });
    }
  }, [editAddressFlag]);
  const resetForm = () => {
    addressForm.setValues({
      postal_code: "",
      phone_number: "",
      flat_name: "",
      emirate: "",
      street_address: "",
      building_number: "",
      first_name: "",
      last_name: "",
      email: "",
      address_id: "",
      city: "",
      floor_number: "",
    });
  };
  const setAddressFormInputValue = useCallback(
    (key, value) =>
      addressForm.setValues({
        ...addressForm.values,
        [key]: value,
      }),
    [addressForm]
  );

  return (
    <div
      className="modal fade"
      id="AddAddress"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-5">
          <div className="border-0">
            <div className="row">
              <div col-12 col-md-12 mb-2>
                {/* heading */}
                <h5 className="mb-5 text-center address-popup-title">ADD NEW ADDRESS</h5>
              </div>
              <div className="col-3 col-md-2">
                {/* button */}
                <button
                  type="button"
                  className="btn-close btn-custom-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    setAddAddressFlag(false);
                    setEditAddressFlag(false);
                    $("#AddAddress").toggle();
                    $("#AddAddress").toggleClass("modal fade modal");
                    setAddAddressListFlag(true);
                    $("#addressModal").toggle();
                    $("#addressModal").toggleClass("modal fade modal");
                    resetForm();
                  }}
                />
              </div>
            </div>
          </div>
          <div className="modal-body p-5">
            <div>
              <form onSubmit={addressForm.handleSubmit} className="row mb-4">
                <div className="mb-3 col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    required=""
                    name="first_name"
                    value={addressForm.values.first_name}
                    // onChange={(e) =>
                    //   setAddressFormInputValue("first_name", e.target.value)
                    // }
                    onChange={addressForm.handleChange}
                    style={getStyles(addressForm.errors, "first_name")}
                  />
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    required=""
                    value={addressForm.values.last_name}
                    name="last_name"
                    // onChange={(e) =>
                    //   setAddressFormInputValue("last_name", e.target.value)
                    // }
                    onChange={addressForm.handleChange}
                    style={getStyles(addressForm.errors, "last_name")}
                  />
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Flat Number"
                    required=""
                    name="flat_name"
                    value={addressForm.values.flat_name}
                    // onChange={(e) =>
                    //   setAddressFormInputValue("flat_name", e.target.value)
                    // }
                    onChange={addressForm.handleChange}
                    style={getStyles(addressForm.errors, "flat_name")}
                  />
                </div>
                {/* CVV */}
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Building Number"
                      value={addressForm.values.building_number}
                      name="building_number"
                      // onChange={(e) =>
                      //   setAddressFormInputValue(
                      //     "building_address",
                      //     e.target.value
                      //   )
                      // }
                      onChange={addressForm.handleChange}
                      style={getStyles(addressForm.errors, "building_number")}
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street Address"
                      required=""
                      value={addressForm.values.street_address}
                      name="street_address"
                      // onChange={(e) =>
                      //   setAddressFormInputValue(
                      //     "street_address",
                      //     e.target.value
                      //   )
                      // }
                      onChange={addressForm.handleChange}
                      style={getStyles(addressForm.errors, "street_address")}
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <select
                      className="form-control"
                      // onChange={(e) => {
                      //   setAddressFormInputValue("emirate", e.target.value);
                      // }}
                      name="emirate"
                      // value={addressForm.values.emirate.id}
                      value={addressForm.values.emirate}
                      onChange={addressForm.handleChange}
                      style={getStyles(addressForm.errors, "emirate")}
                    >
                      {emirates.map((emirate, index) => {
                        return (
                          <option value={emirate.id}>{emirate.name}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      required=""
                      value={addressForm.values.city}
                      name="city"
                      onChange={addressForm.handleChange}
                      style={getStyles(addressForm.errors, "city")}
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Floor Number"
                      required=""
                      value={addressForm.values.floor_number}
                      name="floor_number"
                      onChange={addressForm.handleChange}
                      style={getStyles(addressForm.errors, "floor_number")}
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="PIN"
                      name="postal_code"
                      value={addressForm.values.postal_code}
                      // onChange={(e) =>
                      //   setAddressFormInputValue("pin", e.target.value)
                      // }
                      onChange={addressForm.handleChange}
                      style={getStyles(addressForm.errors, "postal_code")}
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="055 922 8088"
                      name="phone_number"
                      value={addressForm.values.phone_number}
                      // onChange={(e) =>
                      //   setAddressFormInputValue("phone_number", e.target.value)
                      // }
                      onChange={addressForm.handleChange}
                      style={getStyles(addressForm.errors, "phone_number")}
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={addressForm.values.email}
                      // onChange={(e) =>
                      //   setAddressFormInputValue("phone_number", e.target.value)
                      // }
                      onChange={addressForm.handleChange}
                      style={getStyles(addressForm.errors, "email")}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-12 text-center">
                  <button className="btn btn-dark col-lg-3 col-12 address-button" type="submit">
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddAddress;
