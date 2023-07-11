import React, { useCallback, useState } from "react";
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
  LoginSocialApple,
} from "reactjs-social-login";
// CUSTOMIZE ANY UI BUTTON
import {
  FacebookLoginButton,
  GoogleLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";
import { User } from "./User";
const REDIRECT_URI = window.location.href;
function Login() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState(null);

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
      {provider && profile ? (
        <User
          provider={provider}
          profile={profile}
          onLogout={onLogoutSuccess}
        />
      ) : (
        <div className={`App ${provider && profile ? "hide" : ""}`}>
          <h1 className="title">ReactJS Social Login</h1>
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
            {/* <h1>Google login</h1> */}
            <GoogleLoginButton />
          </LoginSocialGoogle>
          <LoginSocialFacebook
            isOnlyGetToken
            client_id={process.env.REACT_APP_FB_APP_ID || ""}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            {/* <h1>Google login</h1> */}
            <FacebookLoginButton />
          </LoginSocialFacebook>
          {/* <LoginSocialApple
            isOnlyGetToken
            client_id={process.env.REACT_APP_APPLE_ID || ""}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <AppleLoginButton />
          </LoginSocialApple> */}
        </div>
      )}
    </>
  );
}
export default Login;
