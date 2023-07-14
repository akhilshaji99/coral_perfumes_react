import React, { useCallback, useState, useRef } from "react";
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
  LoginSocialApple,
} from "reactjs-social-login";

const REDIRECT_URI = window.location.href;

function Login() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState(null);
  const facebookRef = useRef();

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);
  return (
    <>
      <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
        <div className="mb-lg-9 mb-5">
          <div className="social" style={{ display: "flex" }}>
            <LoginSocialGoogle
              isOnlyGetToken
              client_id={process.env.REACT_APP_GG_APP_ID || ""}
              onLoginStart={onLoginStart}
              onResolve={({ provider, data }) => {
                setProvider(provider);
                setProfile(data);
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
            <LoginSocialFacebook
              ref={facebookRef}
              appId={process.env.REACT_APP_FB_APP_ID || ""}
              onLoginStart={onLoginStart}
              onLogoutSuccess={onLogoutSuccess}
              onResolve={({ provider, data }) => {
                setProvider(provider);
                setProfile(data);
                console.log(data, "data");
                console.log(provider, "provider");
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
                <g clip-path="url(#clip0_251_2220)">
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
        </div>
        {/* form */}
        <form>
          <div className="row g-3">
            {/* col */}

            <div className="col-12">
              {/* input */}
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="col-12">
              <div className="password-field position-relative">
                <input
                  type="text"
                  id="fakePassword"
                  placeholder="8547533484"
                  className="form-control"
                  required
                />
                <span>
                  <i id="passwordToggler" className="bi bi-eye-slash" />
                </span>
              </div>
            </div>
            {/* btn */}
            <div className="col-12 d-grid">
              {" "}
              <button type="submit" className="btn btn-primary">
                PROCEED
              </button>
            </div>
            {/* text */}
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
