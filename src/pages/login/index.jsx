import React, { useCallback, useRef, useState } from "react";
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
  LoginSocialApple,
  // IResolveParams,
} from "reactjs-social-login";
import toast from "react-hot-toast";
import AlerMessage from "../../../src/pages/common/AlerMessage";
import { useFormik } from "formik";
import * as yup from "yup";
import request from "../../utils/request";
import LoginOTPModal from "./LoginOTPModal";
import $ from "jquery";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object().shape({
  email: yup.string().email().required(),
  phone_number: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
const REDIRECT_URI =
  "https://plenty-planets-beam-42-118-51-2.loca.lt/account/login";
function Login() {
  // const [provider, setProvider] = useState("");
  const facebookRef = useRef();
  const [profile, setProfile] = useState(null);
  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    // setProfile(null);
    // setProvider("");
    alert("logout success");
  }, []);
  const handleOnSubmit = (values) => {
    // subscribeNewsLetter(values);
    login(values);
    console.log(values);
  };

  const login = async (values) => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("email", values.email);
      bodyFormData.append("phone_number", values.phone_number);
      const response = await request.post("login/", bodyFormData);

      console.log("response", response);
      let status = "succsss";
      let title = "SUCCESS";
      if (!response.data.status) {
        status = "error";
        title = "ERROR";
      } else {
        console.log("otp verification");

        // $('#userModal').modal('show');
        $("document").ready(function () {
          // $('#btnTest').click(function() {
          // $('#userModal').modal('show');
          $("#otpModal").toggle();
          $("#otpModal").toggleClass("modal fade modal");
          // $('#userModal').show();
          // });
        });
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
      email: "",
      phone_number: "",
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
    <>
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-4">
          <div className="card login-card">
            <div className="row justify-content-center social-head">
              <div className="col-md-2">
                <LoginSocialGoogle
                  client_id={process.env.REACT_APP_GG_APP_ID || ""}
                  onLoginStart={onLoginStart}
                  // redirect_uri={REDIRECT_URI}
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={({ provider, data }) => {
                    // setProvider(provider);
                    setProfile(data);
                    console.log("profileData", data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <svg
                    width="47"
                    height="48"
                    viewBox="0 0 47 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.4373 28.0171V21.5751H46.626C46.8574 22.8607 46.9684 24.1642 46.9576 25.4695C46.9576 30.3051 45.6077 36.2831 41.2562 40.541C37.0208 44.854 31.6146 47.1517 24.4506 47.1517C11.1839 47.1517 0 36.5687 0 23.5743C0 10.5799 11.164 0 24.4473 0C31.7937 0 37.0275 2.82021 40.9577 6.49071L36.3144 11.0342C33.1302 8.03051 28.8632 6.37789 24.4407 6.43554C14.7427 6.43554 7.16073 14.0816 7.16073 23.571C7.16073 33.0604 14.7427 40.7065 24.4407 40.7065C30.7424 40.7065 34.3111 38.2368 36.6096 35.991C38.4702 34.1671 39.6941 31.5676 40.175 28.0139L24.4373 28.0171Z"
                      fill="black"
                    />
                  </svg>
                </LoginSocialGoogle>
              </div>
              <div className="col-md-2">
                {" "}
                <LoginSocialFacebook
                  ref={facebookRef}
                  appId={process.env.REACT_APP_FB_APP_ID || ""}
                  fieldsProfile={
                    "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                  }
                  onLoginStart={onLoginStart}
                  redirect_uri={REDIRECT_URI}
                  onLogoutSuccess={onLogoutSuccess}
                  onResolve={({ provider, data }) => {
                    // setProvider(provider);
                    setProfile(data);
                    console.log(data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <svg
                    width="26"
                    height="49"
                    viewBox="0 0 26 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_251_2220)">
                      <path
                        d="M21.807 0L24.2324 0.190075L25.9232 0.341359V7.99479H25.4101C23.7505 8.01806 22.0908 7.99479 20.4311 8.08013C18.4099 8.18486 17.2983 9.27488 17.2167 11.2804C17.135 13.2859 17.1856 15.3844 17.1817 17.4559C17.1922 17.517 17.2091 17.5768 17.2322 17.6343H25.6395C25.2508 20.5126 24.9048 23.3288 24.5356 26.1916H17.2128C17.2128 26.3778 17.1739 26.5096 17.1739 26.6454V47.8407C17.1739 47.9493 17.1739 48.0579 17.1972 48.1666H8.34301C8.34301 47.9648 8.31969 47.7592 8.31969 47.5575C8.31969 40.6657 8.31969 33.7726 8.31969 26.8782V26.1954H0.958008V17.6343H8.34301V17.0292C8.34301 14.7909 8.29637 12.5488 8.38965 10.3106C8.50237 7.61464 9.29917 5.13978 11.1998 3.12654C12.6252 1.64759 14.4819 0.655263 16.5054 0.290931C17.034 0.178438 17.5859 0.096977 18.1379 0H21.807Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_251_2220">
                        <rect
                          width="24.9652"
                          height="48.1472"
                          fill="white"
                          transform="translate(0.958008)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </LoginSocialFacebook>
              </div>
              <div className="col-md-2">
                <LoginSocialApple
                  client_id={process.env.REACT_APP_APPLE_ID || ""}
                  scope={"name email"}
                  redirect_uri={REDIRECT_URI}
                  onLoginStart={onLoginStart}
                  onResolve={({ provider, data }) => {
                    // setProvider(provider);
                    setProfile(data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <svg
                    width="42"
                    height="48"
                    viewBox="0 0 42 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.6847 25.3302C34.7089 23.5044 35.2143 21.7142 36.1541 20.126C37.0938 18.5379 38.4373 17.2034 40.0596 16.2468C39.0279 14.8376 37.6679 13.6781 36.0874 12.8605C34.5069 12.0428 32.7495 11.5894 30.9544 11.5362C27.121 11.1516 23.4078 13.7336 21.4567 13.7336C19.5056 13.7336 16.46 11.5746 13.2225 11.6378C11.1294 11.7023 9.08948 12.2852 7.3011 13.3297C5.51272 14.3742 4.03684 15.8447 3.01708 17.5982C-1.39227 24.9209 1.89683 35.6853 6.12282 41.6045C8.23724 44.5051 10.7069 47.7407 13.9445 47.6281C17.0961 47.5045 18.2908 45.7054 22.1099 45.7054C25.9291 45.7054 27.0035 47.6281 30.3041 47.5649C33.6992 47.5127 35.8394 44.6534 37.8822 41.7281C39.4014 39.6625 40.5695 37.3791 41.3432 34.963C39.3685 34.1626 37.6837 32.822 36.4994 31.1088C35.3152 29.3955 34.684 27.3855 34.6847 25.3302Z"
                      fill="black"
                    />
                    <path
                      d="M28.4506 7.63588C30.3059 5.50608 31.2226 2.76707 31.0062 0C28.1729 0.283094 25.5549 1.57967 23.6745 3.63116C21.8226 5.65487 20.8839 8.30033 21.0644 10.9869C22.4797 10.9998 23.8796 10.705 25.159 10.1246C26.4383 9.54421 27.5637 8.69331 28.4506 7.63588Z"
                      fill="black"
                    />
                  </svg>
                </LoginSocialApple>
              </div>
            </div>
            <div className="separator">
              <div className="line"></div>
              <h2>OR</h2>
              <div className="line"></div>
            </div>
            <LoginOTPModal componentDatas={formik.values} />
            <p>LOGIN/SIGN UP</p>
            <form onSubmit={formik.handleSubmit}>
              <div className="row g-3">
                {/* col */}

                <div className="col-12 mb-5">
                  {/* input */}
                  <input
                    type="email"
                    className={`form-control ${
                      formik.errors.email ? "border-danger" : ""
                    }`}
                    id="inputEmail4"
                    placeholder="E-mail*"
                    required
                    value={formik.values.email}
                    onChange={(e) => setInputValue("email", e.target.value)}
                  />
                </div>
                <div className="col-12 mb-5">
                  <div className="password-field position-relative">
                    <input
                      type="text"
                      id="phone_number"
                      placeholder="8547533484"
                      className={`form-control ${
                        formik.errors.phone_number ? "border-danger" : ""
                      }`}
                      required
                      value={formik.values.phone_number}
                      onChange={(e) =>
                        setInputValue("phone_number", e.target.value)
                      }
                      error={formik.touched.type && Boolean(formik.errors.type)}
                    />
                    <span>
                      <i id="passwordToggler" className="bi bi-eye-slash" />
                    </span>
                  </div>
                </div>
                {/* btn */}
                <div className="col-12 d-grid">
                  {" "}
                  <button type="submit" className="btn btn-dark">
                    PROCEED
                  </button>
                </div>
                {/* text */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mb-lg-9 mb-5 col-md-4">
          <div className="social" style={{ display: "flex" }}></div>
        </div>
        {/* form */}
      </div>
    </>
  );
}
export default Login;
