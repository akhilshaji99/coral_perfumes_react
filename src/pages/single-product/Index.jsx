import ProductCarousel from "./blocks/ProductCarousel";
import { useEffect } from "react";
import request from "../../utils/request";
import { useState } from "react";
import CreateProductVariants from "./js/CreateProductVariants";
import Timer from "./blocks/Timer";
import RecommendedProducts from "./blocks/RecommenedProducts";
import ProductData from "./blocks/ProductData";
import DesktopSpec from "./blocks/DesktopSpec";
import MobileSpec from "./blocks/MobileSpec";
import addToCart from "../cart/js/addToCart";
import getUserToken from "../../utils/userToken";
import addToWishlist from "../wishlist/js/addToWishlist";

function Index() {
  const [currentVariant, setCurrentVariant] = useState(null);
  const [productDatas, setProductDatas] = useState(null);
  const [productVariants, setproductVariants] = useState(null);
  const [recProducts, setRecProducts] = useState(null);
  const [aciveVariant, setActiveVariant] = useState([]);
  const [addToCartQuantity, setAddToCartQuantity] = useState(1);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    getProductDetails();
  }, [window.location.href]);

  const getProductDetails = async () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const product_slug = queryParameters.get("slug");
    try {
      if (product_slug) {
        var bodyFormData = new FormData();
        bodyFormData.append("token", getUserToken());
        const response = await request.post(
          "get_product_variants/" + product_slug + "/",
          bodyFormData
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
            // console.log(data);
            setproductVariants(data);
            //Set active variant datas
            let activeVariantArray = [];
            response?.data?.current_variant?.assigned_variant_attributes?.forEach(
              (variants) => {
                activeVariantArray.push(variants?.attribute_values?.[0]?.value);
              }
            );
            setActiveVariant(activeVariantArray);
            //#End
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
                <div className="col-md-9 col-10">
                  <div className="row">
                    <div className="col-md-4 col-4">
                      <div className="product-single-price">
                        aed {currentVariant?.price_amount}
                      </div>
                      <span className="vat-included">VAT included</span>
                    </div>
                    <div className="col-md-4 col-4">
                      {currentVariant?.original_amount ? (
                        <div className="product-single-discounted-price">
                          aed {currentVariant?.original_amount}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-md-4 col-4">
                      {currentVariant?.discount_percentage ? (
                        <div className="product-single-discounted">
                          {currentVariant?.discount_percentage}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-2 px-0">
                  <div className="row icon-section">
                    <div className="col-md-3 col-4">
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
                    <div className="col-md-3 col-4">
                      <span
                        style={{ cursor: "pointer" }}
                        className={
                          currentVariant?.is_in_wishlist
                            ? " wishlist-active"
                            : ""
                        }
                        onClick={() => {
                          addToWishlist(currentVariant?.slug).then(
                            (response) => {
                              if (response?.status) {
                                currentVariant.is_in_wishlist =
                                  !currentVariant?.is_in_wishlist;
                                setStatus(!status);
                              }
                            }
                          );
                        }}
                      >
                        <svg
                          width="29"
                          height="25"
                          viewBox="0 0 29 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.5399 7.98659C27.5399 17.032 18.9036 22.3664 15.0342 23.642C14.5754 23.7967 13.8375 23.7967 13.3787 23.642C11.7233 23.1009 9.19022 21.8059 6.85662 19.8151C3.70527 17.1286 0.873047 13.1664 0.873047 7.98659C0.873047 3.98576 4.18396 0.75803 8.27274 0.75803C10.7061 0.75803 12.8601 1.89836 14.2164 3.63786C15.2167 2.3415 16.6397 1.41078 18.2545 0.996773C19.8693 0.582766 21.5811 0.709778 23.112 1.35719C25.7248 2.4782 27.5399 5.01012 27.5399 7.98659Z"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-5">
                {/* large screen button */}
                <div className="col-xl-6 col-12 mb-3 d-none d-sm-block">
                  <button
                    disabled={currentVariant === null}
                    className="btn btn-dark btn-checkout w-100"
                    onClick={() =>
                      addToCart(currentVariant?.id, addToCartQuantity)
                    }
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
                {/*  */}
                <div className="col-xl-5 col-12">
                  <div className="input-group input-spinner  d-end">
                    <input
                      type="button"
                      defaultValue="-"
                      className="button-minus  btn  btn-sm "
                      data-field="quantity"
                      disabled={addToCartQuantity <= 1}
                      onClick={() => {
                        setAddToCartQuantity(addToCartQuantity - 1);
                      }}
                    />
                    <input
                      value={addToCartQuantity}
                      type="button"
                      className="quantity-field form-control-sm form-input"
                    />
                    <input
                      type="button"
                      disabled={
                        addToCartQuantity >= currentVariant?.stock_value
                      }
                      onClick={() => {
                        setAddToCartQuantity(addToCartQuantity + 1);
                      }}
                      defaultValue="+"
                      className="button-plus btn btn-sm "
                      data-field="quantity"
                    />
                  </div>
                </div>
                {/* Mobile Button */}
                <div className="col-md-6 d-block d-sm-none mt-4">
                  <button
                    disabled={currentVariant === null}
                    className="btn btn-dark btn-checkout w-100"
                    onClick={() =>
                      addToCart(currentVariant?.id, addToCartQuantity)
                    }
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
                {/*  */}
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
                                    className={`btn btn-outline-secondary btn-variant ${
                                      aciveVariant.includes(variant?.value)
                                        ? `variant-active`
                                        : null
                                    }`}
                                  >
                                    {variant?.value}
                                  </button>
                                );
                              }
                            )}
                          </div>
                        </div>
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
                                    className={`btn btn-outline-secondary btn-variant ${
                                      aciveVariant.includes(variant?.value)
                                        ? `variant-active`
                                        : null
                                    }`}
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
              <ProductData
                productDatas={productDatas}
                currentVariant={currentVariant}
              />
              <Timer />
            </div>
          </div>
        </div>
        <DesktopSpec currentVariant={currentVariant} productDatas={productDatas} />
        <MobileSpec currentVariant={currentVariant}  productDatas={productDatas} />
        {recProducts != null ? (
          <RecommendedProducts componentDatas={recProducts} />
        ) : null}
      </div>
    </>
  );
}
export default Index;
