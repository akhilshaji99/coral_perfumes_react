import { useEffect, useState } from "react";
import getCartDatas from "../../pages/cart/js/cartFetch";
import cartRemove from "../../pages/cart/js/cartRemove";
import deviceImageRender from "../../utils/deviceImageRender";
import cartIncrement from "../../pages/cart/js/cartIncrement";
import cartDecrement from "../../pages/cart/js/cartDecrement";

function CartDrawer({ cartDrawerFlag }) {
  const [cartDatas, setcartDatas] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartDrawerFlag) {
      cartFetchFunctionCall();
    }
  }, [cartDrawerFlag]);

  const cartFetchFunctionCall = () => {
    getCartDatas().then((response) => {
      if (response?.data) {
        setCartItems(response?.data?.shopping_cart_items);
        setcartDatas(response?.data);
      }
    });
  };
  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);

  return (
    <div
      className="offcanvas offcanvas-end"
      // tabIndex={-1}
      id="cartDrawer"
      // aria-hidden="true"
      // ref={wrapperRef}
      style={{  "z-index": 1}}
    >
      <div className="offcanvas-header ">
        <div className="text-start ">
          <h5 id="offcanvasRightLabel" className="mb-0 fs-4 text-white">
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
            </svg>{" "}
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
      <div className="offcanvas-body scroll-container">
        <ul className="list-group list-group-flush">
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
                      <div className="col-md-7">
                        <div className="input-group-custom input-spinner  ">
                          <input
                            type="button"
                            defaultValue="-"
                            className="button-minus1  btn  btn-sm "
                            disabled={cartData?.quantity <= 1}
                            onClick={() => {
                              cartDecrement(cartData?.id).then((response) => {
                                if (response) {
                                  cartFetchFunctionCall();
                                }
                              });
                            }}
                          />
                          <input
                            type="button"
                            className="quantity-field1 form-control-sm form-input1"
                            value={cartData?.quantity}
                          />
                          <input
                            type="button"
                            defaultValue="+"
                            className="button-plus1 btn btn-sm "
                            data-field="quantity"
                            onClick={() => {
                              cartIncrement(cartData?.id).then((response) => {
                                if (response) {
                                  cartFetchFunctionCall();
                                }
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="col-md-5 text-end"
                        onClick={() => {
                          cartRemove(cartData?.id).then((response) => {
                            if (response) {
                              cartFetchFunctionCall();
                            }
                          });
                        }}
                      >
                        <svg
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
          </li>
        </ul>
        {cartItems.length > 0 ? (
          <div className="">
            <button className="btn btn-dark w-100 col-md-10">CHECK OUT</button>
          </div>
        ) : null}
        {/* btn */}
      </div>
    </div>
  );
}
export default CartDrawer;
