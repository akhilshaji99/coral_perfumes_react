import ProductCarousel from "./blocks/ProductCarousel";
import { useEffect } from "react";
import request from "../../utils/request";
import { useState } from "react";
import CreateProductVariants from "./js/CreateProductVariants";
import toast from "react-hot-toast";
import AlerMessage from "../common/AlerMessage";
import Timer from "./blocks/Timer";
import RecommendedProducts from "./blocks/RecommenedProducts";
import ProductData from "./blocks/ProductData";
import ProductSpec from "./blocks/ProductSpec";

function Index() {
  const [currentVariant, setCurrentVariant] = useState(null);
  const [productDatas, setProductDatas] = useState(null);
  const [productVariants, setproductVariants] = useState(null);
  const [recProducts, setRecProducts] = useState(null);

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

        if (response?.data?.product_data) {
          setProductDatas(response?.data?.product_data);
        }
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
        if (response?.data?.product_data.recommended_products) {
          setRecProducts(response?.data?.product_data.recommended_products);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const notify = (status = null) =>
    toast((t) => (
      <AlerMessage t={t} toast={toast} status={status} title={"Product"} message="Out of stock" />
    ));

  return (
    <>
      <div className="conatiner px-5">
        <div className="row mb-5 ">
          <ProductCarousel sliderImages={currentVariant?.variant_images} />
          <div className="col-md-5">
            <div className="product-desc-section">
              <h1>{currentVariant?.name}</h1>
              <h2 className="product-author">{currentVariant?.brand_name}</h2>
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="product-single-price">
                        aed {currentVariant?.price_amount}
                      </div>
                      <span className="vat-included">VAT included</span>
                    </div>
                    <div className="col-md-4">
                      {currentVariant?.original_amount ? (
                        <div className="product-single-discounted-price">
                          aed {currentVariant?.original_amount}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-md-4">
                      {currentVariant?.discount_percentage ? (
                        <div className="product-single-discounted">
                          {currentVariant?.discount_percentage}
                        </div>
                      ) : null}
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

              {productVariants?.map((productVariant, index) => {
                return (
                  <>
                    {productVariant?.layout === "layout_1" ? (
                      <div className="row" key={index}>
                        <span className="select-size">
                          {productVariant?.attribute_name}
                        </span>
                        <div className="col-md-7">
                          <div className="mb-5 variant-box">
                            {productVariant?.variants?.map(
                              (variant, index_inner) => {
                                return (
                                  <button
                                    key={index_inner}
                                    type="button"
                                    className="btn btn-outline-secondary btn-variant"
                                  >
                                    {variant?.value}
                                  </button>
                                );
                              }
                            )}
                          </div>
                        </div>
                        {/* <div className="col-md-5">
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
                                      UK
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-twitter me-2" />
                                      US
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="bi bi-instagram me-2" />
                                      IN
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
                            </div> */}
                      </div>
                    ) : productVariant?.layout === "layout_2" ? (
                      <div className="row" key={index}>
                        <span className="select-size">
                          {productVariant?.attribute_name}
                        </span>
                        <div className="col-md-7">
                          <div className="mb-5 variant-box">
                            {productVariant?.variants?.map(
                              (variant, index_inner) => {
                                return (
                                  <button
                                    key={index_inner}
                                    type="button"
                                    className="btn btn-outline-secondary btn-variant"
                                  >
                                    {variant?.value}
                                  </button>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </>
                );
              })}
              
              {/* <div className="row py-5">
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
              </div> */}
              <ProductData productDatas={productDatas} />
              <Timer />
            </div>
          </div>
        </div>
        <ProductSpec />
        {recProducts != null ? (
          <RecommendedProducts componentDatas={recProducts} />
        ) : null}
      </div>
    </>
  );
}
export default Index;
