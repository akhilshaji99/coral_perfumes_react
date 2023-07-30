import ProductCarousel from "./blocks/ProductCarousel";
import Sample from "../../assets/img/sample-product1.png";
import { useEffect } from "react";
import request from "../../utils/request";
import { useState } from "react";
import CreateProductVariants from "./js/CreateProductVariants";
import toast from "react-hot-toast";
import AlerMessage from "../common/AlerMessage";
import Tabby from "../../assets/img/icons/payment/tabby-1.png";
import Tamara from "../../assets/img/icons/payment/tamara-1.png";

function Index() {
  const [currentVariant, setCurrentVariant] = useState(null);
  const [productVariants, setproductVariants] = useState(null);

  useEffect(() => {
    getProductDetails();
  }, [window.location.href]);

  const getProductDetails = async () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const product_slug = queryParameters.get("slug");
    try {
      if (product_slug) {
        const response = await request.get(
          "get_product_variants/" + product_slug + "/"
        );

        if (response?.data?.current_variant) {
          setCurrentVariant(response.data.current_variant);
        }

        if (response.data.current_variant && response.data.other_variants) {
          CreateProductVariants(
            response.data.current_variant,
            response.data.other_variants
          ).then((data) => {
            setproductVariants(data);
          });
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const notify = (status = null) =>
    toast((t) => (
      <AlerMessage t={t} toast={toast} status={status} message="" />
    ));

  return (
    <>
      <div className="conatiner px-5">
        <div className="row mb-5 ">
          <ProductCarousel />
          <div className="col-md-5">
            <div className="product-desc-section">
              <h1>Bvlgari Jasmin Noir Splendida Eau De Parfum 100 Ml</h1>
              <h2 className="product-author">
                nspired by Christian Dior Lavender
              </h2>
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="product-single-price">aed 200</div>
                      <span className="vat-included">VAT included</span>
                    </div>
                    <div className="col-md-4">
                      <div className="product-single-discounted-price">
                        aed 400
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-single-discounted">aed 400</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-md-3">
                      <svg
                        width={23}
                        height={23}
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.7342 5.29158C18.8447 6.7718 20.301 9.12525 20.5965 11.8408M2.5196 11.894C2.65227 10.5918 3.06001 9.33345 3.71534 8.20371C4.37067 7.07397 5.25836 6.09911 6.31859 5.34483M7.4794 21.0203C8.70352 21.6486 10.0965 22 11.5633 22C12.9774 22 14.307 21.6805 15.4995 21.0948M11.5633 6.92089C12.3414 6.92089 13.0876 6.60899 13.6377 6.0538C14.1879 5.49861 14.497 4.74561 14.497 3.96045C14.497 3.17529 14.1879 2.42229 13.6377 1.86709C13.0876 1.3119 12.3414 1 11.5633 1C10.7853 1 10.0391 1.3119 9.4889 1.86709C8.93873 2.42229 8.62965 3.17529 8.62965 3.96045C8.62965 4.74561 8.93873 5.49861 9.4889 6.0538C10.0391 6.60899 10.7853 6.92089 11.5633 6.92089ZM3.93367 19.9341C4.71173 19.9341 5.45792 19.6222 6.00808 19.067C6.55825 18.5118 6.86734 17.7588 6.86734 16.9736C6.86734 16.1885 6.55825 15.4355 6.00808 14.8803C5.45792 14.3251 4.71173 14.0132 3.93367 14.0132C3.15561 14.0132 2.40942 14.3251 1.85925 14.8803C1.30908 15.4355 1 16.1885 1 16.9736C1 17.7588 1.30908 18.5118 1.85925 19.067C2.40942 19.6222 3.15561 19.9341 3.93367 19.9341ZM19.0663 19.9341C19.8444 19.9341 20.5906 19.6222 21.1407 19.067C21.6909 18.5118 22 17.7588 22 16.9736C22 16.1885 21.6909 15.4355 21.1407 14.8803C20.5906 14.3251 19.8444 14.0132 19.0663 14.0132C18.2883 14.0132 17.5421 14.3251 16.9919 14.8803C16.4417 15.4355 16.1327 16.1885 16.1327 16.9736C16.1327 17.7588 16.4417 18.5118 16.9919 19.067C17.5421 19.6222 18.2883 19.9341 19.0663 19.9341Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="col-md-3">
                      <svg
                        width={23}
                        height={23}
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3912 8.01921C22.3912 15.9508 15.4634 20.6285 12.3596 21.747C11.9916 21.8826 11.3996 21.8826 11.0316 21.747C9.70366 21.2725 7.67174 20.137 5.79982 18.3913C3.27191 16.0356 1 12.5612 1 8.01921C1 4.51099 3.6559 1.68069 6.93577 1.68069C8.8877 1.68069 10.6156 2.68062 11.7036 4.20593C12.5059 3.06919 13.6474 2.25307 14.9428 1.89004C16.2381 1.52701 17.6113 1.63838 18.8393 2.20608C20.9352 3.18906 22.3912 5.40923 22.3912 8.01921Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-5">
                <div className="col-md-6">
                  <button
                    className="btn btn-dark btn-checkout"
                    onClick={() => notify("success")}
                  >
                    add to bag{" "}
                    <svg
                      width={17}
                      height={20}
                      viewBox="0 0 17 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.11773 4.9375H11.876C15.0674 4.9375 15.3865 6.38004 15.6024 8.14012L16.4472 14.9446C16.7194 17.1764 16.0061 19 12.7208 19H4.28234C0.98768 19 0.274307 17.1764 0.555901 14.9446L1.40069 8.14012C1.60719 6.38004 1.92633 4.9375 5.11773 4.9375Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.64795 6.625V3.34375C4.64795 1.9375 5.61091 1 7.05536 1H9.94425C11.3887 1 12.3517 1.9375 12.3517 3.34375V6.625"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="col-md-6">
                  {/* input */}
                  {/* input */}
                  <div className="input-group input-spinner  ">
                    <input
                      type="button"
                      defaultValue="-"
                      className="button-minus  btn  btn-sm "
                      data-field="quantity"
                    />
                    <input
                      step={1}
                      max={10}
                      name="quantity"
                      className="quantity-field form-control-sm form-input   "
                    ></input>
                    <input
                      type="button"
                      defaultValue="+"
                      className="button-plus btn btn-sm "
                      data-field="quantity"
                    />
                  </div>
                </div>
              </div>
              <div className="row py-5">
                <span className="select-size">Select Size</span>
                <div className="col-md-7">
                  <div className="mb-5 variant-box">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-variant"
                    >
                      32
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-variant"
                    >
                      32
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-variant"
                    >
                      32
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-variant"
                    >
                      32
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-variant"
                    >
                      32
                    </button>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="dropdown">
                    <a
                      className="btn btn-outline-secondary dropdown-toggle language-drop"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      EU &nbsp;{" "}
                      <svg
                        width={11}
                        height={6}
                        viewBox="0 0 11 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.626953 0.999999L4.3315 4.67453C4.769 5.10849 5.48491 5.10849 5.92241 4.67453L9.62695 1"
                          stroke="black"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-facebook me-2" />
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-twitter me-2" />
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-instagram me-2" />
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="Size-card">
                      <div>100 ml</div>
                      <div>aed 900</div>
                      <div className="Discount-Prize">
                        aed <span>1000</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="Size-card">
                      <div>100 ml</div>
                      <div>aed 900</div>
                      <div className="Discount-Prize">
                        aed <span>1000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row py-5">
                  <span className="select-size">Select Scent</span>
                  <div className="col-md-7">
                    <div className="mb-5 variant-box">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-variant"
                      >
                        EDP
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-variant"
                      >
                        EDT
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-variant"
                      >
                        PARF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-5">
                <span className="select-size pb-5">Color</span>
                <div className="col-md-2">
                  <div className="product-color-box">
                    <img src={Sample} alt="Coral Perfumes" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="product-color-box">
                    <img src={Sample} alt="Coral Perfumes" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="product-color-box">
                    <img src={Sample} alt="Coral Perfumes" />
                  </div>
                </div>
              </div>
              <div className="row py-5">
                <div className="col-md-10">
                  <div className="info-box">
                    <h2 className="pb-3">
                      <span>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.07776H2.60222C3.5967 1.07776 4.37939 1.91476 4.29652 2.87776L3.53224 11.8418C3.5024 12.189 3.54668 12.5386 3.66229 12.8683C3.7779 13.1979 3.9623 13.5005 4.20383 13.7569C4.44535 14.0133 4.73872 14.2178 5.06535 14.3576C5.39198 14.4973 5.74476 14.5692 6.10131 14.5688H15.908C17.234 14.5688 18.3942 13.5068 18.4955 12.2198L18.9927 5.46976C19.1032 3.97576 17.943 2.76076 16.4052 2.76076H4.51751M7.4457 6.47776H18.4955M14.1216 19.0778C14.4269 19.0778 14.7196 18.9592 14.9355 18.7483C15.1514 18.5373 15.2726 18.2511 15.2726 17.9528C15.2726 17.6544 15.1514 17.3682 14.9355 17.1573C14.7196 16.9463 14.4269 16.8278 14.1216 16.8278C13.8163 16.8278 13.5236 16.9463 13.3077 17.1573C13.0919 17.3682 12.9706 17.6544 12.9706 17.9528C12.9706 18.2511 13.0919 18.5373 13.3077 18.7483C13.5236 18.9592 13.8163 19.0778 14.1216 19.0778ZM6.75509 19.0778C7.06036 19.0778 7.35313 18.9592 7.56898 18.7483C7.78484 18.5373 7.90611 18.2511 7.90611 17.9528C7.90611 17.6544 7.78484 17.3682 7.56898 17.1573C7.35313 16.9463 7.06036 16.8278 6.75509 16.8278C6.44982 16.8278 6.15706 16.9463 5.9412 17.1573C5.72534 17.3682 5.60407 17.6544 5.60407 17.9528C5.60407 18.2511 5.72534 18.5373 5.9412 18.7483C6.15706 18.9592 6.44982 19.0778 6.75509 19.0778Z"
                            stroke="black"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Pick from store and save delivery fee
                    </h2>
                    <h2>
                      <span>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.375 7.37776H6.625M13.375 12.7778H6.625M7.3 19.0778H12.7C17.2 19.0778 19 17.2778 19 12.7778V7.37776C19 2.87776 17.2 1.07776 12.7 1.07776H7.3C2.8 1.07776 1 2.87776 1 7.37776V12.7778C1 17.2778 2.8 19.0778 7.3 19.0778Z"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      choose at checkout
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row py-2 align-items-center payment-tabby">
                <div className="col-md-2">
                  <img src={Tabby} alt="Coral Perfumes" />
                </div>
                <div className="col-md-9">
                  4 interest-free payments of 50 AED
                </div>
              </div>
              <div className="row py-2 align-items-center payment-tabby">
                <div className="col-md-2">
                  <img src={Tamara} alt="Coral Perfumes" />
                </div>
                <div className="col-md-9">
                  3 interest-free payments of 100 AED
                </div>
              </div>
              <div className="row py-5">
                <div className="col-md-10">
                  <div className="info-box">
                    <h2 className="pb-3">
                      <span>
                        <svg
                          width={18}
                          height={22}
                          viewBox="0 0 18 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 6.90633V11.7635M17.5 12.0063C17.5 16.6983 13.692 20.5063 9 20.5063C4.308 20.5063 0.5 16.6983 0.5 12.0063C0.5 7.31433 4.308 3.50633 9 3.50633C13.692 3.50633 17.5 7.31433 17.5 12.0063Z"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.08594 1.07776H11.9145"
                            stroke="black"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Receive your order today, Jun 23
                    </h2>
                    <h2 className="delivery-update">
                      <span>
                        <svg
                          width={18}
                          height={22}
                          viewBox="0 0 18 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3774 13.5063C10.7714 13.5063 11.1615 13.4287 11.5255 13.278C11.8895 13.1272 12.2202 12.9062 12.4988 12.6277C12.7773 12.3491 12.9983 12.0184 13.1491 11.6544C13.2998 11.2904 13.3774 10.9003 13.3774 10.5063C13.3774 10.1124 13.2998 9.72226 13.1491 9.35828C12.9983 8.99431 12.7773 8.66359 12.4988 8.38501C12.2202 8.10644 11.8895 7.88546 11.5255 7.73469C11.1615 7.58393 10.7714 7.50633 10.3774 7.50633C9.58179 7.50633 8.81873 7.8224 8.25612 8.38501C7.69351 8.94762 7.37744 9.71068 7.37744 10.5063C7.37744 11.302 7.69351 12.065 8.25612 12.6277C8.81873 13.1903 9.58179 13.5063 10.3774 13.5063Z"
                            stroke="black"
                          />
                          <path
                            d="M3.57451 9.02416C5.17377 1.66139 15.5893 1.66989 17.1804 9.03266C18.114 13.3517 15.5487 17.0076 13.3 19.2691C12.5142 20.0628 11.4651 20.5063 10.3734 20.5063C9.28171 20.5063 8.2326 20.0628 7.44683 19.2691C5.20624 17.0076 2.64093 13.3432 3.57451 9.02416Z"
                            stroke="black"
                          />
                        </svg>
                      </span>
                      Deliver to Dubai
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row py-5 align-items-center">
                <div className="col-md-10">
                  <div className="flash-sale-box">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h2>
                          flash sale &nbsp;&nbsp;
                          <span>
                            <svg
                              width={15}
                              height={14}
                              viewBox="0 0 15 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.21613 8.73435L6.02814 7.24776V12.8224C6.02814 14.1232 6.83687 14.3865 7.82333 13.4109L14.5509 6.75224C15.3774 5.93926 15.0308 5.26565 13.7777 5.26565L8.96566 6.75224V1.17755C8.96566 -0.123205 8.15694 -0.386454 7.17047 0.589115L0.442952 7.24776C-0.37466 8.06848 -0.0280632 8.73435 1.21613 8.73435Z"
                                fill="url(#paint0_linear_868_24069)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_868_24069"
                                  x1="4.85028"
                                  y1="4.4189"
                                  x2="13.4883"
                                  y2="13.3467"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#FAFF00" />
                                  <stop offset={1} stopColor="#FF9900" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                        </h2>
                        <p>limited time offer</p>
                        <p className="ends-in">ends in</p>
                      </div>
                      <div className="col-md-6 timer-field">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="timer-box">08</div>
                            <span>Hours</span>
                          </div>
                          <div className="col-md-4">
                            <div className="timer-box">08</div>
                            <span>Minutes</span>
                          </div>
                          <div className="col-md-4">
                            <div className="timer-box">08</div>
                            <span>Seconds</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
