function CartSummary({ cartDatas }) {
  return (
    <div className="col-12 col-lg-4 col-md-5">
      {/* card */}
      <div className="mb-5 card mt-6">
        <div className="card-body p-6">
          <div className="mt-8">
            <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
            <form>
              <div className="mb-2">
                {/* input */}
                <label htmlFor="giftcard" className="form-label sr-only">
                  Add Promo Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Coupon Code"
                />
              </div>
              {/* btn */}
              <div className="d-grid">
                <button type="submit" className="btn btn-outline-dark mb-1">
                  Apply
                </button>
              </div>
              <p className="text-muted mb-0">
                {" "}
                <small>View Available Promo Codes</small>
              </p>
            </form>
          </div>
          {/* heading */}
          <h2 className="h5 mb-4">{cartDatas?.total_items_count} Items</h2>
          <div className="card mb-2">
            {/* list group */}
            <ul className="list-group list-group-flush">
              {/* list group item */}
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="me-auto">
                  <div>{cartDatas?.sub_total_title}</div>
                </div>
                <span>{cartDatas?.sub_total_display}</span>
              </li>
              {/* list group item */}
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="me-auto">
                  <div>{cartDatas?.shipping_title}</div>
                </div>
                <span>{cartDatas?.shipping_display}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="me-auto">
                  <div>{cartDatas?.discount_title}</div>
                </div>
                <span>{cartDatas?.discount_display}</span>
              </li>
              {/* list group item */}
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="me-auto">
                  <div className="fw-bold">
                    {cartDatas?.total_amount_title_1}{" "}
                  </div>
                  {cartDatas?.total_amount_title_2}
                </div>
                <span className="fw-bold">
                  {cartDatas?.total_amount_display}
                </span>
              </li>
            </ul>
          </div>
          <div className="d-grid mb-1 mt-4">
            <button
              className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
              type="submit"
            >
              PROCEED
            </button>
          </div>
          <p>
            <small>{cartDatas?.free_delivery_message}</small>
          </p>
          {/* heading */}
        </div>
      </div>
    </div>
  );
}
export default CartSummary;
