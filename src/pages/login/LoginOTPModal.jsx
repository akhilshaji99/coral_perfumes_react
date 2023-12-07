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
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const startCountdown = () => {
    setResendDisabled(true);
    setCountdown(60);
  };
  useEffect(() => {
    let timer;
    
    if (resendDisabled) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            setResendDisabled(false);
            clearInterval(timer);
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [resendDisabled]);
  const navigate = useNavigate();
  const handleModalClose = () => {
    $("#otpModal").toggle();
    $("#otpModal").toggleClass("modal modal fade");
    $("#otpModal").hide();
    // Clear inputs when the modal is closed
    inputRefsArray.forEach((ref) => {
      if (ref.current) {
        ref.current.value = "";
      }
    });
    setOtpVal([]);
      // Clear the countdown and re-enable Resend on modal close
      setCountdown(0);
      setResendDisabled(false);
  };
  // Reset input values and state when the modal is closed
  useEffect(() => {
    const clearInputs = () => {
      setOtpVal([]);
      inputRefsArray.forEach((ref) => {
        if (ref.current) {
          ref.current.value = "";
        }
      });
    };

    // Clear inputs when the component unmounts
    return () => {
      clearInputs();
    };
      // Clear the countdown and re-enable Resend on modal close
      setCountdown(0);
      setResendDisabled(false);
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputRefsArray] = useState(() =>
    Array.from({ length: 6 }, () => createRef())
  );

  const handleOnSubmit = (e) => {
    e.preventDefault();
    verify_otp();
    setCountdown(0);
    setResendDisabled(false);
  };

  const handleBackspace = (e, index) => {
    const childCount = textBase.current.childElementCount;

    if (e.key === "Backspace" && index > 0) {
      // Remove the last character from the OTP value
      setOtpVal((prevOtpVal) => prevOtpVal.slice(0, -1));

      // If the current input is empty, focus on the previous input and clear its value
      if (!e.target.value) {
        // Set focus after a slight delay
        setTimeout(() => {
          inputRefsArray[index - 1].current.focus();
          setOtpVal((prevOtpVal) => prevOtpVal.slice(0, -1));
        }, 0);
      }
    }
  };

  const resendOtp = async (e) => {
    try {
      inputRefsArray.forEach((ref) => {
        if (ref.current) {
          ref.current.value = "";
        }
      });
      setOtpVal([]);
      var bodyFormData = new FormData();
      bodyFormData.append("phone_number", componentDatas.phone_number);
      const response = await request.post("resend-otp/", bodyFormData);

      console.log("response", response);
      let status = "succsss";
      let title = "SUCCESS";
      if (!response.data.status) {
        status = "error";
        title = "ERROR";
      }else{
        startCountdown();
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

      // console.log("response", response);
      // let status = "succsss";
      // let title = "SUCCESS";
      if (response.data.status) {
        localStorage.clear();
        const userData = {
          token: response.data.token,
          userInfo: response.data.user,
        };
        localStorage.setItem("userDatas", JSON.stringify(userData));
        $("#otpModal").hide();
        $("#cartDrawer").hide();
        if (redirectTo != null) {
          navigate("/" + redirectTo);
        } else {
          navigate("/");
        }
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

    if (/^\d$/.test(e.target.value)) {
      const values = [];
      textBase.current.childNodes.forEach((child) => {
        values.push(child.value);
      });

      if (currentIndex !== childCount - 1) {
        e.target.nextSibling.focus();
      } else {
        // If the current input is not empty, prevent focusing on the next input
        e.target.blur();
      }

      setOtpVal(values);
    } else {
      // If the current input is empty or contains non-numeric characters, clear it
      e.target.value = "";
    }
  };

  const handleClick = (e) => {
    const childCount = textBase.current.childElementCount;
    const currentIndex = [...e.target.parentNode.children].indexOf(e.target);

    if (currentIndex === childCount - 1) {
      // If the clicked input is the last one, set the focus to the last character
      const length = e.target.value.length;

      // Change the input type to "text" temporarily
      e.target.type = "text";

      // Set the selectionStart and selectionEnd properties to the length of the value
      e.target.setSelectionRange(length, length);

      // Change the input type back to "number"
      e.target.type = "number";
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
                  className="inputs d-flex flex-row justify-content-center mt-2"
                  ref={textBase}
                >
                  {" "}
                  {inputRefsArray.map((ref, index) => {
                    return (
                      <input
                        key={`input-${index}`}
                        ref={ref}
                        className={`m-2 text-center`}
                        style={{
                          width: "2.5ch",
                          border: "0px solid transparent",
                          borderBottom: "1px solid rgba(0,0,0,0.30)",
                          fontSize: "1.45rem",
                        }}
                        type="text"
                        id={`input${index}-1`}
                        pattern="[0-9]" // Enforce numeric input
                        inputMode="numeric"
                        required
                        onChange={(e) => {
                          focusNext(e);
                        }}
                        onClick={(e) => {
                          handleClick(e);
                        }}
                        onKeyDown={(e) => {
                          handleBackspace(e, index);
                        }}
                        maxLength={"1"}
                      />
                    );
                  })}{" "}
                </div>
                <div className="modal-footer border-0 justify-content-center">
                  Didn't receive the <span>OTP?</span> Click{" "}
                  {/* <button
                    disabled={resendDisabled}
                    onClick={resendOtp}
                    style={{ color: resendDisabled ? "black" : "red" }}
                  >
                    Resend
                  </button> */}
                  <a
                    href="#"
                    onClick={(e) => {
                      if (resendDisabled) {
                        e.preventDefault(); // Prevents the default behavior (navigation)
                      } else {
                      resendOtp();
                      }
                    }}
                    disabled={resendDisabled}

                    style={{ color: resendDisabled ? "red" : "black" }}

                  >
                    Resend
                  </a>
                  {resendDisabled && <span> in {countdown} seconds</span>}
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
export default LoginOTPModal;
