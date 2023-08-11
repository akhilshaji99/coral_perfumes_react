import BreadCrumps from "../common/BreadCrumps";
import { useEffect } from "react";
import { useState } from "react";
import deviceImageRender from "../../utils/deviceImageRender";
import CartSummary from "./blocks/CartSummary";
import getCartDatas from "../../pages/cart/js/cartFetch";
import cartIncrement from "../../pages/cart/js/cartIncrement";
import cartDecrement from "../../pages/cart/js/cartDecrement";
import cartRemove from "../../pages/cart/js/cartRemove";
import RemoveBtn from "../../assets/img/icons/close.svg";

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
        <div className="container-fluid">
          {/* row */}
          <div className="row">
            <div className="col-12">
              {/* card */}
              <div className="card py-1 border-0 mb-3">
                <div>
                  <h1 className="my-bag-title">My Bag</h1>
                </div>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <ul className="list-group list-group-flush">
                {cartItems?.map((cartData, index) => {
                  return (
                    <li className="list-group-item  my-bag-card" key={index}>
                      {/* row */}
                      <div className="row align-items-center px-0">
                        <div className="col-md-2 col-2">
                          <div className="my-bag-img">
                            <img
                              src={deviceImageRender(
                                cartData?.product_variant?.product_listing_image
                              )}
                              alt="Ecommerce"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="col-md-9 col-9  my-bag-text">
                          <h6 className="mb-0">
                            {cartData?.product_variant?.name}
                          </h6>
                          <p>{cartData?.product_variant?.brand_name}</p>
                          <ul id="price-my-bag">
                            <li>
                              <h5 className="selling-price">
                                AED {cartData?.product_variant?.price_amount}
                              </h5>
                            </li>
                            <li>
                              <h5 className="discounted-price">
                                AED {cartData?.product_variant?.original_amount}
                              </h5>
                            </li>
                            <li>
                              {" "}
                              <h5 className="discount-percentage">
                                {cartData?.product_variant?.discount_percentage}
                                % Off
                              </h5>
                            </li>
                          </ul>

                          <div className="row ">
                            <div className="col-md-3">
                              <div className="input-group-custom input-spinner  my-bag-spinner">
                                <input
                                  type="button"
                                  defaultValue="-"
                                  className="button-minus1  btn  btn-sm "
                                  disabled={cartData?.quantity <= 1}
                                  onClick={() => {
                                    cartDecrement(cartData?.id).then(
                                      (response) => {
                                        if (response) {
                                          cartFetchFunctionCall();
                                        }
                                      }
                                    );
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
                                    cartIncrement(cartData?.id).then(
                                      (response) => {
                                        if (response) {
                                          cartFetchFunctionCall();
                                        }
                                      }
                                    );
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                              <span className="fw-bold">
                                AED {cartData?.product_variant?.price_amount}
                              </span>
                              <div className="text-decoration-line-through text-muted small">
                                AED {cartData?.product_variant?.original_amount}
                              </div>
                            </div> */}

                          {/* text */}
                        </div>
                        {/* input group */}
                        <div className="col-md-1 col-1">
                          {/* input */}

                          <div className="mt-2 my-bag-remove-btn">
                            <a
                              onClick={() => {
                                cartRemove(cartData?.id).then((response) => {
                                  if (response) {
                                    cartFetchFunctionCall();
                                  }
                                });
                              }}
                            >
                              <img src={RemoveBtn} alt="Coral Perfumes" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
                {/* list group */}
              </ul>
            </div>
            <CartSummary cartDatas={cartDatas} />
          </div>
        </div>
      </section>
    </>
  );
}
export default Index;
