import FacebookIcon from "../../assets/img/icons/social/facebook.svg";
import LinkedinIcon from "../../assets/img/icons/social/linkedin.svg";
import InstagramIcon from "../../assets/img/icons/social/instagram.svg";
import WhatsappIcon from "../../assets/img/icons/social/whatsapp.png";
import TamaraIcon from "../../assets/img/icons/payment/tamara.svg";
import MastercardIcon from "../../assets/img/icons/payment/mastercard.svg";
import TabbyIcon from "../../assets/img/icons/payment/tabby.svg";
import VisaIcon from "../../assets/img/icons/payment/visa.svg";
import FlagUae from "../../assets/img/icons/flags/uae.svg"

function Footer() {
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
            <div className="row">
              <div className="col-md-8">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="col-md-4">
                <button type="button" class="btn btn-light w-100">
                  Sign Up
                </button>
              </div>
            </div>
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
                        stroke-width="0.5"
                      />
                      <path
                        d="M3.16264 23.001L3.14715 23.0097L3.13304 23.0204C2.9074 23.1925 2.62698 23.2819 2.34034 23.2723C2.14667 23.2659 1.95896 23.2146 1.79181 23.1245L12.7324 12.3725L16.1566 15.7376L3.16264 23.001Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                      <path
                        d="M3.13109 1.03092L3.14612 1.04262L3.16275 1.0519L16.1564 8.30644L12.7324 11.6715L1.79192 0.91958C1.95916 0.829711 2.14701 0.778967 2.34069 0.773452C2.62737 0.765288 2.90729 0.856764 3.13109 1.03092Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
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
        <div className="border-top py-4">
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
        <div className="border-top py-4">
          <div className="row align-items-center d-none">
            <div className="col-md-6">
              <span className="small text-muted">
                © 2022 <span id="copyright"> -</span>FreshCart eCommerce HTML
                Template. All rights reserved. Powered by{" "}
                <a href="https://codescandy.com/">Codescandy</a>.
              </span>
            </div>
            <div className="col-md-6">
              <ul className="list-inline text-md-end mb-0 small mt-3 mt-md-0">
                <li className="list-inline-item text-muted">Follow us on</li>
                <li className="list-inline-item me-1">
                  <a href="#!" className="btn btn-xs btn-social btn-icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item me-1">
                  <a href="#!" className="btn btn-xs btn-social btn-icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="btn btn-xs btn-social btn-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
