import React from "react";

function OrdermiddleRow({orderDetails}) {
  return (
    <div className="row order-middle-row align-items-center">
      <div className="col-md-6">
        <h3>
          Order No: {orderDetails?.order_no} <span>(Item: {orderDetails?.items_count})</span>
        </h3>
        <h4>View Details</h4>
      </div>
      <div className="col-md-6 text-lg-end">
        <p>{orderDetails?.order_date}</p>
        <p>{orderDetails?.expected_delivery_date}</p>
      </div>
    </div>
  );
}

export default OrdermiddleRow;
