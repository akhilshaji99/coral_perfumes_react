import React, { useState, useEffect, createRef, useRef } from "react";

import $ from "jquery";
import toast from "react-hot-toast";
import AlerMessage from "../../../src/pages/common/AlerMessage";
import request from "../../utils/request";

function ProfileOTPVerification({
  otpModalDatas,
  verificationType,
  refetchProfileApi,
}) {
  // const navigate = useNavigate();
  const handleModalClose = () => {
    $("#ProfileOtpVerification").toggle();
    $("#ProfileOtpVerification").toggleClass("modal modal fade");
    $("#ProfileOtpVerification").hide();
  };

  const [inputRefsArray] = useState(() =>
    Array.from({ length: 6 }, () => createRef())
  );

  const handleOnSubmit = (e) => {
    e.preventDefault();
    verify_otp();
  };
  const resendOtp = async (e) => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("phone_number", otpModalDatas?.phone_number);
      const response = await request.post("resend-otp/", bodyFormData);

      console.log("response", response);
      let status = "succsss";
      let title = "SUCCESS";
      if (!response.data.status) {
        status = "error";
        title = "ERROR";
      }
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={title}
          message={response.data.message}
        />
      ));
    } catch (error) {
      console.log("error", error);
    }
  };
  const verify_otp = async () => {
    try {
      var bodyFormData = new FormData();
      const guestToken = localStorage.getItem("guestToken");
      bodyFormData.append("new_email", otpModalDatas?.new_email);
      bodyFormData.append("otp", otpVal.join(""));
      bodyFormData.append("token", guestToken);
      const response = await request.post(
        "profile-email-verify/",
        bodyFormData
      );
      if (response?.data?.status) {
        refetchProfileApi();
        $("#ProfileOtpVerification").hide();
        $("#changeEmail").hide();
        toast((t) => (
          <AlerMessage
            t={t}
            toast={toast}
            status={response.data.status}
            title={"Success"}
            message={response.data.message}
          />
        ));
      }
      if (!response?.data?.status) {
        toast((t) => (
          <AlerMessage
            t={t}
            toast={toast}
            status={response.data.status}
            title={"Error"}
            message={response.data.message}
          />
        ));
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const [otpVal, setOtpVal] = useState([]);
  const textBase = useRef(null);

  useEffect(() => {
    if (otpVal.join("").length === textBase.current.childElementCount) {
      textBase.current.classList.add("otp-error");
    }
  }, [otpVal]);

  const focusNext = (e) => {
    const childCount = textBase.current.childElementCount;
    const currentIndex = [...e.target.parentNode.children].indexOf(e.target);

    if (e.target.value != "") {
      const values = [];
      textBase.current.childNodes.forEach((child) => {
        values.push(child.value);
      });
      if (currentIndex !== childCount - 1) {
        e.target.nextSibling.focus();
      }
      if (values.length !== 0) {
        setOtpVal(values);
      }
    }
  };

  return (
    <div
      className="modal fade"
      id="ProfileOtpVerification"
      tabIndex={-1}
      aria-labelledby="userModalLabel"
      aria-hidden="true"
      style={{ zIndex: 9999 }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content otp-modal ">
          <h5 className="modal-title text-center " id="userModalLabel">
            OTP Verification
          </h5>
          <button
            type="button"
            className="btn-close"
            // data-bs-dismiss="modal"
            // aria-label="Close"
            onClick={handleModalClose}
          />
          <div className="modal-body ">
            <div>
              <h6 className="text-center">
                Enter the <span>OTP</span> sent to{" "}
                <span className="text-underline">
                  {verificationType === "Email" ? otpModalDatas?.new_email : ""}
                </span>{" "}
              </h6>
              <form onSubmit={handleOnSubmit}>
                <div
                  id="otp"
                  className="inputs d-flex flex-row justify-content-center mt-2"
                  ref={textBase}
                >
                  {" "}
                  {inputRefsArray.map((ref, index) => {
                    return (
                      <input
                        ref={ref}
                        className={`m-2 text-center`}
                        style={{
                          width: "2.5ch",
                          border: "0px solid transparent",
                          "border-bottom": "1px solid rgba(0,0,0,0.30)",
                          "font-size": "1.45rem",
                        }}
                        type="number"
                        id={`input${index}-1`}
                        required
                        onChange={(e) => {
                          focusNext(e);
                        }}
                        maxLength={"1"}
                      />
                    );
                  })}{" "}
                </div>
                <div className="modal-footer border-0 justify-content-center">
                  Didn't received the <span>OTP?</span> click{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      resendOtp();
                    }}
                  >
                    Resend
                  </a>
                </div>
                <div className="mt-4">
                  {" "}
                  <button
                    type="submit"
                    className="btn btn-dark px-4 validate w-100"
                  >
                    VERIFY
                  </button>{" "}
                </div>
              </form>
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
export default ProfileOTPVerification;
