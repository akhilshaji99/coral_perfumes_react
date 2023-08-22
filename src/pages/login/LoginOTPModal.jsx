import React, {
  useCallback,
  useState,
  useEffect,
  createRef,
  useRef,
} from "react";

import $ from "jquery";
import toast from "react-hot-toast";
import AlerMessage from "../../../src/pages/common/AlerMessage";
import request from "../../utils/request";
import { useNavigate } from "react-router-dom";

function LoginOTPModal({ componentDatas, redirectTo = null }) {
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    verify_otp();
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
  const verify_otp = async () => {
    const queryParameters = new URLSearchParams(window.location.search);
    if (queryParameters == "checkout=") {
      redirectTo = "checkout";
    }
    try {
      var bodyFormData = new FormData();
      const guestToken = localStorage.getItem("guestToken");
      bodyFormData.append("phone_or_email", componentDatas.phone_number);
      bodyFormData.append("otp", otpVal.join(""));
      bodyFormData.append("token", guestToken);
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
        if (redirectTo != null) {
          navigate("/" + redirectTo);
        } else {
          navigate("/");
        }
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
      id="otpModal"
      tabIndex={-1}
      aria-labelledby="userModalLabel"
      aria-hidden="true"
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
                  {componentDatas.phone_number}
                </span>{" "}
                /<br></br>
                <span className="text-underline">{componentDatas.email}</span>
              </h6>
              <form onSubmit={handleOnSubmit}>
                <div
                  id="otp"
                  class="inputs d-flex flex-row justify-content-center mt-2"
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
                        type="text"
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
                <div class="mt-4">
                  {" "}
                  <button type="submit" class="btn btn-dark px-4 validate w-100">
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
export default LoginOTPModal;
