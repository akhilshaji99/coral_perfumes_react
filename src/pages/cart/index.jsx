import BreadCrumps from "../common/BreadCrumps";
import { useEffect, useCallback } from "react";
import { useState } from "react";
import deviceImageRender from "../../utils/deviceImageRender";
import CartSummary from "./blocks/CartSummary";
import getCartDatas from "../../pages/cart/js/cartFetch";
import cartIncrement from "../../pages/cart/js/cartIncrement";
import cartDecrement from "../../pages/cart/js/cartDecrement";
import cartRemove from "../../pages/cart/js/cartRemove";
import RemoveBtn from "../../assets/img/icons/close.svg";
import plusIcon from "../../../src/assets/img/icons/plus-circle.svg";
import minusIcon from "../../../src/assets/img/icons/minus-circle.svg";
import GuestLoginModal from "./blocks/GuestLoginModal";
import PromoCodeModal from "../checkout/blocks/PromoCodeModal";
import BagEmpty from "../alert_pages/BagEmpty";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function Index() {

  const dispatch = useDispatch();
  const [cartDatas, setcartDatas] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showPrmoCodeFlag, setShowPrmoCodeFlag] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [cartEmptyMessages, setCartEmptyMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cartFetchFunctionCall();
  }, []);

  useEffect(() => {
    if (!showPrmoCodeFlag) {
      cartFetchFunctionCall();
    }
  }, [showPrmoCodeFlag]);

  const cartFetchFunctionCall = () => {
    getCartDatas().then((response) => {
      console.log(response);
      if (response?.status) {
        setCartItems(response?.data?.shopping_cart_items);
        setcartDatas(response?.data);
        setPromoCode(response?.data?.voucher_code);
      } else {
        setCartItems(response?.data);
        setCartEmptyMessages(response?.message_data);
      }
      setLoading(false);
    });
  };
  const isDataListEmpty = cartItems.length === 0;
  return (
    <>
      {isDataListEmpty ? (
        !loading ? (
          <section className="mb-lg-14 mb-8 mt-8 my-bag empty-top">
            <div className="container-fluid" style={{ marginTop: "15%" }}>
              <div className="row mt-8">
                <BagEmpty cartEmptyMessages={cartEmptyMessages} />
              </div>
            </div>
          </section>
        ) : (
          <div style={{ minHeight: "500px" }}></div>
        )
      ) : (
        <section className="my-bag">
          <div className="container-fluid">
            <BreadCrumps />
            {/* row */}
            <div className="row">
              <div className="col-12">
                {/* card */}
                <div>
                  <h1 className="my-bag-title">My Bag</h1>
                </div>
              </div>
            </div>
            <GuestLoginModal />

            <PromoCodeModal
              setShowPrmoCodeFlag={setShowPrmoCodeFlag}
              showPrmoCodeFlag={showPrmoCodeFlag}
              setPromoCode={setPromoCode}
            />
            {/* row */}
            <div className="row">
              <div className="col-lg-8 col-md-7">
                <ul className="list-group list-group-flush">
                  {cartItems?.map((cartData, index) => {
                    return (
                      <li className="list-group-item  my-bag-card" key={index}>
                        {/* row */}
                        <div className="row align-items-center px-0">
                          <div className="col-md-2 col-3">
                            <div className="my-bag-img">
                              <img
                                src={deviceImageRender(
                                  cartData?.product_variant
                                    ?.product_listing_image
                                )}
                                alt="Ecommerce"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          {/* <div className="col-xl-1 col-1"></div> */}
                          <div className="col-md-8 col-8  my-bag-text">
                            <h6 className="mb-0">
                              {cartData?.product_variant?.name}
                            </h6>
                            <p className="mb-0" id="hide-mob-brand-name">
                              {cartData?.product_variant?.brand_name}
                            </p>
                            <ul id="price-my-bag">
                              <li>
                                <h5 className="selling-price">
                                  AED {cartData?.product_variant?.price_amount}
                                </h5>
                              </li>
                              <li>
                                <h5 className="discounted-price">
                                  AED{" "}
                                  {cartData?.product_variant?.original_amount}
                                </h5>
                              </li>
                              <li>
                                {" "}
                                <h5 className="discount-percentage">
                                  {
                                    cartData?.product_variant
                                      ?.discount_percentage
                                  }
                                  % Off
                                </h5>
                              </li>
                            </ul>

                            <div className="row ">
                              <div className="col-md-3">
                                <div className="input-group-custom input-spinner  my-bag-spinner">
                                  <img
                                    type="button"
                                    defaultValue="-"
                                    className="img-fluid cart-icon-minus"
                                    style={{
                                      cursor:
                                        cartData?.quantity <= 1
                                          ? "not-allowed"
                                          : "pointer",
                                    }}
                                    onClick={() => {
                                      if (cartData?.quantity <= 1) {
                                        return;
                                      } else {
                                        cartDecrement(cartData?.id).then(
                                          (response) => {
                                            if (response) {
                                              cartFetchFunctionCall();
                                            }
                                          }
                                        );
                                      }
                                    }}
                                    src={minusIcon}
                                    alt="Coral Perfumes"
                                  />
                                  <input
                                    type="button"
                                    className="quantity-field1 form-control-sm form-input1"
                                    value={cartData?.quantity}
                                  />
                                  <img
                                    type="button"
                                    defaultValue="+"
                                    className="img-fluid cart-icon-plus"
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
                                    src={plusIcon}
                                    alt="Coral Perfumes"
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
                          <div className="col-md-1 col-1 ">
                            {/* input */}

                            <div className="mt-2 my-bag-remove-btn">
                              <a
                                onClick={() => {
                                  cartRemove(cartData?.id, dispatch).then(
                                    (response) => {
                                      if (response) {
                                        cartFetchFunctionCall();
                                      }
                                    }
                                  );
                                }}
                              >
                                <img src={RemoveBtn} alt="Coral Perfumes" />
                              </a>
                            </div>
                            <div className="mt-2 my-bag-remove-btn mob-remove  ">
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
              <CartSummary
                cartDatas={cartDatas}
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                setShowPrmoCodeFlag={setShowPrmoCodeFlag}
                cartFetchFunctionCall={cartFetchFunctionCall}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default Index;
