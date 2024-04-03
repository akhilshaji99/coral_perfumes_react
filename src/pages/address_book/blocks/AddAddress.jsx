import $ from "jquery";
import React, { useCallback, useEffect, useState } from "react";
import { useFormik, getIn } from "formik";
import * as yup from "yup";
import addNewAddress from "../../checkout/js/addUserAddress";
import getEmirates from "../../checkout/js/getEmiratesList";
import "../css/style.css";
import ReactFlagsSelect from "react-flags-select";
import Select from "react-select";

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const newAddressFormSchema = yup.object().shape({
  // emirate: yup.string().required(),
  // fullname: yup.string().required(),
  // email: yup.string().email().required(),
  // address: yup.string().required(),
  // street_name: yup.string().required(),
  // phone_number: yup.string().required(),
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
  const customLabels = {
    AE: { primary: "+971" },
    IN: { primary: "+91" },
    OM: { primary: "+968" },
    QA: { primary: "+974" },
    SA: { primary: "+966" },
  };
  //Country code
  const [selectedCountryCode, setSelectedCountryCode] = useState({
    country_code: "AE",
    phone_code: "+971",
  });
  const [emirateCityDatas, setEmirateCityDatas] = useState([]);
  const [cityDefaultValue, setCityDefaultValue] = useState(null);
  const [status, setStatus] = useState(false);

  const emirateCityOnChange = (value) => {
    addressForm.setFieldValue("city", value.value);
    setCityDefaultValue(value);
  };

  const onSelect = (code) => {
    setSelectedCountryCode({
      country_code: code,
      phone_code: customLabels[code].primary,
    });
  };
  // const searchable = boolean("Searchable", false);

  //#End
  const [emirates, setEmirates] = useState([]);

  const handleOnSubmit = (values) => {
    values.country_datas = selectedCountryCode;
    values.city = cityDefaultValue?.value;
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
      fullname: "",
      phone_number: "",
      country_datas: {},
      email: "",
      address: "",
      street_name: "",
      emirate: "",
      city: "",
      address_label: 1,
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

          let sel_emirate_id = editAddressFlag
            ? editAddressInfo?.emirate_id
            : response?.data[0]?.id;
          console.log(sel_emirate_id);
          addressForm.setValues({
            emirate: sel_emirate_id,
          });

          let chk_emirates = response?.data[0]?.areas;
          if (editAddressFlag) {
            emirates.forEach((emirate) => {
              if (parseInt(emirate.id) === parseInt(sel_emirate_id)) {
                chk_emirates = emirate?.areas;
                return;
              }
            });
          }

          formatCities(chk_emirates).then((data) => {
            setEmirateCityDatas(data);
        
            // addressForm.setFieldValue("city", data[0]["value"]);
            if (editAddressFlag) {
              setCityDefaultValue({
                label: editAddressInfo?.zajel_city,
                value: editAddressInfo?.zajel_city,
              });
            } else {
              setCityDefaultValue({
                label: data[0]["value"],
                value: data[0]["value"],
              });
            }

            //#End
          });
        }
      });
    }
  }, [addAddressFlag]);

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
      addressForm.setFieldValue({
        fullname: editAddressFlag ? editAddressInfo?.full_name : "",
        phone_number: editAddressFlag ? editAddressInfo?.phone_number : "",
        email: editAddressFlag ? editAddressInfo?.email : "",
        address: editAddressFlag ? editAddressInfo?.address : "",
        street_name: editAddressFlag ? editAddressInfo?.street_address : "",
        city: editAddressFlag ? editAddressInfo?.city : "",
        address_label: editAddressFlag
          ? editAddressInfo?.address_home_office
          : "",
      });
      setSelectedCountryCode(editAddressInfo);
    }
  }, [editAddressFlag]);

  const resetForm = () => {
    addressForm.setValues({
      fullname: "",
      phone_number: "",
      country_datas: {},
      email: "",
      address: "",
      street_name: "",
      emirate: "",
      city: "",
    });
  };
  // const setAddressFormInputValue = useCallback(
  //   (key, value) =>
  //     addressForm.setValues({
  //       ...addressForm.values,
  //       [key]: value,
  //     }),
  //   [addressForm]
  // );

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
                <h5 className="mb-5 text-center address-popup-title">
                  ADD NEW ADDRESS
                </h5>
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
                <div className="mb-6 col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    required=""
                    name="fullname"
                    value={addressForm.values.fullname}
                    onChange={addressForm.handleChange}
                    style={getStyles(addressForm.errors, "fullname")}
                  />
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3 row">
                    <div className="col-md-12">
                      <div className="lists-code">
                        <ReactFlagsSelect
                          selected={selectedCountryCode.country_code}
                          onSelect={onSelect}
                          className="country-list"
                          customLabels={customLabels}
                          countries={Object.keys(customLabels)}
                          // searchable={true}
                          placeholder="Country"
                          // showSecondaryOptionLabel={true}
                        />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
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
                <div className="mb-3 col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address (Room, Flat, Building)"
                    required=""
                    name="address"
                    value={addressForm.values.address}
                    onChange={addressForm.handleChange}
                    style={getStyles(addressForm.errors, "address")}
                  />
                </div>
                {/* CVV */}
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street Name"
                      value={addressForm.values.street_name}
                      name="street_name"
                      onChange={addressForm.handleChange}
                      style={getStyles(addressForm.errors, "street_name")}
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <select
                      className="form-control"
                      name="emirate"
                      onChange={(event) => {
                        // addressForm.handleChange();
                        let emirateDatas = JSON.parse(event.target.value);
                        addressForm.setFieldValue("emirate", emirateDatas?.id);
                        formatCities(emirateDatas?.areas).then((data) => {
                          console.log(data);
                          setEmirateCityDatas(data);
                          setCityDefaultValue(data[0]);
                        });
                      }}
                      value={addressForm.values.emirate}
                      style={getStyles(addressForm.errors, "emirate")}
                    >
                      {emirates.map((emirate, index) => {
                        return (
                          <option
                            selected={
                              parseInt(addressForm.values.emirate) ===
                              parseInt(emirate.id)
                            }
                            value={JSON.stringify(emirate)}
                          >
                            {emirate.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <Select
                      className="emirate-city-select"
                      options={emirateCityDatas}
                      onChange={emirateCityOnChange}
                      value={cityDefaultValue}
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="address_label"
                      onChange={() => {
                        addressForm.setFieldValue("address_label", 1);
                      }}
                      value={1}
                      checked={
                        parseInt(addressForm.values.address_label) == 1 ||
                        addressForm.values.address_label == null
                          ? true
                          : false
                      }
                    />
                    <label className="option-lb ps-5">Home</label>
                    <input
                      className="form-check-input ml-2"
                      type="radio"
                      name="address_label"
                      onChange={() => {
                        addressForm.setFieldValue("address_label", 2);
                      }}
                      value={2}
                      checked={
                        parseInt(addressForm.values.address_label) == 2
                          ? true
                          : false
                      }
                    />
                    <label className="option-lb ps-5">Work</label>
                  </div>
                </div>
                <div className="col-md-12 col-12 text-center">
                  <button
                    className="btn btn-dark col-lg-3 col-12 address-button"
                    type="submit"
                  >
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
