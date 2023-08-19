import React from "react";
import PaymentFailedImg from "./img/payment-failed.png";
import failedIcon from "./img/close-icon.svg";

function PaymentFailed() {
  return (
    <div>
      <div className="container-lg-fluid alert-padding">
        <div className="row align-items-center justify-content-center alert-box-failed">
          <div className="col-md-8 text-center">
            <img
              src={PaymentFailedImg}
              className="img-fluid"
              alt="Coral Perfumes"
            />
            <h1>
              <span>
                <img src={failedIcon} alt="" />
              </span>
              Something went wrong
            </h1>
            <h5>
              <span>
                <svg
                  width={28}
                  height={19}
                  viewBox="0 0 28 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_823_14629)">
                    <path
                      d="M25.9341 0.0793806L2.13716 -0.000192981C1.8642 -0.00305719 1.59338 0.0489447 1.3403 0.152818C1.08721 0.256691 0.856866 0.410382 0.662524 0.60504C0.468183 0.799698 0.313686 1.03148 0.207932 1.28703C0.102178 1.54257 0.0472573 1.81684 0.0463322 2.09404L2.76535e-05 16.8115C-0.00137912 17.0876 0.0509005 17.3613 0.153869 17.6168C0.256837 17.8724 0.408468 18.1048 0.600067 18.3007C0.791665 18.4966 1.01946 18.6522 1.2704 18.7585C1.52133 18.8648 1.79046 18.9198 2.06236 18.9202L25.8736 18.9998C26.1453 19.0008 26.4146 18.9473 26.6661 18.8426C26.9175 18.7379 27.1462 18.5839 27.339 18.3894C27.5318 18.195 27.685 17.9638 27.7899 17.7092C27.8948 17.4546 27.9492 17.1815 27.9502 16.9056L28 2.18808C28.001 1.6304 27.784 1.09513 27.3966 0.699777C27.0093 0.304423 26.4833 0.0812962 25.9341 0.0793806ZM3.797 11.5488H11.5548V12.142H3.797V11.5488ZM3.797 14.3592V13.766L19.3161 13.7443V14.3375L3.797 14.3592ZM19.2022 10.2105V2.84637H24.9867V10.2069L19.2022 10.2105Z"
                      fill="url(#paint0_linear_823_14629)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_823_14629"
                      x1={3}
                      y1="2.93158e-07"
                      x2={34}
                      y2="16.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00FFA5" />
                      <stop offset={1} stopColor="#00B3FF" />
                    </linearGradient>
                    <clipPath id="clip0_823_14629">
                      <rect width={28} height={19} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Continue Shopping
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentFailed;
