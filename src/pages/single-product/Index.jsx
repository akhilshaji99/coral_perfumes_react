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
import plusIcon from "../../../src/assets/img/icons/plus-circle.svg";
import minusIcon from "../../../src/assets/img/icons/minus-circle.svg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BreadCrumps from "../common/BreadCrumps";
import toast from "react-hot-toast";
import AlerMessage from "../common/AlerMessage";
import RatingModal from "./blocks/RatingModal";

function Index() {
  const dispatch = useDispatch();
  const [currentVariant, setCurrentVariant] = useState(null);
  const [productDatas, setProductDatas] = useState(null);
  const [productVariants, setproductVariants] = useState(null);
  const [recProducts, setRecProducts] = useState(null);
  const [activeVariant, setActiveVariant] = useState({});
  const [addToCartQuantity, setAddToCartQuantity] = useState(1);
  const [status, setStatus] = useState(false);
  const [flashSale, setFlashSale] = useState(null);
  const [otherVariants, setOtherVariants] = useState({});
  const [variantChangeFlag, setVariantChangeFlag] = useState(false);
  const [ratingType, setRatingType] = useState("product");
  const [refetch, setRefetch] = useState(false);

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
        setDatasToState(response);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const setDatasToState = (response) => {
    if (response?.data?.product_data) {
      setProductDatas(response?.data?.product_data);
    }
    if (response?.data?.flash_sale) {
      setFlashSale(response?.data?.flash_sale);
    }
    if (response?.data?.current_variant) {
      setCurrentVariant(response.data.current_variant);
    }
    if (response?.data?.attribute_datas) {
      const dataArray = [];
      let i = 0;
      for (const key in response?.data?.attribute_datas) {
        dataArray.push({
          main_label: key,
          layout: null,
          sub_datas: [],
        });
        for (const key_sub in response?.data?.attribute_datas[key]["values"]) {
          dataArray[i].sub_datas.push(
            response?.data?.attribute_datas[key]["values"][key_sub]
          );
        }
        i++;
      }
      // console.log(dataArray);
      setproductVariants(dataArray);
    }
    if (response?.data?.product_data.recommended_products) {
      setRecProducts(response?.data?.product_data.recommended_products);
    }
  };

  // const formatProductVariant = (allVariants) => {
  //   allVariants.forEach((variant) => {
  //     variant.formattedVariant = [];
  //     variant?.assigned_variant_attributes?.forEach((attributeData) => {
  //       variant.formattedVariant.push({
  //         [attributeData.attribute_name]:
  //           attributeData?.attribute_values[0].value,
  //       });
  //     });
  //   });
  //   setOtherVariants(allVariants);
  //   // return allVariants;
  // };

  const changeProductVariant = async (variant_slug) => {
    const response = await request.post(
      "get_product_by_variants/" + variant_slug + "/"
    );
    setDatasToState(response);
    // console.log(response);
    // console.log(slug);
  };

  // const changeProductVariant = (attribute_name, variant_value) => {
  //   const updatedVariant = { ...activeVariant };
  //   updatedVariant[attribute_name] = variant_value;
  //   setActiveVariant(updatedVariant);
  //   setVariantChangeFlag(!variantChangeFlag);
  //   // console.log("updatedVariant", updatedVariant);
  //   console.log("all Datas", otherVariants);
  //   otherVariants.forEach((otherVariant) => {
  //     console.log("otherVariant", otherVariant?.assigned_variant_attributes);
  //     console.log(activeVariant);
  //   });

  // Object.entries(activeVariant).map(([key, value]) => {
  //   console.log(key);
  //   console.log(value);
  //   let flag = false;
  //   otherVariants.forEach((variantData) => {
  //     variantData?.assigned_variant_attributes.forEach((attributeData) => {
  //       if (
  //         attributeData?.attribute_name === key &&
  //         attributeData?.attribute_values[0].value === value
  //       ) {
  //         console.log(
  //           attributeData?.attribute_name +
  //             "-" +
  //             key +
  //             "--" +
  //             "value-" +
  //             attributeData?.attribute_values[0].value +"-"+
  //             value
  //         );
  //         // console.log("variantData", variantData);
  //         flag = true;
  //         return;
  //       }
  //     });
  //   });
  //   if (flag) {
  //     return;
  //   }
  // });
  // };

  useEffect(() => {
    const result = Object.entries(activeVariant)
      .map(
        ([key, value]) =>
          `${key.toLowerCase()}-${value.toLowerCase().replace(/\s/g, "-")}`
      )
      .join("-");

    console.log(result);
  }, [variantChangeFlag]);

  return (
    <>
      <BreadCrumps />
      <RatingModal
        setRefetch={setRefetch}
        currentVariant={currentVariant}
        ratingType={ratingType}
        refetch={refetch}
      />
      <div className="conatiner pd-detail">
        <div className="row mb-5 ">
          <ProductCarousel sliderImages={currentVariant?.variant_images} />

          <div className="col-md-5">
            <div className="product-desc-section">
              <h1>{currentVariant?.name}</h1>
              <h2 className="product-author">
                <Link to={"/" + currentVariant?.brand_link}>
                  {currentVariant?.brand_name}
                </Link>
              </h2>
              <div className="row full-views">
                <div className="col-md-8 col-8">
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
                <div className="col-md-4 col-4 px-0">
                  <div className="row icon-section">
                    <div className="col-md-5 col-4 icon-end ">
                      <div className="dropdown">
                        <a
                          className=" dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
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
                        </a>
                        <div
                          className="dropdown-menu lang-dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <Link
                            to={"https://wa.me/?text=" + window.location.href}
                            target="_blank"
                            className="mr-2"
                          >
                            <svg
                              width="36"
                              height="36"
                              viewBox="0 0 36 36"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="18" cy="18" r="18" fill="black" />
                              <path
                                d="M10 27L11.195 22.6345C10.4576 21.3567 10.0701 19.9082 10.0708 18.4228C10.073 13.779 13.8519 10 18.495 10C20.7482 10.0007 22.8633 10.8783 24.4542 12.4707C26.0444 14.063 26.9199 16.1795 26.9192 18.4306C26.9171 23.0751 23.1381 26.8541 18.495 26.8541C17.0854 26.8534 15.6964 26.4999 14.466 25.8284L10 27ZM14.6729 24.3034C15.86 25.0082 16.9934 25.4303 18.4922 25.431C22.3512 25.431 25.4948 22.2903 25.4969 18.4292C25.4983 14.5602 22.3696 11.4237 18.4979 11.4223C14.636 11.4223 11.4946 14.5631 11.4932 18.4235C11.4925 19.9995 11.9543 21.1796 12.7299 22.4142L12.0223 24.9982L14.6729 24.3034ZM22.7386 20.433C22.6862 20.3452 22.546 20.2928 22.3349 20.1872C22.1245 20.0817 21.0896 19.5724 20.8963 19.5023C20.7036 19.4322 20.5634 19.3967 20.4224 19.6078C20.2821 19.8182 19.8784 20.2928 19.7559 20.433C19.6333 20.5733 19.5101 20.591 19.2997 20.4855C19.0893 20.3799 18.4107 20.1582 17.6068 19.4407C16.9813 18.8825 16.5584 18.1933 16.4359 17.9822C16.3134 17.7718 16.4232 17.6578 16.528 17.553C16.6229 17.4587 16.7384 17.3072 16.8439 17.1839C16.9509 17.0621 16.9856 16.9743 17.0564 16.8333C17.1265 16.693 17.0918 16.5698 17.0387 16.4643C16.9856 16.3594 16.5648 15.3231 16.3899 14.9017C16.2184 14.4915 16.0449 14.5468 15.916 14.5404L15.5122 14.5333C15.372 14.5333 15.1439 14.5857 14.9512 14.7968C14.7586 15.0079 14.2146 15.5165 14.2146 16.5528C14.2146 17.5891 14.9689 18.59 15.0738 18.7302C15.1793 18.8705 16.5577 20.9969 18.6693 21.9085C19.1715 22.1252 19.5639 22.2549 19.8692 22.3519C20.3735 22.512 20.8325 22.4893 21.1952 22.4355C21.5996 22.3753 22.4404 21.9262 22.6161 21.4346C22.7918 20.9423 22.7918 20.5209 22.7386 20.433Z"
                                fill="white"
                              />
                            </svg>
                          </Link>
                          &nbsp;
                          <Link
                            to={
                              "https://www.facebook.com/sharer/sharer.php?u=" +
                              window.location.href
                            }
                            target="_blank"
                          >
                            <svg
                              width="36"
                              height="36"
                              viewBox="0 0 36 36"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="18" cy="18" r="18" fill="black" />
                              <path
                                d="M19.625 13.5063V16.5875H22.55C22.775 16.5875 22.8875 16.8 22.8875 17.0125L22.4375 19.0312C22.4375 19.1375 22.2125 19.2437 22.1 19.2437H19.625V27H16.25V19.35H14.3375C14.1125 19.35 14 19.2437 14 19.0312V17.0125C14 16.8 14.1125 16.6937 14.3375 16.6937H16.25V13.1875C16.25 11.3812 17.7125 10 19.625 10H22.6625C22.8875 10 23 10.1063 23 10.3188V12.8687C23 13.0812 22.8875 13.1875 22.6625 13.1875H19.9625C19.7375 13.1875 19.625 13.2938 19.625 13.5063Z"
                                fill="white"
                              />
                            </svg>
                          </Link>
                          &nbsp;
                          <Link
                            to={
                              "mailto:?subject=Check%20out%20this%20link&body=Hello%,%0A%0AI%20thought%20you%20might%20be%20interested%20in%20this%20webpage:" +
                              window.location.href
                            }
                            target="_blank"
                          >
                            <svg
                              width="36"
                              height="36"
                              viewBox="0 0 36 36"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="18" cy="18" r="18" fill="black" />
                              <path
                                d="M22.6923 25.6537H14.2308C11.6923 25.6537 10 24.3844 10 21.4229V15.4998C10 12.5383 11.6923 11.269 14.2308 11.269H22.6923C25.2308 11.269 26.9231 12.5383 26.9231 15.4998V21.4229C26.9231 24.3844 25.2308 25.6537 22.6923 25.6537Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M22.692 15.9229L20.0435 18.0382C19.172 18.7321 17.742 18.7321 16.8705 18.0382L14.2305 15.9229"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </Link>
                          &nbsp;
                          <Link
                            to={
                              "https://www.pinterest.com/pin/create/button/?url=" +
                              window.location.href +
                              "&description=Coral Perfume"
                            }
                            target="_blank"
                          >
                            <svg
                              width="36"
                              height="36"
                              viewBox="0 0 36 36"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="18" cy="18" r="18" fill="black" />
                              <path
                                d="M12.3399 31C12.2827 30.7791 12.2015 30.5616 12.1683 30.3373C11.9909 29.0833 11.8611 27.8208 12.0241 26.5595C12.1197 25.8226 12.3176 25.098 12.4966 24.3713C12.9354 22.5934 13.3919 20.82 13.8335 19.0426C13.8588 18.9226 13.8493 18.7979 13.8061 18.6829C13.341 17.4249 13.2615 16.1692 13.8633 14.936C14.2443 14.1598 14.8387 13.6072 15.7328 13.4302C16.9341 13.1918 17.9312 13.9507 17.997 15.1541C18.0319 15.7926 17.8769 16.4014 17.6944 17.0039C17.4124 17.9336 17.1189 18.8588 16.8294 19.7885C16.3037 21.4748 17.6812 22.599 19.1531 22.5012C20.7612 22.3888 21.8567 21.5237 22.6375 20.2118C23.2851 19.1247 23.5557 17.9291 23.6255 16.6807C23.6753 15.7814 23.5969 14.9057 23.2708 14.0575C22.7405 12.6787 21.7863 11.6697 20.4254 11.0857C18.2968 10.17 16.1327 10.215 14.0572 11.2414C12.19 12.1638 11.0888 13.7005 10.793 15.7471C10.5865 17.1776 10.9212 18.4929 11.8153 19.6548C11.8733 19.7243 11.9131 19.8068 11.9312 19.895C11.9492 19.9832 11.945 20.0744 11.9189 20.1606C11.7907 20.6373 11.6677 21.1162 11.5362 21.5906C11.4446 21.9222 11.3073 21.9841 10.9835 21.8345C10.2233 21.4821 9.64607 20.9279 9.19529 20.2438C8.16558 18.6852 7.78401 16.9803 8.11753 15.1479C8.74336 11.7062 10.8657 9.55455 14.2014 8.52761C16.2381 7.88859 18.4173 7.82877 20.4872 8.35505C22.7714 8.92951 24.6295 10.1386 25.8806 12.1385C26.6969 13.4442 27.0573 14.8809 26.9926 16.4177C26.928 17.9544 26.5773 19.4209 25.8142 20.7728C24.7204 22.7097 23.1255 24.0357 20.9019 24.55C19.7006 24.8282 18.5033 24.8356 17.3477 24.3207C16.7917 24.0728 16.298 23.749 15.9519 23.2398C15.9452 23.2229 15.9334 23.2084 15.918 23.1984C15.9027 23.1883 15.8845 23.1831 15.8661 23.1836C15.6653 23.907 15.433 24.6248 15.2648 25.3572C14.8009 27.3964 13.7729 29.1642 12.583 30.8589C12.5493 30.9073 12.5115 30.9533 12.4755 31H12.3399Z"
                                fill="white"
                              />
                            </svg>
                          </Link>{" "}
                          &nbsp;
                          <svg
                            onClick={() => {
                              var currentURL = window.location.href;
                              var textArea = document.createElement("textarea");
                              textArea.value = currentURL;
                              document.body.appendChild(textArea);
                              textArea.select();
                              document.execCommand("copy");
                              document.body.removeChild(textArea);
                              toast((t) => (
                                <AlerMessage
                                  t={t}
                                  toast={toast}
                                  status={true}
                                  title={"Success"}
                                  message="URL copied to clipboard"
                                />
                              ));
                            }}
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            sx={{ cursor: "pointer" }}
                          >
                            <circle cx="18" cy="18" r="18" fill="black" />
                            <path
                              d="M16.2186 23.85C16.6881 23.85 17.0686 23.4694 17.0686 23C17.0686 22.5306 16.6881 22.15 16.2186 22.15V23.85ZM10.5671 22.6136L10.1553 23.3572L10.1553 23.3572L10.5671 22.6136ZM9.39074 21.4504L10.1304 21.0315L10.1304 21.0315L9.39074 21.4504ZM9.39074 14.5496L8.65112 14.1307L8.65112 14.1307L9.39074 14.5496ZM10.5671 13.3864L10.1553 12.6428L10.5671 13.3864ZM21.8369 22.15C21.3675 22.15 20.9869 22.5306 20.9869 23C20.9869 23.4694 21.3675 23.85 21.8369 23.85V22.15ZM26.4329 22.6136L26.8447 23.3572L26.8447 23.3572L26.4329 22.6136ZM27.6093 21.4504L26.8696 21.0315L26.8696 21.0315L27.6093 21.4504ZM27.6093 14.5496L28.3489 14.1307L28.3489 14.1307L27.6093 14.5496ZM26.4329 13.3864L26.8447 12.6428L26.8447 12.6428L26.4329 13.3864ZM12.6774 16.9985C12.208 16.9985 11.8274 17.379 11.8274 17.8485C11.8274 18.3179 12.208 18.6985 12.6774 18.6985V16.9985ZM24.9355 18.6985C25.4049 18.6985 25.7855 18.3179 25.7855 17.8485C25.7855 17.379 25.4049 16.9985 24.9355 16.9985V18.6985ZM16.2186 13.85C16.6881 13.85 17.0686 13.4694 17.0686 13C17.0686 12.5306 16.6881 12.15 16.2186 12.15V13.85ZM21.8369 12.15C21.3675 12.15 20.9869 12.5306 20.9869 13C20.9869 13.4694 21.3675 13.85 21.8369 13.85V12.15ZM16.2186 22.15H14.0565V23.85H16.2186V22.15ZM14.0565 22.15C13.1108 22.15 12.4564 22.1492 11.9496 22.1049C11.4536 22.0616 11.1803 21.9815 10.9789 21.87L10.1553 23.3572C10.6517 23.6321 11.1925 23.7452 11.8015 23.7985C12.3996 23.8508 13.141 23.85 14.0565 23.85V22.15ZM8.15 18C8.15 18.9047 8.14921 19.6393 8.20222 20.2323C8.25626 20.8368 8.37135 21.3753 8.65112 21.8693L10.1304 21.0315C10.0194 20.8356 9.9391 20.569 9.89547 20.0809C9.85079 19.5812 9.85 18.9356 9.85 18H8.15ZM10.9789 21.87C10.6221 21.6724 10.3288 21.3818 10.1304 21.0315L8.65112 21.8692C9.005 22.4941 9.52596 23.0087 10.1553 23.3572L10.9789 21.87ZM9.85 18C9.85 17.0644 9.85079 16.4188 9.89547 15.9191C9.9391 15.431 10.0194 15.1644 10.1304 14.9685L8.65112 14.1307C8.37135 14.6247 8.25626 15.1632 8.20222 15.7677C8.14921 16.3607 8.15 17.0953 8.15 18H9.85ZM14.0565 12.15C13.141 12.15 12.3996 12.1492 11.8015 12.2015C11.1925 12.2548 10.6517 12.3679 10.1553 12.6428L10.9789 14.13C11.1803 14.0185 11.4536 13.9384 11.9496 13.8951C12.4564 13.8508 13.1108 13.85 14.0565 13.85V12.15ZM10.1304 14.9685C10.3288 14.6182 10.6221 14.3276 10.9789 14.13L10.1553 12.6428C9.52596 12.9913 9.005 13.5059 8.65112 14.1307L10.1304 14.9685ZM21.8369 23.85H22.9435V22.15H21.8369V23.85ZM22.9435 23.85C23.859 23.85 24.6004 23.8508 25.1985 23.7985C25.8075 23.7452 26.3483 23.6321 26.8447 23.3572L26.0211 21.87C25.8197 21.9815 25.5464 22.0616 25.0504 22.1049C24.5436 22.1492 23.8892 22.15 22.9435 22.15V23.85ZM27.15 18C27.15 18.9356 27.1492 19.5812 27.1045 20.0809C27.0609 20.569 26.9806 20.8356 26.8696 21.0315L28.3489 21.8693C28.6287 21.3753 28.7437 20.8368 28.7978 20.2323C28.8508 19.6393 28.85 18.9047 28.85 18H27.15ZM26.8447 23.3572C27.474 23.0087 27.995 22.4941 28.3489 21.8692L26.8696 21.0315C26.6712 21.3818 26.3779 21.6724 26.0211 21.87L26.8447 23.3572ZM28.85 18C28.85 17.0953 28.8508 16.3607 28.7978 15.7677C28.7437 15.1632 28.6287 14.6247 28.3489 14.1307L26.8696 14.9685C26.9806 15.1644 27.0609 15.431 27.1045 15.9191C27.1492 16.4188 27.15 17.0644 27.15 18H28.85ZM22.9435 13.85C23.8892 13.85 24.5436 13.8508 25.0504 13.8951C25.5464 13.9384 25.8197 14.0185 26.0211 14.13L26.8447 12.6428C26.3483 12.3679 25.8075 12.2548 25.1985 12.2015C24.6004 12.1492 23.859 12.15 22.9435 12.15V13.85ZM28.3489 14.1307C27.995 13.5059 27.474 12.9913 26.8447 12.6428L26.0211 14.13C26.3779 14.3276 26.6712 14.6182 26.8696 14.9685L28.3489 14.1307ZM12.6774 18.6985H24.9355V16.9985H12.6774V18.6985ZM14.0565 13.85H16.2186V12.15H14.0565V13.85ZM22.9435 12.15H21.8369V13.85H22.9435V12.15Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
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
                      addToCart(currentVariant?.id, addToCartQuantity, dispatch)
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
                <div className="col-xl-5 col-12 incriment-button">
                  <div className="input-group input-spinner  d-end">
                    {/* <input /> */}
                    <img
                      type="button"
                      // disabled={
                      //   addToCartQuantity >= currentVariant?.stock_value
                      // }
                      style={{
                        cursor:
                          addToCartQuantity >= currentVariant?.stock_value
                            ? "not-allowed"
                            : "pointer",
                      }}
                      onClick={() => {
                        if (addToCartQuantity >= currentVariant?.stock_value) {
                          return;
                        } else {
                          setAddToCartQuantity(addToCartQuantity + 1);
                        }
                      }}
                      data-field="quantity"
                      className="img-fluid btn-plus"
                      src={plusIcon}
                      alt="Coral Perfumes"
                    />
                    <input
                      value={addToCartQuantity}
                      type="button"
                      className="quantity-field form-control-sm form-input"
                    />
                    <img
                      type="button"
                      style={{
                        cursor:
                          parseInt(addToCartQuantity) <= 1
                            ? "not-allowed"
                            : "pointer",
                      }}
                      data-field="quantity"
                      onClick={() => {
                        if (parseInt(addToCartQuantity) <= 1) {
                          return;
                        } else {
                          setAddToCartQuantity(addToCartQuantity - 1);
                        }
                      }}
                      className="img-fluid btn-minus"
                      src={minusIcon}
                      alt=" Coral Perfumes"
                    />
                    {/* <input /> */}
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
                    {/* {productVariant?.layout === "layout_1" ? ( */}
                    {productVariant.sub_datas.length > 0 ? (
                      <div className="row" key={index}>
                        <span className="select-size">
                          {productVariant?.main_label}
                        </span>
                        <div className="col-md-12 scrollable-area">
                          <div className="mb-5 variant-box">
                            {productVariant?.sub_datas?.map(
                              (variant, index_inner) => {
                                return (
                                  <button
                                    key={index_inner}
                                    type="button"
                                    className={`btn btn-outline-secondary btn-variant ${
                                      variant?.active === true
                                        ? `variant-active`
                                        : null
                                    }`}
                                    onClick={() => {
                                      changeProductVariant(
                                        variant?.slug
                                        // productVariant?.attribute_name,
                                        // variant?.value
                                      );
                                    }}
                                    disabled={variant?.availabilty === false}
                                  >
                                    {variant?.label}
                                    {variant.layout === "layout_1" ? (
                                      <span>
                                        <br />
                                        {variant?.current_amount}
                                        <br />
                                        <del>{variant?.original_amount}</del>
                                      </span>
                                    ) : null}
                                  </button>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {/* ) : productVariant?.layout === "layout_2" ? (
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
                                      activeVariant[
                                        productVariant?.attribute_name
                                      ] === variant?.value
                                        ? `variant-active`
                                        : null
                                    }`}
                                    onClick={() => {
                                      changeProductVariant(
                                        productVariant?.attribute_name,
                                        variant?.value
                                      );
                                    }}
                                  >
                                    {variant?.value}
                                  </button>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    ) : null} */}
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
              <Timer flash_sale={flashSale} />
            </div>
          </div>
        </div>
        <DesktopSpec
          currentVariant={currentVariant}
          productDatas={productDatas}
          setRatingType={setRatingType}
          refetch={refetch}
        />
        <MobileSpec
          currentVariant={currentVariant}
          productDatas={productDatas}
          setRatingType={setRatingType}
          refetch={refetch}
        />
        {recProducts != null ? (
          <RecommendedProducts componentDatas={recProducts} />
        ) : null}
      </div>
    </>
  );
}
export default Index;
