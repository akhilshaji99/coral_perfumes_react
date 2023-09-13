import { useEffect, useState } from "react";
import getCartDatas from "../../pages/cart/js/cartFetch";
import cartRemove from "../../pages/cart/js/cartRemove";
import deviceImageRender from "../../utils/deviceImageRender";
import cartIncrement from "../../pages/cart/js/cartIncrement";
import cartDecrement from "../../pages/cart/js/cartDecrement";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import plusIcon from "../../../src/assets/img/icons/plus-circle.svg";
import minusIcon from "../../../src/assets/img/icons/minus-circle.svg";
import { useSelector } from "react-redux";
import GuestLoginModal from "../../pages/cart/blocks/GuestLoginModal";

function CartDrawer() {
  const navigate = useNavigate();
  const [cartDatas, setcartDatas] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const cartDrawerFlag = useSelector(
    (state) => state.cartDrawer.cartDrawerFlag
  );

  useEffect(() => {
    if (cartDrawerFlag) {
      cartFetchFunctionCall();
    }
  }, [cartDrawerFlag]);

  const cartFetchFunctionCall = () => {
    getCartDatas().then((response) => {
      if (response?.status) {
        setCartItems(response?.data?.shopping_cart_items);
        setcartDatas(response?.data);
      } else {
        setCartItems(response?.data);
      }
    });
  };
  return (
    <>
      <GuestLoginModal />
      <div
        className="offcanvas offcanvas-end"
        id="cartDrawer"
        // aria-hidden="true"
        // ref={wrapperRef}
        style={{ "z-index": 1 }}
      >
        <div className="offcanvas-header ">
          <div className="text-start ">
            <h5
              id="offcanvasRightLabel"
              className="mb-0 cart-header-title text-white"
            >
              <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.75191 4.5H10.243C12.836 4.5 13.0953 5.78226 13.2707 7.34677L13.9571 13.3952C14.1783 15.379 13.5987 17 10.9294 17H4.07315C1.39624 17 0.816624 15.379 1.04542 13.3952L1.73181 7.34677C1.89959 5.78226 2.15889 4.5 4.75191 4.5Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.37036 6V3.08333C4.37036 1.83333 5.15277 1 6.32638 1H8.6736C9.84721 1 10.6296 1.83333 10.6296 3.08333V6"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {cartDatas?.total_items_count} Items Added
            </h5>
          </div>
          {/* <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          /> */}
        </div>
        <div className="offcanvas-body ">
          <ul className="list-group list-group-flush scroll-container2">
            {/* list group */}
            <li className="list-group-item py-3 ps-0 ">
              {/* row */}
              {cartItems?.map((cartData, index) => {
                return (
                  <div
                    className="row align-items-center py-2 border-bottom"
                    key={index}
                  >
                    <div className="col-5 col-md-5 col-lg-5">
                      <div className="d-flex mini-cart-img">
                        <img
                          src={deviceImageRender(
                            cartData?.product_variant?.product_listing_image
                          )}
                          alt="Ecommerce"
                          className="icon-shape icon-xxl"
                        />
                      </div>
                    </div>
                    <div className="col-7 col-md-7 col-lg-7">
                      <h6 className="product-name-cart mb-3">
                        {cartData?.product_variant?.name}
                      </h6>
                      <div className="row mb-3">
                        <div className="col-md-5 price-minicart">
                          aed {cartData?.product_variant?.price_amount}
                        </div>
                        {cartData?.product_variant?.original_amount ? (
                          <div className="col-md-5 price-minicart-discount">
                            aed {cartData?.product_variant?.original_amount}
                          </div>
                        ) : null}
                      </div>
                      <div className="row">
                        <div className="col-md-7 cart-drawer">
                          <div className="input-group-custom input-spinner  ">
                            {/* <input /> */}
                            <img
                              type="button"
                              // defaultValue="+"
                              // className="button-plus1 btn btn-sm "
                              className="img-fluid cart-icon-minus"
                              data-field="quantity"
                              onClick={() => {
                                cartIncrement(cartData?.id).then((response) => {
                                  if (response) {
                                    cartFetchFunctionCall();
                                  }
                                });
                              }}
                              src={plusIcon}
                              alt="Coral Perfumes"
                            />
                            <input
                              type="button"
                              className="quantity-field1 form-control-sm form-input1"
                              value={cartData?.quantity}
                            />
                            {/* <input /> */}

                            <img
                              type="button"
                              defaultValue="-"
                              // className="button-minus1  btn  btn-sm "
                              className="img-fluid cart-icon-plus"
                              disabled={cartData?.quantity <= 1}
                              onClick={() => {
                                cartDecrement(cartData?.id).then((response) => {
                                  if (response) {
                                    cartFetchFunctionCall();
                                  }
                                });
                              }}
                              src={minusIcon}
                              alt="Coral Perfumes"
                            />
                          </div>
                        </div>
                        <div
                          className="col-md-5 text-end "
                          onClick={() => {
                            cartRemove(cartData?.id).then((response) => {
                              if (response) {
                                cartFetchFunctionCall();
                              }
                            });
                          }}
                        >
                          <svg
                            className="remove-icon"
                            width={13}
                            height={13}
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.5 1.98607C0.5 0.611455 1.094 0.5 1.832 0.5H11.168C11.906 0.5 12.5 0.611455 12.5 1.98607C12.5 3.58359 11.906 3.47214 11.168 3.47214H1.832C1.094 3.47214 0.5 3.58359 0.5 1.98607Z"
                              stroke="black"
                              strokeOpacity="0.27"
                            />
                            <path
                              d="M5.15639 6.55576V9.19353M7.91639 6.55576V9.19353M1.40039 3.58362L2.24639 10.0034C2.43839 11.4449 2.90039 12.5 4.61639 12.5H8.23439C10.1004 12.5 10.3764 11.4895 10.5924 10.0926L11.6004 3.58362"
                              stroke="black"
                              strokeOpacity="0.27"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </li>
          </ul>
          {cartItems.length > 0 ? (
            <div className="card-footer price-footer">
              {cartItems.length > 0 ? (
                <div className="row py-3 align-items-center">
                  <div className="col-md-6">
                    <h5>{cartDatas?.total_amount_title_1}</h5>
                    <span>{cartDatas?.total_amount_title_2}</span>
                  </div>
                  <div className="col-md-6 mini-cart-final-price">
                    {cartDatas?.total_amount_display}
                  </div>
                </div>
              ) : null}
              <button
                className="btn btn-dark w-100 col-md-10"
                onClick={() => {
                  const userData = JSON.parse(
                    localStorage.getItem("userDatas")
                  );
                  if (!userData) {
                    $("#guestLoginModal").toggle();
                    $("#guestLoginModal").toggleClass("modal fade modal");
                  } else {
                    $("#cartDrawer").toggleClass("hide");
                    $("#cartDrawer").removeClass("show");
                    navigate("/checkout");
                  }
                }}
              >
                CHECK OUT
              </button>
              <p className="text-center pt-3 text-black">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8743 1.41669V11C13.8743 12.0542 13.0118 12.9167 11.9577 12.9167H1.41602V5.25002C1.41602 3.1321 3.13143 1.41669 5.24935 1.41669H13.8743Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.5827 12.9167V15.7917C20.5827 17.3825 19.2985 18.6667 17.7077 18.6667H16.7493C16.7493 17.6125 15.8868 16.75 14.8327 16.75C13.7785 16.75 12.916 17.6125 12.916 18.6667H9.08268C9.08268 17.6125 8.22018 16.75 7.16602 16.75C6.11185 16.75 5.24935 17.6125 5.24935 18.6667H4.29102C2.70018 18.6667 1.41602 17.3825 1.41602 15.7917V12.9167H11.9577C13.0118 12.9167 13.8743 12.0542 13.8743 11V4.29169H15.6377C16.3277 4.29169 16.9602 4.66544 17.3052 5.2596L18.9439 8.12502H17.7077C17.1806 8.12502 16.7493 8.55627 16.7493 9.08335V11.9584C16.7493 12.4854 17.1806 12.9167 17.7077 12.9167H20.5827Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.16667 20.5833C7.675 20.5833 8.16251 20.3814 8.52195 20.022C8.8814 19.6625 9.08333 19.175 9.08333 18.6667C9.08333 18.1583 8.8814 17.6708 8.52195 17.3114C8.16251 16.9519 7.675 16.75 7.16667 16.75C6.65834 16.75 6.17082 16.9519 5.81138 17.3114C5.45193 17.6708 5.25 18.1583 5.25 18.6667C5.25 19.175 5.45193 19.6625 5.81138 20.022C6.17082 20.3814 6.65834 20.5833 7.16667 20.5833ZM14.8333 20.5833C15.3417 20.5833 15.8292 20.3814 16.1886 20.022C16.5481 19.6625 16.75 19.175 16.75 18.6667C16.75 18.1583 16.5481 17.6708 16.1886 17.3114C15.8292 16.9519 15.3417 16.75 14.8333 16.75C14.325 16.75 13.8375 16.9519 13.478 17.3114C13.1186 17.6708 12.9167 18.1583 12.9167 18.6667C12.9167 19.175 13.1186 19.6625 13.478 20.022C13.8375 20.3814 14.325 20.5833 14.8333 20.5833ZM20.5833 11V12.9167H17.7083C17.1812 12.9167 16.75 12.4854 16.75 11.9583V9.08333C16.75 8.55625 17.1812 8.125 17.7083 8.125H18.9446L20.5833 11Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                &nbsp; Add AED 20 more for free delivery
              </p>
            </div>
          ) : null}
          {/* btn */}
        </div>
      </div>
    </>
  );
}
export default CartDrawer;
