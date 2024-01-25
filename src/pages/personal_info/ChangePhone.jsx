import { useState } from "react";
import request from "../../utils/request";
import { useFormik, getIn } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import AlerMessage from "../common/AlerMessage";
import $ from "jquery";
import ProfileOTPVerification from "./ProfileOTPVerification";
import ReactFlagsSelect from "react-flags-select";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const phoneFormSchema = yup.object().shape({
  phone_number: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

function ChangePhone({ profileForm, refetchProfileApi }) {
  const [otpModalDatas, setOtpModalDatas] = useState(null);
  const [verificationType, setVerificationType] = useState(null);
  const [status, setStatus] = useState(false);

  const handleOnSubmit = async (values) => {
    setVerificationType("Phone");
    try {
      const response = await request.post("profile-phone-number-update/", {
        current_phone_number: profileForm.values.phone_number,
        new_phone_number: values.phone_number,
        country_data: selectedCountryCode,
      });
      if (response.data.status) {
        setOtpModalDatas(response?.data?.data);
        updatePhoneForm.resetForm({
          values: { phone_number: "" },
        });
        setStatus(!status);
        $("#ProfileOtpVerification_Phone").show();
      } else {
        toast((t) => (
          <AlerMessage
            t={t}
            toast={toast}
            status={response.data.status}
            title={"CHANGE MOBILE NUMBER"}
            message={response?.data?.message_1 || response?.data?.message_2}
          />
        ));
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const updatePhoneForm = useFormik({
    initialValues: {
      phone_number: "",
    },
    enableReinitialize: true,
    validationSchema: phoneFormSchema,
    onSubmit: handleOnSubmit,
  });

  //Country code
  const countryCodes = {
    AE: { primary: "+971" },
    IN: { primary: "+91" },
    OM: { primary: "+968" },
    QA: { primary: "+974" },
    SA: { primary: "+966" },
  };

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
  return (
    <>
      <ProfileOTPVerification
        otpModalDatas={otpModalDatas}
        verificationType={verificationType}
        refetchProfileApi={refetchProfileApi}
        modal_id={"ProfileOtpVerification_Phone"}
      />
      <div
        className="modal fade"
        id="changePhone"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          {/* modal content */}
          <div className="modal-content">
            {/* modal body */}
            <div className="modal-body p-6">
              <div>
                {/* heading */}
                <h5 className="mb-5 text-center">CHANGE MOBILE NUMBER</h5>
              </div>
              <div>
                {/* button */}
                <button
                  type="button"
                  className="btn-close btn-custom-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    $("#changePhone").toggle();
                    $("#changePhone").toggleClass("modal fade modal");
                  }}
                />
              </div>
              {/* row */}
              <div className="row g-3">
                {/* col */}
                <div className="col-12">
                  {/* input */}
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={profileForm.values.phone_number}
                    placeholder=""
                  />
                </div>
                {/* col */}
                <form onSubmit={updatePhoneForm.handleSubmit}>
                  <div className="col-12">
                    {/* input */}
                    <label>Add New Number</label>
                    <div className="lists-code">
                      <ReactFlagsSelect
                        selected={selectedCountryCode.country_code}
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
                        className={`form-control ${
                          updatePhoneForm.errors.phone_number
                            ? "border-danger"
                            : ""
                        }`}
                        name="phone_number"
                        value={updatePhoneForm.values.phone_number}
                        onChange={updatePhoneForm.handleChange}
                        placeholder="Mob Number*"
                      />
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      className="btn btn-dark w-100 my-5"
                      data-bs-dismiss="modal"
                      type="submit"
                    >
                      CHANGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChangePhone;
