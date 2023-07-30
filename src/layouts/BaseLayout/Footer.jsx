import {useCallback } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import request from "../../utils/request";

import FacebookIcon from "../../assets/img/icons/social/facebook.svg";
import LinkedinIcon from "../../assets/img/icons/social/linkedin.svg";
import InstagramIcon from "../../assets/img/icons/social/instagram.svg";
import WhatsappIcon from "../../assets/img/icons/social/whatsapp.png";
import TamaraIcon from "../../assets/img/icons/payment/tamara.svg";
import MastercardIcon from "../../assets/img/icons/payment/mastercard.svg";
import TabbyIcon from "../../assets/img/icons/payment/tabby.svg";
import VisaIcon from "../../assets/img/icons/payment/visa.svg";
import FlagUae from "../../assets/img/icons/lang/arab.png";
import ScrollToTop from "react-scroll-to-top";
import toast from "react-hot-toast";
import AlerMessage from "../../../src/pages/common/AlerMessage";
const schema = yup.object().shape({
  email: yup.string().email().required(),
});
function Footer() {
  const handleOnSubmit = (values) => {
    subscribeNewsLetter(values);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  const subscribeNewsLetter = async (values) => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append('email', values.email);
      const response = await request.post("subscribe-newsletter/",bodyFormData);
      
      console.log("response", response.data.message);
      let status = "succsss";
      if(!response.data.status){
        status = "error";
      }
      toast((t) => (
        <AlerMessage t={t} toast={toast} status={status} message={response.data.message} />
      ));

    } catch (error) {
      console.log("error", error);
    }
  };
  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );
 

  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-row">
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-3">
                <img src={FacebookIcon} alt="facebook" />
              </div>
              <div className="col-md-3">
                <img src={LinkedinIcon} alt="LinkedIn" />
              </div>
              <div className="col-md-3">
                <img src={InstagramIcon} alt="Instagram" />
              </div>
              <div className="col-md-3">
                <img src={WhatsappIcon} alt="Whatsapp" />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-3">
                {" "}
                <img src={TamaraIcon} alt="Tamara" />
              </div>
              <div className="col-md-3">
                {" "}
                <img src={MastercardIcon} alt="Mastercard" />
              </div>
              <div className="col-md-3">
                {" "}
                <img src={TabbyIcon} alt="Tabby" />
              </div>
              <div className="col-md-3">
                {" "}
                <img src={VisaIcon} alt="Visa" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row g-4 py-4 footer-row">
          <div className="col-md-5">
            <div className="row ">
              <div className="col-md-3">
                <h6 className="mb-4">info</h6>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      about us
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      {" "}
                      our brands
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      {" "}
                      our stores
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      our services
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      our store
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6 className="mb-4">shopping</h6>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      perfumes
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      {" "}
                      Baggage
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      {" "}
                      sunglass
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      jewllerry
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      watches
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6 className="mb-4">help</h6>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      contact us
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      {" "}
                      order status
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      {" "}
                      return policies
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      product recall
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#!" className="nav-link">
                      gift cards
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6 className="mb-4">support</h6>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="tel:+97123345346767" className="nav-link">
                      +971 2334 5346767
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="mailto:coral@coralperfumes.com"
                      className="nav-link"
                    >
                      {" "}
                      coral@coralperfumes.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-md-8">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={formik.values.email}
                    onChange={(e) => setInputValue("email", e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-4">
                  {/* <NavLink to="/login"> */}
                    <button type="submit" disabled={!(formik.isValid && formik.dirty)} className="btn btn-light w-100">
                      Sign Up
                    </button>
                  {/* </NavLink> */}
                </div>
              </div>
            </form>
            <div className="row mt-5 footer-row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-2">
                    <svg
                      width="20"
                      height="25"
                      viewBox="0 0 20 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7515 13.2618C16.7634 12.3436 17.0079 11.4434 17.4624 10.6448C17.9169 9.84628 18.5666 9.17533 19.351 8.69446C18.8527 7.98478 18.1952 7.40076 17.431 6.98872C16.6668 6.57669 15.8167 6.34808 14.9483 6.321C13.096 6.1271 11.3002 7.42628 10.3563 7.42628C9.39416 7.42628 7.94079 6.34026 6.37586 6.37233C5.36357 6.40499 4.37699 6.69852 3.51234 7.22437C2.64759 7.75022 1.9343 8.49049 1.4418 9.37303C-0.691616 13.0563 0.899718 18.4694 2.94337 21.4467C3.96574 22.9046 5.16078 24.5331 6.72434 24.4753C8.25437 24.412 8.82578 23.5024 10.6727 23.5024C12.5024 23.5024 13.0386 24.4753 14.6339 24.4386C16.2757 24.412 17.3102 22.9742 18.2967 21.5026C19.0313 20.4638 19.5966 19.3157 19.9717 18.1008C19.0178 17.6985 18.2038 17.0251 17.6312 16.1646C17.0586 15.304 16.7526 14.2945 16.7515 13.2618Z"
                        fill="white"
                      />
                      <path
                        d="M13.7385 4.36258C14.6337 3.29104 15.0746 1.91364 14.9679 0.522949C13.6002 0.666194 12.337 1.31798 11.4297 2.34856C10.9861 2.85192 10.6463 3.43761 10.4298 4.07209C10.2133 4.70657 10.1243 5.37732 10.168 6.04603C10.8521 6.05307 11.5288 5.90522 12.1473 5.61365C12.7657 5.32208 13.3098 4.8943 13.7385 4.36258Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="col-md-2">
                    <svg
                      width="22"
                      height="24"
                      viewBox="0 0 22 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.40295 0.887261C1.10333 1.23544 0.950431 1.68301 0.975591 2.13835V21.9056C0.944647 22.3617 1.09824 22.8113 1.40295 23.1567L1.4666 23.2282L12.733 12.1561V11.888L1.4666 0.824707L1.40295 0.887261Z"
                        fill="white"
                      />
                      <path
                        d="M20.8856 10.9537L20.8859 10.9538C21.4778 11.2821 21.7119 11.6798 21.7119 12.0231C21.7119 12.3669 21.4773 12.767 20.885 13.0997C20.8849 13.0997 20.8848 13.0998 20.8848 13.0998L16.5101 15.544L12.9824 12.0518V11.9923L16.4979 8.51217L20.8856 10.9537Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M3.16264 23.001L3.14715 23.0097L3.13304 23.0204C2.9074 23.1925 2.62698 23.2819 2.34034 23.2723C2.14667 23.2659 1.95896 23.2146 1.79181 23.1245L12.7324 12.3725L16.1566 15.7376L3.16264 23.001Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M3.13109 1.03092L3.14612 1.04262L3.16275 1.0519L16.1564 8.30644L12.7324 11.6715L1.79192 0.91958C1.95916 0.829711 2.14701 0.778967 2.34069 0.773452C2.62737 0.765288 2.90729 0.856764 3.13109 1.03092Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <path
                        opacity="0.2"
                        d="M16.4606 15.7129L3.28462 23.0854C3.02274 23.2797 2.70348 23.3848 2.37531 23.3848C2.04723 23.3848 1.72797 23.2797 1.466 23.0854L1.40234 23.148L1.466 23.2194C1.72797 23.4137 2.04723 23.5188 2.37531 23.5188C2.70348 23.5188 3.02274 23.4137 3.28462 23.2194L16.5697 15.7933L16.4606 15.7129Z"
                        fill="white"
                      />
                      <path
                        opacity="0.12"
                        d="M21.0075 13.1837L16.4609 15.7127L16.5428 15.7931L21.0075 13.3088C21.271 13.1993 21.4997 13.022 21.6693 12.7955C21.8389 12.5691 21.9433 12.3019 21.9714 12.022C21.9145 12.2763 21.7977 12.5139 21.6303 12.7157C21.4628 12.9175 21.2496 13.0778 21.0075 13.1837Z"
                        fill="white"
                      />
                      <path
                        opacity="0.25"
                        d="M3.28523 0.958537L21.0077 10.8601C21.2498 10.966 21.4631 11.1263 21.6305 11.3281C21.7979 11.5298 21.9148 11.7675 21.9716 12.0218C21.9435 11.7419 21.8392 11.4747 21.6695 11.2483C21.5 11.0218 21.2713 10.8444 21.0077 10.7349L3.28523 0.833428C2.02129 0.118518 0.975586 0.708319 0.975586 2.13814V2.27218C1.00286 0.842365 2.02129 0.252564 3.28523 0.958537Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <img src={FlagUae} alt="UAE" />
                <span className="flag-span">&nbsp;&nbsp;UAE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top py-4 footer-credits">
          <div className="row align-items-center footer-row">
            <div className="col-md-4">2023 All Rights Reserved</div>
            <div className="col-md-4 text-center">
              <a href="">Privacy & Cookies </a> / <a href="">Ts & Cs</a> /{" "}
              <a href="">Shipping</a>{" "}
            </div>
            <div className="col-md-4 text-end">
              Engineerd By{" "}
              <a href="https://cloud6.co.in/" target="_blank">
                Cloud 6
              </a>
            </div>
          </div>
        </div>
        <div className="border-top py-4 footer-bottom">
          <p className="mb-5">BEST PERFUME ECOMMERCE IN DUBAI</p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed eu neque ut mi sagittis sodales. Phasellus auctor
            magna ac neque condimentum, et tincidunt ligula viverra. Donec sed
            massa eget lectus dapibus iaculis. Integer scelerisque, elit
            eusagittis efficitur, nisi libero viverra dolor, ac laoreet enim
            velit id velit. Suspendisse ac metus eu lorem egestas efficitur. In
            hac habitasse platea dictumst. Pellentesque eu m
          </p>
          <ol>
            <li className="mb-4">
              BEST PERFUME ECOMMERCE IN DUBAI- Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla facilisi. Sed eu neque ut mi
              sagittis sodales. Phasellus auctor magna ac neque condimentum, et
              tincidunt ligula viverra. Donec sed massa eget lectus dapibus
              iaculis. Integer scelerisque, elit eusagittis efficitur, nisi
              libero viverra dolor, ac laoreet enim velit id velit. Suspendisse
              ac metus eu lorem egestas efficitur. In hac habitasse platea
              dictumst. Pellentesque eu m
            </li>
            <li className="mb-4">
              BEST PERFUME ECOMMERCE IN DUBAI- Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla facilisi. Sed eu neque ut mi
              sagittis sodales. Phasellus auctor magna ac neque condimentum, et
              tincidunt ligula viverra. Donec sed massa eget lectus dapibus
              iaculis. Integer scelerisque, elit eusagittis efficitur, nisi
              libero viverra dolor, ac laoreet enim velit id velit. Suspendisse
              ac metus eu lorem egestas efficitur. In hac habitasse platea
              dictumst. Pellentesque eu m
            </li>
            <li className="mb-4">
              BEST PERFUME ECOMMERCE IN DUBAI- Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla facilisi. Sed eu neque ut mi
              sagittis sodales. Phasellus auctor magna ac neque condimentum, et
              tincidunt ligula viverra. Donec sed massa eget lectus dapibus
              iaculis. Integer scelerisque, elit eusagittis efficitur, nisi
              libero viverra dolor, ac laoreet enim velit id velit. Suspendisse
              ac metus eu lorem egestas efficitur. In hac habitasse platea
              dictumst. Pellentesque eu m
            </li>
            <li className="mb-4">
              BEST PERFUME ECOMMERCE IN DUBAI- Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla facilisi. Sed eu neque ut mi
              sagittis sodales. Phasellus auctor magna ac neque condimentum, et
              tincidunt ligula viverra. Donec sed massa eget lectus dapibus
              iaculis. Integer scelerisque, elit eusagittis efficitur, nisi
              libero viverra dolor, ac laoreet enim velit id velit. Suspendisse
              ac metus eu lorem egestas efficitur. In hac habitasse platea
              dictumst. Pellentesque eu m
            </li>
          </ol>
        </div>
      </div>
      <ScrollToTop smooth />
    </footer>
  );
}
export default Footer;
