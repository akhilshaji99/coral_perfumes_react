import React from "react";
import PaymentSuccessImg from "./img/Tick.svg";
import { Link } from "react-router-dom";

function PaymentSuccess({ responseMessage }) {
  return (
    <div className="empty-top">
      <div className="container-lg-fluid alert-padding">
        <div className="row align-items-center justify-content-center alert-box-success">
          <div className="col-md-8 text-center">
            <img
              src={PaymentSuccessImg}
              className="img-fluid"
              alt="Coral Perfumes"
            />
            <h1>
              <span>
                <svg
                  width={19}
                  height={19}
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9.5" cy="9.5" r={9} fill="black" />
                  <path
                    d="M5.5 10.625L7.68182 12.5L13.5 7.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {responseMessage?.message_2}
            </h1>
            <p>
              {responseMessage?.message_3} <br />
              {responseMessage?.message_4}
            </p>
            <h5>
              <span>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_823_14624)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.316 1.09213e-06H11.1091C10.7308 1.09213e-06 10.194 0.429098 9.85847 0.764807L0.433284 10.1662C0.295667 10.303 0.18645 10.4656 0.111921 10.6448C0.0373924 10.824 -0.000976562 11.0161 -0.000976562 11.2102C-0.000976562 11.4043 0.0373924 11.5965 0.111921 11.7757C0.18645 11.9548 0.295667 12.1175 0.433284 12.2543L7.76449 19.5682C8.04291 19.8449 8.41945 20.0003 8.81194 20.0003C9.20442 20.0003 9.58097 19.8449 9.85938 19.5682L19.2846 10.1665C19.6527 9.79812 19.9998 9.24542 19.9998 8.86851V0.6821C19.9997 0.59238 19.9819 0.503562 19.9475 0.420721C19.9131 0.33788 19.8627 0.262639 19.7992 0.199296C19.7356 0.135953 19.6603 0.0857499 19.5774 0.0515542C19.4945 0.0173586 19.4057 -0.000159347 19.316 1.09213e-06ZM14.5964 7.49119C14.1914 7.49125 13.7954 7.37114 13.4587 7.14604C13.1219 6.92095 12.8594 6.60098 12.7044 6.22661C12.5494 5.85224 12.5088 5.44028 12.5878 5.04284C12.6668 4.64539 12.8618 4.28031 13.1482 3.99377C13.4346 3.70723 13.7995 3.5121 14.1967 3.43306C14.5939 3.35402 15.0056 3.39462 15.3798 3.54972C15.754 3.70482 16.0738 3.96746 16.2987 4.30442C16.5237 4.64138 16.6437 5.03753 16.6437 5.44275C16.6437 5.71176 16.5907 5.97813 16.4878 6.22666C16.385 6.47518 16.2342 6.701 16.044 6.89122C15.8539 7.08143 15.6282 7.23232 15.3798 7.33526C15.1315 7.4382 14.8652 7.49119 14.5964 7.49119Z"
                      fill="url(#paint0_linear_823_14624)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_823_14624"
                      x1="9.99944"
                      y1={0}
                      x2="9.99944"
                      y2="20.0003"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.130108" stopColor="#EB63B1" />
                      <stop offset="0.671875" stopColor="#FF0000" />
                      <stop offset={1} stopColor="#FFE08B" />
                    </linearGradient>
                    <clipPath id="clip0_823_14624">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <Link to={"/"}>{responseMessage?.message_5}</Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
