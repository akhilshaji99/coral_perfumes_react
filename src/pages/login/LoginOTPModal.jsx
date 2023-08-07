import React, { useCallback, useState, useEffect, createRef } from "react";

import $ from "jquery";
import toast from "react-hot-toast";
import AlerMessage from "../../../src/pages/common/AlerMessage";
import request from "../../utils/request";
import { useNavigate } from "react-router-dom";

function LoginOTPModal({ componentDatas }) {
  const navigate = useNavigate();
  const handleModalClose = () => {
    $("#otpModal").toggle();
    $("#otpModal").toggleClass("modal modal fade");
    $("#otpModal").hide();
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputRefsArray] = useState(() =>
    Array.from({ length: 6 }, () => createRef())
  );
  const [letters, setLetters] = useState(() =>
    Array.from({ length: 6 }, () => "")
  );
  const handleKeyPress = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex < 6 - 1 ? prevIndex + 1 : 0;
      const nextInput = inputRefsArray?.[nextIndex]?.current;
      nextInput.focus();
      nextInput.select();
      return nextIndex;
    });
  };

  useEffect(() => {
    if (inputRefsArray?.[0]?.current) {
      inputRefsArray?.[0]?.current?.focus();
    }

    window.addEventListener("keyup", handleKeyPress, false);
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, []);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    verify_otp(letters);
    console.log(letters);
  };
  const resendOtp = async (e) => {
    try {
      var bodyFormData = new FormData();
      // let otpString = letters.toString();
      // var otp = otpString.split(',').join("");
      bodyFormData.append("phone_or_email", componentDatas.phone_number);
      // bodyFormData.append("otp", otp);

      const response = await request.post("resend_otp/", bodyFormData);

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
          status={response.data.status}
          title={title}
          message={response.data.message}
        />
      ));
    } catch (error) {
      console.log("error", error);
    }
  };
  const verify_otp = async (values) => {
    try {
      var bodyFormData = new FormData();
      let otpString = letters.toString();
      var otp = otpString.split(",").join("");
      bodyFormData.append("phone_or_email", componentDatas.phone_number);
      bodyFormData.append("otp", otp);

      const response = await request.post("verify_otp/", bodyFormData);

      console.log("response", response);
      let status = "succsss";
      let title = "SUCCESS";
      if (!response.data.status) {
        status = "error";
        title = "ERROR";
      } else {
        localStorage.clear();
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
          status={response.data.status}
          title={title}
          message={response.data.message}
        />
      ));
    } catch (error) {
      console.log("error", error);
    }
  };

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
                  <form onSubmit={handleOnSubmit}>
                    <div
                      id="otp"
                      class="inputs d-flex flex-row justify-content-center mt-2"
                    >
                      {" "}
                      {inputRefsArray.map((ref, index) => {
                        return (
                          <input
                            ref={ref}
                            className={`m-2 text-center form-control rounded`}
                            type="text"
                            id={`input${index}-1`}
                            required
                            onChange={(e) => {
                              const { value } = e.target;
                              setLetters((letters) =>
                                letters.map((letter, letterIndex) =>
                                  letterIndex === index ? value : letter
                                )
                              );
                            }}
                            onClick={(e) => {
                              setCurrentIndex(index);
                              e.target.select();
                            }}
                            value={letters[index]}
                            max={"1"}
                          />
                        );
                      })}{" "}
                    </div>
                    <div className="modal-footer border-0 justify-content-center">
                      Didn't received the OTP? click{" "}
                      <a
                        href="#"
                        onClick={(e) => {
                          resendOtp();
                        }}
                      >
                        Resend
                      </a>
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
