import deviceImageRender from "../../../utils/deviceImageRender";
import confirmCheckout from "../js/confirmCheckout";
function CartDetails({ cartDatas }) {
  return (
    <div className="card  col-12 col-md-12 offset-lg-1 col-lg-4">
      <div className="mb-5 mt-6">
        <div className="">
          <h5 className="px-6 py-4 bg-transparent mb-0">
            {cartDatas?.total_items_count} ITEMS
          </h5>
          <ul className="list-group list-group-flush">
            {cartDatas?.shopping_cart_items?.map((cartData, index) => {
              return (
                <li
                  className="list-group-item py-3 ps-0 border-top"
                  key={index}
                >
                  <div className="row align-items-center">
                    <div className="col-2 col-md-3">
                      <img
                        src={deviceImageRender(
                          cartData?.product_variant?.product_listing_image
                        )}
                        alt="Ecommerce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-5 col-md-5">
                      <h6 className="mb-0">
                        {cartData?.product_variant?.name}
                      </h6>
                      <h6 className="mb-0">
                        AED {cartData?.product_variant?.price_amount}
                      </h6>
                      {cartData?.product_variant?.original_amount ? (
                        <h5 class="discounted-price">
                          AED {cartData?.product_variant?.original_amount}
                        </h5>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mb-5 card mt-6">
            <div className="card-body p-6">
              {/* heading */}
              <h2 className="h5 mb-4">Summary</h2>
              <div className="mb-2">
                {/* list group */}
                <ul className="list-group list-group-flush">
                  {/* list group item */}
                  <li className="list-group-item py-3 ps-0  d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div>{cartDatas?.sub_total_title}</div>
                    </div>
                    <span>{cartDatas?.sub_total_display}</span>
                  </li>
                  {/* list group item */}
                  <li className="list-group-item py-3 ps-0  d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div>{cartDatas?.shipping_title}</div>
                    </div>
                    <span>{cartDatas?.shipping_display}</span>
                  </li>
                  {/* list group item */}
                  <li className="list-group-item py-3 ps-0  d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div className="fw-bold">{cartDatas?.discount_title}</div>
                    </div>
                    <span className="fw-bold">
                      {cartDatas?.discount_display}
                    </span>
                  </li>
                  <li className="list-group-item py-3 ps-0  d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                      <div className="fw-bold">
                        <p className="text mb-0">
                          {cartDatas?.total_amount_title_1}{" "}
                          <small> {cartDatas?.total_amount_title_2}</small>
                        </p>{" "}
                      </div>
                    </div>
                    <span className="fw-bold">
                      {cartDatas?.total_amount_display}
                    </span>
                  </li>
                </ul>
              </div>

              {/* heading */}
              <div className="mt-8">
                <div className="d-grid">
                  <button
                    type="button"
                    className="btn btn-dark mb-1"
                    onClick={() => {
                      confirmCheckout();
                    }}
                  >
                    SECURE CHECKOUT
                  </button>
                </div>
                <p className="text-muted mb-0">
                  <small>{cartDatas?.free_delivery_message}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartDetails;
