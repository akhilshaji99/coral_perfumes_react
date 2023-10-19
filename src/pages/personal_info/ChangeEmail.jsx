import { useState } from "react";
import request from "../../utils/request";
import { useFormik, getIn } from "formik";
import * as yup from "yup";
import $ from "jquery";
import ProfileOTPVerification from "./ProfileOTPVerification";
import toast from "react-hot-toast";
import AlerMessage from "../../../src/pages/common/AlerMessage";

const emailFormSchema = yup.object().shape({
  email: yup.string().required().email(),
});
function ChangeEmail({ refetchProfileApi, profileForm }) {
  // const [email, setEmail] = useState("");
  const [otpModalDatas, setOtpModalDatas] = useState(null);
  const [verificationType, setVerificationType] = useState(null);

  const handleOnSubmit = async (values) => {
    try {
      const response = await request.post("profile-email-update/", {
        current_email: profileForm.values.email,
        new_email: values.email,
      });

      if (response?.data?.status) {
        setOtpModalDatas(response?.data?.data);
        setVerificationType("Email");
        updateEmailForm.resetForm({
          values: { email: "" },
        });
        $("#ProfileOtpVerification").show();
      } else {
        toast((t) => (
          <AlerMessage
            t={t}
            toast={toast}
            status={response.data.status}
            title={"Error"}
            message={
              response?.data?.message_1 ||
              response?.data?.message_2 ||
              response?.data?.message
            }
          />
        ));
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const updateEmailForm = useFormik({
    initialValues: {
      email: "",
    },
    enableReinitialize: true,
    validationSchema: emailFormSchema,
    onSubmit: handleOnSubmit,
  });
  return (
    <>
      <ProfileOTPVerification
        otpModalDatas={otpModalDatas}
        verificationType={verificationType}
        refetchProfileApi={refetchProfileApi}
      />
      <div
        className="modal fade"
        id="changeEmail"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          {/* modal content */}
          <div className="modal-content">
            {/* modal body */}
            <div className="modal-body p-6">
              <div>
                {/* heading */}
                <h5 className="mb-5 text-center">CHANGE E-Mail</h5>
              </div>
              <div>
                {/* button */}
                <button
                  type="button"
                  className="btn-close btn-custom-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    updateEmailForm.resetForm({
                      values: { email: "" },
                    });
                    $("#changeEmail").toggle();
                    $("#changeEmail").toggleClass("modal fade modal");
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
                    value={profileForm.values.email}
                    placeholder="Email"
                  />
                </div>
                {/* col */}
                <form onSubmit={updateEmailForm.handleSubmit}>
                  <div className="col-12">
                    {/* input */}
                    <label>New Email</label>

                    <input
                      type="text"
                      className={`form-control ${
                        updateEmailForm.errors.email ? "border-danger" : ""
                      }`}
                      required
                      name="email"
                      value={updateEmailForm.values.email}
                      onChange={updateEmailForm.handleChange}
                      placeholder="Email*"
                    />
                  </div>
                  <div className="col-12 text-center my-5">
                    <button
                      className="btn btn-dark w-100"
                      // data-bs-dismiss="modal"
                      type="submit"
                    >
                      Change
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
export default ChangeEmail;
