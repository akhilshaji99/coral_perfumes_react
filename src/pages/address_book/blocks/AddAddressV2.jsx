import $ from "jquery";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import getCountryCodes from "../../common/js/countryCodes";
import ReactFlagsSelect from "react-flags-select";
import getEmirates from "../../checkout/js/getEmiratesList";
import Select from "react-select";
import addNewAddress from "../../checkout/js/addUserAddress";
import * as yup from "yup";

function AddAddressV2({
  fetchAddressDatas,
  editAddressFlag,
  editAddressInfo,
  resetEditAddressFlag,
}) {
  const [countryCodes, setCountryCodes] = useState([]);
  const [emirates, setEmirates] = useState();
  const [emirateCityDatas, setEmirateCityDatas] = useState([]);
  const [cityDefaultValue, setCityDefaultValue] = useState(null);

  const handleOnSubmit = (values) => {
    addNewAddress(values).then((response) => {
      if (response?.data.status) {
        fetchAddressDatas();
        $("#AddAddress").toggle();
        resetFormData();
        $("#AddAddress").toggleClass("modal fade modal");
        // setAddAddressFlag(false);
        // setAddAddressListFlag(true);
        // setEditAddressFlag(false);
        $("#addressModal").toggle();
        $("#addressModal").toggleClass("modal fade modal");
        $("#AddAddress").removeClass("modal-open");
        // resetForm();
      }
    });
  };

  const newAddressFormSchema = yup.object().shape({
    fullname: yup.string().required("Name is required"),
    phone_number: yup.string().required("Mobile number is required"),
    email: yup
      .string()
      .email("Enter valid email")
      .required("Email is required"),
    address: yup.string().required("Address is required"),
    street_name: yup.string().required("Street Name is required"),
  });

  const addressForm = useFormik({
    initialValues: {
      fullname: "",
      phone_number: "",
      country_datas: {
        country_code: "AE",
        phone_code: "+971",
      },
      email: "",
      address: "",
      street_name: "",
      emirate_id: "",
      city: "",
      address_label: 1,
      address_id: "",
    },
    validationSchema: newAddressFormSchema,
    onSubmit: handleOnSubmit,
  });

  //Edit
  useEffect(() => {
    if (editAddressFlag) {
      addressForm.setErrors("");
      addressForm.submitCount = 0;
      addressForm.setFieldValue("fullname", editAddressInfo?.full_name);
      addressForm.setFieldValue("phone_number", editAddressInfo?.phone_number);
      addressForm.setFieldValue("country_datas", editAddressInfo?.country_data);
      addressForm.setFieldValue("email", editAddressInfo?.email);
      addressForm.setFieldValue("address", editAddressInfo?.address);
      addressForm.setFieldValue("street_name", editAddressInfo?.street_address);
      addressForm.setFieldValue("emirate_id", editAddressInfo?.emirate_id);
      addressForm.setFieldValue("city", editAddressInfo?.zajel_city);
      addressForm.setFieldValue("address_id", editAddressInfo?.id);

      addressForm.setFieldValue(
        "address_label",
        editAddressInfo?.address_home_office
      );
      emirates.forEach((emirate) => {
        if (parseInt(emirate.id) === editAddressInfo?.emirate_id) {
          formatCities(emirate?.areas).then((data) => {
            setCityDefaultValue({
              label: editAddressInfo?.zajel_city,
              value: editAddressInfo?.zajel_city,
            });
            addressForm.setFieldValue("city", editAddressInfo?.zajel_city);
          });
          return;
        }
      });
    }
  }, [editAddressFlag]);
  //End of edit

  //Country code
  useEffect(() => {
    getCountryCodes().then((data) => {
      setCountryCodes(data?.data);
    });
  }, []);

  //Emirate & city
  useEffect(() => {
    getEmirates().then((data) => {
      console.log(data);
      setEmirates(data?.data);
      addressForm.setFieldValue("emirate_id", data?.data[0].id);
      if (!editAddressFlag && editAddressInfo === null) {
        formatCities(data?.data[0].areas).then((data) => {
          setEmirateCityDatas(data);
          setCityDefaultValue(data[0]);
          addressForm.setFieldValue("city", data[0].value);
        });
      }
    });
  }, []);

  const emirateCityOnChange = (value) => {
    addressForm.setFieldValue("city", value.value);
    setCityDefaultValue(value);
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

  //End

  const onCountryCodeSelect = (code) => {
    addressForm.setFieldValue("country_datas", {
      country_code: code,
      phone_code: countryCodes[code].primary,
    });
  };
  //#End

  const resetFormData = () => {
    addressForm.setFieldValue("fullname", "");
    addressForm.setFieldValue("phone_number", "");
    addressForm.setFieldValue("country_datas", {
      country_code: "AE",
      phone_code: "+971",
    });
    addressForm.setFieldValue("email", "");
    addressForm.setFieldValue("address", "");
    addressForm.setFieldValue("street_name", "");
    addressForm.setFieldValue("emirate_id", emirates[0]?.id);
    addressForm.setFieldValue("address_id", "");
    addressForm.setFieldValue("address_label", 1);
    addressForm.setErrors("");
    addressForm.submitCount = 0;
    formatCities(emirates[0].areas).then((data) => {
      setEmirateCityDatas(data);
      setCityDefaultValue(data[0]);
      addressForm.setFieldValue("city", data[0].value);
    });
  };

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
                <h5 className="mb-5 text-center address-popup-title">
                  ADD NEW ADDRESS
                </h5>
              </div>
              <div className="col-3 col-md-2">
                <button
                  type="button"
                  className="btn-close btn-custom-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    $("#AddAddress").toggle();
                    resetFormData();
                    resetEditAddressFlag();
                  }}
                />
              </div>
            </div>
          </div>
          <div className="modal-body p-5">
            <div>
              <form className="row mb-4" onSubmit={addressForm.handleSubmit}>
                <div className="mb-6 col-md-6 col-12">
                  <input
                    type="text"
                    className={`form-control ${
                      addressForm?.errors?.fullname &&
                      addressForm.submitCount > 0
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Full Name"
                    required=""
                    name="fullname"
                    value={addressForm.values.fullname}
                    onChange={addressForm.handleChange}
                  />
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3 row">
                    <div className="col-md-12">
                      <div
                        className={`lists-code form-control ${
                          addressForm?.errors?.phone_number &&
                          addressForm.submitCount > 0
                            ? "is-invalid"
                            : ""
                        }`}
                      >
                        <ReactFlagsSelect
                          selected={
                            addressForm.values.country_datas?.country_code
                          }
                          onSelect={onCountryCodeSelect}
                          className="country-list"
                          customLabels={countryCodes}
                          countries={Object.keys(countryCodes)}
                          searchable={true}
                          placeholder="Country"
                          showSecondaryOptionLabel={true}
                        />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          name="phone_number"
                          value={addressForm.values.phone_number}
                          onChange={addressForm.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${
                        addressForm?.errors?.email &&
                        addressForm.submitCount > 0
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Email"
                      name="email"
                      value={addressForm.values.email}
                      onChange={addressForm.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <input
                    type="text"
                    className={`form-control ${
                      addressForm?.errors?.address &&
                      addressForm.submitCount > 0
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Address (Room, Flat, Building)"
                    required=""
                    name="address"
                    value={addressForm.values.address}
                    onChange={addressForm.handleChange}
                  />
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control ${
                        addressForm?.errors?.street_name &&
                        addressForm.submitCount > 0
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Street Name"
                      name="street_name"
                      value={addressForm.values.street_name}
                      onChange={addressForm.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <select
                      className="form-select"
                      aria-label="Default select"
                      name="emirate_id"
                      onChange={(event) => {
                        let emirateDatas = JSON.parse(event.target.value);

                        addressForm.setFieldValue(
                          "emirate_id",
                          emirateDatas?.id
                        );
                        formatCities(emirateDatas?.areas).then((data) => {
                          setEmirateCityDatas(data);
                          setCityDefaultValue(data[0]);
                          addressForm.setFieldValue("city", data[0].value);
                        });
                      }}
                    >
                      {emirates?.map((emirate) => {
                        return (
                          <option
                            value={JSON.stringify(emirate)}
                            selected={
                              parseInt(addressForm.values.emirate_id) ===
                              parseInt(emirate?.id)
                            }
                          >
                            {emirate?.name}
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
                      value={1}
                      onChange={() => {
                        addressForm.setFieldValue("address_label", 1);
                      }}
                      checked={
                        parseInt(addressForm.values.address_label) ===
                        parseInt(1)
                          ? true
                          : false
                      }
                    />
                    <label className="option-lb ps-5">Home</label>
                    <input
                      className="form-check-input ml-2"
                      type="radio"
                      name="address_label"
                      value={2}
                      onChange={() => {
                        addressForm.setFieldValue("address_label", 2);
                      }}
                      checked={
                        parseInt(addressForm.values.address_label) ===
                        parseInt(2)
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
export default AddAddressV2;
