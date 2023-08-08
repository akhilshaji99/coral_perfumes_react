import BreadCrumps from "../common/BreadCrumps";
import { useEffect } from "react";
import request from "../../utils/request";
import { useState } from "react";
import deviceImageRender from "../../utils/deviceImageRender";
import CartSummary from "./blocks/CartSummary";
import getCartDatas from "../../pages/cart/js/cartFetch";
import cartIncrement from "../../pages/cart/js/cartIncrement";
import cartDecrement from "../../pages/cart/js/cartDecrement";
import cartRemove from "../../pages/cart/js/cartRemove";

function Index() {
  const [cartDatas, setcartDatas] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    cartFetchFunctionCall();
  }, []);

  const cartFetchFunctionCall = () => {
    getCartDatas().then((response) => {
      if (response?.data) {
        setCartItems(response?.data?.shopping_cart_items);
        setcartDatas(response?.data);
      }
    });
  };
  return (
    <>
      <BreadCrumps />
      <section className="mb-lg-14 mb-8 mt-8">
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-12">
              {/* card */}
              <div className="card py-1 border-0 mb-8">
                <div>
                  <h1 className="fw-bold">Shop Cart</h1>
                </div>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="py-3">
                <ul className="list-group list-group-flush">
                  {/* list group */}

                  {/* list group */}
                  {cartItems?.map((cartData, index) => {
                    return (
                      <li
                        className="list-group-item py-3 py-lg-0 px-0"
                        key={index}
                      >
                        {/* row */}
                        <div className="row align-items-center">
                          <div className="col-3 col-md-2">
                            <img
                              src={deviceImageRender(
                                cartData?.product_variant?.product_listing_image
                              )}
                              alt="Ecommerce"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-4 col-md-5">
                            {/* title */}
                            <a href="shop-single.html" className="text-inherit">
                              <h6 className="mb-0">
                                {cartData?.product_variant?.name}
                              </h6>
                            </a>
                            <span>
                              <small className="text-muted">
                                {cartData?.product_variant?.name}
                              </small>
                            </span>
                            {/* <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                              <span className="fw-bold">
                                AED {cartData?.product_variant?.price_amount}
                              </span>
                              <div className="text-decoration-line-through text-muted small">
                                AED {cartData?.product_variant?.original_amount}
                              </div>
                            </div> */}
                            <div className="row custom-row1 mb-5">
                              <div className="col-md-4 px-0">
                                <h5 className="selling-price">
                                  AED {cartData?.product_variant?.price_amount}
                                </h5>
                              </div>
                              <div className="col-md-4 px-0">
                                <h5 className="discounted-price">
                                  AED{" "}
                                  {cartData?.product_variant?.original_amount}
                                </h5>
                              </div>
                              <div className="col-md-4 px-0">
                                <h5 className="discount-percentage">
                                  {
                                    cartData?.product_variant
                                      ?.discount_percentage
                                  }
                                  % Off
                                </h5>
                              </div>
                            </div>
                            {/* text */}
                          </div>
                          {/* input group */}
                          <div className="col-3 col-md-3 col-lg-2">
                            {/* input */}
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
                            <div className="mt-2 small lh-1">
                              <span className="text-muted" onClick={() => {
                          cartRemove(cartData?.id).then((response) => {
                            if (response) {
                              cartFetchFunctionCall();
                            }
                          });
                        }}>Remove</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                  {/* list group */}
                </ul>
              </div>
            </div>
            <CartSummary cartDatas={cartDatas} />
          </div>
        </div>
      </section>
    </>
  );
}
export default Index;
