import React from "react";
import deviceImageRender from "../../../utils/deviceImageRender";

function OrderbottomRow({ orderDetails }) {
  return (
    <div className="row order-bottom-row">
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-4">
            <div className="order-img">
              <img
                src={deviceImageRender(orderDetails?.listing_image)}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-8">
            <h4>{orderDetails?.product_name}</h4>
            <h2>{orderDetails?.amount}</h2>
            <p className="return-reason">
              <span>Reason:</span> {orderDetails?.cancel_reason_user_text || orderDetails?.cancel_reason}
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 text-lg-end">
        <h3 style={{ textDecoration: "none" }}>{orderDetails?.item_status}</h3>
      </div>
    </div>
  );
}

export default OrderbottomRow;
