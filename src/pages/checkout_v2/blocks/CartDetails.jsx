import CCode from "../../../assets/checkout/c_code.svg";
import deviceImageRender from "../../../utils/deviceImageRender";
import $ from "jquery";

function CartDetails({
  cartDetails,
  //Promocode
  promoCodeId,
  setPromoCode,
  promoCode,
  applyPrmocode,
  removePrmocode,
  setShowPrmoCodeFlag,
  //#End of promocode
}) {
  return (
    <div className="col-lg-4 col-md-5">
      <div className=" card checkout-right-code">
        <div className="mb-1">
          <div className="card-body p-0">
            <div className="d-flex mb-4">
              <h5 className="pt-2 mb-1"> Add Promo Code</h5>
            </div>
            <div className="row g-5">
              <div className="col-md-8 col-12">
                <div className="apply-code mb-3 mb-lg-0">
                  <img src={CCode} alt="coupon code" />
                  <input
                    type="text"
                    className="form-control input-trans"
                    placeholder="Coupon Code"
                    value={promoCode}
                    disabled={promoCodeId != null ? true : false}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <div className="apply-cd">
                    {promoCodeId == null ? (
                      <button className="btn" onClick={applyPrmocode}>
                        Apply
                      </button>
                    ) : (
                      <button
                        className="btn"
                        onClick={(e) => {
                          e.preventDefault();
                          removePrmocode(promoCodeId);
                        }}
                        style={{
                          color: "black",
                          "text-decoration": "underline",
                        }}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <p
              className="available-code-label mb-0"
              onClick={(e) => {
                setShowPrmoCodeFlag(true);
                $("#promocodeModal").toggle();
                $("#promocodeModal").toggleClass("modal fade modal");
              }}
            >
              <small>View Available Promo Codes</small>
            </p>
          </div>
        </div>
        <h5 className="mb-4 bg-transparent">
          {cartDetails?.total_items_count} ITEMS
        </h5>
        <ul className="list-group list-group-flush list-br px-6">
          {cartDetails?.checkout_checkoutline?.map((cartData, index) => {
            return (
              <li className="list-group-item py-3 ps-0" key={index}>
                <div className="row align-items-center d-flex justify-content-space-between">
                  <div className="col-4 col-xs-2 col-lg-2 col-md-3 cart-details-img">
                    <img
                      src={deviceImageRender(
                        cartData?.variant?.product_listing_image
                      )}
                      alt="Ecommerce"
                    />
                  </div>
                  <div className="col-8 col-lg-8 col-xs-8 col-md-8 ">
                    <h4 className="mb-0">{cartData?.variant?.name}</h4>
                    <h6 className="mb-0">
                      {cartData?.variant?.currency_code}{" "}
                      {cartData?.variant?.price_amount}{" "}
                      {cartData?.variant?.original_amount ? (
                        <span>
                          {cartData?.variant?.currency_code}{" "}
                          {cartData?.variant?.original_amount}
                        </span>
                      ) : null}
                    </h6>
                    <span style={{ textDecoration: "none" }}>Qty:</span>{" "}
                    {cartData?.quantity}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <hr />
        <div className="card border-0">
          <div className="card-body ">
            <h5 className="h5 mb-4">Summary</h5>
            <div className="mb-2 bord-sm">
              <ul className="list-group list-group-flush mob-flush">
                <li className="list-group-item ps-0 border-0  d-flex justify-content-between align-items-start">
                  <div className="me-auto">
                    <div className="left-sec-text">
                      {cartDetails?.sub_total_title}
                    </div>
                  </div>
                  <span>
                    <h5>{cartDetails?.sub_total_display}</h5>
                  </span>
                </li>
                {cartDetails?.is_gift_wrap ? (
                  <li className="list-group-item  ps-0 border-0  d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div className="left-sec-text">
                        {cartDetails?.gift_wrap_title}
                      </div>
                    </div>
                    <span>{cartDetails?.gift_wrap_amount}</span>
                  </li>
                ) : null}
                <li className="list-group-item  ps-0 border-0  d-flex justify-content-between align-items-start">
                  <div className="me-auto">
                    <div className="left-sec-text">
                      {cartDetails?.shipping_title}
                    </div>
                  </div>
                  <span>{cartDetails?.shipping_display}</span>
                </li>
                <li className="list-group-item ps-0 border-0  d-flex justify-content-between align-items-start">
                  <div className="me-auto">
                    <div className="left-sec-text">
                      {cartDetails?.discount_title}
                    </div>
                  </div>
                  <span className="left-sec-text">
                    {cartDetails?.discount_display}
                  </span>
                </li>
                <li className="list-group-item ps-0  d-flex justify-content-between align-items-start border-tp">
                  <div className="me-auto">
                    <div className="fw-bold">
                      <p className="text mb-0">
                        {cartDetails?.total_amount_title_1}
                        <span className="left-sec-text">
                          {" "}
                          &nbsp;{cartDetails?.total_amount_title_2}
                        </span>
                      </p>
                    </div>
                  </div>
                  <h5>{cartDetails?.total_amount_display}</h5>
                </li>
              </ul>
            </div>
            {cartDetails?.free_delivery_message ? (
              <div className=" secure-checkout-top">
                <p className="delivery-info mb-0">
                  <span>
                    <svg
                      width={21}
                      height={22}
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3743 1.41669V11C13.3743 12.0542 12.5118 12.9167 11.4577 12.9167H0.916016V5.25002C0.916016 3.1321 2.63143 1.41669 4.74935 1.41669H13.3743Z"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.0827 12.9167V15.7917C20.0827 17.3825 18.7985 18.6667 17.2077 18.6667H16.2493C16.2493 17.6125 15.3868 16.75 14.3327 16.75C13.2785 16.75 12.416 17.6125 12.416 18.6667H8.58268C8.58268 17.6125 7.72018 16.75 6.66602 16.75C5.61185 16.75 4.74935 17.6125 4.74935 18.6667H3.79102C2.20018 18.6667 0.916016 17.3825 0.916016 15.7917V12.9167H11.4577C12.5118 12.9167 13.3743 12.0542 13.3743 11V4.29169H15.1377C15.8277 4.29169 16.4602 4.66544 16.8052 5.2596L18.4439 8.12502H17.2077C16.6806 8.12502 16.2493 8.55627 16.2493 9.08335V11.9584C16.2493 12.4854 16.6806 12.9167 17.2077 12.9167H20.0827Z"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66667 20.5833C7.175 20.5833 7.66251 20.3814 8.02195 20.022C8.3814 19.6625 8.58333 19.175 8.58333 18.6667C8.58333 18.1583 8.3814 17.6708 8.02195 17.3114C7.66251 16.9519 7.175 16.75 6.66667 16.75C6.15834 16.75 5.67082 16.9519 5.31138 17.3114C4.95193 17.6708 4.75 18.1583 4.75 18.6667C4.75 19.175 4.95193 19.6625 5.31138 20.022C5.67082 20.3814 6.15834 20.5833 6.66667 20.5833ZM14.3333 20.5833C14.8417 20.5833 15.3292 20.3814 15.6886 20.022C16.0481 19.6625 16.25 19.175 16.25 18.6667C16.25 18.1583 16.0481 17.6708 15.6886 17.3114C15.3292 16.9519 14.8417 16.75 14.3333 16.75C13.825 16.75 13.3375 16.9519 12.978 17.3114C12.6186 17.6708 12.4167 18.1583 12.4167 18.6667C12.4167 19.175 12.6186 19.6625 12.978 20.022C13.3375 20.3814 13.825 20.5833 14.3333 20.5833ZM20.0833 11V12.9167H17.2083C16.6812 12.9167 16.25 12.4854 16.25 11.9583V9.08333C16.25 8.55625 16.6812 8.125 17.2083 8.125H18.4446L20.0833 11Z"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {cartDetails?.free_delivery_message}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartDetails;
