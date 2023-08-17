import $ from "jquery";
import React, { useCallback, useEffect, useState } from "react";
import { useFormik, getIn } from "formik";
import * as yup from "yup";
import addNewAddress from "../../checkout/js/addUserAddress";
import getEmirates from "../../checkout/js/getEmiratesList";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const newAddressFormSchema = yup.object().shape({
  pin: yup.string().required(),
  phone_number: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  flat_name: yup.string().required(),
  building_address: yup.string().required(),
  street_address: yup.string().required(),
  emirate: yup.string().required(),
  phone_number: yup.string().required(),
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
}) {
  const [emirates, setEmirates] = useState([]);
  useEffect(() => {
    getEmirates().then((response) => {
      if (response?.data) {
        setEmirates(response?.data);
      }
    });
  }, [addAddressFlag]);
  const handleOnSubmit = (values) => {
    addNewAddress(values).then((response) => {
      if (response?.data.status) {
        $("#AddAddress").toggle();
        $("#AddAddress").toggleClass("modal fade modal");
        setAddAddressFlag(false);
        setAddAddressListFlag(true);
        $("#addressModal").toggle();
        $("#addressModal").toggleClass("modal fade modal");
      }
      console.log(response);
    });
  };
  const addressForm = useFormik({
    initialValues: {
      pin: "",
      phone_number: "",
      flat_name: "",
      emirate: "",
      street_address: "",
      building_address: "",
      phone_number: "",
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
    <div
      className="modal fade"
      id="AddAddress"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-5">
          <div className="row">
            <div className="col-md-10"></div>
          </div>
          <div className="modal-body p-5">
            <div>
              {/* heading */}
              <h5 className="mb-5 text-center">ADD NEW ADDRESS</h5>
            </div>
            <div>
              {/* button */}
              <button
                type="button"
                className="btn-close btn-custom-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div>
              <form onSubmit={addressForm.handleSubmit} className="row mb-4">
                <div className="mb-3 col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Flat Number"
                    required=""
                    value={addressForm.values.flat_name}
                    onChange={(e) =>
                      setAddressFormInputValue("flat_name", e.target.value)
                    }
                    style={getStyles(addressForm.errors, "flat_name")}
                  />
                </div>
                {/* CVV */}
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Building Name"
                      value={addressForm.values.building_address}
                      onChange={(e) =>
                        setAddressFormInputValue(
                          "building_address",
                          e.target.value
                        )
                      }
                      style={getStyles(addressForm.errors, "building_address")}
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
                      onChange={(e) =>
                        setAddressFormInputValue(
                          "street_address",
                          e.target.value
                        )
                      }
                      style={getStyles(addressForm.errors, "street_address")}
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <select
                      className="form-control"
                      onChange={(e) => {
                        setAddressFormInputValue("emirate", e.target.value);
                      }}
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
                      placeholder="PIN"
                      value={addressForm.values.pin}
                      onChange={(e) =>
                        setAddressFormInputValue("pin", e.target.value)
                      }
                      style={getStyles(addressForm.errors, "pin")}
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="09999999"
                      value={addressForm.values.phone_number}
                      onChange={(e) =>
                        setAddressFormInputValue("phone_number", e.target.value)
                      }
                      style={getStyles(addressForm.errors, "phone_number")}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-12 text-center">
                  <button className="btn btn-dark col-md-4" type="submit">
                    Save
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
