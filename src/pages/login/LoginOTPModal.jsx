import React, { useCallback } from "react";

import $ from "jquery";
import "bootstrap";
import toast from "react-hot-toast";
import AlerMessage from "../../../src/pages/common/AlerMessage";
import { useFormik } from "formik";
import * as yup from "yup";
import request from "../../utils/request";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  input1: yup.number().required(),
  input2: yup.number().required(),
  input3: yup.number().required(),
  input4: yup.number().required(),
  input5: yup.number().required(),
  input6: yup.number().required(),
});
function LoginOTPModal({ componentDatas }) {
  const navigate = useNavigate();
  const handleModalClose = () => {
    $("#otpModal").toggle();
    $("#otpModal").toggleClass("modal modal fade");
    $("#otpModal").hide();
  };
  const handleOnSubmit = (values) => {
    verify_otp(values);
    console.log(values);
  };
  const verify_otp = async (values) => {
    try {
      var bodyFormData = new FormData();
      const otp =
        values.input1 +
        "" +
        values.input2 +
        "" +
        values.input3 +
        "" +
        values.input4 +
        "" +
        values.input5 +
        "" +
        values.input6;
      bodyFormData.append("otp", otp);
      bodyFormData.append("phone_or_email", componentDatas.phone_number);
      const response = await request.post("verify_otp/", bodyFormData);

      console.log("response", response);
      let status = "succsss";
      let title = "SUCCESS";
      if (!response.data.status) {
        status = "error";
        title = "ERROR";
      } else {
        const userData = {
          token: response.data.token,
          userInfo: response.data.user,
        };
        localStorage.setItem("userDatas", JSON.stringify(userData));
        navigate("/");
      }
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={status}
          title={title}
          message={response.data.message}
        />
      ));
    } catch (error) {
      console.log("error", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
    },

    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });
  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  return (
    <div
      className="modal fade"
      id="otpModal"
      tabIndex={-1}
      aria-labelledby="userModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          <div className="modal-header border-0">
            <h5 className="modal-title fs-3 fw-bold " id="userModalLabel">
              OTP Verification
            </h5>
            <button
              type="button"
              className="btn-close"
              // data-bs-dismiss="modal"
              // aria-label="Close"
              onClick={handleModalClose}
            />
          </div>
          <div className="modal-body">
            <div>
              <div class="position-relative">
                <div class="card p-2 text-center">
                  <h6>
                    Enter the OTP sent to {componentDatas.phone_number} /
                    {componentDatas.email}
                  </h6>
                  <form onSubmit={formik.handleSubmit}>
                    <div
                      id="otp"
                      class="inputs d-flex flex-row justify-content-center mt-2"
                    >
                      {" "}
                      <input
                        className={`m-2 text-center form-control rounded ${
                          formik.errors.input1 ? "border-danger" : ""
                        }`}
                        type="text"
                        id="first"
                        maxlength="1"
                        value={formik.values.input1}
                        onChange={(e) =>
                          setInputValue("input1", e.target.value)
                        }
                      />{" "}
                      <input
                        className={`m-2 text-center form-control rounded ${
                          formik.errors.input2 ? "border-danger" : ""
                        }`}
                        type="text"
                        id="second"
                        maxlength="1"
                        value={formik.values.input2}
                        onChange={(e) =>
                          setInputValue("input2", e.target.value)
                        }
                      />{" "}
                      <input
                        className={`m-2 text-center form-control rounded ${
                          formik.errors.input3 ? "border-danger" : ""
                        }`}
                        type="number"
                        id="third"
                        maxlength="1"
                        value={formik.values.input3}
                        onChange={(e) =>
                          setInputValue("input3", e.target.value)
                        }
                      />{" "}
                      <input
                        className={`m-2 text-center form-control rounded ${
                          formik.errors.input4 ? "border-danger" : ""
                        }`}
                        type="text"
                        id="fourth"
                        maxlength="1"
                        value={formik.values.input4}
                        onChange={(e) =>
                          setInputValue("input4", e.target.value)
                        }
                      />{" "}
                      <input
                        className={`m-2 text-center form-control rounded ${
                          formik.errors.input5 ? "border-danger" : ""
                        }`}
                        type="text"
                        id="fourth"
                        maxlength="1"
                        value={formik.values.input5}
                        onChange={(e) =>
                          setInputValue("input5", e.target.value)
                        }
                      />{" "}
                      <input
                        className={`m-2 text-center form-control rounded ${
                          formik.errors.input6 ? "border-danger" : ""
                        }`}
                        type="text"
                        id="fourth"
                        maxlength="1"
                        value={formik.values.input6}
                        onChange={(e) =>
                          setInputValue("input6", e.target.value)
                        }
                      />{" "}
                    </div>
                    <div class="mt-4">
                      {" "}
                      <button type="submit" class="btn btn-dark px-4 validate">
                        VERIFY
                      </button>{" "}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="modal-footer border-0 justify-content-center">
              Already have an account? <a href="#">Sign in</a>
            </div> */}
        </div>
      </div>
    </div>
  );
}
export default LoginOTPModal;
